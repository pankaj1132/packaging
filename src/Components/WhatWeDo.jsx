import React from 'react';

const WhatWeDo = () => {
  const services = [
    {
      id: 1,
      emoji: '🛍️',
      title: 'Printed Plastic Bags',
      description: 'Custom design & branding on durable plastic bags for retail & packaging.',
      color: '#ffdb00'
    },
    {
      id: 2,
      emoji: '🔒',
      title: 'Printed Zipper Lock Bags',
      description: 'Sealable printed bags for secure, reusable storage.',
      color: '#2E4E52'
    },
    {
      id: 3,
      emoji: '📦',
      title: 'Printed LD Bags',
      description: 'Flexible, lightweight printed LDPE bags for everyday packaging.',
      color: '#ffdb00'
    },
    {
      id: 4,
      emoji: '🧃',
      title: 'Printed PP Bags',
      description: 'High-clarity polypropylene bags with custom prints for food & retail.',
      color: '#2E4E52'
    },
    {
      id: 5,
      emoji: '🚪',
      title: 'Printed Slider Zip Bags',
      description: 'Smooth slider-zip printed bags for easy open-close access.',
      color: '#ffdb00'
    },
    {
      id: 6,
      emoji: '🌫️',
      title: 'Printed Frosted Zip Lock Bags',
      description: 'Stylish frosted finish with zip lock and branding options.',
      color: '#2E4E52'
    },
    {
      id: 7,
      emoji: '🔍',
      title: 'Printed Transparent Bags',
      description: 'Fully see-through printed bags for clear product visibility.',
      color: '#ffdb00'
    },
    {
      id: 8,
      emoji: '🧊',
      title: 'BOPP Zip Lock Bags',
      description: 'Glossy, durable printed BOPP bags with resealable zip locks.',
      color: '#2E4E52'
    },
    {
      id: 9,
      emoji: '🎚️',
      title: 'Zip Lock Slider Polybags',
      description: 'Custom-printed slider polybags for premium packaging.',
      color: '#ffdb00'
    },
    {
      id: 10,
      emoji: '💎',
      title: 'Transparent Zip Lock Slider Bags',
      description: 'Sleek transparent bags with slider zip & branding.',
      color: '#2E4E52'
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(255, 219, 0, 0.3);
          }
          50% {
            box-shadow: 0 6px 30px rgba(255, 219, 0, 0.5);
          }
        }
        
        .service-point {
          transition: all 0.3s ease;
        }
        
        .service-point:hover {
          transform: translateX(10px);
        }
        
        .service-point:hover .emoji {
          animation: pulse 0.6s ease-in-out;
        }
        
        .service-point:hover .title {
          color: #1a3338;
        }
        
        .service-point:hover .description {
          color: #4a5568;
        }
      `}</style>
      
      <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#ffdb00]/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#2E4E52]/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#ffdb00]/15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-[#2E4E52]/15 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header Section */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-block mb-3 sm:mb-4 md:mb-6" style={{animation: 'fadeInUp 0.8s ease-out'}}>
              <div className="bg-gradient-to-r from-[#ffdb00]/20 to-[#ffdb00]/30 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 py-1 sm:py-2 md:py-3 border-2 border-[#ffdb00]/30 shadow-lg">
                <span className="text-[#2E4E52] font-bold text-xs sm:text-sm uppercase tracking-wide">
                  ✅ What We Do
                </span>
              </div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-[#2E4E52] mb-3 sm:mb-4 md:mb-6" style={{fontFamily: 'Montserrat, sans-serif', animation: 'fadeInUp 0.8s ease-out 0.2s both'}}>
              Our <span className="text-[#ffdb00] drop-shadow-lg">Premium</span>
              <br />
              <span className="text-[#ffdb00]">Packaging Solutions</span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6 md:mb-8" style={{animation: 'fadeInUp 0.8s ease-out 0.4s both'}}>
              Discover our comprehensive range of <span className="text-[#2E4E52] font-semibold">custom printed packaging solutions</span> designed for modern businesses
            </p>
            
            {/* Decorative line */}
            <div className="flex justify-center items-center gap-4 mb-4 sm:mb-6 md:mb-8" style={{animation: 'fadeInUp 0.8s ease-out 0.6s both'}}>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#ffdb00]"></div>
              <div className="w-3 h-3 bg-[#ffdb00] rounded-full animate-pulse"></div>
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#ffdb00] to-[#ffd700]"></div>
              <div className="w-3 h-3 bg-[#2E4E52] rounded-full animate-pulse"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#2E4E52] to-transparent"></div>
            </div>
          </div>
          
          {/* Services Points - 2 Columns on All Screens */}
          <div className="max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-16">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="service-point group flex items-start gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-lg"
                  style={{
                    animation: `${index % 2 === 0 ? 'slideInLeft' : 'slideInRight'} 0.8s ease-out ${index * 0.1}s both`
                  }}
                >
                  {/* Bullet Point with Emoji */}
                  <div className="flex-shrink-0 flex items-center gap-1 sm:gap-2 md:gap-3">
                    <div 
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transform group-hover:scale-125 transition-transform duration-300"
                      style={{backgroundColor: service.color}}
                    ></div>
                    <div className="emoji text-lg sm:text-xl md:text-2xl transform group-hover:scale-110 transition-transform duration-300">
                      {service.emoji}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="title text-xs sm:text-sm md:text-lg font-bold text-[#2E4E52] mb-1 sm:mb-2 transition-colors duration-300 line-clamp-2">
                      {service.title}
                    </h3>
                    <p className="description text-xs sm:text-xs md:text-sm text-gray-600 leading-relaxed transition-colors duration-300 line-clamp-2">
                      {service.description}
                    </p>
                    
                    {/* Animated underline */}
                    <div 
                      className="mt-1 sm:mt-2 h-0.5 bg-gradient-to-r from-[#ffdb00] to-[#ffd700] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                      style={{maxWidth: '150px'}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center" style={{animation: 'fadeInUp 0.8s ease-out 0.8s both'}}>
            <div className="bg-gradient-to-r from-[#2E4E52] to-[#3a5a5f] rounded-2xl p-4 sm:p-6 md:p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 text-2xl sm:text-3xl md:text-4xl">📦</div>
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 text-2xl sm:text-3xl md:text-4xl">🏷️</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-5xl md:text-6xl">🛍️</div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">Ready to Get Started?</h3>
                <p className="text-sm sm:text-base text-white/90 mb-4 sm:mb-5 md:mb-6 max-w-2xl mx-auto">
                  Transform your packaging with our premium printed solutions. Contact us today for custom quotes and samples.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <a 
                    href="https://wa.me/918285333444" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 sm:gap-3 bg-[#ffdb00] hover:bg-[#ffd700] text-[#2E4E52] font-bold px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base"
                  >
                    <span className="text-base sm:text-lg md:text-xl">💬</span>
                    WhatsApp Us
                  </a>
                  
                  <button className="inline-flex items-center gap-2 sm:gap-3 bg-transparent border-2 border-[#ffdb00] text-[#ffdb00] hover:bg-[#ffdb00] hover:text-[#2E4E52] font-bold px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                    <span className="text-base sm:text-lg md:text-xl">📞</span>
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;