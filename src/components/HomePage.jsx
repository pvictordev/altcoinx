import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'

const HomePage = () => {

  return (
    <div className='w-full h-screen  flex flex-col gap-20 lg-max:gap-14 bg-gradient-to-b from-custom-end to-custom-start'>
      <Nav/>
      <Hero/>
    </div>
  )
  
}

export default HomePage
