import React from 'react'

const Join = () => {
  // bg-gradient-to-b from-custom-start to-custom-start
  return (
    <section id='join' className='join  flex flex-col pt-40 content-center pb-20   bg-gradient-to-b from-custom-start to-custom-start '>

      <div className="hero__content-text flex flex-row uppercase justify-center items-start gap-x-8">
            <img className="w-20 h-20 animate-bounce l-max:hidden" src="./src/assets/currency.png" alt="" />
              <h1 className="font-bold text-8xl break-words text-center leading-tight lg-max:text-7xl xs-max:text-6xl">Join Us Via
              <br/>
              <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'>Discord</span>
              </h1>
            <img className="w-20 h-20 animate-bounce l-max:hidden" src="./src/assets/currency (3).png" alt="" />
      </div>

      <a href="https://discord.com/" className='text-2xl text-center font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-5 rounded-3xl mt-20 flex mx-auto xs-max:text-xl xs-max:mt-14'>Join via discord</a>

    </section>
  )
}

export default Join
