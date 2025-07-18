import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const TopHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between bg-gradient-to-r from-[#2E4E52] via-[#3a5a5f] to-[#2E4E52] h-10 sm:h-12 md:h-14 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 z-[51] shadow-lg">
      
      {/* Contact Info - Responsive visibility and sizing */}
      <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 text-white font-bold">
        
        {/* Phone - Always visible with responsive sizing */}
        <div className="flex items-center space-x-1 rounded-full px-1 sm:px-2 md:px-3 py-1">
          <FontAwesomeIcon icon={faPhone} className="text-[#ffdb00] text-xs sm:text-sm md:text-base" />
          <span className="text-xs sm:text-sm md:text-base">
            <span className="hidden sm:inline">+91-8285333444</span>
            <span className="sm:hidden">+91-8285333444</span>
          </span>
        </div>
        
        {/* Email - Hidden on mobile, shown on tablet+ */}
        <div className="hidden md:flex items-center space-x-1 rounded-full px-2 md:px-3 py-1">
          <FontAwesomeIcon icon={faEnvelope} className="text-[#ffdb00] text-sm md:text-base" />
          <span className="text-sm md:text-base">
            <span className="hidden lg:inline">chahatbopp@gmail.com</span>
            <span className="lg:hidden">chahatbopp@gmail.com</span>
          </span>
        </div>
        
      </div>
      
      {/* Social Media Icons - Responsive sizing */}
      <div className="flex space-x-1 sm:space-x-2 md:space-x-3 z-10">
        <a 
          href="#" 
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border border-white sm:border-2 bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#2E4E52] text-xs sm:text-sm md:text-base hover:bg-white hover:scale-110 transition-all duration-200 shadow-md"
          aria-label="Facebook"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a 
          href="#" 
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border border-white sm:border-2 bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#2E4E52] text-xs sm:text-sm md:text-base hover:bg-white hover:scale-110 transition-all duration-200 shadow-md"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a 
          href="#" 
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border border-white sm:border-2 bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#2E4E52] text-xs sm:text-sm md:text-base hover:bg-white hover:scale-110 transition-all duration-200 shadow-md"
          aria-label="YouTube"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a 
          href="#" 
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border border-white sm:border-2 bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#2E4E52] text-xs sm:text-sm md:text-base hover:bg-white hover:scale-110 transition-all duration-200 shadow-md"
          aria-label="WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
      
      {/* Decorative Wave Pattern - Responsive height */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#ffdb00] via-[#ffd700] to-[#ffdb00]"></div>
    </div>
  );
};

export default TopHeader;
