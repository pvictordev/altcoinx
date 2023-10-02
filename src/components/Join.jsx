import React from 'react'
import currency1 from '../assets/currency.png'; 
import currency2 from '../assets/currency (3).png'

const Join = () => {
  return (
    <section id='join' className='join bg-gradient-to-b from-custom-start to-custom-start'>

    <div className='join__content flex flex-col py-20 px-20 xxs-max:px-10 '>

      <div className="content__text flex flex-row uppercase justify-center items-start gap-x-8">
            <img className="w-20 h-20 animate-bounce l-max:hidden" src={currency1} alt="" />
              <h1 className="font-bold text-8xl lg-max:text-7xl xs-max:text-6xl xxs-max:text-4xl break-words text-center leading-tight">Join Us Via
              <br/>
              <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'>Discord</span>
              </h1>
            <img className="w-20 h-20 animate-bounce l-max:hidden" src={currency2} alt="" />
      </div>

      <a href="https://discord.com/" className='content__button text-2xl xs-max:text-xl xs-max:p-3 xs-max:w-44 xxs-max:text-lg xxs-max:p-1 xxs-max:w-32 text-center font-semibold rounded-2xl w-60 mx-auto mt-10 p-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 '>Join via discord</a>
    </div>

    </section>
  )
}

export default Join
