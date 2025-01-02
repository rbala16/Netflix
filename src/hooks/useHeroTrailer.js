import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addTrailerVideos } from '../features/heroSlice'

const useHeroTrailer = (movieId) => {
  const dispatch = useDispatch()
  const getMovieIds = async ()=>{
    const url = 'https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US';
    const backgroundData = await fetch(url,API_OPTIONS)
    const trailers = await backgroundData.json()
    dispatch(addTrailerVideos(trailers?.results[0]))
  }
 useEffect(()=>{
  getMovieIds()
 },[])
}

export default useHeroTrailer
