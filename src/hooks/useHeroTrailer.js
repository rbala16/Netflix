import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideos } from "../features/heroSlice";

const useHeroTrailer = (movieId) => {
  //dispatch the action
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    if (!movieId) return;
    try {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
      //fetch trailer video
      const response = await fetch(url, API_OPTIONS);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      dispatch(addTrailerVideos(json?.results[0]));
    } catch (error) {
      console.error("Failed to fetch hero trailer video:", error);
    }
  };

  useEffect(() => {
    getMovieTrailer();
  }, [movieId, dispatch]);
};

export default useHeroTrailer;
