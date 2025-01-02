import React from 'react'
import Header from './Header'
// import MainContainer from './MainContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import HeroSection from './HeroSection/HeroSection'

const Browse = () => {
  useNowPlayingMovies()
  return (
    <div>
      <Header/>
      <HeroSection/>
    </div>
  )
}

export default Browse
