import React from "react";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  const navigate = useNavigate();

  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleMovieClick = (movie) => {
    navigate(`/movie/${movie.id}`, { state: { title: movie.title , overview:movie.overview,releaseDate:movie.release_date,language:movie.original_language } });
  };
  return (
    <div className="px-6 py-8 bg-black">
      <div>
        {/* Title */}
        <h1 className="text-3xl font-semibold text-white mb-6">{title}</h1>

        {/* Movie Slider */}
        <Slider {...settings}>
          {movies?.map((movie) => (
            <div
              key={movie.id}
              className="flex justify-center"
              onClick={() => handleMovieClick(movie)}
            >
              <MovieCard posterPath={movie.poster_path} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieList;
