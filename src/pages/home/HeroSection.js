import React from 'react'
import HeroImage from "../../assets/logo.png"
import { AiOutlineGlobal } from 'react-icons/ai'
import { IoMdGlobe } from 'react-icons/io'

function HeroSection() {
  return (
    <div className='flex items-center justify-between p-5 px-20'>
      <div className='flex flex-col gap-2'>
        <h1 className='md:text-8xl '>ECODOGE</h1>
        <p className='md:text-4xl'>Much Wow, Very <span className='text-primaryColor md:text-5xl'>Green</span> Tail</p>
        <p className='md:text-xl flex'>We combine the playful spirit of Dogecoin with  a commitment to saving our planet </p>

        <button className='btn1 w-[20%]'>White Paper</button>
      </div>
      

      <img src={HeroImage} alt="" className='w-[60%] animate-move-up-down' />
    </div>
  )
}

export default HeroSection
