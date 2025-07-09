import React, { useState, useEffect } from 'react';

const Producers = () => {
  const [selectedProducer, setSelectedProducer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Producer data with detailed information
  const producersData = {
    textiles: {
      title: "Textiles & Apparel",
      subtitle: "Fashion & Clothing Manufacturing",
      image: "/images/Producers/Textiles & Apparel.jpg",
      description: "Our textile and apparel manufacturers specialize in creating high-quality clothing, fabrics, and fashion accessories. With expertise in design, production, and quality control, they deliver products that meet international standards while maintaining cost-effectiveness and sustainability.",
      features: [
        { icon: "👕", title: "Garment Production", desc: "Quality clothing" },
        { icon: "🧵", title: "Fabric Manufacturing", desc: "Premium materials" },
        { icon: "🎨", title: "Design Services", desc: "Custom designs" },
        { icon: "♻️", title: "Sustainable Practices", desc: "Eco-friendly production" }
      ]
    },
    leather: {
      title: "Leather & Footwear",
      subtitle: "Premium Leather Goods & Shoes",
      image: "/images/Leather & Footwear.jpg",
      description: "Our leather and footwear manufacturers create premium leather goods, shoes, and accessories using traditional craftsmanship combined with modern techniques. They specialize in both luxury and commercial-grade products with attention to durability and style.",
      features: [
        { icon: "👞", title: "Footwear Production", desc: "Quality shoes" },
        { icon: "👜", title: "Leather Goods", desc: "Bags & accessories" },
        { icon: "🏆", title: "Premium Quality", desc: "Luxury craftsmanship" },
        { icon: "🔧", title: "Custom Manufacturing", desc: "Bespoke solutions" }
      ]
    },
    handicraft: {
      title: "Handicraft Products",
      subtitle: "Traditional Arts & Crafts",
      image: "/images/Producers/Handicraft.jpg",
      description: "Our handicraft producers create beautiful, authentic products that showcase traditional artistry and cultural heritage. From decorative items to functional crafts, they preserve age-old techniques while meeting contemporary market demands.",
      features: [
        { icon: "🎨", title: "Artisan Crafts", desc: "Handmade products" },
        { icon: "🏺", title: "Traditional Techniques", desc: "Cultural heritage" },
        { icon: "🎁", title: "Decorative Items", desc: "Artistic pieces" },
        { icon: "🌍", title: "Export Quality", desc: "International standards" }
      ]
    },
    furniture: {
      title: "Furniture & Furnishings",
      subtitle: "Home & Office Furniture",
      image: "/images/Producers/Furniture & Furnishings.jpg",
      description: "Our furniture manufacturers create high-quality furniture and furnishings for residential and commercial spaces. They combine traditional woodworking skills with modern design to produce durable, stylish furniture that enhances any environment.",
      features: [
        { icon: "🪑", title: "Custom Furniture", desc: "Tailored designs" },
        { icon: "🏠", title: "Home Furnishings", desc: "Complete solutions" },
        { icon: "🏢", title: "Commercial Furniture", desc: "Office solutions" },
        { icon: "🌳", title: "Sustainable Wood", desc: "Eco-friendly materials" }
      ]
    },
    sporting: {
      title: "Sporting Goods",
      subtitle: "Sports Equipment & Accessories",
      image: "/images/Producers/Sporting Goods.jpg",
      description: "Our sporting goods manufacturers produce high-quality sports equipment, accessories, and athletic wear. They focus on performance, safety, and durability to meet the needs of professional athletes and recreational sports enthusiasts.",
      features: [
        { icon: "⚽", title: "Sports Equipment", desc: "Professional gear" },
        { icon: "🏃", title: "Athletic Wear", desc: "Performance clothing" },
        { icon: "🏆", title: "Quality Standards", desc: "Safety certified" },
        { icon: "🎯", title: "Custom Solutions", desc: "Specialized equipment" }
      ]
    },
    hotels: {
      title: "Hotels & Hospitality",
      subtitle: "Hospitality Industry Services",
      image: "/images/Producers/Hotel & Hospitalitey.jpg",
      description: "Our hospitality partners provide comprehensive services for hotels, resorts, and hospitality businesses. They specialize in creating memorable guest experiences through quality service, amenities, and operational excellence.",
      features: [
        { icon: "🏨", title: "Hotel Services", desc: "Guest experiences" },
        { icon: "🍽️", title: "Restaurant Operations", desc: "Dining excellence" },
        { icon: "🛎️", title: "Concierge Services", desc: "Personal assistance" },
        { icon: "🎉", title: "Event Management", desc: "Special occasions" }
      ]
    },
    medical: {
      title: "Medical Supplies",
      subtitle: "Healthcare Equipment & Supplies",
      image: "/images/Producers/Medical Supplies.jpg",
      description: "Our medical supply manufacturers produce essential healthcare equipment, medical devices, and pharmaceutical supplies. They maintain strict quality standards and regulatory compliance to ensure safe, effective medical products.",
      features: [
        { icon: "🩺", title: "Medical Devices", desc: "Diagnostic equipment" },
        { icon: "💊", title: "Pharmaceutical Supplies", desc: "Healthcare products" },
        { icon: "🏥", title: "Hospital Equipment", desc: "Medical infrastructure" },
        { icon: "✅", title: "Quality Assurance", desc: "Regulatory compliance" }
      ]
    },
    electricals: {
      title: "Electricals & Electronics",
      subtitle: "Electronic Devices & Components",
      image: "/images/Producers/Electricals & Electronics.jpg",
      description: "Our electronics manufacturers produce a wide range of electrical and electronic products, from consumer devices to industrial components. They focus on innovation, quality, and technological advancement to meet evolving market needs.",
      features: [
        { icon: "💻", title: "Consumer Electronics", desc: "Latest technology" },
        { icon: "⚡", title: "Electrical Components", desc: "Quality parts" },
        { icon: "🔧", title: "Industrial Equipment", desc: "Heavy-duty solutions" },
        { icon: "🔬", title: "R&D Innovation", desc: "Cutting-edge technology" }
      ]
    },
    automobile: {
      title: "Automobile Components",
      subtitle: "Auto Parts & Accessories",
      image: "/images/Producers/Automobile.jpg",
      description: "Our automobile component manufacturers produce high-quality auto parts, accessories, and components for various vehicle types. They maintain strict quality standards and precision engineering to ensure optimal performance and safety.",
      features: [
        { icon: "🚗", title: "Auto Parts", desc: "Quality components" },
        { icon: "🔧", title: "Precision Engineering", desc: "Accurate manufacturing" },
        { icon: "🛡️", title: "Safety Standards", desc: "Certified products" },
        { icon: "🚛", title: "Supply Chain", desc: "Reliable delivery" }
      ]
    },
    building: {
      title: "Building Hardware",
      subtitle: "Construction Materials & Hardware",
      image: "/images/Producers/Building Hardware.jpg",
      description: "Our building hardware manufacturers provide essential construction materials, hardware, and building components. They focus on durability, quality, and compliance with building standards to support construction projects of all sizes.",
      features: [
        { icon: "🔨", title: "Construction Hardware", desc: "Building materials" },
        { icon: "🏗️", title: "Structural Components", desc: "Support systems" },
        { icon: "🔒", title: "Security Hardware", desc: "Safety solutions" },
        { icon: "📏", title: "Precision Manufacturing", desc: "Accurate specifications" }
      ]
    },
    industrial: {
      title: "Industrial Supplies",
      subtitle: "Manufacturing Equipment & Tools",
      image: "/images/Producers/Industrial Supplies.jpg",
      description: "Our industrial supply manufacturers produce essential equipment, tools, and materials for manufacturing and industrial operations. They focus on durability, efficiency, and precision to support various industrial applications.",
      features: [
        { icon: "⚙️", title: "Manufacturing Tools", desc: "Precision instruments" },
        { icon: "🏭", title: "Industrial Equipment", desc: "Heavy machinery" },
        { icon: "🔧", title: "Maintenance Tools", desc: "Service equipment" },
        { icon: "📊", title: "Quality Control", desc: "Testing equipment" }
      ]
    },
    metals: {
      title: "Metals & Machinery",
      subtitle: "Metal Products & Industrial Machinery",
      image: "/images/Producers/Metals & Machinery.jpg",
      description: "Our metals and machinery manufacturers produce high-quality metal products, industrial machinery, and precision-engineered components. They specialize in custom fabrication and large-scale production with strict quality control.",
      features: [
        { icon: "🔩", title: "Metal Fabrication", desc: "Custom products" },
        { icon: "⚙️", title: "Industrial Machinery", desc: "Heavy equipment" },
        { icon: "🏭", title: "Production Systems", desc: "Manufacturing solutions" },
        { icon: "⚡", title: "Precision Engineering", desc: "Technical expertise" }
      ]
    },
    chemicals: {
      title: "Chemicals",
      subtitle: "Industrial & Specialty Chemicals",
      image: "/images/Producers/Chemicals.jpg",
      description: "Our chemical manufacturers produce a wide range of industrial chemicals, specialty chemicals, and chemical products for various applications. They maintain strict safety standards and environmental compliance in all operations.",
      features: [
        { icon: "🧪", title: "Industrial Chemicals", desc: "Raw materials" },
        { icon: "⚗️", title: "Specialty Chemicals", desc: "Custom formulations" },
        { icon: "🛡️", title: "Safety Standards", desc: "Regulatory compliance" },
        { icon: "🌱", title: "Environmental Care", desc: "Sustainable practices" }
      ]
    },
    pharma: {
      title: "Pharma",
      subtitle: "Pharmaceutical Products & Services",
      image: "/images/Producers/Pharma.jpg",
      description: "Our pharmaceutical manufacturers produce high-quality medicines, drugs, and pharmaceutical products under strict regulatory compliance. They focus on research, development, and manufacturing of safe, effective therapeutic solutions.",
      features: [
        { icon: "💊", title: "Drug Manufacturing", desc: "Pharmaceutical products" },
        { icon: "🔬", title: "Research & Development", desc: "Innovation focus" },
        { icon: "✅", title: "Quality Assurance", desc: "Regulatory compliance" },
        { icon: "🏥", title: "Healthcare Solutions", desc: "Medical treatments" }
      ]
    },
    food: {
      title: "Food & Beverages",
      subtitle: "Food Processing & Beverage Production",
      image: "/images/food-beverages.jpg",
      description: "Our food and beverage manufacturers produce high-quality food products, beverages, and processed foods. They maintain strict hygiene standards and quality control to ensure safe, nutritious, and delicious products for consumers.",
      features: [
        { icon: "🍎", title: "Food Processing", desc: "Quality products" },
        { icon: "🥤", title: "Beverage Production", desc: "Refreshing drinks" },
        { icon: "🛡️", title: "Food Safety", desc: "Hygiene standards" },
        { icon: "🌱", title: "Natural Ingredients", desc: "Healthy options" }
      ]
    },
    agriculture: {
      title: "Agriculture Products",
      subtitle: "Agricultural Goods & Farming",
      image: "/images/Producers/Agriculture Products.jpg",
      description: "Our agricultural producers provide high-quality agricultural products, farming equipment, and agricultural services. They focus on sustainable farming practices and innovative techniques to ensure food security and environmental protection.",
      features: [
        { icon: "🌾", title: "Crop Production", desc: "Quality harvest" },
        { icon: "🚜", title: "Farming Equipment", desc: "Modern machinery" },
        { icon: "🌱", title: "Sustainable Farming", desc: "Eco-friendly practices" },
        { icon: "📈", title: "Agricultural Solutions", desc: "Yield optimization" }
      ]
    }
  };

  const producersGrid = [
    // Row 1 - Orange border
    [
      { key: 'textiles', title: 'Textiles & ', subtitle: 'Apparel' },
      { key: 'leather', title: 'Leather &', subtitle: 'Footwear' },
      { key: 'handicraft', title: 'Handicraft', subtitle: 'Products' },
      { key: 'furniture', title: 'Furniture &', subtitle: 'Furnishings' }
    ],
    // Row 2 - Blue border
    [
      { key: 'sporting', title: 'Sporting', subtitle: 'Goods' },
      { key: 'hotels', title: 'Hotels &', subtitle: 'Hospitality' },
      { key: 'medical', title: 'Medical', subtitle: 'Supplies' },
      { key: 'electricals', title: 'Electricals &', subtitle: 'Electronics' }
    ],
    // Row 3 - Green border
    [
      { key: 'automobile', title: 'Automobile', subtitle: 'Components' },
      { key: 'building', title: 'Building', subtitle: 'Hardware' },
      { key: 'industrial', title: 'Industrial', subtitle: 'Supplies' },
      { key: 'metals', title: 'Metals &', subtitle: 'Machinery' }
    ],
    // Row 4 - Black border
    [
      { key: 'chemicals', title: 'Chemicals', subtitle: '' },
      { key: 'pharma', title: 'Pharma', subtitle: '' },
      { key: 'food', title: 'Food &', subtitle: 'Beverages' },
      { key: 'agriculture', title: 'Agriculture', subtitle: 'Products' }
    ]
  ];

  const rowColors = [
    'border-t-[#F37E3A]', // Row 1 - Orange
    'border-t-[#288EC2]',   // Row 2 - Blue  
    'border-t-[#6EBD49]',  // Row 3 - Green
    'border-t-black'    // Row 4 - Black
  ];

  const openModal = (producer) => {
    setSelectedProducer(producer);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProducer(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <div className="mt-8">
        {/* Header Section with Background Image */}
        <div className="relative h-54 sm:h-70 md:h-56 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/images/connect_banner.jpg')`
        }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-900 px-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-4">
                <span className="relative">
                  Producers
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 sm:w-26 h-0.5 bg-orange-400"></span>
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* Subtitle Section */}
        <div className="bg-white pt-6 sm:pt-8">
          <div className="max-w-[1800px] mx-auto px-10 text-center">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-900 font-normal leading-relaxed">
              It is important for a Service Provider to have quality Product Manufacturers for consistent business.
            </p>
          </div>
        </div>

        {/* Producers Grid */}
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="space-y-6 sm:space-y-8">
            {producersGrid.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {row.map((producer, colIndex) => (
                  <div
                    key={producer.key}
                    onClick={() => openModal(producer.key)}
                    className={`
                    group relative bg-white rounded-xl px-8 py-6 sm:px-10 sm:py-8 md:px-12 md:py-10
                    text-center cursor-pointer transition-all duration-300 
                    h-28 sm:h-32 md:h-36 flex items-center justify-center
                    hover:transform hover:-translate-y-3 hover:shadow-2xl
                    ${rowColors[rowIndex]} border-t-7 border-l border-r border-b border-gray-200
                     shadow-lg hover:shadow-xl
                  `}
                  >
                    <div className="relative z-10">
                      <h3 className="text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-tight">
                        {producer.title}
                        {producer.subtitle && (
                          <>
                            <br />
                            <span className="text-gray-800 text-sm sm:text-base md:text-lg  lg:text-2xl">{producer.subtitle}</span>
                          </>
                        )}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && selectedProducer && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300"
            onClick={closeModal}
          >
            <div
              className="bg-white max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden relative transform transition-all duration-500 scale-100 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 bg-white/40 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-900 hover:text-gray-900 transition-all duration-300 hover:scale-110 z-20"
              >
                ×
              </button>

              {/* Modal Header */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={producersData[selectedProducer].image}
                  alt={producersData[selectedProducer].title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 drop-shadow-lg">
                    {producersData[selectedProducer].title}
                  </h2>
                  <p className="text-lg sm:text-xl opacity-90">
                    {producersData[selectedProducer].subtitle}
                  </p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-2 sm:p-10 max-h-82 overflow-y-auto">
                <h3 className="text-2xl sm:text-3xl text-gray-800 mb-5 relative pb-3">
                  Manufacturing Overview
                  <div className="absolute bottom-0 left-0 w-12 h-1 bg-[#F37E3A] rounded-full"></div>
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-base sm:text-lg">
                  {producersData[selectedProducer].description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {producersData[selectedProducer].features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 hover:bg-gray-100 p-4 sm:p-5 rounded-xl text-center transition-all duration-300 hover:transform hover:-translate-y-1"
                    >
                      <div className="text-3xl sm:text-4xl mb-3">{feature.icon}</div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{feature.title}</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Producers;