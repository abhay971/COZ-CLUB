import React from 'react'

function Membership() {
  const memberships = [
    {
      id: 'alpha',
      symbol: 'α',
      title: 'Member',
      category: 'Performers',
      Amount: "₹ 1,00,000",
      description: 'Join the CLUB of Producers and Providers who are serious about their business performance',
      topBorderColor: 'border-t-[#F37E3A]',
      textColor: 'text-[#F37E3A]',
      hoverColor: '#F37E3A',
      symbolImageSrc: '/images/alpha_img_black.png',
      badgeImageSrc: '/images/orange_star.png',
      symbolImageAlt: 'Alpha symbol',
      badgeImageAlt: 'Alpha badge'
    },
    {
      id: 'beta',
      symbol: 'β',
      title: 'Member',
      category: 'Producers',
      Amount: "₹ 50,000",
      description: 'Join the CLUB of Product Manufacturers and avail the required services from the Service Providers',
      topBorderColor: 'border-t-[#288EC2]',
      textColor: 'text-[#288EC2]',
      hoverColor: '#288EC2',
      symbolImageSrc: '/images/beta_icon.png',
      badgeImageSrc: '/images/blue_star.png',
      symbolImageAlt: 'Beta symbol',
      badgeImageAlt: 'Beta badge'
    },
    {
      id: 'gamma',
      symbol: 'γ',
      title: 'Member',
      category: 'Providers',
      Amount: "₹ 50,000",
      description: 'Join the CLUB of Service Providers to support the business needs of the Product Manufacturers',
      topBorderColor: 'border-t-[#6EBD49]',
      textColor: 'text-[#6EBD49]',
      hoverColor: '#6EBD49',
      symbolImageSrc: '/images/gamma_black.png',
      badgeImageSrc: '/images/green_star.png',
      symbolImageAlt: 'Gamma symbol',
      badgeImageAlt: 'Gamma badge'
    }
  ];
  return (
    <div>
      <div className='mt-8'>
        <div className="relative h-54 sm:h-70 md:h-56 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/images/connect_banner.jpg')`
        }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-900 px-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-4">
                <span className="relative">
                  Connect
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 sm:w-26 h-0.5 bg-orange-400"></span>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Connection Content Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1700px] mx-auto">
          {/* Description */}
          <div className="text-justify mb-12">
            <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed max-w-[1700px] mx-auto">
              Connection is the power that exists between people when they feel seen, heard, and valued. COZ CLUB offers an exclusive platform for the Producers that are manufacturers to connect with the Providers for diversified services. This ecosystem helps the businesses to horizontally integrate and focus on their core competencies. The consortium of genuine producers and providers assists to maximize the returns on the investment. Together, we will walk far!
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Grow Revenue Card */}
            <div className="bg-white shadow-lg p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#F37E3A]"></div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <img
                    src="/images/grow.png"
                    alt="Grow Revenue"
                    className="w-16 h-16 sm:w-20 sm:h-20 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                  Grow Revenue
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Increase in the net worth through expansion of the network
                </p>
              </div>
            </div>

            {/* Select Suppliers Card */}
            <div className="bg-white shadow-lg p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#288EC2]"></div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <img
                    src="/images/supplier.png"
                    alt="Select Suppliers"
                    className="w-16 h-16 sm:w-20 sm:h-20 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                  Select Suppliers
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Choose the service providers for effective and efficient solutions
                </p>
              </div>
            </div>

            {/* Meet Manufacturers Card */}
            <div className="bg-white shadow-lg p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#6EBD49]"></div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <img
                    src="/images/manufacture.png"
                    alt="Meet Manufacturers"
                    className="w-16 h-16 sm:w-20 sm:h-20 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                  Meet Manufacturers
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Find the product industries for serious and sincere business
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="bg-white">
        {/* Membership Cards Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Cards Container with proper grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 place-items-center">
              {memberships.map((membership) => (
                <div
                  key={membership.id}
                  className={`bg-white border border-gray-200 ${membership.topBorderColor} border-t-8 rounded-3xl p-6 sm:p-8 w-full max-w-sm h-full shadow-lg flex flex-col`}
                >
                  {/* Header with Symbol and Member */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-3">
                      {/* Greek Symbol Image */}
                      {membership.symbolImageSrc ? (
                        <img
                          src={membership.symbolImageSrc}
                          alt={membership.symbolImageAlt}
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        <span className="text-4xl font-bold text-black">
                          {membership.symbol}
                        </span>
                      )}

                      <span className="text-3xl font-medium text-gray-700">
                        {membership.title}
                      </span>
                    </div>
                  </div>

                  {/* Badge Image */}
                  <div className="flex justify-center mb-6">
                    {membership.badgeImageSrc ? (
                      <div className="w-20 h-24 flex items-center justify-center">
                        <img
                          src={membership.badgeImageSrc}
                          alt={membership.badgeImageAlt}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      // Placeholder badge when no image is provided
                      <div className="w-20 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-xs">Badge</span>
                      </div>
                    )}
                  </div>

                  {/* Category */}
                  <div className="text-center mb-4">
                    <h3 className={`text-2xl lg:text-3xl mb-6 font-bold ${membership.textColor}`}>
                      {membership.category}
                    </h3>
                    <h2 className={`text-2xl lg:text-3xl font-medium ${membership.textColor}`}>
                      {membership.Amount}
                    </h2>
                  </div>

                  {/* Description - flex-grow to push button to bottom */}
                  <div className="text-center mb-6 flex-grow">
                    <p className="text-gray-600 text-lg leading-relaxed px-1">
                      {membership.description}
                    </p>
                  </div>

                  {/* Button - always at bottom */}
                  <div className="text-center mt-auto">
                    <button
                      className="px-8 py-3 rounded-full border border-gray-700 transition-all duration-500 font-semibold text-gray-700 bg-white min-w-[120px] hover:text-white text-sm lg:text-base"
                      style={{
                        '--hover-color': membership.hoverColor
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = membership.hoverColor;
                        e.target.style.borderColor = '#374151'; // gray-700
                        e.target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'white';
                        e.target.style.borderColor = '#374151'; // gray-700
                        e.target.style.color = '#374151'; // gray-700
                      }}
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Membership