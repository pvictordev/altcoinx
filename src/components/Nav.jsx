import React from 'react'
import {BiLogoTwitter, BiLogoDiscordAlt, BiLogoInstagram} from 'react-icons/bi'
import {AiOutlineMenu} from 'react-icons/ai'


const Nav = () => {
  return (
    <div className='nav flex flex-row p-12 mx-auto gap-60 lg-max:gap-28 xl-max:gap-40 l-max:max-w-none l-max:justify-between l-max:m-0 xs-max:pt-12 xs-max:pb-12 xs-max:pr-4 xs-max:pl-4'>
        {/* <h1 className='nav__logo font-bold text-3xl tracking-tighter'>ALTCOINX</h1> */}
        <img className="w-28 h-5" src="src/assets/altcoinx-logo.png" alt="" />
        

        <ul className="nav__menu list-none gap-14 flex flex-row l-max:hidden  ">
            <a href="#home" className="menu__home text-lg font-bold cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-color duration-150">Home</a>
            <a href="#market"className='menu__market text-lg font-bold cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-color duration-150'>Market</a>
            <a href="#offer"className='menu__offer text-lg font-bold cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-color duration-150'>Offer</a>
            <a href="#join"className='menu__join text-lg font-bold cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-color duration-150'>Join</a>
        </ul>
        <div className="nav__socials flex flex-row items-center justify-between gap-6 ">
            <BiLogoTwitter style={{ fontSize: '1.7rem', cursor:'pointer', background:'' }} />
            <BiLogoDiscordAlt style={{ fontSize: '1.7rem', cursor:'pointer', background:'' }}/>
            <AiOutlineMenu className='hidden cursor-pointer l-max:block'/>
        </div>
        
    </div>
  )
}

export default Nav
