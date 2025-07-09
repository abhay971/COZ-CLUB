import React from 'react';

const MembershipCard = () => {
    const memberships = [
        {
            id: 'alpha',
            symbol: 'α',
            title: 'Member',
            category: 'Performers',
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
                                    <h3 className={`text-2xl lg:text-3xl font-bold ${membership.textColor}`}>
                                        {membership.category}
                                    </h3>
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

            {/* Why Consult Section */}
            <div className="p-6 lg:p-12">
                <div className="max-w-7xl mx-auto">
                    {/* Mobile: Image first, then content */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">

                        {/* Image Section - Shows first on mobile */}
                        <div className="flex justify-center lg:justify-end lg:w-1/2 order-1 lg:order-2">
                            <div className="w-full max-w-md lg:max-w-lg">
                                {/* Your pyramid image - replace the src with your actual image path */}
                                <img
                                    src="/images/consult_img.png"
                                    alt="Pyramid diagram showing Export Management, Project Management, and Operations Management"
                                    className="w-full h-auto object-contain max-h-84 lg:max-h-200 sm:max-h-80"
                                />
                            </div>
                        </div>

                        {/* Content Section - Shows second on mobile */}
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8 lg:mb-12">
                                Why <span className="relative">Consult<span className="absolute bottom-0 left-0 w-22 h-0.5 bg-orange-400"></span></span>?
                            </h1>

                            <div className="space-y-6 lg:space-y-8">
                                {/* Export Management */}
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                                        <h3 className="text-lg lg:text-2xl font-semibold text-gray-900">
                                            Export Management
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-lg leading-relaxed ml-5">
                                        We assist businesses with Strategic Sourcing, Quality Assurance, and Logistics Management to export out of India.
                                    </p>
                                </div>

                                {/* Project Management */}
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                                        <h3 className="text-lg lg:text-2xl font-semibold text-gray-900">
                                            Project Management
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-lg leading-relaxed ml-5">
                                        We assist the businesses with Project Analysis, Company Formation, and Facility Development to establish in India.
                                    </p>
                                </div>

                                {/* Operations Management */}
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                                        <h3 className="text-lg lg:text-2xl font-semibold text-gray-900">
                                            Operations Management
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-lg leading-relaxed ml-5">
                                        We assist the businesses with Materials Management, Production Planning, and Resource Optimization to maximize the ROl in India.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembershipCard;