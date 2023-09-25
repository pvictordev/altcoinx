import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import axios from 'axios';


const Crypto = () => {

  const history = useNavigate()
  const params = useParams()
  const[coin, setCoin]= useState({});


  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoin(res.data)
    }).catch((error) => {
      console.log('error')
    })
  },[])
  // console.log(coin)


  return (
    <section className='crypto w-full h-screen bg-gradient-to-b from-custom-end to-custom-start overflow-hidden'>

        <button className='absolute top-3 left-3' onClick={() => history(-1)}><AiOutlineArrowLeft style={{fontSize:'1.5rem'}}/></button>

        <div className="crypto__content  w-full h-screen flex justify-center items-center p-20 gap-20">
          <div className="content__crypto flex flex-col items-center text-left">
            {coin.image ? <img src={coin.image.large} alt=""/> : null }
            <h2>{coin.name}</h2>
            <ul className="chart__statistics">
              <li>rank: {coin.market_cap_rank}</li>
              <li>Current Price: {coin.market_data.current_price} 
              </li>


              <li>1h %: {coin.market_data.price_change_percentage_1h_in_currency.usd}</li>
              <li>24h %: {coin.market_data.price_change_percentage_24h_in_currency.usd}</li>
              <li>7d %: {coin.market_data.price_change_percentage_7d_in_currency.usd}</li>
              <li>14d %: {coin.market_data.price_change_percentage_14d_in_currency.usd}</li>
              <li>30d %: {coin.market_data.price_change_percentage_30d_in_currency.usd}</li>
              <li>1y %: {coin.market_data.price_change_percentage_1y_in_currency.usd}</li>

              <li>24h high: {coin.market_data.high_24.usd}</li>               
              <li>24h low: {coin.market_data.low_24.usd}</li>              

              <li>Market Cap: {coin.market_data.market_cap.usd}</li>
              <li>Circulating Supply: {coin.market_data.circulating_supply}</li>
              <li>Total Supply: {coin.market_data.total_supply}</li>
              <li>Total Volume: {coin.market_data.total_volume}</li>              
            </ul>
          </div>
          <div className='content__chart'>
              <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odio vel distinctio aspernatur enim id tenetur ipsam repudiandae dignissimos nulla voluptatibus veritatis natus in omnis illo, labore ratione sunt cum!</div>
          </div>
        </div>
    </section>
  )
}

export default Crypto
