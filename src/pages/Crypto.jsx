import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai'

const Crypto = () => {
  const history = useNavigate()

 
  return (
    <section className='crypto w-full h-screen bg-gradient-to-b from-custom-end to-custom-start overflow-hidden'>

        <button className='absolute top-3 left-3' onClick={() => history(-1)}><AiOutlineArrowLeft style={{fontSize:'1.5rem'}}/></button>
        <div className="crypto__content  w-full h-screen flex justify-center items-center p-20">
          <div className="content__crypto">
            <img src={''} alt="" />
            <h2>Crypto {''}</h2>
            <ul className="chart__statistics">
              <li>Rank: </li>
              <li>Current Price:</li>
              <li>1h %:</li>
              <li>24h %:</li>
              <li>7d %:</li>
              <li>Market Cap:</li>
              <li>Circulating Supply:</li>
              <li>Total Supply:</li>
              <li>Total Volume:</li>              
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
