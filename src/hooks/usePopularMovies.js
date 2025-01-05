import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS, POPULAR_MOVIE_URL } from '../utils/constants';
import { addPopularMovies } from '../features/movieSlice';

const usePopularMovies = () => {
    //dispatch the action
    const dispatch = useDispatch();
    const getPopularMovies = async () =>{
        const data = await fetch(POPULAR_MOVIE_URL,API_OPTIONS)
        const json = await data.json()
        dispatch(addPopularMovies(json.results))
    }
    useEffect(()=>{
        getPopularMovies()
    },[])
 
}

export default usePopularMovies