import React from 'react'
import Nav from './Nav'
import Hero from './Hero'

const Home = () => {
  return (

    <section id="home" className="hero__section w-full h-screen bg-gradient-to-b from-custom-end to-custom-start flex flex-col gap-20 lg-max:gap-14 ">    
      <Nav/>
      <Hero/>
    </section>
  )
}

export default Home

