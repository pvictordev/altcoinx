import React from 'react'
import {BiLogoTwitter, BiLogoDiscordAlt, BiLogoInstagram} from 'react-icons/bi'

const Nav = () => {
  return (
    <div className='nav flex flex-row justify-center pt-12 gap-60'>
        {/* <h1 className='nav__logo font-bold text-3xl tracking-tighter'>ALTCOINX</h1> */}
        <img className="w-28 h-5" src="src/assets/altcoinx-logo.png" alt="" />
        

        <ul className="nav__menu list-none flex flex-row items-center justify-between space-x-12 gap-2 text-lg">
            <a href="#home" className="menu__home font-bold cursor-pointer">Home</a>
            <a href="#market"className='menu__market font-bold cursor-pointer'>Market</a>
            <a href="#offer"className='menu__offer font-bold cursor-pointer'>Offer</a>
            <a href="#join"className='menu__join font-bold cursor-pointer'>Join</a>
        </ul>
        <div className="nav__socials flex flex-row items-center justify-between gap-6 ">
            <BiLogoTwitter style={{ fontSize: '1.7rem', cursor:'pointer'}} />
            <BiLogoDiscordAlt style={{ fontSize: '1.7rem', cursor:'pointer' }}/>
            <BiLogoInstagram style={{ fontSize: '1.7rem', cursor:'pointer' }}/>
        </div>

    </div>
  )
}

export default Nav
