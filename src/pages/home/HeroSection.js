import React, { useEffect, useRef, useState } from "react";
import HeroImage from "../../assets/logo.png";
import WhitePaper from "../../assets/Ecodoge.pdf";
import { ReactTyped } from "react-typed";

function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = WhitePaper;
    link.setAttribute("download", "EcoDoge_WhitePaper.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    setIsLoaded(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll(".fade-element");
      elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 150}ms`;
        observer.observe(element);
      });
    }

    // Mouse tracking for parallax effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (section) {
        const elements = section.querySelectorAll(".fade-element");
        elements.forEach((element) => observer.unobserve(element));
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-300/15 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-green-100/25 rounded-full animate-float-slow"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/3 right-10 transform rotate-45">
          <div className="w-16 h-16 bg-gradient-to-br from-green-200/30 to-green-400/20 animate-spin-slow"></div>
        </div>
        
        {/* Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400/40 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Section */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Main Heading with Enhanced Typography */}
            {/* <div className="fade-element opacity-0">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
                <div className="relative inline-block">
                  <ReactTyped
                    strings={["ECODOGE"]}
                    typeSpeed={80}
                    backSpeed={50}
                    cursorChar=""
                    className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent"
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 opacity-20 blur-xl animate-pulse"></div>
                </div>
              </h1>
            </div> */}

            {/* Subtitle with Animation */}
            <div className="fade-element opacity-0">
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                Much Wow, Very{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent animate-pulse">
                    Green
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 animate-scale-x"></div>
                </span>
                {" "}Tail
              </p>
            </div>

            {/* Description */}
            <div className="fade-element opacity-0">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We combine the{" "}
                <span className="text-green-600 font-semibold">playful spirit</span>{" "}
                of Dogecoin with a{" "}
                <span className="text-green-600 font-semibold">commitment</span>{" "}
                to saving our planet 🌱
              </p>
            </div>

            {/* Stats Cards */}
            <div className="fade-element opacity-0">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                {[
                  { label: "Carbon Offset", value: "1M+ tons", icon: "🌍" },
                  { label: "Community", value: "50K+", icon: "👥" },
                  { label: "Trees Planted", value: "100K+", icon: "🌳" }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-green-100 hover:border-green-300 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-200">
                      {stat.icon}
                    </div>
                    <div className="text-lg font-bold text-green-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="fade-element opacity-0">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleDownload}
                  className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    📄 Download Whitepaper
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </button>
                
                <button className="group bg-white/80 backdrop-blur-sm border-2 border-green-500 text-green-600 font-bold py-4 px-8 rounded-2xl hover:bg-green-50 transition-all duration-300 text-lg hover:scale-105">
                  <span className="flex items-center justify-center gap-2">
                    🚀 Join Community
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="fade-element opacity-0">
              <div className="relative group">
                {/* Floating background effects */}
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400/30 to-green-600/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>
                
                {/* Main image container */}
                <div 
                  className="relative bg-white/20 backdrop-blur-sm rounded-full p-8 border border-white/30 shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                  style={{
                    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                  }}
                >
                  <img 
                    src={HeroImage} 
                    alt="EcoDoge - Sustainable Cryptocurrency" 
                    className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-contain animate-float group-hover:scale-110 transition-transform duration-700 filter drop-shadow-2xl" 
                  />
                  
                  {/* Orbiting elements */}
                  <div className="absolute top-1/4 -right-4 w-12 h-12 bg-green-400/80 rounded-full flex items-center justify-center animate-orbit shadow-lg">
                    🌱
                  </div>
                  <div className="absolute bottom-1/4 -left-4 w-10 h-10 bg-green-500/80 rounded-full flex items-center justify-center animate-orbit-reverse shadow-lg" style={{ animationDelay: '1s' }}>
                    ♻️
                  </div>
                  <div className="absolute top-1/2 -right-8 w-8 h-8 bg-green-600/80 rounded-full flex items-center justify-center animate-orbit shadow-lg" style={{ animationDelay: '2s' }}>
                    💚
                  </div>
                </div>

                {/* Floating text bubbles */}
                <div className="absolute -top-8 left-1/4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <span className="text-green-600 font-semibold text-sm">Much Green!</span>
                </div>
                <div className="absolute -bottom-4 right-1/4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg animate-bounce" style={{ animationDelay: '1.5s' }}>
                  <span className="text-green-600 font-semibold text-sm">Very Eco!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes scale-x {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes orbit {
          from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
        }

        @keyframes orbit-reverse {
          from { transform: rotate(0deg) translateX(-60px) rotate(0deg); }
          to { transform: rotate(-360deg) translateX(-60px) rotate(360deg); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .animate-scale-x {
          animation: scale-x 1s ease-out 0.5s forwards;
        }

        .animate-orbit {
          animation: orbit 15s linear infinite;
        }

        .animate-orbit-reverse {
          animation: orbit-reverse 12s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default HeroSection;