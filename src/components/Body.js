import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import LoginPage from './LoginPage'

const Body = () => {
    
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <LoginPage />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])
  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body