import React from 'react';
import { AboutImage } from '../assets';
import WhatWeDo from '../Components/WhatWeDo';
import WhyChoose from '../Components/WhyChoose';

const AboutPage = () => {
  const stats = [
    { number: '500+', label: 'Happy Clients', color: '#ffdb00' },
    { number: '10+', label: 'Years Experience', color: '#2E4E52' },
    { number: '1000+', label: 'Projects Completed', color: '#ffdb00' },
    { number: '99%', label: 'Client Satisfaction', color: '#2E4E52' }
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
        
        @keyframes rotateIn {
          from {
            transform: rotate(-180deg) scale(0);
            opacity: 0;
          }
          to {
            transform: rotate(0deg) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .stat-card {
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-5px) scale(1.05);
        }

        /* Mobile specific animations */
        @media (max-width: 768px) {
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
      
      <div className="pt-28 md:pt-32 pb-8 md:pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
        {/* Background Decorations - Hidden on mobile for better performance */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
          <div className="absolute top-20 left-10 w-40 h-40 bg-[#ffdb00]/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#2E4E52]/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#ffdb00]/15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-[#2E4E52]/15 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Hero Section */}
          <div className="text-center mb-12 mt-4 md:mb-16">
            <div className="inline-block mb-4 md:mb-6" style={{animation: 'rotateIn 0.8s ease-out'}}>
              <div className="bg-gradient-to-r from-[#ffdb00]/20 to-[#ffdb00]/30 backdrop-blur-sm rounded-full px-4 md:px-8 py-2 md:py-3 border-2 border-[#ffdb00]/30 shadow-lg">
                <span className="text-[#2E4E52] font-bold text-xs md:text-sm uppercase tracking-wide">
                  About Chahat Packaging
                </span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#2E4E52] mb-6 md:mb-8 px-2" style={{fontFamily: 'Montserrat, sans-serif', animation: 'fadeInUp 0.8s ease-out'}}>
              Your Trusted <span className="text-[#ffdb00] drop-shadow-lg">Packaging</span>
              <br />
              <span className="text-[#ffdb00]">Partner</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8 px-4" style={{animation: 'fadeInUp 0.8s ease-out 0.2s both'}}>
              Leading manufacturer of <span className="text-[#2E4E52] font-semibold">premium packaging solutions</span> with a commitment to quality, innovation, and customer satisfaction.
            </p>
            
            {/* Decorative line */}
            <div className="flex justify-center items-center gap-2 md:gap-4 mb-6 md:mb-8" style={{animation: 'fadeInUp 0.8s ease-out 0.4s both'}}>
              <div className="w-8 md:w-16 h-0.5 bg-gradient-to-r from-transparent to-[#ffdb00]"></div>
              <div className="w-2 md:w-3 h-2 md:h-3 bg-[#ffdb00] rounded-full animate-pulse"></div>
              <div className="w-12 md:w-24 h-0.5 bg-gradient-to-r from-[#ffdb00] to-[#ffd700]"></div>
              <div className="w-2 md:w-3 h-2 md:h-3 bg-[#2E4E52] rounded-full animate-pulse"></div>
              <div className="w-8 md:w-16 h-0.5 bg-gradient-to-r from-[#2E4E52] to-transparent"></div>
            </div>
          </div>
          
          {/* About Content Section */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-20">
            {/* Text Content */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1" style={{animation: 'slideInLeft 0.8s ease-out 0.6s both'}}>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2E4E52] mb-4 md:mb-6">
                  Excellence in <span className="text-[#ffdb00]">Packaging Solutions</span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
                  At Chahat Packaging, we specialize in manufacturing high-quality BOPP bags, poly bags, and custom packaging solutions. With years of experience in the industry, we have established ourselves as a trusted partner for businesses across various sectors.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
                  Our commitment to quality, innovation, and customer satisfaction has made us a preferred choice for companies looking for reliable packaging solutions. We use advanced technology and premium materials to ensure that every product meets the highest standards.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  From small startups to large corporations, we provide customized packaging solutions that help protect products, enhance brand visibility, and deliver exceptional value to our clients.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a 
                  href="https://wa.me/918285333444" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#ffdb00] hover:bg-[#ffd700] text-[#2E4E52] font-bold px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm md:text-base"
                >
                  <span className="text-lg md:text-xl">💬</span>
                  Get in Touch
                </a>
                
                <button className="inline-flex items-center justify-center gap-2 md:gap-3 bg-transparent border-2 border-[#2E4E52] text-[#2E4E52] hover:bg-[#2E4E52] hover:text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-sm md:text-base">
                  <span className="text-lg md:text-xl">📞</span>
                  Call Us Now
                </button>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative order-1 lg:order-2" style={{animation: 'slideInRight 0.8s ease-out 0.8s both'}}>
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl group">
                <img 
                  src={AboutImage} 
                  alt="About Chahat Packaging" 
                  className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E4E52]/20 to-transparent"></div>
                
                {/* Shimmer effect - Only on desktop */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 w-full h-full animate-shimmer"></div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute top-3 md:top-6 right-3 md:right-6 bg-[#ffdb00] text-[#2E4E52] px-3 md:px-4 py-1.5 md:py-2 rounded-full font-bold text-xs md:text-sm">
                  Premium Quality
                </div>
              </div>
              
              {/* Decorative elements - Hidden on mobile */}
              <div className="absolute -top-4 -left-4 w-16 md:w-24 h-16 md:h-24 bg-[#ffdb00]/20 rounded-full animate-float hidden md:block"></div>
              <div className="absolute -bottom-4 -right-4 w-20 md:w-32 h-20 md:h-32 bg-[#2E4E52]/20 rounded-full animate-float hidden md:block" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="mb-16 md:mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2E4E52] text-center mb-8 md:mb-12" style={{animation: 'fadeInUp 0.8s ease-out 1s both'}}>
              Our <span className="text-[#ffdb00]">Achievements</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="stat-card text-center p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg hover:shadow-xl border-2 border-gray-100 hover:border-[#ffdb00]/50 group"
                  style={{animation: `fadeInUp 0.8s ease-out ${1.2 + index * 0.1}s both`}}
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl font-black mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300" style={{color: stat.color}}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Why Choose Us Section - Imported Component */}
          <WhyChoose />
          
          {/* What We Do Section */}
          <WhatWeDo />
         
        </div>
      </div>
    </>
  );
};

export default AboutPage;