import React from 'react'
import Nav from './Nav'
import {AiOutlineArrowDown} from "react-icons/ai"
const Home = () => {
  return (
    <div id="home"className="hero__section w-full h-screen bg-gradient-to-b from-custom-end to-custom-start flex flex-col gap-24">
      <Nav/>

      <div className="hero__content flex flex-col items-center justify-center">

        <div className="hero__content-text flex flex-row">
            <img className="w-20 h-20" src="./src/assets/bitcoin-coin.png" alt="" />
              <h1 className="font-bold text-8xl break-words text-center leading-tight ">TRACK AND BUY
              <br/>
              <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'>CRYPTO CURRENCIES</span>
              </h1>
            <img className="w-20 h-20" src="./src/assets/ethereum-coin.png" alt="" />
          
        </div>

        <div className="hero__content-slider flex flex-row justify-between gap-20 mt-14 text-center items-center">
          <a href="" className='flex flex-col items-center'>
            <img src="src/assets/bitcoin.png" alt="" className="w-20 mb-3" />
            <p className="text-1xl font-bold">Bitcoin <span className='text-2xl'>5.35%</span></p>
            <p className="text-center text-2xl font-bold">$27,500.05</p>

          </a>
          <a href="" className='flex flex-col items-center'> 
            <img src="src/assets/ethereum.png" alt="" className="w-20 mb-3 items-center" />
            <p className="text-1xl font-bold">Ethereum <span className='text-2xl'>5.10%</span></p>
            <p className="text-center text-2xl font-bold">$1,700.15</p>
          </a>
          <a href="" className='flex flex-col items-center'>
            <img src="src/assets/tether.png" alt="" className="w-20 mb-3" />
            <p className="text-1xl font-bold">Tether <span className='text-2xl'>-0.03%</span></p>
            <p className="text-center text-2xl font-bold">$0.99</p>

          </a>
          <a href="" className='flex flex-col items-center'>
            <img src="src/assets/bnb.png" alt="" className="w-20 mb-3" />
            <p className="text-1xl font-bold">BNB <span className='text-2xl'>2.25%</span></p>
            <p className="text-center text-2xl font-bold">$220.15</p>

          </a>


        </div>


      </div>
      
      {/* <a href='#market' className="hero__scroll flex flex-col justify-center items-center cursor-pointer invisible">
        <p>Take a look</p>
        <AiOutlineArrowDown/>
      </a> */}

      
      
    </div>
  )
}

export default Home

