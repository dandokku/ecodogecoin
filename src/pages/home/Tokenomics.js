import React, { useEffect, useRef, useState } from "react";

function Tokenomics() {
  const sectionRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animationProgress, setAnimationProgress] = useState(0);

  const tokenomicsData = [
    {
      title: "Max Supply",
      value: "379,000,000,000",
      unit: "EcoDoge Coins",
      percentage: "100%",
      description: "EcoDoge Coin boasts a maximum supply of 379 billion tokens, ensuring widespread availability and accessibility for investors and users alike. This ample supply is designed to facilitate seamless transactions and foster widespread adoption of the EcoDoge ecosystem.",
      icon: "🪙",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Public Sale",
      value: "189,500,000,000",
      unit: "Tokens",
      percentage: "50%",
      description: "In a commitment to transparency and inclusivity, we have allocated 50% of our token supply for public sale. This significant portion ensures equal opportunities for all individuals to participate in the EcoDoge revolution.",
      icon: "🌍",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Seed Investors",
      value: "75,800,000,000",
      unit: "Tokens",
      percentage: "20%",
      description: "As part of our commitment to fostering growth and innovation within our ecosystem, 20% of the tokens from the public sale have been specifically earmarked for seed investors who believe in our green mission.",
      icon: "🌱",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Ecosystem Development",
      value: "75,800,000,000",
      unit: "Tokens",
      percentage: "20%",
      description: "A crucial aspect of our mission is nurturing a vibrant and sustainable ecosystem. This allocation funds projects, initiatives, and partnerships that enhance functionality, utility, and adoption of our token.",
      icon: "🔧",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50"
    },
    {
      title: "Liquidity Provision",
      value: "56,850,000,000",
      unit: "Tokens",
      percentage: "15%",
      description: "Ensuring liquidity is essential for a healthy marketplace. This allocation establishes liquidity pools on decentralized exchanges, facilitating seamless trading and price stability.",
      icon: "💧",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50"
    },
    {
      title: "Team & Advisors",
      value: "37,900,000,000",
      unit: "Tokens",
      percentage: "10%",
      description: "Recognizing the importance of talent and expertise, this allocation attracts top talent and aligns team interests with the long-term success of our green revolution project.",
      icon: "👥",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            // Trigger pie chart animation
            setTimeout(() => setAnimationProgress(1), 500);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-element");
    elements?.forEach((element, index) => {
      element.style.animationDelay = `${index * 150}ms`;
      observer.observe(element);
    });

    return () => {
      elements?.forEach((element) => observer.unobserve(element));
    };
  }, []);

  // Calculate cumulative percentages for pie chart
  const cumulativePercentages = tokenomicsData.reduce((acc, item, index) => {
    const percentage = parseFloat(item.percentage);
    const prevSum = index > 0 ? acc[index - 1] : 0;
    acc.push(prevSum + percentage);
    return acc;
  }, []);

  const PieChart = () => {
    const radius = 120;
    const strokeWidth = 40;
    const normalizedRadius = radius - strokeWidth * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;

    return (
      <div className="relative w-80 h-80 mx-auto">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90"
        >
          {tokenomicsData.map((item, index) => {
            const percentage = parseFloat(item.percentage);
            const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
            const strokeDashoffset = circumference - (cumulativePercentages[index] / 100) * circumference * animationProgress;
            
            return (
              <circle
                key={index}
                stroke={`url(#gradient-${index})`}
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                className="transition-all duration-1000 ease-out hover:stroke-width-[45] cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  filter: hoveredCard === index ? 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.5))' : 'none'
                }}
              />
            );
          })}
          
          {/* Gradients */}
          <defs>
            {tokenomicsData.map((item, index) => (
              <linearGradient key={index} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={item.color.split(' ')[1]} />
                <stop offset="100%" stopColor={item.color.split(' ')[3]} />
              </linearGradient>
            ))}
          </defs>
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center bg-white/90 backdrop-blur-sm rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-lg border border-green-200">
            <div className="text-2xl font-bold text-green-600">379B</div>
            <div className="text-sm text-gray-600">Total Supply</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="tokenomics"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-green-200/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-emerald-200/15 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-green-300/25 rounded-full animate-float-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="animate-element opacity-0 mb-6">
            <span className="inline-block px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full text-green-700 font-semibold text-sm border border-green-300">
              💰 Token Distribution
            </span>
          </div>
          
          <h1 className="animate-element opacity-0 text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-clip-text mb-8">
            Tokenomics
          </h1>
          
          <p className="animate-element opacity-0 max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            Discover how EcoDoge tokens are distributed to create a sustainable, fair, and thriving ecosystem for our green revolution.
          </p>
        </div>

        {/* Pie Chart Section */}
        <div className="animate-element opacity-0 mb-20">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-green-100">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Token Distribution Overview</h3>
            <PieChart />
            
            {/* Legend */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
              {tokenomicsData.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 cursor-pointer ${
                    hoveredCard === index ? 'bg-gray-100 scale-105' : 'hover:bg-gray-50'
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div 
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`}
                  />
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">{item.title}</div>
                    <div className="text-gray-600 text-xs">{item.percentage}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tokenomicsData.map((item, index) => (
            <div
              key={index}
              className={`animate-element opacity-0 group relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-green-300 transition-all duration-500 hover:scale-105 overflow-hidden ${item.bgColor}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Card Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.percentage}
                    </div>
                    <div className="text-sm text-gray-500">of total supply</div>
                  </div>
                </div>
                
                {/* Title & Amount */}
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-green-700 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <div className="mb-6">
                  <div className="text-lg font-bold text-gray-700">
                    {item.value.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">{item.unit}</div>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
                
                {/* Progress Bar */}
                <div className="mt-6 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`}
                    style={{ width: item.percentage }}
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-ping" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="animate-element opacity-0 text-center mt-20">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-lg rounded-3xl p-12 border border-green-200">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">
              Ready to Be Part of the Green Revolution? 🌱
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our sustainable cryptocurrency ecosystem and help us create a greener future for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
                🚀 Get EcoDoge Now
              </button>
              <button className="bg-white/80 backdrop-blur-sm border-2 border-green-500 text-green-600 font-bold py-4 px-8 rounded-2xl hover:bg-green-50 transition-all duration-300 hover:scale-105">
                📊 View Detailed Breakdown
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(360deg); }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default Tokenomics;