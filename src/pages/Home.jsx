import React from 'react'
import HomePage from '../components/HomePage'
import Market from '../components/Market'
import Offer from '../components/Offer'
import Join from '../components/Join'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <section id="home" className="hero__section">   
      <HomePage/>
      <Market/>
      <Offer/>
      <Join/>
      <Footer/>
    </section>
  )
}

export default Home

