import React, { useEffect, useRef, useState } from "react";

function RoadMap() {
  const sectionRef = useRef(null);
  const [activePhase, setActivePhase] = useState(0);
  const [completedPhases, setCompletedPhases] = useState([0]); // Phase 1 is completed

  const roadmapData = [
    {
      phase: "Phase 1",
      title: "Official Launch",
      period: "Q1 2024",
      status: "completed",
      icon: "🚀",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-300",
      items: [
        "Official launch of EcoDoge coin, including white paper, website, and social media channels",
        "Begin marketing efforts to create awareness about EcoDoge's eco-friendly mission",
        "Listing on major cryptocurrency exchanges to increase accessibility and liquidity",
        "Community building and initial token distribution"
      ]
    },
    {
      phase: "Phase 2",
      title: "Eco-Friendly Initiatives & Partnerships",
      period: "Q2-Q3 2024",
      status: "in-progress",
      icon: "🌱",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300",
      items: [
        "Collaborate with environmental organizations and charities for eco-friendly initiatives",
        "Implement carbon offset programs using transaction fees for conservation projects",
        "Forge partnerships with sustainable businesses to accept EcoDoge payments",
        "Launch tree-planting campaigns with community participation"
      ]
    },
    {
      phase: "Phase 3",
      title: "Technical Enhancements & Community Building",
      period: "Q4 2024",
      status: "upcoming",
      icon: "🔧",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-300",
      items: [
        "Roll out EcoDoge App for tracking ecological health impact",
        "Launch community-driven initiatives: hackathons, developer grants, bug bounty programs",
        "Expand community outreach through forums, meetups, and educational resources",
        "Introduce staking and governance mechanisms"
      ]
    },
    {
      phase: "Phase 4",
      title: "Continued Growth & Innovation",
      period: "Q1-Q2 2025",
      status: "upcoming",
      icon: "📈",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-300",
      items: [
        "Continuously optimize EcoDoge protocol through R&D",
        "Explore interoperability solutions with other blockchain networks",
        "Expand merchant adoption and payment integrations",
        "Foster community governance through voting systems and DAO implementation"
      ]
    },
    {
      phase: "Phase 5",
      title: "Global Impact & Sustainability",
      period: "2025 & Beyond",
      status: "upcoming",
      icon: "🌍",
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-300",
      items: [
        "Position EcoDoge as leading eco-friendly cryptocurrency globally",
        "Partner with governments and institutions for sustainability initiatives",
        "Drive mainstream adoption through corporate partnerships",
        "Continue innovation for long-term environmental and social impact"
      ]
    }
  ];

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

    const elements = sectionRef.current?.querySelectorAll(".animate-element");
    elements?.forEach((element, index) => {
      element.style.animationDelay = `${index * 200}ms`;
      observer.observe(element);
    });

    return () => {
      elements?.forEach((element) => observer.unobserve(element));
    };
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return '✅';
      case 'in-progress':
        return '🔄';
      default:
        return '⏳';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      default:
        return 'Upcoming';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section 
      id="roadmap"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-green-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-200/15 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-purple-200/25 rounded-full animate-float-slow"></div>
        
        {/* Timeline decoration */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-200 via-blue-200 to-purple-200 opacity-30 transform -translate-x-1/2 hidden lg:block"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="animate-element opacity-0 mb-6">
            <span className="inline-block px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full text-green-700 font-semibold text-sm border border-green-300">
              🗺️ Our Journey
            </span>
          </div>
          
          <h1 className="animate-element opacity-0 text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-green-600 via-blue-500 to-purple-600 bg-clip-text mb-8">
            ROADMAP
          </h1>
          
          <p className="animate-element opacity-0 max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            Follow our strategic journey as we build the world's most impactful eco-friendly cryptocurrency, creating lasting environmental change one transaction at a time.
          </p>
        </div>

        {/* Progress Overview */}
        <div className="animate-element opacity-0 mb-16">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Progress Overview</h3>
            
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-medium text-gray-600">Overall Progress</span>
              <span className="text-sm font-medium text-green-600">40% Complete</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3 mb-8 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transform transition-all duration-2000 ease-out" style={{ width: '40%' }}></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600">1</div>
                <div className="text-sm text-gray-600">Phases Completed</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">1</div>
                <div className="text-sm text-gray-600">In Progress</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-gray-600">3</div>
                <div className="text-sm text-gray-600">Upcoming</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Roadmap Timeline */}
        <div className="relative">
          {roadmapData.map((phase, index) => (
            <div
              key={index}
              className={`animate-element opacity-0 relative mb-12 ${
                index % 2 === 0 ? 'lg:ml-0 lg:mr-auto lg:text-left' : 'lg:ml-auto lg:mr-0 lg:text-right'
              } lg:w-1/2 w-full`}
            >
              {/* Timeline connector */}
              <div className="hidden lg:block absolute top-8 w-8 h-8 bg-white rounded-full border-4 border-green-500 shadow-lg"
                style={{
                  [index % 2 === 0 ? 'right' : 'left']: '-4rem',
                  transform: 'translateY(-50%)'
                }}>
                <div className="absolute inset-1 bg-green-500 rounded-full animate-pulse"></div>
              </div>

              <div 
                className={`group relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl border-2 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer ${phase.borderColor} ${phase.bgColor}`}
                onClick={() => setActivePhase(index)}
                onMouseEnter={() => setActivePhase(index)}
              >
                {/* Status Badge */}
                <div className="absolute -top-3 left-6">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(phase.status)}`}>
                    {getStatusIcon(phase.status)} {getStatusText(phase.status)}
                  </span>
                </div>

                {/* Card Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">{phase.phase}</div>
                    <h3 className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${phase.color} bg-clip-text text-transparent mb-2`}>
                      {phase.title}
                    </h3>
                    <div className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-block">
                      {phase.period}
                    </div>
                  </div>
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {phase.icon}
                  </div>
                </div>

                {/* Progress Bar for current phase */}
                {phase.status === 'in-progress' && (
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">Phase Progress</span>
                      <span className="text-sm font-medium text-blue-600">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                )}

                {/* Phase Items */}
                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="flex items-start gap-3 text-gray-700 leading-relaxed"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${phase.color} mt-2 flex-shrink-0`}></div>
                      <span className="text-sm lg:text-base">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${phase.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-ping"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="animate-element opacity-0 text-center mt-20">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-lg rounded-3xl p-12 border border-green-200">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">
              Be Part of Our Green Journey 🌱
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us as we revolutionize cryptocurrency with environmental consciousness. Together, we can create a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
                🚀 Join the Movement
              </button>
              <button className="bg-white/80 backdrop-blur-sm border-2 border-green-500 text-green-600 font-bold py-4 px-8 rounded-2xl hover:bg-green-50 transition-all duration-300 hover:scale-105">
                📋 Download Roadmap PDF
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

        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
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

export default RoadMap;