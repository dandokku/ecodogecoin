import React, { useEffect, useRef, useState } from "react";
import BackgroundImage from "../../assets/bg2.jpg";
import { ReactTyped } from "react-typed";

const impactAreas = [
  { 
    name: "Planting Trees", 
    href: "#reforestation", 
    icon: "🌳",
    description: "Every transaction plants a tree"
  },
  { 
    name: "Cleaning Oceans", 
    href: "#ocean-cleanup", 
    icon: "🌊",
    description: "Supporting marine conservation"
  },
  { 
    name: "Renewable Energy", 
    href: "#renewable-energy", 
    icon: "⚡",
    description: "Powering green initiatives"
  },
  { 
    name: "Carbon Offset", 
    href: "#carbon-offset", 
    icon: "🌍",
    description: "Reducing environmental impact"
  },
];

const initiatives = [
  {
    title: "Reforestation",
    description: "For every transaction, a tree gets planted through our verified reforestation partners worldwide",
    icon: "🌲",
    stats: "1M+ Trees Planted",
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Ocean Health",
    description: "A portion of transaction fees goes toward ocean cleanup efforts and marine ecosystem restoration",
    icon: "🌊",
    stats: "500+ Tons Removed",
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Community Building",
    description: "Growing our eco-conscious community through social media campaigns and educational initiatives",
    icon: "👥",
    stats: "50K+ Members",
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Eco Challenges",
    description: "#EcoDogeChallenge: Show off your best environmental actions! Making sustainability fun and viral",
    icon: "🎯",
    stats: "10K+ Challenges",
    color: "from-orange-500 to-red-600"
  },
];

export default function AboutSection() {
  const containerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const handleScroll = () => {
      const section = containerRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        setScrollProgress(progress);
      }
    };

    const elements = containerRef.current?.querySelectorAll(".animate-element");
    elements?.forEach((el, index) => {
      el.style.animationDelay = `${index * 150}ms`;
      observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="about"
      ref={containerRef}
      className="relative min-h-screen overflow-hidden py-20 lg:py-32"
    >
      {/* Enhanced Background with Parallax */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 scale-110 transition-transform duration-1000 ease-out"
          style={{ 
            transform: `translateY(${scrollProgress * 50}px) scale(${1.1 + scrollProgress * 0.1})` 
          }}
        >
          <img
            src={BackgroundImage}
            alt="Eco-friendly forest background"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Enhanced Overlay with Dynamic Opacity */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/85 to-emerald-900/90 transition-opacity duration-1000"
          style={{ opacity: 0.8 + scrollProgress * 0.2 }}
        />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-300/40 rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div className="animate-element opacity-0 mb-6">
            <span className="inline-block px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full text-green-300 font-semibold text-sm border border-green-400/30">
              🌱 About EcoDoge
            </span>
          </div>
          
          <h2 className="animate-element opacity-0 text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            <ReactTyped
              strings={[
                "Much Green, Very Efficient",
                "Eco-Friendly Cryptocurrency", 
                "Join the Green Revolution",
                "Planting Trees with Every Transaction",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
              className="bg-gradient-to-r from-green-300 via-emerald-200 to-green-400 bg-clip-text text-transparent"
            />
          </h2>
          
          <p className="animate-element opacity-0 max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed text-green-100 mb-12">
            EcoDoge aims to create a <span className="text-green-300 font-semibold">decentralized, eco-friendly cryptocurrency</span> that not only brings joy to its community but also contributes to reforestation efforts and ocean health. We believe that by harnessing the power of memes and blockchain, we can make a positive impact on the environment. 🌲
          </p>
        </div>

        {/* Impact Areas Grid */}
        <div className="animate-element opacity-0 mb-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Our Impact Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => (
              <a
                key={area.name}
                href={area.href}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:bg-white/15"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-200">
                  {area.name}
                </h4>
                <p className="text-green-200 text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="flex items-center text-green-400 font-medium text-sm group-hover:translate-x-2 transition-transform duration-200">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-green-400/20 rounded-2xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
              </a>
            ))}
          </div>
        </div>

        {/* Enhanced Initiatives Cards */}
        <div className="animate-element opacity-0">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Our Green Initiatives</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div
                key={initiative.title}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${initiative.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {initiative.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-300">
                        {initiative.stats}
                      </div>
                      <div className="text-sm text-green-200">and counting...</div>
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
                    {initiative.title}
                  </h4>
                  
                  <p className="text-green-100 leading-relaxed text-lg">
                    {initiative.description}
                  </p>
                  
                  {/* Progress bar */}
                  <div className="mt-6 bg-white/20 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${initiative.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`}
                    />
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-ping" />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="animate-element opacity-0 text-center mt-20">
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-3xl p-12 border border-green-400/30">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Make a Difference? 🌍
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of eco-warriors who are already making the world greener, one transaction at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
                🚀 Start Your Journey
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-green-400 text-green-300 font-bold py-4 px-8 rounded-2xl hover:bg-green-400/10 transition-all duration-300 hover:scale-105">
                📊 View Impact Data
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }

        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
        }

        .animate-float-particle {
          animation: float-particle ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}