import React from 'react'

const Market = () => {
  return (
    <section id='market' className="market bg-gradient-to-b from-custom-start to-custom-start">
        <div className="market__container flex flex-col">
            <div className="market__content p-6 pt-40">
                <h2 className='text-4xl font-bold mb-7'>Market</h2>
                <div className="market__list">
                    <div className="list__top flex flex-row">
                        <p>Coin</p>
                        <p>Price</p>
                        {/* <p>1h %</p> */}
                        <p>24h %</p>
                        {/* <p>7d %</p> */}
                        <p>Market Cap</p>
                        {/* <p>Volume (24h)</p>
                        <p>Circulating Supply</p> */}
                    </div>
                    <ul className="list__row flex flex-row">
                        
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Market
