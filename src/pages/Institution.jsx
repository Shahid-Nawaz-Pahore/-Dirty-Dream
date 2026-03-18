import React from 'react'
import Hero from '../components/home/Hero';

const Institution = () => {
  return (
    <div className='text-white'>

      <video className='fixed -z-1 h-full w-full object-cover' loop autoPlay muted>
        <source src="/bg-video.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>

      <Hero />
    </div>
  )
}

export default Institution;