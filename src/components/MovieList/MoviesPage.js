import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const MoviesPage = () => {
    const movies = useSelector((store)=>store.movies);
    console.log("movies",movies);
    // console.log("nowPlayingmovies",movies.nowPlayingMovies);
       // Fallback for undefined nowPlayingMovies
    if(!movies?.nowPlayingMovies) {
      return<p>Loading movies...</p>
    }

  return (
    
    (<div className='p-7'>
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
      
    </div>)
  )
}

export default MoviesPage
