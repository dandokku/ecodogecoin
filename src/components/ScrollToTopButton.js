import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate scroll progress and button visibility
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    setScrollProgress(scrollPercent);
    setIsVisible(scrollTop > 300);
  };

  // Smooth scroll to top with easing
  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`relative transform transition-all duration-500 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
      }`}>
        
        {/* Progress Ring */}
        <div className="absolute inset-0 -m-1">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 60 60">
            {/* Background circle */}
            <circle
              cx="30"
              cy="30"
              r="28"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-green-200/30"
            />
            {/* Progress circle */}
            <circle
              cx="30"
              cy="30"
              r="28"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              className="text-green-400 transition-all duration-300 ease-out"
              style={{
                strokeDasharray: `${2 * Math.PI * 28}`,
                strokeDashoffset: `${2 * Math.PI * 28 - (scrollProgress / 100) * 2 * Math.PI * 28}`
              }}
            />
          </svg>
        </div>

        {/* Main Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-green-300/50 active:scale-95"
        >
          {/* Ripple effect background */}
          <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
          
          {/* Arrow Icon */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <svg 
              className="w-6 h-6 transform group-hover:-translate-y-0.5 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-green-400/50 rounded-full blur-md scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </button>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-300 rounded-full animate-ping opacity-75"></div>
          <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-gray-900 text-white text-xs py-2 px-3 rounded-lg whitespace-nowrap shadow-lg">
            Back to top
            <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>

        {/* Progress percentage */}
        {scrollProgress > 10 && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {Math.round(scrollProgress)}%
          </div>
        )}
      </div>

      {/* Quick navigation shortcuts */}
      <div className={`absolute bottom-20 right-0 space-y-2 transform transition-all duration-300 ${
        isVisible && scrollProgress > 20 
          ? 'translate-x-0 opacity-100' 
          : 'translate-x-4 opacity-0 pointer-events-none'
      }`}>
        {[
          { section: 'about', icon: '📖', label: 'About' },
          { section: 'tokenomics', icon: '💰', label: 'Tokenomics' },
          { section: 'roadmap', icon: '🗺️', label: 'Roadmap' }
        ].map((item, index) => (
          <button
            key={item.section}
            onClick={() => {
              const element = document.getElementById(item.section);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white text-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-sm hover:scale-110 group"
            style={{ animationDelay: `${index * 100}ms` }}
            title={item.label}
          >
            <span className="group-hover:scale-110 transition-transform duration-200">
              {item.icon}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ScrollToTopButton;