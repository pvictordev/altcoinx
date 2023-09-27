import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'

const HomePage = () => {

  return (
    <div>
   
    <div className='w-full h-screen  flex flex-col gap-20 lg-max:gap-14 bg-gradient-to-b from-custom-end to-custom-start justify-between items-center'>
      <Nav/>
      <Hero/> 
    </div>
    </div>
  )
  
}

export default HomePage
