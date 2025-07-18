import { AboutImage } from '../assets/index.js'; // Importing the AboutImage from assets

const About = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 lg:pt-9 lg:pb-3 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          {/* Text Section - First on mobile, left side on desktop */}
          <div className="flex-1 lg:pr-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: '#3E5F64' }}>
              About Us – Chahat Packaging
            </h2>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                Established in 2015, Chahat Packaging has emerged as a trusted name in the field of packaging and labeling solutions. With nearly a decade of industry experience, we specialize in the wholesale trading of a wide range of premium-quality packaging products including corrugated boxes, bubble wrap, packaging tape, labels, and customized packaging solutions tailored to meet the specific needs of diverse industries.
              </p>
              <p>
                At Chahat Packaging, we pride ourselves on our commitment to quality, reliability, and customer satisfaction. Whether you are a small business or a large-scale enterprise, we offer scalable solutions that ensure product protection, efficient shipping, and brand enhancement through our comprehensive packaging solutions.
              </p>
            </div>
            <button 
              className="mt-6 sm:mt-8 rounded-md px-6 py-3 text-white font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
              style={{ 
                background: 'linear-gradient(135deg, #3E5F64 0%, #FCD34D 100%)',
                boxShadow: '0 4px 6px -1px rgba(62, 95, 100, 0.1), 0 2px 4px -1px rgba(62, 95, 100, 0.06)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #2D4A4F 0%, #F59E0B 100%)';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #3E5F64 0%, #FCD34D 100%)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Read More...
            </button>
          </div>
          
          {/* Image Section - Second on mobile, right side on desktop */}
          <div className="flex-1 lg:pl-8">
            <div className="relative">
              <img 
                src={AboutImage} // Assuming AboutImage is imported from assets
                alt="Professional Packaging Solutions" 
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] object-cover rounded-lg shadow-lg"
              />
              {/* Optional overlay for better visual appeal */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
