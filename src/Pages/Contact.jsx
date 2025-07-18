import React from 'react'
import GetInTouch from '../Components/GetInTouch'
import Map from '../Components/Map'

const Contact = () => {
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 219, 0, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 219, 0, 0.6);
          }
        }
        
        /* Mobile optimized animations */
        @media (max-width: 768px) {
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          @keyframes float-delayed {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }
          
          @keyframes float-slow {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-6px);
            }
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite 1s;
        }
        
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite 2s;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .group-hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
      
    <div id="contact" className="pt-12 md:pt-24 lg:pt-[68px] relative">
      <div className="relative bg-gradient-to-r from-[#2E4E52] via-[#3a5a5f] to-[#2E4E52] text-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden group cursor-pointer transition-all duration-500 hover:from-[#1a3338] hover:via-[#2a4549] hover:to-[#1a3338]">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-500"></div>
        
        {/* Animated background elements - Hidden on mobile for better performance */}
        <div className="absolute inset-0 opacity-20 hidden md:block">
          <div className="absolute top-8 md:top-16 left-8 md:left-16 w-16 md:w-24 h-16 md:h-24 bg-[#ffdb00]/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-10 md:right-20 w-20 md:w-32 h-20 md:h-32 bg-[#ffdb00]/10 rounded-full animate-ping slow"></div>
          <div className="absolute bottom-8 md:bottom-16 left-1/3 w-16 md:w-20 h-16 md:h-20 bg-[#ffdb00]/15 rounded-full animate-bounce"></div>
          <div className="absolute top-1/4 right-1/4 w-12 md:w-16 h-12 md:h-16 bg-white/10 rounded-full animate-pulse"></div>
        </div>
        
        {/* Decorative packaging icons - Hidden on mobile */}
        <div className="absolute inset-0 pointer-events-none opacity-5 hidden lg:block">
          <div className="absolute top-20 left-20 text-4xl md:text-6xl">📦</div>
          <div className="absolute bottom-20 right-20 text-4xl md:text-6xl">🏷️</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl md:text-8xl">📋</div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-4 md:mb-6">
              <div className="bg-[#ffdb00]/20 backdrop-blur-sm rounded-full px-4 md:px-6 py-1.5 md:py-2 border border-[#ffdb00]/30">
                <span className="text-[#ffdb00] font-semibold text-xs md:text-sm uppercase tracking-wide">
                  Premium Packaging Solutions
                </span>
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 transform transition-all duration-700 group-hover:scale-105 animate-fadeInUp px-2" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Contact <span className="text-[#ffdb00]">Chahat Packaging</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed transform transition-all duration-700 delay-200 group-hover:scale-102 group-hover:text-white animate-fadeInUp mb-6 md:mb-8 px-4">
              Your trusted partner for premium BOPP bags, poly bags, and custom packaging solutions. Quality that speaks for itself.
            </p>
            
            {/* Key services highlight - Responsive grid */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8 px-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border border-white/20">
                <span className="text-white/90 text-xs md:text-sm font-medium">BOPP Bags</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border border-white/20">
                <span className="text-white/90 text-xs md:text-sm font-medium">Poly Bags</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border border-white/20">
                <span className="text-white/90 text-xs md:text-sm font-medium">Custom Packaging</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border border-white/20">
                <span className="text-white/90 text-xs md:text-sm font-medium">Bulk Orders</span>
              </div>
            </div>
            
            {/* Animated underline with glow effect - Responsive sizing */}
            <div className="mt-6 md:mt-8 mx-auto w-24 md:w-32 h-0.5 md:h-1 bg-gradient-to-r from-[#ffdb00]/50 via-[#ffdb00] to-[#ffdb00]/50 rounded-full transform transition-all duration-500 group-hover:w-32 md:group-hover:w-40 group-hover:bg-gradient-to-r group-hover:from-[#ffdb00] group-hover:via-[#ffd700] group-hover:to-[#ffdb00] animate-fadeInUp delay-300 animate-pulse-glow"></div>
          </div>
        </div>
        
        {/* Enhanced floating particles effect - Responsive positioning */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 md:w-3 h-2 md:h-3 bg-[#ffdb00]/30 rounded-full animate-float"></div>
          <div className="absolute top-3/4 right-1/3 w-1.5 md:w-2 h-1.5 md:h-2 bg-[#ffdb00]/40 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-1/4 left-3/4 w-3 md:w-4 h-3 md:h-4 bg-[#ffdb00]/20 rounded-full animate-float-slow"></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 md:w-2 h-1.5 md:h-2 bg-white/40 rounded-full animate-float"></div>
          <div className="absolute bottom-1/3 left-1/5 w-2 md:w-3 h-2 md:h-3 bg-white/30 rounded-full animate-float-delayed"></div>
        </div>
        
        {/* Bottom decorative wave - Responsive height */}
        <div className="absolute bottom-0 left-0 right-0 h-1 md:h-2 bg-gradient-to-r from-[#ffdb00] via-[#ffd700] to-[#ffdb00] opacity-60"></div>
      </div>
      
      <GetInTouch />
      <Map />
    </div>
    </>
  )
}

export default Contact