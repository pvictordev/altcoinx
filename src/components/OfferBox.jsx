import React from 'react'


const OfferBox = ({img, title, text}) => {
  return (
    <div className='offer__box'>
        <i>{img}</i>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default OfferBox
