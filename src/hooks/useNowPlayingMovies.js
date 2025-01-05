import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPlayingMovies } from "../features/movieSlice";
import { useDispatch } from "react-redux";

function useNowPlayingMovies() {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    try{
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
    const response = await fetch(url, API_OPTIONS);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    dispatch(addPlayingMovies(json.results));
}
catch(error){
    console.error("Failed to fetch now playing movies:", error);
}
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}

export default useNowPlayingMovies;
