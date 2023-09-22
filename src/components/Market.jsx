import React from 'react'

const Market = () => {
  return (
    <section id='market' className="market bg-gradient-to-b from-custom-start to-custom-start">
        <div className="market__container flex flex-col px-20 py-40 sm-max:p-5 sm-max:py-20">
            <div className="market__content">
                <h2 className='text-4xl font-bold mb-10'>Market</h2>

                <div className="market__list flex flex-col">

                    <div className="list__top flex flex-row justify-between bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-4 rounded-t-lg whitespace-break-spaces">
                        <p className='text-2xl'>Coin</p>
                        <p className='text-2xl'>Price</p>
                        {/* <p>1h %</p> */}
                        <p className='text-2xl sm-max:hidden'>24h %</p>
                        {/* <p>7d %</p> */}
                        <p className='text-2xl l-max:hidden'>Market Cap</p>
                        {/* <p>Volume (24h)</p>
                        <p>Circulating Supply</p> */}
                    </div>
                    <ul className="list__row flex flex-col ">
                        <li className='flex flex-row justify-between py-8 text-center px-4 border-b border-double hover:bg-indigo-600 hover:bg-opacity-10 items-center'>
                            <p className='text-2xl flex items-center gap-2 sm-max:text-xl'><img src="src/assets/bitcoin.png" alt="" className="w-12 inline sm-max:w-8" /> Bitcoin</p>
                            <p className='text-2xl items-center flex sm-max:text-xl'>$26,464.00</p>
                            <p className='text-2xl sm-max:hidden text-red-500'>-2.61%</p>
                            <p className='text-2xl l-max:hidden'>$514,983,185,091</p>
                        </li>
                        <li className='flex flex-row justify-between py-8 text-center px-4 border-b border-double hover:bg-indigo-600 hover:bg-opacity-10 items-center'>
                            <p className='text-2xl flex items-center gap-2 sm-max:text-xl'><img src="src/assets/ethereum.png" alt="" className="w-12 inline sm-max:w-8" /> Ethereum</p>
                            <p className='text-2xl sm-max:text-xl'>$1646.00</p>
                            <p className='text-2xl sm-max:hidden text-green-500'>2.61%</p>
                            <p className='text-2xl l-max:hidden md-max:hidden'>$189,983,185,091</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Market
