import React from 'react'
import Logo from "../assets/logo.png"
import { RiInstagramFill, RiYoutubeFill, RiDiscordFill, RiTiktokFill, RiTelegramFill } from 'react-icons/ri'
function Footer() {
  return (
    <div className='p-8 px-12 bg-transparentbackground2'>
      <div className='flex justify-between items-center'>

        <div className="flex items-center">
          <img src={Logo} alt="logo" className="w-[90px]" />
          
          <div>
            <p className="text-4xl font-bold text-bgtextColor">EcoDoge</p>
            <p>A Fun-Loving Journey to a Greener Future</p>
          </div>
        </div>

        <div className='flex justify-between gap-10'>
          <div className='flex flex-col'>
            <h1 className='font-bold text-2xl'>Contact Us</h1>
            <div className='flex flex-col'>
              <a href="">emailemail@gmail.com</a>
              <a href="">emailemail@gmail.com</a>
              <a href="">emailemail@gmail.com</a>
            </div>
          </div>

          <div className='flex flex-col'>
              <h1 className='font-bold text-2xl'>Support</h1>
              <div className="flex flex-col">
                <a href="">Help Service</a>
                <a href="">Knowledge</a>
                <a href="">FAQs</a>
                <a href="">Contact</a>
            </div>

            
          </div>

          <div className='flex flex-col'>
              <h1 className='font-bold text-2xl'>Quick Links</h1>
              <div className="flex flex-col">
                <a href="">Home Page</a>
                <a href="">White Paper</a>
                <a href="">Blog</a>
                <a href="">KYC</a>
              </div>
          </div>
        </div>
      
      </div>
      
      <div className='flex justify-between items-center mt-8 border-t-2 border-t-transparentbackground p-2'>
        <p>Copyright @2024 Designed by Ecodoge Team</p>

        <div className='flex gap-4'>
          <RiInstagramFill className='text-3xl text-primaryColor' />
          <RiTelegramFill className='text-3xl text-primaryColor' />
          <RiTiktokFill className='text-3xl text-primaryColor' />
        </div>
      </div>
  </div>
  )
}

export default Footer

