import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useHeroTrailer from '../../hooks/useHeroTrailer';


const MovieDetail = () => {
  const { movieId } = useParams();  // Get movieId from URL
  useHeroTrailer(movieId);
  const trailerVideo = useSelector((store) => store.hero?.trailerVideo);
  if (!trailerVideo) {
    return <p>Loading trailer...</p>;
  }
  const { key } = trailerVideo;

  return (
    <div>
      <div className="w-screen">
      <iframe
        className="w-screen aspect-video "
        title="HeroTrailerVideo"
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    </div>
  )
}

export default MovieDetail
