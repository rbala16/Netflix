import React from 'react'
import Header from './Header'
// import MainContainer from './MainContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import HeroSection from './HeroSection/HeroSection'
import MoviesPage from './MovieList/MoviesPage'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpComingMovies from '../hooks/useUpComingMovies'
import useTopRatedTVShows from '../hooks/useTopRatedTVShows'

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useUpComingMovies()
  useTopRatedTVShows()
  return (
    <div>
      <Header/>
      <HeroSection/>
      <MoviesPage/>
    </div>
  )
}

export default Browse
