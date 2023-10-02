import React from 'react'
import {BiLogoTwitter, BiLogoDiscordAlt, BiLogoFacebook, BiLogoYoutube} from 'react-icons/bi'

const Footer = () => {

  return (
    <footer className='footer bg-gradient-to-b from-custom-start to-custom-start '>
        <div className='footer__content px-20 pt-40 pb-14 flex flex-col justify-center items-center xxs-max:px-10 '>
            <div className='footer__socials flex gap-12 mb-10 sm-max:gap-5'>
            <a href="https://twitter.com/home"><BiLogoTwitter style={{ fontSize: '2.5rem', cursor:'pointer', background:'' }} /></a>
            <a href="https://discord.com/"><BiLogoDiscordAlt style={{ fontSize: '2.5rem', cursor:'pointer', background:'' }}/></a>
            <a href="https://www.facebook.com/"><BiLogoFacebook style={{ fontSize: '2.5rem', cursor:'pointer', background:'' }}/></a>
            <a href="https://www.youtube.com/"><BiLogoYoutube style={{ fontSize: '2.5rem', cursor:'pointer', background:'' }}/></a>
            </div>
            <li className='footer__socials flex gap-10 text-3xl sm-max:text-xl'>
                <ul className=''>Privacy</ul>
                <ul className=''>Terms of Use</ul>

            </li>
            
        </div>
        
    </footer>
  )
}

export default Footer
