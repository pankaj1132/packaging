import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets/index.js';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Check if device is mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileServicesOpen(false); // Close services when menu closes
  };

  const handleMouseEnter = () => {
    // Only work on desktop
    if (!isMobile) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsServicesOpen(true);
    }
  };

  const handleMouseLeave = () => {
    // Only work on desktop
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsServicesOpen(false);
      }, 100);
    }
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    // Toggle on mobile/tablet, do nothing on desktop
    if (isMobile) {
      setIsServicesOpen(!isServicesOpen);
    }
  };

  const handleMobileServicesClick = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const services = [
    { name: 'Printed BOPP Bags', icon: '📦', route: 'printed-bopp-bags' },
    { name: 'Printed Zipper Lock Bags', icon: '🔒', route: 'printed-zipper-lock-bags' },
    { name: 'Printed LD Bags', icon: '🛍️', route: 'printed-ld-bags' },
    { name: 'Printed PP Bags', icon: '🧃', route: 'printed-pp-bags' },
    { name: 'Printed Slider Zip Bags', icon: '🚪', route: 'printed-slider-zip-bags' },
    { name: 'Printed Frosted Zip Lock Bags', icon: '🌫️', route: 'printed-frosted-zip-lock-bags' },
    { name: 'Printed Transparent Bags', icon: '🔍', route: 'printed-transparent-bags' },
    { name: 'BOPP Zip Lock Bags', icon: '🧊', route: 'bopp-zip-lock-bags' },
    { name: 'Zip Lock Slider Polybags', icon: '🎚️', route: 'zip-lock-slider-polybags' },
    { name: 'Transparent Zip Lock Slider Bags', icon: '💎', route: 'transparent-zip-lock-slider-bags' }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
        
        .dropdown-enter {
          animation: slideDown 0.15s ease-out forwards;
        }
        
        .dropdown-item {
          transition: all 0.15s ease;
        }
        
        .dropdown-item:hover {
          transform: translateX(8px);
          background: linear-gradient(135deg, #ffdb00 0%, #ffd700 100%);
          color: #2E4E52;
        }

        /* Mobile and tablet specific optimizations */
        @media (max-width: 767px) {
          .dropdown-enter {
            animation: slideDown 0.1s ease-out forwards;
          }
          
          .dropdown-item {
            transition: all 0.1s ease;
          }
          
          .dropdown-item:hover {
            transform: none;
            background: linear-gradient(135deg, #ffdb00 0%, #ffd700 100%);
            color: #2E4E52;
          }
          
          .mobile-dropdown {
            width: calc(100vw - 2rem) !important;
            max-width: 350px !important;
            left: 1rem !important;
            right: 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .mobile-dropdown {
            width: calc(100vw - 1rem) !important;
            left: 0.5rem !important;
            right: 0.5rem !important;
          }
        }
      `}</style>
      
      <nav className="fixed top-10 sm:top-12 md:top-14 left-0 right-0 z-50 bg-white shadow-lg">
        <div className="flex items-center justify-between px-4 sm:px-6 py-2 max-w-full">
          
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img 
              alt="Chahat Packaging logo" 
              height="40" 
              src={logo}
              width="50"
              className="sm:h-[50px] sm:w-[60px]"
            />
            <Link to="/" className="text-sm sm:text-xl md:text-2xl font-extrabold text-[#2E4E52] select-none hover:text-[#1a3338] transition-colors">
              <span className="block">Chahat Packaging</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-6 lg:space-x-10 text-[#1a1f3d] font-semibold text-sm lg:text-base">
            <li>
              <Link to="/" className="cursor-pointer select-none hover:text-[#2E4E52] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="cursor-pointer select-none hover:text-[#2E4E52] transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/market-place" className="cursor-pointer select-none hover:text-[#2E4E52] transition-colors">
                Market Place
              </Link>
            </li>
            <li 
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                className="cursor-pointer select-none hover:text-[#2E4E52] transition-colors flex items-center gap-1"
                onClick={handleServicesClick}
              >
                Services
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* Services Dropdown */}
              {isServicesOpen && (
                <div className={`dropdown-enter absolute top-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 ${
                  isMobile ? 'mobile-dropdown' : 'left-0 w-60'
                }`}>
                  {/* Services Grid */}
                  <div className="p-2 max-h-80 overflow-y-auto">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={`/services/${service.route}`}
                        className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#2E4E52] transition-colors"
                        style={{
                          animationDelay: `${index * 0.02}s`
                        }}
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link to="/contact" className="cursor-pointer select-none hover:text-[#2E4E52] transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          {/* Desktop WhatsApp Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://wa.me/918285333444" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-[#1a1f3d] font-semibold text-xs sm:text-sm rounded-full px-3 sm:px-5 py-2 select-none transition-colors" 
              style={{backgroundColor: '#ffdb00'}}
            >
              <span className="hidden sm:inline">WhatsApp Us</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none"
            >
              <span className={`block w-5 h-0.5 bg-[#2E4E52] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-[#2E4E52] transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-[#2E4E52] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>

        <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <ul className="flex flex-col py-4 text-[#1a1f3d] font-semibold text-base">
            <li>
              <Link 
                to="/" 
                className="block px-6 py-3 hover:bg-gray-50 hover:text-[#2E4E52] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="block px-6 py-3 hover:bg-gray-50 hover:text-[#2E4E52] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            
            {/* Mobile Services Dropdown */}
            <li 
              className="relative"
              onMouseEnter={() => setIsMobileServicesOpen(true)}
              onMouseLeave={() => setIsMobileServicesOpen(false)}
            >
              <div 
                className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 hover:text-[#2E4E52] transition-colors cursor-pointer"
              >
                <span>Services</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* Mobile Services Submenu - Desktop Style */}
              {isMobileServicesOpen && (
                <div className="dropdown-enter absolute top-full left-4 right-4 mt-2 bg-white rounded-lg sm:rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
                  <div className="p-2 sm:p-3 max-h-64 sm:max-h-80 overflow-y-auto">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={`/services/${service.route}`}
                        className="dropdown-item flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-gray-50 text-gray-700 hover:text-[#2E4E52] group"
                        style={{
                          animationDelay: `${index * 0.02}s`
                        }}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                      >
                        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#ffdb00]/20 to-[#ffdb00]/30 rounded-md sm:rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-150">
                          <span className="text-sm sm:text-lg">{service.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-xs sm:text-sm leading-tight">{service.name}</h4>
                          <p className="text-xs text-gray-500 mt-0.5 hidden sm:block">Custom printed packaging</p>
                        </div>
                        <svg 
                          className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-150" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
            
            <li>
              <Link 
                to="/contact" 
                className="block px-6 py-3 hover:bg-gray-50 hover:text-[#2E4E52] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
