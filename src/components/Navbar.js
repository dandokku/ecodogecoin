import React, { useState, useEffect } from 'react';
import Logo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle section highlighting
  useEffect(() => {
    const handleSectionHighlight = () => {
      const sections = ['home', 'about', 'tokenomics', 'roadmap', 'contact'];
      // const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section === 'home' ? '' : section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleSectionHighlight);
    return () => window.removeEventListener('scroll', handleSectionHighlight);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (section) => {
    setIsMenuOpen(false);
    setActiveSection(section);
  };

  const navLinks = [
    { href: "/", label: "Home", section: "home" },
    { href: "#about", label: "About", section: "about" },
    { href: "#tokenomics", label: "Tokenomics", section: "tokenomics" },
    { href: "#roadmap", label: "Roadmap", section: "roadmap" },
    { href: "#contact", label: "Contact", section: "contact" }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Section */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <img 
                src={Logo} 
                alt="EcoDoge Logo" 
                className="w-10 h-10 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>
            </div>
            <div className="ml-3">
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                EcoDoge
              </h1>
              <p className="text-xs text-gray-400 hidden sm:block">Sustainable Future</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <a
                key={link.section}
                href={link.href}
                onClick={() => handleLinkClick(link.section)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  activeSection === link.section
                    ? 'text-white bg-gradient-to-r from-green-400 to-blue-500 shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transform origin-left transition-transform duration-300 ${
                  activeSection === link.section ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuToggle}
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle Menu"
          >
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 my-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-black/20 backdrop-blur-lg rounded-2xl mt-2 border border-white/10">
            {navLinks.map((link, index) => (
              <a
                key={link.section}
                href={link.href}
                onClick={() => handleLinkClick(link.section)}
                className={`block px-6 py-3 text-base font-medium transition-all duration-300 ${
                  activeSection === link.section
                    ? 'text-white bg-gradient-to-r from-green-400 to-blue-500 mx-2 rounded-xl shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10 hover:translate-x-2'
                }`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)'
                }}
              >
                <span className="flex items-center">
                  <span className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                    activeSection === link.section ? 'bg-white' : 'bg-gray-600'
                  }`}></span>
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-400/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"></div>
      </div>
    </nav>
  );
}

export default Navbar;