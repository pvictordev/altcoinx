import React from 'react'
import Nav from './Nav'
import {AiOutlineArrowDown} from "react-icons/ai"
const Home = () => {
  return (
    <div id="home"className="hero__section w-full h-screen font-Titillium-Web bg-gradient-to-b from-custom-end to-custom-start flex flex-col justify-between">
      <Nav/>

      <div className="hero__content flex flex-col items-center justify-center">

        <div className="hero__content-text flex flex-row">
            <img className="w-32 h-32" src="./src/assets/crypto-icon.png" alt="" />
              <h1 className="font-bold text-9xl break-words text-center leading-tight ">TRACK AND BUY
              <br/>
              <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'>CRYPTO CURRENCIES</span>
              </h1>
            <img className="w-28 h-28" src="./src/assets/bitcoin.png" alt="" />
          
        </div>

        <div className="hero__content-slider flex flex-row justify-between gap-20 mt-32">
          <a href="">
            <img src="" alt="" />
            <p className="text-2xl font-bold">Bitcoin 3.05%</p>
            <p className="text-center text-3xl font-bold">$27,500.05</p>

          </a>
          <a href=""> 
            <img src="" alt="" />
            <p className="text-2xl font-bold">Ethereum 5.10%</p>
            <p className="text-center text-3xl font-bold">$1,700.15</p>
          </a>
          <a  href="">
            <img src="" alt="" />
            <p className="text-2xl font-bold">Tether -0.03%</p>
            <p className="text-center text-3xl font-bold">$0.99</p>

          </a>
          <a href="">
            <img src="" alt="" />
            <p className="text-2xl font-bold">BNB 2.35%</p>
            <p className="text-center text-3xl font-bold">$220.15</p>

          </a>


        </div>

        

      </div>
      
      <a href='#market' className="hero__scroll flex flex-col justify-center items-center mb-10 cursor-pointer">
        <p>Take a look</p>
        <AiOutlineArrowDown/>
      </a>

      
      
    </div>
  )
}

export default Home

