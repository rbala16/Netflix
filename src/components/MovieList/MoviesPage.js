import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';


const MoviesPage = () => {
    const movies = useSelector((store)=>store.movies);
    const tvShows = useSelector((store)=>store.tvShows);

    // console.log("movies",movies);
    // console.log("nowPlayingmovies",movies.nowPlayingMovies);
       // Fallback for undefined nowPlayingMovies
       if (!movies.nowPlayingMovies && !movies.popularMovies && !movies.upcomingMovies && !tvShows.topRatedTvShows) {
        return <p>Loading movies...</p>;
    }

  return (
    
    (<div>
 {movies.upcomingMovies && <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />}
            {movies.popularMovies && <MovieList title="Popular Movies" movies={movies.popularMovies} />}
            {movies.nowPlayingMovies && <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />}
            {tvShows.topRatedTvShows && <MovieList title="Top Rated TV Shows" movies={tvShows.topRatedTvShows} />}        
    </div>)
  )
}

export default MoviesPage
