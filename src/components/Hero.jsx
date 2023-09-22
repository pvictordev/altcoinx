import React, {useState} from 'react'
import {AiOutlineArrowDown} from "react-icons/ai"

const Hero = () => {
  return (
    <div className="hero__content flex flex-col items-center justify-center mt-44">

        <div className="hero__content-text flex flex-row">
            <img className="w-20 h-20 animate-bounce l-max:hidden" src="./src/assets/bitcoin-coin.png" alt="" />
              <h1 className="font-bold text-8xl break-words text-center leading-tight lg-max:text-7xl xs-max:text-6xl">TRACK AND BUY
              <br/>
              <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'>CRYPTO CURRENCIES</span>
              </h1>
            <img className="w-20 h-20 animate-bounce l-max:hidden" src="./src/assets/ethereum-coin.png" alt="" />
          
        </div>

        <a href="#market" className='hidden text-2xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 pl-7 p-5 rounded-3xl mt-20 sm-max:block text-center'>Market <AiOutlineArrowDown className='inline'/></a>

        <div className="hero__content-slider flex flex-row justify-between gap-20 mt-14 text-center items-center lg-max:grid lg-max:grid-cols-2  lg-max:gap-y-7 lg-max:gap-x-60  l-max:gap-x-40 sm-max:hidden">
          <a href="" className='flex flex-col items-center'>
            <img src="src/assets/bitcoin.png" alt="" className="w-20 mb-3" />
            <p className="text-1xl font-bold">Bitcoin <span className='text-2xl text-green-500'>5.35%</span></p>
            <p className="text-center text-2xl font-bold">$27,500.05</p>

          </a>
          <a href="" className='flex flex-col items-center'> 
            <img src="src/assets/ethereum.png" alt="" className="w-20 mb-3 items-center" />
            <p className="text-1xl font-bold">Ethereum <span className='text-2xl text-green-500'>5.10%</span></p>
            <p className="text-center text-2xl font-bold">$1,700.15</p>
          </a>
          <a href="" className='flex flex-col items-center'>
            <img src="src/assets/tether.png" alt="" className="w-20 mb-3" />
            <p className="text-1xl font-bold">Tether <span className='text-2xl text-red-500'>-0.03%</span></p>
            <p className="text-center text-2xl font-bold">$0.99</p>

          </a>
          <a href="" className='flex flex-col items-center'>
            <img src="src/assets/bnb.png" alt="" className="w-20 mb-3" />
            <p className="text-1xl font-bold">BNB <span className='text-2xl text-green-500'>2.25%</span></p>
            <p className="text-center text-2xl font-bold">$220.15</p>

          </a>


        </div>


      </div>
  )
}

export default Hero
