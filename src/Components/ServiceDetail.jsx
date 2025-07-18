import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// Import images
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.jpg';

const ServiceDetail = () => {
  const { serviceName } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top when component mounts or serviceName changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, [serviceName]);

  // Also scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [activeTab]);

  const servicesData = {
    'printed-bopp-bags': {
      name: 'Printed BOPP Bags',
      icon: '📦',
      image: img9,
      category: 'Premium Packaging',
      description: 'High-quality printed BOPP (Biaxially Oriented Polypropylene) bags perfect for packaging various products with excellent clarity and durability.',
      longDescription: 'Our Printed BOPP bags are manufactured using state-of-the-art technology and premium grade BOPP material. These bags offer exceptional clarity, strength, and printing quality that makes your products stand out on shelves.',
      details: {
        material: 'BOPP (Biaxially Oriented Polypropylene)',
        thickness: '20-50 microns',
        sizes: 'Custom sizes available (5cm x 5cm to 50cm x 70cm)',
        printing: 'Up to 8 colors flexographic printing',
        features: ['Excellent clarity', 'Moisture resistant', 'Food grade available', 'Heat sealable', 'UV resistant', 'Tear resistant'],
        applications: ['Food packaging', 'Textile packaging', 'Stationery items', 'Gift wrapping', 'Industrial products', 'Retail packaging']
      },
      specifications: {
        printingOptions: ['Flexographic', 'Gravure', 'Digital printing'],
        colors: 'Up to 8 colors',
        finishes: ['Glossy', 'Matte', 'Soft touch'],
        sealingOptions: ['Heat sealable', 'Cold sealable', 'Ultrasonic sealing'],
        customization: ['Logo printing', 'Brand colors', 'Custom sizes', 'Special finishes']
      },
      advantages: [
        'Superior transparency and gloss finish',
        'Excellent moisture and oxygen barrier properties',
        'Outstanding printability with vibrant colors',
        'Cost-effective solution for bulk packaging',
        'Environmentally friendly and recyclable',
        'Temperature resistant (-40°C to +120°C)',
        'FDA approved for food contact applications'
      ],
      industries: [
        { name: 'Food & Beverage', icon: '🍽️', description: 'Snacks, confectionery, frozen foods' },
        { name: 'Textiles', icon: '👕', description: 'Garments, fabrics, accessories' },
        { name: 'Pharmaceuticals', icon: '💊', description: 'Medicine packaging, medical devices' },
        { name: 'Retail', icon: '🛒', description: 'Consumer goods, electronics' }
      ]
    },
    'printed-zipper-lock-bags': {
      name: 'Printed Zipper Lock Bags',
      icon: '🔒',
      image: img8,
      category: 'Secure Packaging',
      description: 'Convenient and secure zipper lock bags with custom printing for easy storage and brand visibility.',
      longDescription: 'Our Printed Zipper Lock Bags combine functionality with branding excellence. Featuring a reliable zipper closure system and high-quality printing capabilities, these bags are perfect for products that require resealing and long-term storage. The secure lock mechanism ensures product freshness while the custom printing helps build brand recognition.',
      details: {
        material: 'LDPE/HDPE with zipper closure',
        thickness: '30-100 microns',
        sizes: 'Standard and custom sizes (3cm x 4cm to 40cm x 60cm)',
        printing: 'Up to 6 colors flexographic printing',
        features: ['Resealable zipper', 'Air-tight seal', 'Transparent or colored', 'Easy grip', 'Tamper evident', 'Child resistant options'],
        applications: ['Food storage', 'Jewelry packaging', 'Small parts storage', 'Sample packaging', 'Pharmaceutical packaging', 'Electronics']
      },
      specifications: {
        zipperTypes: ['Standard zip', 'Slider zip', 'Press-to-close', 'Child resistant'],
        colors: 'Up to 6 colors',
        finishes: ['Clear', 'Colored', 'Frosted', 'Metallized'],
        sealingOptions: ['Heat seal', 'Cold seal', 'Pressure sensitive'],
        customization: ['Logo printing', 'Barcode printing', 'Batch numbering', 'Custom shapes']
      },
      advantages: [
        'Convenient resealable design for multiple uses',
        'Excellent seal integrity maintains product freshness',
        'High-quality printing for professional appearance',
        'Durable construction for long-term use',
        'Various size options for different products',
        'Cost-effective packaging solution',
        'Tamper-evident security features available'
      ],
      industries: [
        { name: 'Food Service', icon: '🍕', description: 'Snacks, spices, dry goods' },
        { name: 'Jewelry', icon: '💎', description: 'Precious items, accessories' },
        { name: 'Hardware', icon: '🔧', description: 'Small parts, fasteners' },
        { name: 'Cosmetics', icon: '💄', description: 'Beauty products, samples' }
      ]
    },
    'printed-ld-bags': {
      name: 'Printed LD Bags',
      icon: '🛍️',
      image: img3,
      category: 'Flexible Packaging',
      description: 'Versatile Low-Density Polyethylene bags with custom printing, ideal for retail and packaging applications.',
      longDescription: 'Our Printed LD Bags are crafted from premium Low-Density Polyethylene material, offering exceptional flexibility and durability. These bags are perfect for businesses requiring lightweight yet strong packaging solutions with excellent printability for brand promotion.',
      details: {
        material: 'LDPE (Low-Density Polyethylene)',
        thickness: '20-200 microns',
        sizes: 'Custom sizes (10cm x 15cm to 100cm x 150cm)',
        printing: 'Up to 8 colors flexographic printing',
        features: ['Flexible and stretchable', 'Chemical resistant', 'Various colors available', 'Heat sealable', 'Lightweight', 'Puncture resistant'],
        applications: ['Retail bags', 'Garbage bags', 'Industrial packaging', 'Agricultural packaging', 'Laundry bags', 'Shopping bags']
      },
      specifications: {
        printingOptions: ['Flexographic', 'Screen printing', 'Digital printing'],
        colors: 'Up to 8 colors',
        finishes: ['Glossy', 'Matte', 'Transparent', 'Colored'],
        sealingOptions: ['Heat sealable', 'Gusseted', 'Wicketed'],
        customization: ['Handle options', 'Gusset variations', 'Perforation', 'Tear notches']
      },
      advantages: [
        'Excellent flexibility and stretchability',
        'Cost-effective for large volume orders',
        'Resistant to chemicals and moisture',
        'Wide range of thickness options',
        'Customizable in various sizes and colors',
        'Lightweight reducing shipping costs',
        'Recyclable and environmentally conscious'
      ],
      industries: [
        { name: 'Retail', icon: '🏪', description: 'Shopping bags, merchandise' },
        { name: 'Agriculture', icon: '🌾', description: 'Produce, seeds, fertilizers' },
        { name: 'Industrial', icon: '🏭', description: 'Components, materials' },
        { name: 'Waste Management', icon: '🗑️', description: 'Garbage bags, liners' }
      ]
    },
    'printed-pp-bags': {
      name: 'Printed PP Bags',
      icon: '🧃',
      image: img4,
      category: 'Industrial Packaging',
      description: 'Strong and durable Polypropylene bags with high-quality printing for industrial and commercial use.',
      longDescription: 'Our Printed PP Bags are engineered for strength and durability, making them ideal for heavy-duty applications. Manufactured from high-grade polypropylene material, these bags offer exceptional resistance to tearing, puncturing, and chemical exposure while maintaining excellent printability for brand visibility.',
      details: {
        material: 'PP (Polypropylene)',
        thickness: '25-150 microns',
        sizes: 'Custom sizes (15cm x 20cm to 80cm x 120cm)',
        printing: 'Up to 10 colors flexographic printing',
        features: ['High strength', 'Chemical resistant', 'Temperature resistant', 'Glossy finish', 'Tear resistant', 'Puncture resistant'],
        applications: ['Cement bags', 'Fertilizer packaging', 'Rice bags', 'Industrial packaging', 'Chemical packaging', 'Construction materials']
      },
      specifications: {
        printingOptions: ['Flexographic', 'Gravure', 'Screen printing'],
        colors: 'Up to 10 colors',
        finishes: ['Glossy', 'Matte', 'Laminated', 'Coated'],
        sealingOptions: ['Heat sealable', 'Sewn closure', 'Adhesive seal'],
        customization: ['Valve bags', 'Gusseted bags', 'Block bottom', 'Handle options']
      },
      advantages: [
        'Superior strength and durability',
        'Excellent chemical resistance',
        'High-quality print finish',
        'Cost-effective for bulk orders',
        'Suitable for heavy-duty applications',
        'Weather resistant properties',
        'Long shelf life and storage stability'
      ],
      industries: [
        { name: 'Construction', icon: '🏗️', description: 'Cement, sand, building materials' },
        { name: 'Agriculture', icon: '🌾', description: 'Fertilizers, seeds, grains' },
        { name: 'Chemicals', icon: '🧪', description: 'Industrial chemicals, powders' },
        { name: 'Food Processing', icon: '🍚', description: 'Rice, flour, sugar' }
      ]
    },
    'printed-slider-zip-bags': {
      name: 'Printed Slider Zip Bags',
      icon: '🚪',
      image: img2,
      category: 'Convenience Packaging',
      description: 'Easy-to-use slider zip bags with custom printing for convenient opening and closing.',
      longDescription: 'Our Printed Slider Zip Bags feature an innovative slider mechanism that makes opening and closing effortless. Combined with high-quality printing capabilities, these bags are perfect for products requiring frequent access while maintaining freshness and brand visibility.',
      details: {
        material: 'LDPE/HDPE with slider zipper',
        thickness: '40-120 microns',
        sizes: 'Standard and custom sizes (5cm x 8cm to 35cm x 50cm)',
        printing: 'Up to 6 colors flexographic printing',
        features: ['Easy slider operation', 'Secure closure', 'Transparent or colored', 'Tamper evident', 'Child resistant options', 'Airtight seal'],
        applications: ['Food packaging', 'Pharmaceutical packaging', 'Cosmetic packaging', 'Electronic components', 'Sample packaging', 'Travel accessories']
      },
      specifications: {
        sliderTypes: ['Standard slider', 'Easy-open slider', 'Child resistant slider'],
        colors: 'Up to 6 colors',
        finishes: ['Clear', 'Frosted', 'Colored', 'Metallized'],
        sealingOptions: ['Heat seal', 'Cold seal', 'Ultrasonic seal'],
        customization: ['Logo printing', 'Barcode integration', 'Batch coding', 'Custom shapes']
      },
      advantages: [
        'User-friendly slider mechanism',
        'Secure and reliable closure',
        'Professional appearance',
        'Maintains product integrity',
        'Reusable and durable',
        'Excellent for brand promotion',
        'Cost-effective packaging solution'
      ],
      industries: [
        { name: 'Food & Snacks', icon: '🍿', description: 'Nuts, candies, dried fruits' },
        { name: 'Pharmaceuticals', icon: '💊', description: 'Pills, capsules, medical supplies' },
        { name: 'Electronics', icon: '📱', description: 'Small components, accessories' },
        { name: 'Personal Care', icon: '🧴', description: 'Travel size products, samples' }
      ]
    },
    'printed-frosted-zip-lock-bags': {
      name: 'Printed Frosted Zip Lock Bags',
      icon: '🌫️',
      image: img1,
      category: 'Premium Packaging',
      description: 'Elegant frosted zip lock bags with custom printing for premium packaging applications.',
      longDescription: 'Our Printed Frosted Zip Lock Bags combine elegance with functionality. The frosted finish provides a sophisticated, premium look while maintaining the convenience of zip lock closure. These bags are perfect for luxury products and premium branding applications.',
      details: {
        material: 'Frosted LDPE/HDPE with zipper',
        thickness: '50-150 microns',
        sizes: 'Custom sizes (8cm x 12cm to 30cm x 40cm)',
        printing: 'Up to 4 colors specialized printing',
        features: ['Frosted finish', 'Premium appearance', 'Soft touch feel', 'Moisture resistant', 'UV protection', 'Tamper evident'],
        applications: ['Cosmetic packaging', 'Jewelry storage', 'Gift packaging', 'Apparel accessories', 'Premium samples', 'Luxury items']
      },
      specifications: {
        printingOptions: ['Specialized frosted printing', 'Metallic printing', 'Embossed printing'],
        colors: 'Up to 4 colors',
        finishes: ['Frosted', 'Soft touch', 'Matte', 'Textured'],
        sealingOptions: ['Heat seal', 'Cold seal', 'Pressure sensitive'],
        customization: ['Embossed logos', 'Metallic accents', 'Custom shapes', 'Ribbon attachments']
      },
      advantages: [
        'Premium frosted appearance',
        'Elegant and sophisticated look',
        'Excellent for branding',
        'Soft tactile experience',
        'Ideal for luxury products',
        'Enhanced product presentation',
        'Unique marketing appeal'
      ],
      industries: [
        { name: 'Cosmetics', icon: '💄', description: 'Beauty products, skincare' },
        { name: 'Jewelry', icon: '💍', description: 'Precious accessories, gifts' },
        { name: 'Fashion', icon: '👗', description: 'Apparel accessories, boutique items' },
        { name: 'Electronics', icon: '🎧', description: 'Premium accessories, gadgets' }
      ]
    },
    'printed-transparent-bags': {
      name: 'Printed Transparent Bags',
      icon: '🔍',
      image: img6,
      category: 'Display Packaging',
      description: 'Crystal clear transparent bags with custom printing for maximum product visibility.',
      longDescription: 'Our Printed Transparent Bags offer unmatched clarity and visibility while providing professional branding opportunities. These bags are ideal for products that benefit from full visibility while maintaining professional packaging standards.',
      details: {
        material: 'Transparent LDPE/HDPE/PP',
        thickness: '25-100 microns',
        sizes: 'Custom sizes (5cm x 7cm to 60cm x 80cm)',
        printing: 'Up to 6 colors on clear substrate',
        features: ['Crystal clear visibility', 'High transparency', 'Excellent printability', 'Food grade available', 'Static resistant', 'Puncture resistant'],
        applications: ['Food packaging', 'Document storage', 'Retail display', 'Medical packaging', 'Electronics', 'Stationery items']
      },
      specifications: {
        printingOptions: ['Flexographic on clear', 'Digital printing', 'Screen printing'],
        colors: 'Up to 6 colors',
        finishes: ['Crystal clear', 'Anti-static', 'Anti-fog', 'Barrier coated'],
        sealingOptions: ['Heat seal', 'Cold seal', 'Adhesive closure'],
        customization: ['Window patches', 'Tear notches', 'Handle options', 'Gusset variations']
      },
      advantages: [
        'Maximum product visibility',
        'Professional clear appearance',
        'Excellent for product display',
        'Food safe options available',
        'Versatile applications',
        'Cost-effective solution',
        'Enhanced product presentation'
      ],
      industries: [
        { name: 'Food Service', icon: '🍞', description: 'Bakery, fresh produce, deli items' },
        { name: 'Medical', icon: '🏥', description: 'Medical devices, pharmaceuticals' },
        { name: 'Retail', icon: '🛍️', description: 'Display packaging, merchandise' },
        { name: 'Office Supplies', icon: '📎', description: 'Stationery, documents, supplies' }
      ]
    },
    'bopp-zip-lock-bags': {
      name: 'BOPP Zip Lock Bags',
      icon: '🧊',
      image: img5,
      category: 'Clarity Packaging',
      description: 'High-clarity BOPP zip lock bags combining excellent visibility with secure closure.',
      longDescription: 'Our BOPP Zip Lock Bags combine the superior clarity and strength of BOPP material with the convenience of zip lock closure. These bags offer exceptional product visibility while maintaining freshness and security, making them perfect for premium packaging applications.',
      details: {
        material: 'BOPP with zipper closure',
        thickness: '30-80 microns',
        sizes: 'Standard and custom sizes (6cm x 9cm to 40cm x 60cm)',
        printing: 'Clear or with printing options',
        features: ['High clarity', 'Secure zip lock', 'Moisture barrier', 'Tamper evident', 'UV resistant', 'Temperature stable'],
        applications: ['Food packaging', 'Pharmaceutical', 'Electronics', 'Stationery', 'Cosmetics', 'Industrial parts']
      },
      specifications: {
        printingOptions: ['Clear unprinted', 'Flexographic printing', 'Digital printing'],
        colors: 'Clear or up to 8 colors',
        finishes: ['High gloss', 'Matte', 'Anti-fog', 'Metallized'],
        sealingOptions: ['Heat seal', 'Cold seal', 'Ultrasonic seal'],
        customization: ['Logo printing', 'Barcode printing', 'Custom sizes', 'Special closures']
      },
      advantages: [
        'Superior clarity and strength',
        'Excellent moisture barrier',
        'Secure and reliable closure',
        'Professional appearance',
        'Cost-effective solution',
        'Long-term storage capability',
        'Recyclable material'
      ],
      industries: [
        { name: 'Food Processing', icon: '🥘', description: 'Processed foods, snacks' },
        { name: 'Pharmaceuticals', icon: '💊', description: 'Medical supplies, pills' },
        { name: 'Electronics', icon: '🔌', description: 'Components, accessories' },
        { name: 'Textiles', icon: '🧵', description: 'Threads, small accessories' }
      ]
    },
    'zip-lock-slider-polybags': {
      name: 'Zip Lock Slider Polybags',
      icon: '🎚️',
      image: img10,
      category: 'Industrial Packaging',
      description: 'Convenient slider mechanism polybags for easy access and secure storage.',
      longDescription: 'Our Zip Lock Slider Polybags feature a reliable slider mechanism that provides easy access while maintaining secure closure. These bags are designed for industrial and commercial applications where convenience and security are paramount.',
      details: {
        material: 'LDPE/HDPE with slider',
        thickness: '40-150 microns',
        sizes: 'Various sizes (4cm x 6cm to 45cm x 65cm)',
        printing: 'Custom printing available',
        features: ['Easy slider operation', 'Secure seal', 'Reusable', 'Durable construction', 'Chemical resistant', 'Temperature stable'],
        applications: ['Industrial packaging', 'Retail storage', 'Food packaging', 'Component storage', 'Hardware packaging', 'Agricultural products']
      },
      specifications: {
        sliderTypes: ['Standard slider', 'Heavy-duty slider', 'Tamper-evident slider'],
        colors: 'Clear or custom colors',
        finishes: ['Clear', 'Tinted', 'Anti-static', 'Barrier coated'],
        sealingOptions: ['Heat seal', 'Cold seal', 'Pressure seal'],
        customization: ['Logo printing', 'Size variations', 'Color options', 'Handle additions']
      },
      advantages: [
        'Easy-to-use slider mechanism',
        'Reliable and secure closure',
        'Durable and reusable',
        'Suitable for various applications',
        'Cost-effective packaging solution',
        'Industrial strength construction',
        'Versatile sizing options'
      ],
      industries: [
        { name: 'Manufacturing', icon: '⚙️', description: 'Industrial parts, components' },
        { name: 'Hardware', icon: '🔧', description: 'Tools, fasteners, supplies' },
        { name: 'Agriculture', icon: '🌽', description: 'Seeds, small equipment' },
        { name: 'Automotive', icon: '🚗', description: 'Spare parts, accessories' }
      ]
    },
    'transparent-zip-lock-slider-bags': {
      name: 'Transparent Zip Lock Slider Bags',
      icon: '💎',
      image: img7,
      category: 'Premium Display',
      description: 'Crystal clear zip lock slider bags offering maximum visibility with convenient slider operation.',
      longDescription: 'Our Transparent Zip Lock Slider Bags combine crystal clear visibility with the convenience of slider operation. These premium bags are perfect for products that require maximum visibility while maintaining easy access and secure storage.',
      details: {
        material: 'Transparent LDPE/HDPE with slider',
        thickness: '50-120 microns',
        sizes: 'Multiple sizes (5cm x 8cm to 35cm x 50cm)',
        printing: 'Clear or custom printing options',
        features: ['Crystal clear', 'Smooth slider operation', 'Secure closure', 'Excellent visibility', 'Tamper evident', 'Food grade available'],
        applications: ['Product display', 'Sample packaging', 'Document storage', 'Retail packaging', 'Medical supplies', 'Electronics']
      },
      specifications: {
        printingOptions: ['Clear unprinted', 'Spot printing', 'Full color printing'],
        colors: 'Crystal clear or custom colors',
        finishes: ['High clarity', 'Anti-static', 'Anti-fog', 'UV resistant'],
        sealingOptions: ['Heat seal', 'Cold seal', 'Ultrasonic seal'],
        customization: ['Logo printing', 'Barcode integration', 'Custom dimensions', 'Special closures']
      },
      advantages: [
        'Maximum product visibility',
        'Convenient slider operation',
        'Professional clear appearance',
        'Secure and reliable',
        'Ideal for display packaging',
        'Easy access and resealing',
        'Premium presentation quality'
      ],
      industries: [
        { name: 'Retail Display', icon: '🏬', description: 'Product showcasing, merchandising' },
        { name: 'Medical', icon: '🏥', description: 'Medical devices, supplies' },
        { name: 'Electronics', icon: '📱', description: 'Accessories, components' },
        { name: 'Cosmetics', icon: '💋', description: 'Beauty products, samples' }
      ]
    }
  };

  const service = servicesData[serviceName];

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">❌</span>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-3">Service Not Found</h2>
          <p className="text-gray-600 mb-4 text-sm">The service you're looking for doesn't exist.</p>
          <Link 
            to="/" 
            className="bg-[#ffdb00] hover:bg-[#ffdb00]/90 text-[#2E4E52] font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        .scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .detail-item {
          transition: all 0.3s ease;
        }
        
        .detail-item:hover {
          transform: translateX(3px);
          color: #2E4E52;
        }
        
        .tab-button {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .tab-button::before {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ffdb00, #ffd700);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .tab-button.active::before {
          width: 80%;
        }
        
        .tab-button:hover::before {
          width: 60%;
        }
        
        .feature-item {
          transition: all 0.3s ease;
        }
        
        .feature-item:hover {
          transform: translateY(-1px);
        }
        
        .industry-item {
          transition: all 0.3s ease;
        }
        
        .industry-item:hover {
          background: linear-gradient(135deg, #ffdb00/20 0%, #ffd700/20 100%);
          transform: translateY(-1px);
        }
        
        .advantage-item {
          transition: all 0.3s ease;
        }
        
        .advantage-item:hover {
          background: linear-gradient(135deg, #ffdb00/10 0%, #ffd700/10 100%);
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .hover-lift:hover {
            transform: none;
            box-shadow: none;
          }
          
          .detail-item:hover {
            transform: none;
          }
          
          .feature-item:hover {
            transform: none;
          }
          
          .industry-item:hover {
            transform: none;
          }
        }
      `}</style>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20 md:pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
          
          {/* Breadcrumb */}
          <nav className={`mb-4 md:mb-6 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-gray-500">
              <li><Link to="/" className="hover:text-[#ffdb00] transition-colors">Home</Link></li>
              <li><span className="text-gray-400">›</span></li>
              <li><span className="text-gray-400">Services</span></li>
              <li><span className="text-gray-400">›</span></li>
              <li className="text-gray-900 font-medium truncate">{service.name}</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className={`bg-white rounded-2xl md:rounded-3xl shadow-lg p-4 md:p-8 mb-6 md:mb-8 hover-lift ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#ffdb00]/30 to-[#ffdb00]/50 rounded-xl md:rounded-2xl flex items-center justify-center">
                    <span className="text-2xl md:text-3xl">{service.icon}</span>
                  </div>
                  <div>
                    <span className="text-xs md:text-sm font-medium text-[#ffdb00] bg-[#ffdb00]/10 px-2 md:px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E4E52] mb-3 md:mb-4 leading-tight">
                  {service.name}
                </h1>
                
                <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <a 
                    href="https://wa.me/918285333444" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#ffdb00] hover:bg-[#ffdb00]/90 text-[#2E4E52] font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg md:rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    <span>📱</span>
                    Get Quote Now
                  </a>
                  <Link 
                    to="/contact" 
                    className="bg-[#2E4E52] hover:bg-[#1a3338] text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg md:rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    <span>📧</span>
                    Contact Us
                  </Link>
                </div>
              </div>
              
              <div className="relative order-first lg:order-last">
                <div className="relative w-full h-48 md:h-64 lg:h-80 rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-[#ffdb00] text-[#2E4E52] px-2 md:px-4 py-1 md:py-2 rounded-full font-semibold shadow-lg">
                  <span className="text-xs md:text-sm">Premium Quality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className={`mb-4 md:mb-6 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-2">
              <nav className="flex flex-wrap gap-1 md:gap-2 justify-center">
                {[
                  {
                    id: 'overview',
                    label: 'Overview',
                    icon: '📋'
                  },
                  {
                    id: 'specifications',
                    label: 'Specifications',
                    icon: '📏'
                  },
                  {
                    id: 'industries',
                    label: 'Industries',
                    icon: '🏢'
                  },
                  {
                    id: 'advantages',
                    label: 'Advantages',
                    icon: '⭐'
                  }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`tab-button flex items-center gap-1 md:gap-2 px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-medium text-xs md:text-sm ${
                      activeTab === tab.id 
                        ? 'active bg-[#ffdb00]/20 text-[#2E4E52]' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-sm md:text-base">{tab.icon}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className={`space-y-4 md:space-y-6 ${isVisible ? 'scale-in' : 'opacity-0'}`}>
                  
                  {/* About Service */}
                  <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 hover-lift">
                    <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-[#ffdb00]/20 rounded-lg flex items-center justify-center">
                        <span className="text-lg md:text-xl">ℹ️</span>
                      </div>
                      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#2E4E52]">About This Service</h2>
                    </div>
                    
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                      {service.longDescription}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="detail-item">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-base md:text-lg">🧪</span>
                          <h3 className="font-semibold text-gray-800 text-sm md:text-base">Material</h3>
                        </div>
                        <p className="text-gray-600 pl-6 text-xs md:text-sm">{service.details.material}</p>
                      </div>
                      
                      <div className="detail-item">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-base md:text-lg">📏</span>
                          <h3 className="font-semibold text-gray-800 text-sm md:text-base">Thickness</h3>
                        </div>
                        <p className="text-gray-600 pl-6 text-xs md:text-sm">{service.details.thickness}</p>
                      </div>
                      
                      <div className="detail-item">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-base md:text-lg">📐</span>
                          <h3 className="font-semibold text-gray-800 text-sm md:text-base">Available Sizes</h3>
                        </div>
                        <p className="text-gray-600 pl-6 text-xs md:text-sm">{service.details.sizes}</p>
                      </div>
                      
                      <div className="detail-item">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-base md:text-lg">🎨</span>
                          <h3 className="font-semibold text-gray-800 text-sm md:text-base">Printing</h3>
                        </div>
                        <p className="text-gray-600 pl-6 text-xs md:text-sm">{service.details.printing}</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 hover-lift">
                    <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-[#ffdb00]/20 rounded-lg flex items-center justify-center">
                        <span className="text-lg md:text-xl">✨</span>
                      </div>
                      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#2E4E52]">Key Features</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      {service.details.features.map((feature, index) => (
                        <div key={index} className="feature-item flex items-center gap-2 md:gap-1 p-1 md:p-1 rounded-lg hover:bg-gray-50">
                          <div className="w-5 h-5 md:w-6 md:h-6 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-xs md:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 hover-lift">
                    <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-[#ffdb00]/20 rounded-lg flex items-center justify-center">
                        <span className="text-lg md:text-xl">🎯</span>
                      </div>
                      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#2E4E52]">Applications</h2>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                      {service.details.applications.map((app, index) => (
                        <div key={index} className="text-center p-2 md:p-3 rounded-lg bg-gray-50 hover:bg-[#ffdb00]/10 transition-all duration-300">
                          <span className="text-xs md:text-sm font-medium text-gray-700">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Specifications Tab */}
              {activeTab === 'specifications' && service.specifications && (
                <div className={`bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 hover-lift ${isVisible ? 'scale-in' : 'opacity-0'}`}>
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-[#ffdb00]/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg md:text-xl">📊</span>
                    </div>
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#2E4E52]">Detailed Specifications</h2>
                  </div>
                  
                  <div className="space-y-4 md:space-y-6">
                    {Object.entries(service.specifications).map(([key, value]) => (
                      <div key={key} className="pb-3 md:pb-4 border-b border-gray-100 last:border-b-0">
                        <h3 className="font-semibold text-gray-800 mb-2 md:mb-3 capitalize text-sm md:text-base">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </h3>
                        {Array.isArray(value) ? (
                          <div className="flex flex-wrap gap-2">
                            {value.map((item, index) => (
                              <span key={index} className="bg-[#ffdb00]/10 text-[#2E4E52] px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                                {item}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-600 text-xs md:text-sm">{value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Industries Tab */}
              {activeTab === 'industries' && service.industries && (
                <div className={`bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 hover-lift ${isVisible ? 'scale-in' : 'opacity-0'}`}>
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-[#ffdb00]/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg md:text-xl">🏭</span>
                    </div>
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#2E4E52]">Industries We Serve</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {service.industries.map((industry, index) => (
                      <div key={index} className="industry-item p-3 md:p-4 rounded-lg border border-gray-200 cursor-pointer">
                        <div className="flex items-center gap-2 md:gap-3 mb-2">
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg md:text-xl">
                            {industry.icon}
                          </div>
                          <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                            {industry.name}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                          {industry.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Advantages Tab */}
              {activeTab === 'advantages' && service.advantages && (
                <div className={`bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 hover-lift ${isVisible ? 'scale-in' : 'opacity-0'}`}>
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-[#ffdb00]/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg md:text-xl">🌟</span>
                    </div>
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#2E4E52]">Key Advantages</h2>
                  </div>
                  
                  <div className="space-y-3 md:space-y-4">
                    {service.advantages.map((advantage, index) => (
                      <div key={index} className="advantage-item flex items-start gap-2 md:gap-3 p-3 md:p-4 rounded-lg">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-[#ffdb00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-[#2E4E52] text-xs md:text-sm font-bold">{index + 1}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-xs md:text-sm">{advantage}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className={`space-y-4 md:space-y-6 ${isVisible ? 'slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              
              {/* Quick Contact */}
              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 hover-lift">
                <h3 className="text-lg md:text-xl font-bold text-[#2E4E52] mb-3 md:mb-4 flex items-center gap-2">
                  <span>💬</span>
                  Get Instant Quote
                </h3>
                <p className="text-gray-600 mb-3 md:mb-4 text-xs md:text-sm">Ready to get started? Contact us now for a custom quote!</p>
                <div className="space-y-2 md:space-y-3">
                  <a 
                    href="https://wa.me/918285333444" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-[#ffdb00] hover:bg-[#ffdb00]/90 text-[#2E4E52] font-semibold py-2 md:py-3 px-3 md:px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    <span>📱</span>
                    WhatsApp Now
                  </a>
                  <Link 
                    to="/contact" 
                    className="w-full bg-[#2E4E52] hover:bg-[#1a3338] text-white font-semibold py-2 md:py-3 px-3 md:px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    <span>📧</span>
                    Email Us
                  </Link>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 hover-lift">
                <h3 className="text-lg md:text-xl font-bold text-[#2E4E52] mb-3 md:mb-4">Why Choose Us?</h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold text-xs md:text-sm">15+</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 text-xs md:text-sm">Years Experience</div>
                      <div className="text-xs text-gray-600">Industry expertise</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-xs md:text-sm">24h</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 text-xs md:text-sm">Quick Response</div>
                      <div className="text-xs text-gray-600">Fast turnaround</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-xs md:text-sm">99%</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 text-xs md:text-sm">Quality Rate</div>
                      <div className="text-xs text-gray-600">Customer satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Services Section - DISABLED */}
              {/* Commented out to disable related services section */}
              {/*
              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 hover-lift">
                <h3 className="text-lg md:text-xl font-bold text-[#2E4E52] mb-3 md:mb-4 flex items-center gap-2">
                  <span>🔗</span>
                  Related Services
                </h3>
                <div className="space-y-2 md:space-y-3">
                  Related services content here
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;