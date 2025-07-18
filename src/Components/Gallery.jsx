import React from 'react';
import { Link } from 'react-router-dom';
import { 
  img1, 
  img2, 
  img3, 
  img4, 
  img5, 
  img6, 
  img7, 
  img8,
  img9,
  img10
} from '../assets';

const Gallery = () => {
  const serviceImages = [
    { 
      id: 1, 
      src: img1, 
      alt: 'Printed Frosted Zip Lock Bags', 
      name: 'Printed Frosted Zip Lock Bags', 
      description: 'Elegant frosted zip lock bags with custom printing for premium packaging applications.',
      slug: 'printed-frosted-zip-lock-bags'
    },
    { 
      id: 2, 
      src: img2, 
      alt: 'Printed Slider Zip Bags', 
      name: 'Printed Slider Zip Bags', 
      description: 'Easy-to-use slider zip bags with custom printing for convenient opening and closing.',
      slug: 'printed-slider-zip-bags'
    },
    { 
      id: 3, 
      src: img3, 
      alt: 'Printed LD Bags', 
      name: 'Printed LD Bags', 
      description: 'Versatile Low-Density Polyethylene bags with custom printing, ideal for retail and packaging applications.',
      slug: 'printed-ld-bags'
    },
    { 
      id: 4, 
      src: img4, 
      alt: 'Printed PP Bags', 
      name: 'Printed PP Bags', 
      description: 'Strong and durable Polypropylene bags with high-quality printing for industrial and commercial use.',
      slug: 'printed-pp-bags'
    },
    { 
      id: 5, 
      src: img5, 
      alt: 'BOPP Zip Lock Bags', 
      name: 'BOPP Zip Lock Bags', 
      description: 'High-clarity BOPP zip lock bags combining excellent visibility with secure closure.',
      slug: 'bopp-zip-lock-bags'
    },
    { 
      id: 6, 
      src: img6, 
      alt: 'Printed Transparent Bags', 
      name: 'Printed Transparent Bags', 
      description: 'Crystal clear transparent bags with custom printing for maximum product visibility.',
      slug: 'printed-transparent-bags'
    },
    { 
      id: 7, 
      src: img10, 
      alt: 'Zip Lock Slider Polybags', 
      name: 'Zip Lock Slider Polybags', 
      description: 'Convenient slider mechanism polybags for easy access and secure storage.',
      slug: 'zip-lock-slider-polybags'
    },
    { 
      id: 8, 
      src: img8, 
      alt: 'Printed Zipper Lock Bags', 
      name: 'Printed Zipper Lock Bags', 
      description: 'Convenient and secure zipper lock bags with custom printing for easy storage and brand visibility.',
      slug: 'printed-zipper-lock-bags'
    },
    { 
      id: 9, 
      src: img7, 
      alt: 'Transparent Zip Lock Slider Bags', 
      name: 'Transparent Zip Lock Slider Bags', 
      description: 'Crystal clear zip lock slider bags offering maximum visibility with convenient slider operation.',
      slug: 'transparent-zip-lock-slider-bags'
    },
    { 
      id: 10, 
      src: img9, 
      alt: 'Printed BOPP Bags', 
      name: 'Printed BOPP Bags', 
      description: 'High-quality printed BOPP (Biaxially Oriented Polypropylene) bags perfect for packaging various products with excellent clarity and durability.',
      slug: 'printed-bopp-bags'
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
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
        
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
      
      <div className="pt-16 sm:pt-20 md:pt-28 pb-8 sm:pb-12 md:pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-40 h-40 bg-[#ffdb00]/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#2E4E52]/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#ffdb00]/15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-[#2E4E52]/15 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Enhanced Header Section */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block mb-3 sm:mb-4 md:mb-6" style={{animation: 'rotateIn 0.8s ease-out'}}>
              <div className="bg-gradient-to-r from-[#ffdb00]/20 to-[#ffdb00]/30 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 py-1 sm:py-2 md:py-3 border-2 border-[#ffdb00]/30 shadow-lg">
                <span className="text-[#2E4E52] font-bold text-xs sm:text-sm uppercase tracking-wide">
                  🏭 Product Gallery
                </span>
              </div>
            </div>
            
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#2E4E52] mb-4 sm:mb-6 md:mb-8" style={{fontFamily: 'Montserrat, sans-serif', animation: 'fadeInUp 0.8s ease-out'}}>
              Our <span className="text-[#ffdb00] drop-shadow-lg">Product</span>
              <br />
              <span className="text-[#ffdb00]">Gallery</span>
            </h2>
            
            <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6 md:mb-8" style={{animation: 'fadeInUp 0.8s ease-out 0.2s both'}}>
              Explore our comprehensive range of <span className="text-[#2E4E52] font-semibold">custom packaging solutions</span> designed for modern businesses
            </p>
            
            {/* Decorative elements */}
            <div className="flex justify-center items-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8" style={{animation: 'fadeInUp 0.8s ease-out 0.4s both'}}>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent to-[#ffdb00]"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#ffdb00] rounded-full animate-pulse"></div>
              <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-[#ffdb00] to-[#ffd700]"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#2E4E52] rounded-full animate-pulse"></div>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-[#2E4E52] to-transparent"></div>
            </div>
          </div>
          
          {/* Enhanced Gallery Grid - Responsive Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {serviceImages.map((image, index) => (
              <div 
                key={image.id} 
                className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-700 overflow-hidden border-2 border-gray-100 hover:border-[#ffdb00]/50 transform hover:-translate-y-2"
                style={{
                  animation: `slideUp 0.8s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Image Container with Uniform Height */}
                <div className="relative overflow-hidden h-32 sm:h-48 md:h-56 lg:h-64">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Enhanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E4E52]/90 via-[#2E4E52]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 w-full h-full animate-shimmer"></div>
                  </div>
                  
                  {/* Hover Content */}
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
  <Link 
    to={`/services/${image.slug}`}
    className="w-full bg-[#ffdb00] hover:bg-[#ffd700] text-[#2E4E52] font-bold py-1 sm:py-2 md:py-3 px-3 sm:px-4 md:px-6 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm block text-center cursor-pointer"
    onClick={(e) => {
      e.stopPropagation();
      console.log('Link clicked:', image.slug);
    }}
  >
    View Details
  </Link>
</div>
                </div>
                
                {/* Enhanced Content */}
                <div className="p-2 sm:p-3 md:p-4 lg:p-6">
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-[#2E4E52] group-hover:text-[#1a3338] transition-colors duration-300 line-clamp-2">
                      {image.name}
                    </h3>
                    <span className="text-sm sm:text-lg md:text-xl flex-shrink-0 ml-1 sm:ml-2">{index % 4 === 0 ? '📦' : index % 4 === 1 ? '🏷️' : index % 4 === 2 ? '📋' : '🎯'}</span>
                  </div>
                  
                  {/* Description - Hidden on Mobile */}
                  <p className="hidden sm:block text-gray-600 leading-relaxed mb-2 sm:mb-3 md:mb-4 group-hover:text-gray-700 transition-colors duration-300 line-clamp-3 text-xs sm:text-sm">
                    {image.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                    <span className="bg-[#ffdb00]/20 text-[#2E4E52] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium">
                      Custom Print
                    </span>
                    <span className="bg-[#2E4E52]/10 text-[#2E4E52] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium">
                      Durable
                    </span>
                  </div>
                  
                  {/* Animated Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-0.5 sm:h-1 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#ffdb00] to-[#ffd700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
                  </div>
                </div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 sm:border-4 border-[#ffdb00] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
            ))}
          </div>
          
          {/* Enhanced CTA Section */}
          <div className="mt-12 sm:mt-16 md:mt-20 text-center">
            <div className="relative bg-gradient-to-r from-[#2E4E52] via-[#3a5a5f] to-[#2E4E52] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 text-white overflow-hidden" style={{animation: 'fadeInUp 0.8s ease-out 0.8s both'}}>
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-2 sm:top-4 md:top-8 left-2 sm:left-4 md:left-8 text-2xl sm:text-3xl md:text-4xl lg:text-6xl">📦</div>
                <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 right-2 sm:right-4 md:right-8 text-2xl sm:text-3xl md:text-4xl lg:text-6xl">🏷️</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl lg:text-8xl">📋</div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">Ready to Transform Your Packaging?</h3>
                <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-3xl mx-auto">
                  Join thousands of satisfied customers who trust Chahat Packaging for their custom packaging needs
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <a 
                    href="https://wa.me/918285333444" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 sm:gap-3 bg-[#ffdb00] hover:bg-[#ffd700] text-[#2E4E52] font-bold px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base"
                  >
                    <span className="text-base sm:text-lg md:text-xl">💬</span>
                    WhatsApp Us Now
                  </a>
                  
                  <button className="inline-flex items-center gap-2 sm:gap-3 bg-transparent border-2 border-[#ffdb00] text-[#ffdb00] hover:bg-[#ffdb00] hover:text-[#2E4E52] font-bold px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
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

export default Gallery;
