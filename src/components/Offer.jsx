import React from 'react'
import OfferBox from './OfferBox'
import {CiWallet} from 'react-icons/ci'
import {AiOutlineSelect, AiOutlineFileDone} from 'react-icons/ai'
import {RiNftFill} from 'react-icons/ri'
import {LiaMoneyBillSolid} from 'react-icons/lia'
import {BsCollection} from 'react-icons/bs'
import offerImg from '../assets/currency(2).png'

// bg-gradient-to-b from-custom-start to-custom-start
const Offer = () => {
  return (
    <section id="offer" className="offer bg-gradient-to-b from-custom-start to-custom-start ">
        <div className='offer__container p-20 xxs-max:px-10'>
          <h1 className='text-8xl text-center mb-20 font-bold lg-max:text-7xl xs-max:text-6xl xxs-max:text-4xl xxs-max:mb-15'>Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 '>Offer</span></h1>

          <div className='offer__content grid grid-cols-3 gap-10 lg-max:grid-cols-1'>
            <div className='offer__content-1 flex flex-col gap-y-10'>
            <OfferBox 
              img={<CiWallet style={{fontSize:'2rem'}}/>}
              title={'CONNECT YOUR WALLLET'}
              text={'Use your crypto wallet to connect to our app'}
            />

            <OfferBox 
              img={<AiOutlineSelect style={{fontSize:'2rem'}}/>}
              title={'SELECT YOUR QUANTITY'}
              text={'Upload your crypto and set a title, description and price.'}
            />
            
            <OfferBox 
              img={<AiOutlineFileDone style={{fontSize:'2rem'}}/>}
              title={'CONFIRM TRANSACTION'}
              text={'Earn by selling your crypto on our marketplace'}
            />
            </div>
            
            <div className="offer__content-2 m-x-auto flex flex-row justify-center items-center w-70 h-full mx-auto lg-max:hidden">
              <img src={offerImg} className='center'></img>
            </div>

            <div className='offer__content-3 flex flex-col gap-y-10 '>
            <OfferBox 
              img={<RiNftFill style={{fontSize:'2rem'}}/>}
              title={'RECEIVE YOUR OWN NFT'}
              text={'Invest all your crypto at one place on one platform.'}
            />

            <OfferBox   
              img={<LiaMoneyBillSolid style={{fontSize:'2rem'}}/>}
              title={'TAKE A MARKET TO SELL'}
              text={'Discover, collect the right crypto collections to buy or sell'}
            />

            <OfferBox 
              img={<BsCollection style={{fontSize:'2rem'}}/>}
              title={'DRIVE YOUR COLLECTION'}
              text={'We make it easy to Discover, Invest and manage.'}
            />
            </div>
            
          </div>
        </div>
    </section>
  )
}

export default Offer
