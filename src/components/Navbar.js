import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionChange = () => {
      const sections = ["home", "about", "tokenomics", "roadmap", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleSectionChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSectionChange);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#tokenomics", label: "Tokenomics", id: "tokenomics" },
    { href: "#roadmap", label: "Roadmap", id: "roadmap" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  const handleLinkClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-green-400/20 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>
                <img
                  src={Logo}
                  alt="EcoDoge Logo"
                  className="w-10 h-10 md:w-12 md:h-12 relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="ml-3">
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                  EcoDoge
                </h1>
                <div className="h-0.5 bg-gradient-to-r from-green-600 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                    activeSection === link.id
                      ? "text-green-600"
                      : isScrolled
                      ? "text-gray-700 hover:text-green-600"
                      : "text-white hover:text-green-600"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>

                  {/* Active indicator */}
                  <div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-green-500 transition-all duration-300 ${
                      activeSection === link.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></div>

                  <div className="absolute inset-0 bg-green-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 origin-center"></div>
                </a>
              ))}
            </div>

            <button
              onClick={handleMenuToggle}
              aria-label="Toggle Menu"
              className={`
    md:hidden relative z-50 w-10 h-10 rounded-lg transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
    ${isScrolled ? "text-green-600" : "text-green-600"}
  `}
            >
              {/* optional subtle background for hit area */}
              <div className="absolute inset-0 bg-green-100/20 rounded-lg pointer-events-none"></div>
              <div className="relative flex flex-col justify-center items-center h-full">
                <span
                  className={`
      block w-5 h-0.5 bg-current transform transition-all duration-300
      ${isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"}
    `}
                />
                <span
                  className={`
      block w-5 h-0.5 bg-current transition-all duration-300
      ${isMenuOpen ? "opacity-0" : "opacity-100"}
    `}
                />
                <span
                  className={`
      block w-5 h-0.5 bg-current transform transition-all duration-300
      ${isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"}
    `}
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="backdrop-blur-md border-t border-green-100 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 transform ${
                    activeSection === link.id
                      ? "text-gray-600 bg-green-300 scale-105"
                      : "text-gray-700 hover:text-gray-600 hover:bg-green-400 hover:scale-105"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen
                      ? "slideInFromRight 0.3s ease-out forwards"
                      : "none",
                  }}
                >
                  <div className="flex items-center">
                    <span>{link.label}</span>
                    {activeSection === link.id && (
                      <div className="ml-auto w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 md:h-20"></div>

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
