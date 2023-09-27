import React from 'react'

const OfferBox = ({img, title, text}) => {
  return (
    <div className='offer__box border-2 p-8 flex flex-col justify-cente rounded-3xl bg-indigo-600/5 gap-2 lg-max:gap-4 xs-max:items-center xxs-max:p-2'>
        <i className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 flex w-14 h-14 items-center justify-center rounded-2xl xxs-max:w-10 xxs-max:h-10'>{img}</i>
        <h2 className='font-bold text-xl lg-max:text-2xl xs-max:text-center xxs-max:text-sm'>{title}</h2>
        <p className='text-1xl lg-max:text-2xl  xs-max:text-center xxs-max:text-sm'>{text}</p>
    </div>
  )
}

export default OfferBox
