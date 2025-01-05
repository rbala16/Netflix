import { useDispatch } from 'react-redux';
import { API_OPTIONS, TOP_RATED_TVSHOWS } from '../utils/constants';
import { useEffect } from 'react';
import {addTopRatedTvShow} from "../features/tvShowsSlice";

const useTopRatedTVShows = () => {
    const dispatch = useDispatch();
    const getTopRatedTvShows = async ()=>{
      try{
   
      const response = await fetch(TOP_RATED_TVSHOWS, API_OPTIONS);
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      dispatch(addTopRatedTvShow(json.results));
      }
      catch(error){
          console.error("Failed to fetch top rated tv shows:", error);
      }
    }
    useEffect(()=>{
      getTopRatedTvShows()
    },[])
}

export default useTopRatedTVShows