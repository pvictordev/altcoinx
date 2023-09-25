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

            {coin.image ? <img src={coin.image.large} className='w-20 h-20' alt=""/> : null }
            <h2 className='text-2xl'>{coin.name}</h2>
            <h3 className='text-xl'>Rank : {coin.market_cap_rank}</h3>

            <ul className="chart__statistics text-left gap-2">
              
              <li className='text-lg'>
                Current Price: {
                coin.market_data?.current_price ? coin.market_data.current_price.usd : null
                } 
              </li>

              <li className='text-lg'>1h %: 
                {coin.market_data?.price_change_percentage_1h_in_currency ? coin.market_data.price_change_percentage_1h_in_currency.usd : null
                }
              </li>

              <li className='text-lg'>24h %: 
                {coin.market_data?.price_change_percentage_24h_in_currency ? coin.market_data.price_change_percentage_24h_in_currency.usd : null
                }
              </li>

              <li className='text-lg'>7d %: 
                {coin.market_data?.price_change_percentage_7d_in_currency ? coin.market_data.price_change_percentage_7d_in_currency.usd : null
                }
              </li>

              <li className='text-lg'>14d %: 
                {coin.market_data?.price_change_percentage_14d_in_currency ? coin.market_data.price_change_percentage_14d_in_currency.usd : null
                }
              </li>

              <li className='text-lg'>30d %: 
                {coin.market_data?.price_change_percentage_30d_in_currency ? coin.market_data.price_change_percentage_30d_in_currency.usd : null
                }
              </li>

              <li className='text-lg'>1y %: 
                {coin.market_data?.price_change_percentage_1y_in_currency ? coin.market_data.price_change_percentage_1y_in_currency.usd : null
                }
              </li>
          
                
              <li className='text-lg'>
                24h low:{coin.market_data?.low_24h ? <p>$ {coin.market_data.low_24h.usd}</p>: null}
              </li>              

              <li className='text-lg'>Market Cap: 
                {coin.market_data?.market_cap ? <p>$ {coin.market_data.market_cap.usd}</p> : null}
              </li>
              
              <li className='text-lg'>Circulating Supply: 
                {coin.market_data ? <p>{coin.market_data.circulating_supply}</p>: null}
              </li>

              <li className='text-lg'>Total Supply: 
                {coin.market_data ? <p>{coin.market_data.total_supply}</p>: null}
              </li>

              {/* <li>Total Volume: 
                {coin.market_data ? <p>{coin.market_data.total_volume}</p>: null}
              </li> */}

            </ul>

          </div>

          <div className='content__chart'>
              <div className=''>Chart</div>
          </div>
        </div>
    </section>
  )
}

export default Crypto
