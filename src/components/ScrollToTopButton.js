import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-[1000]"> {/* Increased z-index */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          className="p-3 md:p-4 bg-primaryColor text-white rounded-full shadow-lg hover:bg-transparentbackground2 transition-colors duration-300 focus:outline-none animate-fade-in"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
