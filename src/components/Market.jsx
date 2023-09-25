import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Market = () => {

const [data, setData] = useState(null); 
const [search, setSearch] = useState('')


const urlTrend = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';

useEffect(() => {
    axios.get(urlTrend).then((response) => {
      setData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  },[])

  if(!data) return null

  const filteredData = data
  ? data.filter((elems) =>
      elems.name.toLowerCase().includes(search.toLowerCase()) || elems.symbol.toLowerCase().includes(search.toLowerCase())
    )
  : [];


  function handleSearch(event) {
    setSearch(event.target.value)
  }
  
const dataElems = filteredData.splice(0,10).map(elems => {
    return (
      <Link
      to={`/coin/${elems.id}`} 
      element={<Crypto/>}
      >
        <li className='flex flex-row justify-between py-8 text-center px-4 border-b border-double hover:bg-indigo-600 hover:bg-opacity-10 items-center' key={elems.id} >
            <p className='text-2xl flex items-center gap-2 sm-max:text-xl'><img src={elems.image} alt="" className="w-12 inline sm-max:w-8" /> {elems.name}</p>
            <p className='text-2xl items-center flex sm-max:text-xl'>$ {elems.current_price.toLocaleString('en-US')}</p>
            <p className={`text-2xl sm-max:hidden ${elems.price_change_percentage_24h < 0? 'text-red-600' : 'text-green-500'}`}>{elems.price_change_percentage_24h}%</p>
            <p className='text-2xl l-max:hidden'>$ {elems.market_cap.toLocaleString('en-US')}</p>
        </li>
      </Link>
    )
})

  return (
    <section id='market' className="market   bg-gradient-to-b from-custom-start to-custom-start ">
        <div className="market__container flex flex-col px-20 py-40 sm-max:p-5 sm-max:py-20">
            <div className="market__content">
                <h2 className='text-4xl font-bold mb-10'>Market</h2>
                
                <input 
                  type="text" 
                  className='mb-10 w-full bg-indigo-600 bg-opacity-10 p-3 text-2xl border-solid border-2 border-white rounded-xl focus:outline-none focus:border-purple-600' 
                  value={search}
                  onChange={handleSearch}
                  placeholder='Search Cryptocurrency'
                />

                <div className="market__list flex flex-col">

                    <div className="list__top flex flex-row justify-between bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-4 rounded-t-lg whitespace-break-spaces">
                        <p className='text-2xl'>Coin</p>
                        <p className='text-2xl'>Price</p>
                        <p className='text-2xl sm-max:hidden'>24h %</p>
                        <p className='text-2xl l-max:hidden'>Market Cap</p>
                    </div>

                    <ul className="list__row flex flex-col ">
                       {dataElems}
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Market
