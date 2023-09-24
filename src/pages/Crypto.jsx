import React from 'react';
import { useParams } from 'react-router-dom';

const Crypto = () => {
  useParams()
  return (
    <section className='crypto w-full h-screen bg-gradient-to-b from-custom-end to-custom-start'>
        <div className="crypto__content">
          <div className="content__img">
            <img src="" alt="" />
            <h2>Bitcoin</h2>

          </div>
          <div className='content__chart'>
            <ul className="chart__statistics">
            
            </ul>
          </div>
        </div>
    </section>
  )
}

export default Crypto
