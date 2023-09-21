import React from 'react'
import './App.css'
import Home from './components/Home'
import Market from './components/Market';
import Offer from './components/Offer';
import Join from './components/Join';
import Footer from './components/Footer';



function App() {
  return (
    <div className='app font-space-grotesk'>
      <Home/>
      <Market/>
      <Offer/>
      <Join/>
      <Footer/>
    </div>
  )
}

export default App
