import React from 'react'
import { MOVIE_IMG_URL } from '../../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div>
    <div>MovieCard</div>
    <img alt = "movie-card" src={MOVIE_IMG_URL + posterPath} />
    </div>
  )
}

export default MovieCard