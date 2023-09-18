import React from 'react'
import {BiLogoTwitter, BiLogoDiscordAlt, BiLogoInstagram} from 'react-icons/bi'

const Nav = () => {
  return (
    <div className='nav flex flex-row justify-around pt-14 '>
        <h1 className='nav__logo font-bold text-5xl tracking-widest'>ALTCOINX</h1>

        <ul className="nav__menu list-none flex flex-row items-center justify-between space-x-12 text-3xl gap-9 cursor-pointer">
            <a  href="#home" className='menu__home'>Home</a>
            <a className='menu__market'>Market</a>
            <a className='menu__offer'>Offer</a>
            <a className='menu__signup'>Sign up</a>
        </ul>
        <div className="nav__socials flex flex-row items-center justify-between gap-10 ">
            <BiLogoTwitter style={{ fontSize: '2.7rem', cursor:'pointer'}} />
            <BiLogoDiscordAlt style={{ fontSize: '2.7rem', cursor:'pointer' }}/>
            <BiLogoInstagram style={{ fontSize: '2.7rem', cursor:'pointer' }}/>
        </div>

    </div>
  )
}

export default Nav
