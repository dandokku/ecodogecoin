import React from 'react'
import Logo from "../assets/logo.png"

function Navbar() {
  return (
    <div className="bg-transparentbackground flex justify-between items-center p-5 px-20">

      <div className="flex items-center justify-between">
        <img src={Logo} alt="logo" className="w-[70px]" />
        <p className="text-3xl font-bold text-bgtextColor">EcoDoge</p>
      </div>

      
      <div className="flex justify-between items-center gap-8">
        <div className="flex gap-6">
          <a href="/" className="text-bgtextColor text-xl">Home</a>
          <a href="/" className="text-bgtextColor text-xl">About</a>
          <a href="/" className="text-bgtextColor text-xl">Tokenomics</a>
          <a href="/" className="text-bgtextColor text-xl">Roadmap</a>
          <a href="/" className="text-bgtextColor text-xl">Contact</a>
        </div>

        <div>
          <button className="btn1">Join Presale</button>
        </div>
      </div>

      

    </div>
  )
}

export default Navbar
