import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {AiOutlineArrowDown} from "react-icons/ai"
import { Link } from 'react-router-dom';
import btc from '../assets/bitcoin-coin.png'; 
import eth from '../assets/ethereum-coin.png'; 

// import axios from 'axios';



const Hero = () => {

  const [data, setData] = useState(null)

  const urlMarket = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&locale=en'; 

  useEffect(() => {
    axios.get(urlMarket).then((response) => {
      setData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  },[])
  
  if(!data) return null

  
  const dataELems = data.map(elems => {
    return (
    <Link
      to={`/coin/${elems.id}`}
    >
      <a className='flex flex-col items-center'>
      <img src={elems.image} alt="" className="w-20 mb-3" />

      <p className='text-1xl font-bold'>{elems.name} <span 
        className={`text-2xl ${elems.price_change_percentage_24h < 0? 'text-red-600' : 'text-green-500'}`}> 
        {elems.price_change_percentage_24h.toFixed(2)}%
      </span>

      </p>

      <p className="text-center text-2xl font-bold">${elems.current_price.toLocaleString('en-US')}</p>
      </a>
    </Link>
    )
  })


  

  return (
    <div className="hero__content flex flex-col items-center justify-center mt-24 lg-max:mt-44 sm-max:mt-20">

        <div className="hero__content-text flex flex-row">
            <img className="w-20 h-20 animate-bounce l-max:hidden" src={btc} alt="" />
              <h1 className="font-bold text-8xl break-words text-center leading-tight lg-max:text-7xl xs-max:text-6xl">TRACK AND BUY
              <br/>
              <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'>CRYPTO CURRENCIES</span>
              </h1>
            <img className="w-20 h-20 animate-bounce l-max:hidden" src={eth} alt="" />
          
        </div>

        <a href="#market" className='hidden text-2xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 pl-7 p-5 rounded-3xl mt-20 sm-max:block text-center'>Market <AiOutlineArrowDown className='inline'/></a>

        <div className="hero__content-slider flex flex-row justify-between gap-20 mt-14 text-center items-center lg-max:grid lg-max:grid-cols-2  lg-max:gap-y-7 lg-max:gap-x-60  l-max:gap-x-40 sm-max:hidden">

        {dataELems}
          

        </div>


      </div>
  )
}

export default Hero
