import React, { useState } from 'react';
import Logo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-transparentbackground flex flex-col lg:flex-row lg:justify-between items-center p-5 px-20">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <img src={Logo} alt="logo" className="w-[70px]" />
        <p className="text-3xl font-bold text-bgtextColor">EcoDoge</p>
        <div className="lg:hidden">
          <button onClick={handleMenuToggle} className="text-bgtextColor text-3xl">
            {isMenuOpen ? '\u2716' : '\u2630'}
          </button>
        </div>
      </div>

      <div className={`lg:flex flex-col lg:flex-row items-center gap-6 w-full lg:w-auto transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen flex flex-col p-5' : 'max-h-0 lg:max-h-screen'} overflow-hidden lg:overflow-visible`}>
        <a href="/" className="text-bgtextColor text-xl py-2 lg:py-0">Home</a>
        <a href="/" className="text-bgtextColor text-xl py-2 lg:py-0">About</a>
        <a href="/" className="text-bgtextColor text-xl py-2 lg:py-0">Tokenomics</a>
        <a href="/" className="text-bgtextColor text-xl py-2 lg:py-0">Roadmap</a>
        <a href="/" className="text-bgtextColor text-xl py-2 lg:py-0">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
