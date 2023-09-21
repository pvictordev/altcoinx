import React from 'react'
import OfferBox from './OfferBox'
import {CiWallet} from 'react-icons/ci'

const Offer = () => {
  return (
    <div>
      <section id="offer" className="offer bg-gradient-to-b from-custom-start to-custom-start p-20">
        <div className='offer__container'>
          <h1 className='text-6xl text-center'>Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600  '>Offer</span></h1>
          <div className='offer__content'>
            <OfferBox 
              img={<CiWallet/>}
              title={'CONNECT YOUR WALLLET'}
              text={'Use your crypto wallet to connect to our app'}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Offer
