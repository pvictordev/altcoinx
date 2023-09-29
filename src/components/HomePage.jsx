import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'

const HomePage = () => {

  return (
    <div>
      <Nav/>
    <div className='w-full h-screen flex flex-col justify-between bg-gradient-to-b from-custom-end to-custom-start items-center'>
      <Hero/> 
    </div>
    </div>
  )
  
}

export default HomePage
