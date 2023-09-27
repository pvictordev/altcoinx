import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Chart from './Chart';


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
  
  return (
    
    <section className='crypto w-full h-screen bg-gradient-to-b from-chart-end to-chart-start overflow-hidden xl-max:overflow-auto'>

        <button className='absolute top-3 left-3' onClick={() => history(-1)}><AiOutlineArrowLeft style={{fontSize:'1.5rem'}}/></button>

        
        <div className="crypto__content flex justify-between items-center p-20 pt-24 gap-20 xl-max:overflow-auto lg-max:grid lg-max:justify-center lg-max:p-10 lg-max:grid-cols-1" >

          <div className="content__crypto flex flex-col items-center text-left gap-3 border-2 p-6 rounded-3xl bg-indigo-600 bg-opacity-5 border-indigo-950 ">
          {/* text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600  */}
            {coin.image ? <img src={coin.image.large} className='w-24 h-24' alt=""/> : null }
            <h2 className='text-3xl '>{coin.name}</h2>
         
            <ul className="chart__statistics text-left mt-4 text-md">
              <li className='mb-1'>Symbol : {coin.symbol}</li>
              <li className='mb-1'>Rank : #{coin.market_cap_rank}</li>
              
              <li className='mb-1'>
                Current Price : ${
                coin.market_data?.current_price ? coin.market_data.current_price.usd.toLocaleString('en-US') : null
                } 
              </li>
      
              <li className='mb-1'>
              1h Change : {coin.market_data?.price_change_percentage_1h_in_currency ? 
              <span className={`${coin.market_data?.price_change_percentage_1h_in_currency && coin.market_data.price_change_percentage_1h_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'}`
              }>{coin.market_data.price_change_percentage_1h_in_currency.usd} %</span> : null
              }
              </li>
              <li className='mb-1'>
              24h Change : {coin.market_data?.price_change_percentage_24h_in_currency ? 
              <span className={`${coin.market_data?.price_change_percentage_24h_in_currency && coin.market_data.price_change_percentage_24h_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'}`
              }>{coin.market_data.price_change_percentage_24h_in_currency.usd} %</span> : null
              }
              </li>
              <li className='mb-1'>
              7d Change : {coin.market_data?.price_change_percentage_7d_in_currency ? 
              <span className={`${coin.market_data?.price_change_percentage_7d_in_currency && coin.market_data.price_change_percentage_7d_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'}`
              }>{coin.market_data.price_change_percentage_7d_in_currency.usd} %</span> : null
              }
              </li>
              <li className='mb-1'>
              14d Change : {coin.market_data?.price_change_percentage_14d_in_currency ? 
              <span className={`${coin.market_data?.price_change_percentage_14d_in_currency && coin.market_data.price_change_percentage_14d_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'}`
              }>{coin.market_data.price_change_percentage_14d_in_currency.usd} %</span> : null
              }
              </li>
              <li className='mb-1'>
              30d Change : {coin.market_data?.price_change_percentage_30d_in_currency ? 
              <span className={`${coin.market_data?.price_change_percentage_30d_in_currency && coin.market_data.price_change_percentage_30d_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'}`
              }>{coin.market_data.price_change_percentage_30d_in_currency.usd} %</span> : null
              }
              </li>
              <li className='mb-1'>
              1y Change : {coin.market_data?.price_change_percentage_1y_in_currency ? 
              <span className={`${coin.market_data?.price_change_percentage_1y_in_currency && coin.market_data.price_change_percentage_1y_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'}`
              }>{coin.market_data.price_change_percentage_1y_in_currency.usd} %</span> : null
              }
              </li>
          
              <li className='mb-1'>
                24h high : <span className='text-green-500'> ${coin.market_data?.high_24h ? coin.market_data.high_24h.usd.toLocaleString('en-US'): null}</span>
              </li>  
              <li className=' mb-1'>
                24h low : <span className='text-red-500'>${coin.market_data?.low_24h ? coin.market_data.low_24h.usd.toLocaleString('en-US'): null}</span>
              </li> 
                          
            
              <li className='mb-1'>
                Market Cap : ${coin.market_data?.market_cap ? coin.market_data.market_cap.usd.toLocaleString('en-US'): null}
              </li>
  
              <li className=''>
                Circulating Supply : {coin.market_data ? coin.market_data.circulating_supply.toLocaleString('en-US') : null}
              </li>

            </ul>

          </div>
          <Chart/>  
        </div>
    </section>
  )
}

export default Crypto
