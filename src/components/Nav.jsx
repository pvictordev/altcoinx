import React, { useState } from 'react'
import {BiLogoTwitter, BiLogoDiscordAlt, BiLogoInstagram} from 'react-icons/bi'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


const Nav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  return (
    
    <div className='nav flex flex-row p-12 mx-auto gap-60 lg-max:gap-28 xl-max:gap-40 l-max:max-w-none l-max:justify-between l-max:m-0 xs-max:pt-12 xs-max:pb-12 xs-max:pr-4 xs-max:pl-4'>
        {/* <h1 className='nav__logo font-bold text-3xl tracking-tighter'>ALTCOINX</h1> */}
        <img className="w-28 h-5" src="src/assets/altcoinx-logo.png" alt="" />
        
          <ul className='nav__menu list-none gap-14 flex flex-row l-max:hidden'>
            <li>
              <a href="#home" className="menu__home text-lg font-bold cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-color duration-150">Home</a> 
            </li>
            <li>
              <a href="#market"className='menu__market text-lg font-bold cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-color duration-150'>Market</a>
            </li>
            <li>
              <a href="#offer"className='menu__offer text-lg font-bold cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-color duration-150'>Offer</a>
            </li>
            <li>
              <a href="#join"className='menu__join text-lg font-bold cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-color duration-150'>Join</a>
            </li>
        </ul>

        <ul className={`mobile__menu flex flex-col items-center justify-center gap-8 z-50 font-bold fixed text-white top-0 left-0 w-full h-full bg-gradient-to-b from-custom-start to-custom-start  transform transition-opacity ${isMenuOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
            <li>
            <a href="#home" onClick={toggleMenu} className="mobile__home text-3xl hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-color duration-150">Home</a> 
            </li>
            <li>
              <a href="#market"  onClick={toggleMenu} className='mobile__market text-3xl hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-color duration-150 '>Market</a>
            </li>
            <li>
              <a href="#offer" onClick={toggleMenu} className='mobile__offer text-3xl hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-color duration-150'>Offer</a>
            </li>
            <li>
              <a href="#join"  onClick={toggleMenu} className='mobile__join text-3xl hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-color duration-150'>Join</a>
            </li>

            <div>

          <AiOutlineClose style={{fontSize:'1.5rem'}} className='top-12 right-14 absolute cursor-pointer' onClick={toggleMenu}/> 
        </div>

        </ul>
        
        

        <div className="nav__socials flex flex-row items-center justify-between gap-6 ">
            <BiLogoTwitter style={{ fontSize: '1.7rem', cursor:'pointer', background:'' }} />
            <BiLogoDiscordAlt style={{ fontSize: '1.7rem', cursor:'pointer', background:'' }}/>

            <AiOutlineMenu style={{fontSize:'1.5rem'}} className='hidden cursor-pointer l-max:block' onClick={toggleMenu}/>
  
        </div>
        
    </div>
  )
}

export default Nav
