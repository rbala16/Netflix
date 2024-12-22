import React from 'react'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store) => store.movie?.nowPlayingMovies)
    if (!movies) return;
    console.log("movies", movies)
    return (
    <div>MainContainer</div>
  )
}

export default MainContainer