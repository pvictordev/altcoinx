import React from 'react'
import {BiLogoTwitter, BiLogoDiscordAlt, BiLogoFacebook, BiLogoYoutube} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className='footer bg-gradient-to-b from-custom-start to-custom-start pb-20 pt-44'>
        <div className='footer__content  flex flex-col justify-center items-center'>
            <div className='footer__socials flex gap-12 npm rujn dev mb-10'>
            <BiLogoTwitter style={{ fontSize: '2.7rem', cursor:'pointer', background:'' }} />
            <BiLogoDiscordAlt style={{ fontSize: '2.7rem', cursor:'pointer', background:'' }}/>
            <BiLogoFacebook style={{ fontSize: '2.7rem', cursor:'pointer', background:'' }}/>
            <BiLogoYoutube style={{ fontSize: '2.7rem', cursor:'pointer', background:'' }}/>
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
