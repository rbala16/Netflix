import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import useHeroTrailer from "../../hooks/useHeroTrailer";

const MovieDetail = () => {
  const { movieId } = useParams(); // Get movieId from URL
  const location = useLocation(); // Get state passed via navigate
  const { title, overview, releaseDate, language } = location.state || {}; // Extract title from state

  useHeroTrailer(movieId); // Fetch the trailer for the movie
  const trailerVideo = useSelector((store) => store.hero?.trailerVideo);

  if (!trailerVideo) {
    return <p>Loading trailer...</p>;
  }
  const { key } = trailerVideo;

  return (
    <div>
      <div className="w-screen text-lightText ">
        <iframe
          className="w-screen aspect-video"
          title="HeroTrailerVideo"
          src={`https://www.youtube.com/embed/${key}?autoplay=1&modestbranding=1&rel=0&controls=0&showinfo=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="my-4 mx-6">
        <h1 className="font-titleFont">{title}</h1>
        <h3 className="font-bodyFont text-gray-500">{overview}</h3>
      <h3 className="font-titleFont">Release Date: <strong>{releaseDate}</strong></h3>
       <h3 className="text-gray-500">Original Language: <strong>{language}</strong></h3>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
