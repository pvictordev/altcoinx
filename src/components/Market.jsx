import React from 'react'

const Market = () => {
  return (
    <section id='market' className="market bg-gradient-to-b from-custom-start to-custom-start">
        <div className="market__container">
            <div className="market__content">
                <h2>Market</h2>
                <div className="market__list">
                    <div className="list__top">
                        <p>Coin</p>
                        <p>Price</p>
                        <p>1h %</p>
                        <p>24h %</p>
                        <p>7d %</p>
                        <p>Market Cap</p>
                        <p>Volume (24h)</p>
                        <p>Circulating Supply</p>
                    </div>
                    <div className="list__row">

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Market
