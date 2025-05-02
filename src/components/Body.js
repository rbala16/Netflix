import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import LoginPage from '../pages/LoginPage'
import MovieDetail from './MovieList/MovieDetail'

const Body = () => {
    
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <LoginPage />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
          path:"/movie/:movieId",
          element:<MovieDetail/>
        }
    ])
  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body