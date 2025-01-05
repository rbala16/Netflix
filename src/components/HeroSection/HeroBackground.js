import React from "react";
import { useSelector } from "react-redux";
import useHeroTrailer from "../../hooks/useHeroTrailer";

const HeroBackground = ({ movieId }) => {
  useHeroTrailer(movieId);
  const heroTrailerVideo = useSelector((store) => store.hero?.trailerVideo);
  console.log("Hero Trailer Video:", heroTrailerVideo);

  if (!heroTrailerVideo) {
    return <p>Loading trailer...</p>;
  }
  const { key } = heroTrailerVideo;

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video "
        title="HeroTrailerVideo"
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default HeroBackground;
