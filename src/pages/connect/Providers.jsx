import React, { useState, useEffect } from 'react';
// import Footer from '../../components/Footer';

const Providers = () => {
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Provider data with detailed information
  const providersData = {
    legal: {
      title: "Legal Advisors",
      subtitle: "Expert Legal Guidance & Compliance",
      image: "/images/legal-advisors.jpg",
      description: "Our legal advisors provide comprehensive legal services to ensure your business operates within regulatory frameworks. From contract negotiations to intellectual property protection, our experienced legal professionals offer strategic counsel that protects your interests and supports your business growth.",
      features: [
        { icon: "⚖️", title: "Legal Compliance", desc: "Regulatory adherence" },
        { icon: "📋", title: "Contract Management", desc: "Agreement expertise" },
        { icon: "🛡️", title: "Risk Mitigation", desc: "Legal protection" },
        { icon: "📚", title: "IP Protection", desc: "Intellectual property" }
      ]
    },
    chartered: {
      title: "Chartered Accountants",
      subtitle: "Financial Excellence & Strategic Planning",
      image: "/images/chartered-accountants.jpg",
      description: "Our chartered accountants bring expertise in financial management, tax planning, and business advisory services. With deep understanding of accounting standards and regulations, they help optimize your financial operations while ensuring compliance with all statutory requirements.",
      features: [
        { icon: "💰", title: "Financial Planning", desc: "Strategic guidance" },
        { icon: "📊", title: "Tax Optimization", desc: "Compliance & savings" },
        { icon: "📈", title: "Business Advisory", desc: "Growth strategies" },
        { icon: "🔍", title: "Audit Services", desc: "Quality assurance" }
      ]
    },
    hr: {
      title: "HR Consultants & Recruiters",
      subtitle: "Building High-Performance Teams",
      image: "/images/hr-consultants.jpg",
      description: "Our HR consultants and recruiters specialize in talent acquisition, employee development, and organizational optimization. They help build strong teams through strategic hiring, performance management, and HR policy development that aligns with your business objectives.",
      features: [
        { icon: "👥", title: "Talent Acquisition", desc: "Strategic hiring" },
        { icon: "📋", title: "HR Policies", desc: "Compliance framework" },
        { icon: "🎯", title: "Performance Management", desc: "Employee development" },
        { icon: "🏆", title: "Training Programs", desc: "Skill enhancement" }
      ]
    },
    manpower: {
      title: "Manpower Suppliers",
      subtitle: "Flexible Workforce Solutions",
      image: "/images/manpower-suppliers.jpg",
      description: "Our manpower suppliers provide flexible staffing solutions to meet your operational needs. From temporary workforce to permanent placements, they ensure you have the right people with the right skills at the right time to maintain optimal productivity.",
      features: [
        { icon: "⚡", title: "Quick Deployment", desc: "Rapid staffing" },
        { icon: "🔄", title: "Flexible Solutions", desc: "Scalable workforce" },
        { icon: "✅", title: "Quality Screening", desc: "Skilled personnel" },
        { icon: "📞", title: "24/7 Support", desc: "Continuous service" }
      ]
    },
    realestate: {
      title: "Real Estate Brokers",
      subtitle: "Property Investment & Management",
      image: "/images/real-estate-brokers.jpg",
      description: "Our real estate brokers provide comprehensive property services, from commercial leasing to investment opportunities. With deep market knowledge and extensive networks, they help you find the perfect location for your business or investment portfolio.",
      features: [
        { icon: "🏢", title: "Commercial Properties", desc: "Business locations" },
        { icon: "💼", title: "Investment Advisory", desc: "Market insights" },
        { icon: "📄", title: "Legal Documentation", desc: "Transaction support" },
        { icon: "🔍", title: "Market Research", desc: "Property analysis" }
      ]
    },
    architects: {
      title: "Architects & Designers",
      subtitle: "Creative Spaces & Innovative Design",
      image: "/images/architects-designers.jpg",
      description: "Our architects and designers create functional, aesthetic spaces that reflect your brand and enhance productivity. From conceptual design to project completion, they deliver innovative solutions that balance form, function, and sustainability.",
      features: [
        { icon: "🎨", title: "Creative Design", desc: "Innovative concepts" },
        { icon: "📐", title: "Space Planning", desc: "Optimal layouts" },
        { icon: "🌱", title: "Sustainable Design", desc: "Eco-friendly solutions" },
        { icon: "🏗️", title: "Project Management", desc: "End-to-end delivery" }
      ]
    },
    facility: {
      title: "Facility Contractors",
      subtitle: "Comprehensive Facility Management",
      image: "/images/facility-contractors.jpg",
      description: "Our facility contractors provide comprehensive maintenance and management services to keep your operations running smoothly. From routine maintenance to complex installations, they ensure your facilities are safe, efficient, and well-maintained.",
      features: [
        { icon: "🔧", title: "Maintenance Services", desc: "Preventive care" },
        { icon: "⚡", title: "Electrical Systems", desc: "Power solutions" },
        { icon: "🌡️", title: "HVAC Management", desc: "Climate control" },
        { icon: "🛡️", title: "Safety Compliance", desc: "Risk management" }
      ]
    },
    pr: {
      title: "PR Agencies",
      subtitle: "Brand Building & Communications",
      image: "/images/pr-agencies.jpg",
      description: "Our PR agencies help build and maintain your brand reputation through strategic communication and media relations. They create compelling narratives that resonate with your target audience and enhance your market presence.",
      features: [
        { icon: "📢", title: "Media Relations", desc: "Press coverage" },
        { icon: "📱", title: "Digital Marketing", desc: "Online presence" },
        { icon: "📝", title: "Content Creation", desc: "Brand messaging" },
        { icon: "📊", title: "Analytics & Reporting", desc: "Performance tracking" }
      ]
    },
    it: {
      title: "IT Solutions",
      subtitle: "Technology Infrastructure & Support",
      image: "/images/it-solutions.jpg",
      description: "Our IT solution providers deliver comprehensive technology services from infrastructure setup to ongoing support. They ensure your systems are secure, efficient, and aligned with your business objectives while staying current with technological advancements.",
      features: [
        { icon: "💻", title: "System Integration", desc: "Seamless connectivity" },
        { icon: "🔒", title: "Cybersecurity", desc: "Data protection" },
        { icon: "☁️", title: "Cloud Solutions", desc: "Scalable infrastructure" },
        { icon: "🛠️", title: "Technical Support", desc: "24/7 assistance" }
      ]
    },
    travel: {
      title: "Travel & Transportation",
      subtitle: "Seamless Business Travel Solutions",
      image: "/images/travel-transportation.jpg",
      description: "Our travel and transportation partners provide comprehensive solutions for business travel needs. From corporate travel management to logistics coordination, they ensure efficient and cost-effective transportation solutions.",
      features: [
        { icon: "✈️", title: "Corporate Travel", desc: "Business trips" },
        { icon: "🚗", title: "Ground Transportation", desc: "Local mobility" },
        { icon: "📅", title: "Travel Planning", desc: "Itinerary management" },
        { icon: "💳", title: "Expense Management", desc: "Cost optimization" }
      ]
    },
    medical: {
      title: "Medical Professionals",
      subtitle: "Healthcare Services & Wellness",
      image: "/images/medical-professionals.jpg",
      description: "Our medical professionals provide comprehensive healthcare services to ensure employee wellness and occupational health. From routine check-ups to specialized treatments, they support your workforce's health and productivity.",
      features: [
        { icon: "🏥", title: "Occupational Health", desc: "Workplace wellness" },
        { icon: "🩺", title: "Health Screening", desc: "Preventive care" },
        { icon: "🚑", title: "Emergency Services", desc: "Crisis response" },
        { icon: "💊", title: "Medical Consultation", desc: "Expert advice" }
      ]
    },
    catering: {
      title: "Catering Services",
      subtitle: "Quality Food & Hospitality",
      image: "/images/catering-services.jpg",
      description: "Our catering services provide high-quality food and hospitality solutions for various occasions. From daily meal services to special events, they ensure exceptional culinary experiences that satisfy diverse tastes and dietary requirements.",
      features: [
        { icon: "🍽️", title: "Quality Cuisine", desc: "Fresh ingredients" },
        { icon: "🎉", title: "Event Catering", desc: "Special occasions" },
        { icon: "🥗", title: "Healthy Options", desc: "Nutritious meals" },
        { icon: "👨‍🍳", title: "Professional Service", desc: "Expert staff" }
      ]
    },
    insurance: {
      title: "Insurance Services",
      subtitle: "Risk Management & Protection",
      image: "/images/insurance-services.jpg",
      description: "Our insurance service providers offer comprehensive risk management solutions to protect your business and employees. From liability coverage to employee benefits, they help safeguard your operations against various risks.",
      features: [
        { icon: "🛡️", title: "Risk Assessment", desc: "Comprehensive analysis" },
        { icon: "📋", title: "Policy Management", desc: "Coverage optimization" },
        { icon: "💼", title: "Claims Support", desc: "Expert assistance" },
        { icon: "📈", title: "Business Protection", desc: "Operational security" }
      ]
    },
    printing: {
      title: "Printing & Packaging",
      subtitle: "Quality Print Solutions & Packaging",
      image: "/images/printing-packaging.jpg",
      description: "Our printing and packaging partners provide high-quality print solutions for all your business needs. From marketing materials to product packaging, they deliver professional results that enhance your brand image and product presentation.",
      features: [
        { icon: "🖨️", title: "Digital Printing", desc: "High-quality output" },
        { icon: "📦", title: "Custom Packaging", desc: "Brand enhancement" },
        { icon: "🎨", title: "Design Services", desc: "Creative solutions" },
        { icon: "⚡", title: "Quick Turnaround", desc: "Fast delivery" }
      ]
    },
    industrial: {
      title: "Industrial Supplies",
      subtitle: "Equipment & Materials Supply",
      image: "/images/industrial-supplies.jpg",
      description: "Our industrial supply partners provide essential equipment and materials for manufacturing and industrial operations. From machinery to safety equipment, they ensure reliable supply chains that support continuous production.",
      features: [
        { icon: "⚙️", title: "Industrial Equipment", desc: "Quality machinery" },
        { icon: "🛡️", title: "Safety Equipment", desc: "Worker protection" },
        { icon: "📦", title: "Supply Chain", desc: "Reliable delivery" },
        { icon: "🔧", title: "Maintenance Support", desc: "Service excellence" }
      ]
    },
    security: {
      title: "Security Services",
      subtitle: "Comprehensive Security Solutions",
      image: "/images/security-services.jpg",
      description: "Our security service providers offer comprehensive protection solutions for your business premises and operations. From physical security to digital surveillance, they ensure the safety and security of your assets and personnel.",
      features: [
        { icon: "🔒", title: "Physical Security", desc: "Premise protection" },
        { icon: "📹", title: "Surveillance Systems", desc: "24/7 monitoring" },
        { icon: "👮", title: "Security Personnel", desc: "Trained professionals" },
        { icon: "🚨", title: "Emergency Response", desc: "Rapid intervention" }
      ]
    }
  };

  const providersGrid = [
    // Row 1 - Orange border
    [
      { key: 'legal', title: 'Legal', subtitle: 'Advisors' },
      { key: 'chartered', title: 'Chartered', subtitle: 'Accountants' },
      { key: 'hr', title: 'HR Consultants', subtitle: '& Recruiters' },
      { key: 'manpower', title: 'Manpower', subtitle: 'Suppliers' }
    ],
    // Row 2 - Blue border
    [
      { key: 'realestate', title: 'Real Estate', subtitle: 'Brokers' },
      { key: 'architects', title: 'Architects &', subtitle: 'Designers' },
      { key: 'facility', title: 'Facility', subtitle: 'Contractors' },
      { key: 'pr', title: 'PR', subtitle: 'Agencies' }
    ],
    // Row 3 - Green border
    [
      { key: 'it', title: 'IT', subtitle: 'Solutions' },
      { key: 'travel', title: 'Travel &', subtitle: 'Transportation' },
      { key: 'medical', title: 'Medical', subtitle: 'Professionals' },
      { key: 'catering', title: 'Catering', subtitle: 'Services' }
    ],
    // Row 4 - Black border
    [
      { key: 'insurance', title: 'Insurance', subtitle: 'Services' },
      { key: 'printing', title: 'Printing &', subtitle: 'Packaging' },
      { key: 'industrial', title: 'Industrial', subtitle: 'Supplies' },
      { key: 'security', title: 'Security', subtitle: 'Services' }
    ]
  ];

  const rowColors = [
    'border-t-[#F37E3A]', // Row 1 - Orange
    'border-t-[#288EC2]',   // Row 2 - Blue  
    'border-t-[#6EBD49]',  // Row 3 - Green
    'border-t-black'    // Row 4 - Black
  ];

  const openModal = (provider) => {
    setSelectedProvider(provider);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProvider(null);
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
                  Providers
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
              It is vital for a Product Manufacturer to have committed Service Providers for sustainable growth.
            </p>
          </div>
        </div>

        {/* Providers Grid */}
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="space-y-6 sm:space-y-8">
            {providersGrid.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {row.map((provider, colIndex) => (
                  <div
                    key={provider.key}
                    onClick={() => openModal(provider.key)}
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
                        {provider.title}
                        {provider.subtitle && (
                          <>
                            <br />
                            <span className="text-gray-800 text-sm sm:text-base md:text-lg  lg:text-2xl">{provider.subtitle}</span>
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
        {isModalOpen && selectedProvider && (
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
                className="absolute top-5 right-5 bg-white/40 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 z-20"
              >
                ×
              </button>

              {/* Modal Header */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={providersData[selectedProvider].image}
                  alt={providersData[selectedProvider].title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 drop-shadow-lg">
                    {providersData[selectedProvider].title}
                  </h2>
                  <p className="text-lg sm:text-xl opacity-90">
                    {providersData[selectedProvider].subtitle}
                  </p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-10 max-h-96 overflow-y-auto">
                <h3 className="text-2xl sm:text-3xl text-gray-800 mb-5 relative pb-3">
                  Service Overview
                  <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-base sm:text-lg">
                  {providersData[selectedProvider].description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {providersData[selectedProvider].features.map((feature, index) => (
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

export default Providers;