import React from 'react';

const WhyChoose = () => {
  const features = [
    {
      id: 1,
      emoji: '🏆',
      title: 'Quality Excellence',
      description: 'Premium materials and rigorous quality control ensure superior packaging solutions.',
      color: '#ffdb00'
    },
    {
      id: 2,
      emoji: '🚀',
      title: 'Innovation Focus',
      description: 'Cutting-edge technology and innovative designs for modern packaging needs.',
      color: '#2E4E52'
    },
    {
      id: 3,
      emoji: '🤝',
      title: 'Customer First',
      description: 'Dedicated support and personalized service to exceed customer expectations.',
      color: '#ffdb00'
    },
    {
      id: 4,
      emoji: '⚡',
      title: 'Fast Delivery',
      description: 'Efficient production processes ensuring timely delivery of your orders.',
      color: '#2E4E52'
    },
    {
      id: 5,
      emoji: '🌱',
      title: 'Eco-Friendly',
      description: 'Sustainable packaging solutions that are environmentally responsible.',
      color: '#ffdb00'
    },
    {
      id: 6,
      emoji: '🎯',
      title: 'Custom Solutions',
      description: 'Tailored packaging solutions designed specifically for your business needs.',
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
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        .feature-card {
          transition: all 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-8px) scale(1.02);
        }
        
        .feature-card:hover .emoji {
          animation: pulse 0.6s ease-in-out;
        }
      `}</style>
      
      <div className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 sm:w-40 sm:h-40 bg-[#ffdb00]/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 sm:w-32 sm:h-32 bg-[#2E4E52]/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 sm:w-24 sm:h-24 bg-[#ffdb00]/15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 sm:w-20 sm:h-20 bg-[#2E4E52]/15 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block mb-3 sm:mb-4 md:mb-6">
              <div className="bg-gradient-to-r from-[#ffdb00]/20 to-[#ffdb00]/30 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 py-1 sm:py-2 md:py-3 border-2 border-[#ffdb00]/30 shadow-lg">
                <span className="text-[#2E4E52] font-bold text-xs sm:text-sm uppercase tracking-wide">
                  ✨ Why Choose Us
                </span>
              </div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#2E4E52] mb-4 sm:mb-6" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Why Choose <span className="text-[#ffdb00] drop-shadow-lg">Chahat Packaging</span>?
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover what makes us the <span className="text-[#2E4E52] font-semibold">preferred choice</span> for businesses seeking premium packaging solutions
            </p>
            
            {/* Decorative line */}
            <div className="flex justify-center items-center gap-2 sm:gap-4 mt-4 sm:mt-6 md:mt-8">
              <div className="w-8 sm:w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent to-[#ffdb00]"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#ffdb00] rounded-full animate-pulse"></div>
              <div className="w-12 sm:w-16 md:w-24 h-0.5 bg-gradient-to-r from-[#ffdb00] to-[#ffd700]"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#2E4E52] rounded-full animate-pulse"></div>
              <div className="w-8 sm:w-12 md:w-16 h-0.5 bg-gradient-to-r from-[#2E4E52] to-transparent"></div>
            </div>
          </div>
          
          {/* Features Grid - Mobile: 2 per row, Tablet: 2 per row, Desktop: 3 per row */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="feature-card group relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-[#ffdb00]/50 overflow-hidden p-3 sm:p-4 md:p-6"
                style={{animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`}}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 w-full h-full animate-shimmer"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="emoji mb-2 sm:mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl text-center transform group-hover:scale-110 transition-transform duration-300">
                    {feature.emoji}
                  </div>
                  
                  <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#2E4E52] mb-2 sm:mb-3 text-center group-hover:text-[#1a3338] transition-colors duration-300">
                    {feature.title}
                  </h4>
                  
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Animated underline */}
                  <div className="mt-2 sm:mt-3 md:mt-4 h-0.5 sm:h-1 bg-gradient-to-r from-[#ffdb00] to-[#ffd700] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </div>
                
                {/* Side accent */}
                <div 
                  className="absolute left-0 top-0 w-0.5 sm:w-1 h-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top rounded-r-full"
                  style={{backgroundColor: feature.color}}
                ></div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-8 sm:mt-12 md:mt-16">
            <div className="bg-gradient-to-r from-[#2E4E52] to-[#3a5a5f] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 text-xl sm:text-2xl md:text-3xl">🏆</div>
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 text-xl sm:text-2xl md:text-3xl">🚀</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl">⭐</div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Ready to Experience Excellence?</h3>
                <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 max-w-2xl mx-auto">
                  Join thousands of satisfied customers who trust us for their packaging needs
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <a 
                    href="https://wa.me/918285333444" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 sm:gap-3 bg-[#ffdb00] hover:bg-[#ffd700] text-[#2E4E52] font-bold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base"
                  >
                    <span className="text-base sm:text-lg md:text-xl">💬</span>
                    Get Started Today
                  </a>
                  
                  <button className="inline-flex items-center gap-2 sm:gap-3 bg-transparent border-2 border-[#ffdb00] text-[#ffdb00] hover:bg-[#ffdb00] hover:text-[#2E4E52] font-bold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
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

export default WhyChoose;