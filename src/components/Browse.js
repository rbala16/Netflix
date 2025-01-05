import React from 'react'
import Header from './Header'
// import MainContainer from './MainContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import HeroSection from './HeroSection/HeroSection'
import MoviesPage from './MovieList/MoviesPage'

const Browse = () => {
  useNowPlayingMovies()
  return (
    <div>
      <Header/>
      <HeroSection/>
      <MoviesPage/>
    </div>
  )
}

export default Browse
