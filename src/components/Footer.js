import React from 'react'
import Logo from "../assets/logo.png"
import { RiInstagramFill, RiYoutubeFill, RiDiscordFill, RiTiktokFill, RiTelegramFill } from 'react-icons/ri'

function Footer() {
  return (
    <footer className='p-6 md:p-8 bg-transparentbackground2'>
      {/* Top section */}
      <div className='flex flex-col md:flex-row justify-between items-center'>
        
        {/* Logo and tagline */}
        <div className="flex items-center mb-6 md:mb-0">
          <img src={Logo} alt="EcoDoge Logo" className="w-20 md:w-[90px]" />
          
          <div className='ml-4'>
            <p className="text-2xl md:text-4xl font-bold text-bgtextColor">EcoDoge</p>
            <p className='text-sm md:text-base text-textColor'>A Fun-Loving Journey to a Greener Future</p>
          </div>
        </div>

        {/* Links Section */}
        <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-10 w-full md:w-auto'>
          
          {/* Contact Us */}
          <div className='flex flex-col text-center md:text-left'>
            <h1 className='font-bold text-xl md:text-2xl text-bgtextColor mb-2'>Contact Us</h1>
            <div className='flex flex-col gap-1 text-sm text-textColor'>
              <a href="mailto:jesulobadaniel1@gmail.com">jesulobadaniel1@gmail.com</a>
              <a href="tel:+2348104618586">+2348104618586</a>
            </div>
          </div>

          {/* Support */}
          <div className='flex flex-col text-center md:text-left'>
            <h1 className='font-bold text-xl md:text-2xl text-bgtextColor mb-2'>Support</h1>
            <div className='flex flex-col gap-1 text-sm text-textColor'>
              <a href="">Help Service</a>
              <a href="">Knowledge</a>
              <a href="">FAQs</a>
              <a href="">Contact</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='flex flex-col text-center md:text-left'>
            <h1 className='font-bold text-xl md:text-2xl text-bgtextColor mb-2'>Quick Links</h1>
            <div className='flex flex-col gap-1 text-sm text-textColor'>
              <a href="">Home Page</a>
              <a href="">White Paper</a>
              <a href="">Blog</a>
              <a href="">KYC</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className='flex flex-col md:flex-row justify-between items-center mt-8 border-t-2 border-transparentbackground pt-4'>
        <p className='text-sm text-textColor'>Copyright ©2024 Designed by </p>

        {/* Social Media Icons */}
        <div className='flex gap-4 mt-4 md:mt-0'>
          <a href="#" aria-label="Instagram">
            <RiInstagramFill className='text-2xl md:text-3xl text-primaryColor hover:text-highlight transition-colors' />
          </a>
          <a href="#" aria-label="Telegram">
            <RiTelegramFill className='text-2xl md:text-3xl text-primaryColor hover:text-highlight transition-colors' />
          </a>
          <a href="#" aria-label="TikTok">
            <RiTiktokFill className='text-2xl md:text-3xl text-primaryColor hover:text-highlight transition-colors' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
