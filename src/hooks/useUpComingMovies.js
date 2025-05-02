import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS, UPCOMING_MOVIE_URL } from '../utils/constants';
import { addUpcomingMovies } from '../features/movieSlice';

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async ()=>{
    try{
 
    const response = await fetch(UPCOMING_MOVIE_URL, API_OPTIONS);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    dispatch(addUpcomingMovies(json.results));
    }
    catch(error){
        console.error("Failed to fetch upcoming movies:", error);
    }
  }
  useEffect(()=>{
    getUpcomingMovies()
  },[])

}

export default useUpComingMovies