// import React, { useState } from 'react';
// import Logo from "../assets/logo.png";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="bg-transparentbackground flex flex-col lg:flex-row lg:justify-between items-center p-5 px-20">
//       <div className="flex items-center justify-between w-full lg:w-auto">
//         <img src={Logo} alt="logo" className="w-[70px]" />
//         <p className="text-3xl font-bold text-bgtextColor">EcoDoge</p>
//         <div className="lg:hidden">
//           <button onClick={handleMenuToggle} className="text-bgtextColor text-3xl">
//             {isMenuOpen ? '\u2716' : '\u2630'}
//           </button>
//         </div>
//       </div>

//       <div className={`lg:flex flex-col lg:flex-row items-center gap-6 w-full lg:w-auto transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen flex flex-col p-5' : 'max-h-0 lg:max-h-screen'} overflow-hidden lg:overflow-visible`}>
//         <a href="/" className="text-bgtextColor text-xl py-2 lg:py-0">Home</a>
//         <a href="/" className="text-bgtextColor text-xl py-2 lg:py-0">About</a>
//         <a href="/" className="text-bgtextColor text-xl py-2 lg:py-0">Tokenomics</a>
//         <a href="/" className="text-bgtextColor text-xl py-2 lg:py-0">Roadmap</a>
//         <a href="/" className="text-bgtextColor text-xl py-2 lg:py-0">Contact</a>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import Logo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent w-full p-4 md:px-14 md:p-7">
      <div className="flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <img src={Logo} alt="EcoDoge Logo" className="w-12 h-12 md:w-16 md:h-16" />
          <p className="text-2xl md:text-3xl font-bold text-bgtextColor ml-2">EcoDoge</p>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuToggle}
            aria-label="Toggle Menu"
            className="text-bgtextColor text-2xl md:hidden focus:outline-none ml-auto"
          >
            {isMenuOpen ? '\u2716' : '\u2630'}
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`flex-col md:flex-row flex md:items-center gap-6 absolute md:relative top-16 left-0 md:top-0 w-full md:w-auto bg-transparentbackground md:bg-transparentbackground z-20 md:z-auto transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'flex p-5 bg-opacity-90' : 'hidden md:flex'
          }`}
        >
          <a href="/" className="text-bgtextColor text-lg md:text-xl py-2 md:py-0 hover:text-highlight transition-colors">
            Home
          </a>
          <a href="#about" className="text-bgtextColor text-lg md:text-xl py-2 md:py-0 hover:text-highlight transition-colors">
            About
          </a>
          <a href="#tokenomics" className="text-bgtextColor text-lg md:text-xl py-2 md:py-0 hover:text-highlight transition-colors">
            Tokenomics
          </a>
          <a href="#roadmap" className="text-bgtextColor text-lg md:text-xl py-2 md:py-0 hover:text-highlight transition-colors">
            Roadmap
          </a>
          <a href="#contact" className="text-bgtextColor text-lg md:text-xl py-2 md:py-0 hover:text-highlight transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
