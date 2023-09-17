import React from 'react'
import {BiLogoTwitter, BiLogoDiscordAlt, BiLogoInstagram} from 'react-icons/bi'

const Nav = () => {
  return (
    <div className='nav flex flex-row items-center justify-around p-10'>
        <h1 className='nav__logo font-bold text-4xl'>ALTCOINX</h1>

        <ul className="nav__menu list-none flex flex-row items-center justify-between space-x-9 text-2xl">
            <li className='menu__home'>Home</li>
            <li className='menu__market'>Market</li>
            <li className='menu__offer'>Offer</li>
            <li className='menu__signup'>Sign up</li>
        </ul>
        <div className="nav__socials flex flex-row items-center justify-between space-x-8">
            <BiLogoTwitter style={{ fontSize: '2.7rem' }}/>
            <BiLogoDiscordAlt style={{ fontSize: '2.7rem' }}/>
            <BiLogoInstagram style={{ fontSize: '2.7rem' }}/>
        </div>

    </div>
  )
}

export default Nav
