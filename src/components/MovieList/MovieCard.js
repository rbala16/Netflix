import React from 'react'
import { MOVIE_IMG_URL } from '../../utils/constants'

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="group relative w-40 h-64 md:w-56 md:h-80 lg:w-64 lg:h-96 cursor-pointer overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <img 
        alt="movie-card" 
        src={MOVIE_IMG_URL + posterPath} 
        className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity duration-200" 
      />
      
    </div>
  )
}

export default MovieCard;
