import React, { useState, useEffect } from 'react'
import { banner1, banner2, banner3 } from '../assets'

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const banners = [
    { id: 1, src: banner3, alt: 'Chahat Packaging Banner 1' },
    { id: 2, src: banner2, alt: 'Chahat Packaging Banner 2' },
    { id: 3, src: banner1, alt: 'Chahat Packaging Banner 3' }
  ];

  // Auto slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(slideInterval);
  }, [banners.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <>
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideOut {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-100%);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        .slide-active {
          animation: fadeIn 0.8s ease-in-out;
        }
        
        .nav-dot {
          transition: all 0.3s ease;
        }
        
        .nav-dot:hover {
          animation: pulse 0.6s ease-in-out;
        }
        
        .nav-arrow {
          transition: all 0.3s ease;
        }
        
        .nav-arrow:hover {
          transform: scale(1.1);
          background-color: #ffd700;
        }
      `}</style>
      
      <div className="w-full pt-12 lg:pt-17 md:pt-16  relative flex justify-center">
        <div className="relative w-full  overflow-hidden shadow-lg">
          {/* Banner Images */}
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
                  index === currentSlide ? 'opacity-100 slide-active' : 'opacity-0'
                }`}
              >
                <img 
                  src={banner.src} 
                  alt={banner.alt} 
                  className="w-full h-full object-cover object-center"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="nav-arrow absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-[#ffdb00]/80 hover:bg-[#ffdb00] text-[#2E4E52] p-1 sm:p-2 rounded-full shadow-lg z-10"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="nav-arrow absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-[#ffdb00]/80 hover:bg-[#ffdb00] text-[#2E4E52] p-1 sm:p-2 rounded-full shadow-lg z-10"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots Navigation */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`nav-dot w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                  index === currentSlide 
                    ? 'bg-[#ffdb00] shadow-lg' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
          
          {/* Slide Counter */}
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-[#2E4E52]/80 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium z-10">
            {currentSlide + 1} / {banners.length}
          </div>
        </div>
        
        {/* Progress Bar - Matches banner width */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[350px] sm:max-w-none bg-gray-200 h-1 mt-2 rounded-full overflow-hidden">
          <div 
            className="bg-gradient-to-r from-[#ffdb00] to-[#ffd700] h-full transition-all duration-4000 ease-linear"
            style={{
              width: `${((currentSlide + 1) / banners.length) * 100}%`
            }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default HomeBanner