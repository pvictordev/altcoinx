import React from 'react'


const OfferBox = ({img, title, text}) => {
  return (
    <div className='offer__box border-2 p-8 flex flex-col justify-cente rounded-3xl bg-indigo-600/5 '>
        <i className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 flex w-14 h-14 mb-3 items-center justify-center rounded-2xl'>{img}</i>
        <h2 className='font-bold mb-1 text-xl'>{title}</h2>
        <p className='text-1xl'>{text}</p>
    </div>
  )
}

export default OfferBox
