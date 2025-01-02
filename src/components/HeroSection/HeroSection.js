import React from 'react'
import { useSelector } from 'react-redux';
import HeroTitle from './HeroTitle';
import HeroBackground from './HeroBackground';

const HeroSection = () => {
    const movies = useSelector((store) => store.movie?.nowPlayingMovies)
    if (!movies) return;
    console.log("movies", movies)
    const {id,title,overview} = movies[0];
  return (
    <div>
        <HeroTitle title={title} overview={overview}/>
        <HeroBackground/>
    </div>
  )
}

export default HeroSection
