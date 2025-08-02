import React from 'react'
import Logo from "../assets/logo.png"
import { RiInstagramFill, RiYoutubeFill, RiDiscordFill, RiTiktokFill, RiTelegramFill } from 'react-icons/ri'

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      href: "#", 
      icon: RiInstagramFill, 
      label: "Instagram",
      color: "hover:text-pink-500 hover:bg-pink-50"
    },
    { 
      href: "#", 
      icon: RiTelegramFill, 
      label: "Telegram",
      color: "hover:text-blue-500 hover:bg-blue-50"
    },
    { 
      href: "#", 
      icon: RiTiktokFill, 
      label: "TikTok",
      color: "hover:text-black hover:bg-gray-50"
    },
    { 
      href: "#", 
      icon: RiYoutubeFill, 
      label: "YouTube",
      color: "hover:text-red-500 hover:bg-red-50"
    },
    { 
      href: "#", 
      icon: RiDiscordFill, 
      label: "Discord",
      color: "hover:text-indigo-500 hover:bg-indigo-50"
    }
  ];

  const footerSections = [
    {
      title: "Contact Us",
      links: [
        { text: "jesulobadaniel1@gmail.com", href: "mailto:jesulobadaniel1@gmail.com", type: "email" },
        { text: "+234 810 461 8586", href: "tel:+2348104618586", type: "phone" }
      ]
    },
    {
      title: "Support",
      links: [
        { text: "Help Center", href: "#help" },
        { text: "Knowledge Base", href: "#knowledge" },
        { text: "FAQs", href: "#faqs" },
        { text: "Contact Support", href: "#contact" }
      ]
    },
    {
      title: "Quick Links",
      links: [
        { text: "Home", href: "/" },
        { text: "White Paper", href: "#whitepaper" },
        { text: "Blog", href: "#blog" },
        { text: "KYC Verification", href: "#kyc" }
      ]
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Enhanced Logo Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <img 
                  src={Logo} 
                  alt="EcoDoge Logo" 
                  className="w-16 h-16 md:w-20 md:h-20 relative z-10 transition-transform duration-300 group-hover:scale-110 filter drop-shadow-lg" 
                />
              </div>
              <div className="ml-4">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                  EcoDoge
                </h2>
                <div className="h-1 bg-gradient-to-r from-green-400 to-green-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1"></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <p className="text-green-100 text-lg font-medium">
                A Fun-Loving Journey to a Greener Future
              </p>
              <p className="text-green-200/80 text-sm leading-relaxed">
                Join our mission to make the world more sustainable through innovative blockchain technology and community-driven initiatives.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-green-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-green-500 hover:bg-green-400 rounded-lg text-white font-medium transition-colors duration-200 text-sm">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {footerSections.map((section, index) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-xl font-bold text-white relative">
                  {section.title}
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-green-400"></div>
                </h3>
                
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="group flex items-center text-green-100 hover:text-white transition-all duration-200 text-sm"
                      >
                        <span className="relative">
                          {link.text}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                        </span>
                        {link.type === 'email' && (
                          <svg className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                          </svg>
                        )}
                        {link.type === 'phone' && (
                          <svg className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                          </svg>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-green-200 text-sm">
                © {currentYear} EcoDoge. All rights reserved.
              </p>
              <p className="text-green-300/80 text-xs mt-1">
                Built with 💚 for a sustainable future
              </p>
            </div>

            {/* Enhanced Social Media Icons */}
            <div className="flex items-center gap-3">
              <span className="text-green-200 text-sm font-medium mr-2">Follow us:</span>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="group relative w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      <IconComponent className="text-lg text-green-200 group-hover:text-white transition-colors duration-200" />
                      
                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                        {social.label}
                      </div>
                      
                      {/* Ripple effect */}
                      <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-110 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="flex flex-wrap justify-center gap-6 text-xs text-green-300">
              <a href="#privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#cookies" className="hover:text-white transition-colors duration-200">Cookie Policy</a>
              <a href="#disclaimer" className="hover:text-white transition-colors duration-200">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-4 h-4 bg-green-400/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 left-10 w-2 h-2 bg-green-300/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
    </footer>
  );
}

export default Footer;