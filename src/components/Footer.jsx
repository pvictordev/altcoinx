import React from 'react'
import {BiLogoTwitter, BiLogoDiscordAlt, BiLogoFacebook, BiLogoYoutube} from 'react-icons/bi'

const Footer = () => {

  return (
    <footer className='footer pb-20 pt-44  bg-gradient-to-b from-custom-start to-custom-start '>
        <div className='footer__content  flex flex-col justify-center items-center'>
            <div className='footer__socials flex gap-12 npm rujn dev mb-10'>
            <a href="https://twitter.com/home"><BiLogoTwitter style={{ fontSize: '2.7rem', cursor:'pointer', background:'' }} /></a>
            <a href="https://discord.com/"><BiLogoDiscordAlt style={{ fontSize: '2.7rem', cursor:'pointer', background:'' }}/></a>
            <a href="https://www.facebook.com/"><BiLogoFacebook style={{ fontSize: '2.7rem', cursor:'pointer', background:'' }}/></a>
            <a href="https://www.youtube.com/"><BiLogoYoutube style={{ fontSize: '2.7rem', cursor:'pointer', background:'' }}/></a>
            </div>
            <div className='footer__socials flex gap-10'>
                <p className='text-3xl'>Privacy</p>
                <p className='text-3xl'>Terms of Use</p>

            </div>
            
        </div>
        
    </footer>
  )
}

export default Footer
