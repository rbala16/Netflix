import React from 'react'

const HeroTitle = ({title,overview}) => {
  return (
    <div className="absolute w-screen pt-[20%] px-6 md:px-24 text-white bg-gradient-to-r from-black aspect-video">
    <h1 className="font-bold font-titleFont text-3xl md:text-6xl ">{title}</h1>
    <p className="py-4 md:py-10 text-sm md:text-lg w-full md:w-1/4  font-semibold font-bodyFont">{overview}</p>
</div>
  )
}

export default HeroTitle
