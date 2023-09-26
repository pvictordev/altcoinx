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
    
    <section className='crypto w-full h-screen bg-gradient-to-b from-chart-end to-chart-start overflow-hidden'>
    
        <button className='absolute top-3 left-3' onClick={() => history(-1)}><AiOutlineArrowLeft style={{fontSize:'1.5rem'}}/></button>

        <div className="crypto__content  w-full h-screen flex justify-between items-center p-20 pt-24 gap-20">
          <div className="content__crypto flex flex-col items-center text-left gap-3 border-2 p-5 rounded-2xl bg-indigo-600 bg-opacity-5">
 
            {coin.image ? <img src={coin.image.large} className='w-24 h-24' alt=""/> : null }
            <h2 className='text-3xl'>{coin.name}</h2>
          

            <ul className="chart__statistics text-left mt-4">


              <li className='text-md mb-1'>Symbol : {coin.symbol}</li>
              <li className='text-md mb-1'>Rank : #{coin.market_cap_rank}</li>
              
              <li className='text-md mb-1'>
                Current Price : ${
                coin.market_data?.current_price ? coin.market_data.current_price.usd.toLocaleString('en-US') : null
                } 
              </li>
      
              <li>
              1h Change : {coin.market_data?.price_change_percentage_1h_in_currency ? 
              <span className={`${coin.market_data?.price_change_percentage_1h_in_currency && coin.market_data.price_change_percentage_1h_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'}`
              }>{coin.market_data.price_change_percentage_1h_in_currency.usd} %</span> : null
              }
              </li>
              <li>
              24h Change : {coin.market_data?.price_change_percentage_24h_in_currency ? 
              <span className={`${coin.market_data?.price_change_percentage_24h_in_currency && coin.market_data.price_change_percentage_24h_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'}`
              }>{coin.market_data.price_change_percentage_24h_in_currency.usd} %</span> : null
              }
              </li>
              <li>
              7d Change : {coin.market_data?.price_change_percentage_7d_in_currency ? 
              <span className={`${coin.market_data?.price_change_percentage_7d_in_currency && coin.market_data.price_change_percentage_7d_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'}`
              }>{coin.market_data.price_change_percentage_7d_in_currency.usd} %</span> : null
              }
              </li>
              <li>
              14d Change : {coin.market_data?.price_change_percentage_14d_in_currency ? 
              <span className={`${coin.market_data?.price_change_percentage_14d_in_currency && coin.market_data.price_change_percentage_14d_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'}`
              }>{coin.market_data.price_change_percentage_14d_in_currency.usd} %</span> : null
              }
              </li>
              <li>
              30d Change : {coin.market_data?.price_change_percentage_30d_in_currency ? 
              <span className={`${coin.market_data?.price_change_percentage_30d_in_currency && coin.market_data.price_change_percentage_30d_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'}`
              }>{coin.market_data.price_change_percentage_30d_in_currency.usd} %</span> : null
              }
              </li>
              <li>
              1y Change : {coin.market_data?.price_change_percentage_1y_in_currency ? 
              <span className={`${coin.market_data?.price_change_percentage_1y_in_currency && coin.market_data.price_change_percentage_1y_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'}`
              }>{coin.market_data.price_change_percentage_1y_in_currency.usd} %</span> : null
              }
              </li>
          
              <li className='text-md mb-1'>
                24h high : <span className='text-green-500'> ${coin.market_data?.high_24h ? coin.market_data.high_24h.usd.toLocaleString('en-US'): null}</span>
              </li>  
              <li className='text-md mb-1'>
                24h low : <span className='text-red-500'>${coin.market_data?.low_24h ? coin.market_data.low_24h.usd.toLocaleString('en-US'): null}</span>
              </li> 
                          
            
              <li className='text-md mb-1'>
                Market Cap : ${coin.market_data?.market_cap ? coin.market_data.market_cap.usd.toLocaleString('en-US'): null}
              </li>
  
              <li className='text-md'>
                Circulating Supply : {coin.market_data ? coin.market_data.circulating_supply.toLocaleString('en-US') : null}
              </li>

            </ul>

          </div>

          <div style={{width:'800px', height:'500px'}} className='content__chart'>
              <Chart/> 
          </div>
        
        </div>
    </section>
  )
}

export default Crypto
