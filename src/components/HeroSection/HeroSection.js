import React from "react";
import { useSelector } from "react-redux";
import HeroTitle from "./HeroTitle";
import HeroBackground from "./HeroBackground";

const HeroSection = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) return <p>Loading...</p>;
  console.log("movies", movies);
  //destructure movie information
  const { id, title, overview } = movies[0];
  console.log(movies[0]);
  return (
    <div>
      <HeroTitle title={title} overview={overview} />
      <HeroBackground movieId={id} />
    </div>
  );
};

export default HeroSection;
