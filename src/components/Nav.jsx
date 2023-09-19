import React from 'react'
import {BiLogoTwitter, BiLogoDiscordAlt, BiLogoInstagram} from 'react-icons/bi'
import {AiOutlineMenu} from 'react-icons/ai'



const Nav = () => {
  return (
    <div className='nav flex flex-row justify-center pt-12 gap-40 xl:gap-60'>
        {/* <h1 className='nav__logo font-bold text-3xl tracking-tighter'>ALTCOINX</h1> */}
        <img className="w-28 h-5" src="src/assets/altcoinx-logo.png" alt="" />
        

        <ul className="nav__menu list-none hidden gap-10 text-lg xl:gap-20 lg:flex flex-row items-center">
            <a href="#home" className="menu__home font-bold cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-color duration-150">Home</a>
            <a href="#market"className='menu__market font-bold cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-color duration-150'>Market</a>
            <a href="#offer"className='menu__offer font-bold cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-color duration-150'>Offer</a>
            <a href="#join"className='menu__join font-bold cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-color duration-150'>Join</a>
        </ul>
        <div className="nav__socials flex flex-row items-center justify-between gap-6 ">
            <BiLogoTwitter style={{ fontSize: '1.7rem', cursor:'pointer' }} />
            <BiLogoDiscordAlt style={{ fontSize: '1.7rem', cursor:'pointer' }}/>
            <BiLogoInstagram style={{ fontSize: '1.7rem', cursor:'pointer' }}/>
        </div>
        <AiOutlineMenu className='block lg:hidden'/>
    </div>
  )
}

export default Nav
