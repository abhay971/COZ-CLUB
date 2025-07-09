import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Background images with their corresponding text content
  const heroContent = [
    {
      image: '/images/cozclub_banner.jpg',
      title: "Think INDIA, Think COZ CLUB!",
      line1: "Think INDIA,",
      line2: "Think COZ CLUB!",
      highlight1: "INDIA,",
      highlight2: "COZ CLUB!"
    },
    {
      image: '/images/homebanner_3.jpg',
      title: "Bridging the gap between PROMISE and PERFORMANCE!",
      line1: "Bridging the gap between",
      line2: "PROMISE and PERFORMANCE!",
      highlight1: "PROMISE",
      highlight2: "PERFORMANCE!"
    },
    {
      image: '/images/homebanner_2.jpg',
      title: "Today's MSME is Tomorrow's MNC!",
      line1: "Today's MSME is",
      line2: "Tomorrow's MNC!",
      highlight1: "MSME",
      highlight2: "MNC!"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      // Change text first, then image after a brief delay
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % heroContent.length
        );
        setIsTransitioning(false);
      }, 500); // Slightly longer for smoother transition
    }, 4000);

    return () => clearInterval(interval);
  }, [heroContent.length]);

  const currentContent = heroContent[currentImageIndex];

  const renderAnimatedText = () => {
    const baseClasses = `text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight text-black drop-shadow-2xl`;
    
    return (
      <div className={`transition-all duration-700 ease-in-out ${
        isTransitioning 
          ? 'opacity-0 transform translate-y-2' 
          : 'opacity-100 transform translate-y-0'
      }`}>
        <h1 className={baseClasses}>
          {/* First line with staggered animation */}
          <div className={`mb-1 sm:mb-2 transition-all duration-700 ease-out ${
            isTransitioning 
              ? 'opacity-0 transform translate-y-1' 
              : 'opacity-100 transform translate-y-0'
          }`} style={{ transitionDelay: isTransitioning ? '0ms' : '100ms' }}>
            {currentImageIndex === 0 ? (
              <>
                Think <span className="font-extrabold text-black">{currentContent.highlight1}</span>
              </>
            ) : currentImageIndex === 1 ? (
              "Bridging the gap between"
            ) : (
              <>
                Today's <span className="font-extrabold text-black">{currentContent.highlight1}</span> is
              </>
            )}
          </div>

          {/* Second line with staggered animation */}
          <div className={`transition-all duration-700 ease-out ${
            isTransitioning 
              ? 'opacity-0 transform translate-y-1' 
              : 'opacity-100 transform translate-y-0'
          }`} style={{ transitionDelay: isTransitioning ? '0ms' : '200ms' }}>
            {currentImageIndex === 0 ? (
              <>
                Think <span className="font-extrabold text-black">{currentContent.highlight2}</span>
              </>
            ) : currentImageIndex === 1 ? (
              <>
                <span className="font-extrabold text-black">{currentContent.highlight1}</span> and{' '}
                <span className="font-extrabold text-black">{currentContent.highlight2}</span>
              </>
            ) : (
              <>
                Tomorrow's <span className="font-extrabold text-black">{currentContent.highlight2}</span>
              </>
            )}
          </div>
        </h1>
      </div>
    );
  };

  return (
    <div className="relative">
      {/* Hero Section - Better height management for mobile */}
      <div className="relative h-[180px] sm:h-[260px] md:h-[380px] lg:h-[450px] xl:h-[500px] overflow-hidden sm:mt-4 lg:mt-8">
        {/* Background Images Container */}
        <div className="absolute inset-0">
          {heroContent.map((content, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={content.image}
                alt={`Hero background ${index + 1}`}
                className="w-full h-full object-contain sm:object-cover object-center"
                loading="eager"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #f97316, #ea580c)';
                }}
              />
            </div>
          ))}
        </div>

        {/* Dark overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-40" /> */}

        {/* Text Overlay with Animation Container */}
        <div className="relative z-10 flex items-center justify-start h-full px-4 sm:px-6 lg:px-12">
          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            {renderAnimatedText()}
          </div>
        </div>

        {/* Enhanced Image Indicators */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (index !== currentImageIndex) {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentImageIndex(index);
                    setIsTransitioning(false);
                  }, 500);
                }
              }}
              className={`rounded-full transition-all duration-300 ease-out transform hover:scale-110 ${
                index === currentImageIndex
                  ? 'bg-orange-400 w-6 sm:w-8 h-2 sm:h-3 shadow-lg'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75 w-2 h-2 sm:w-3 sm:h-3 hover:shadow-md'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Why Connect Section */}
      <div className="relative -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 xl:-mt-28 z-20 px-3 sm:px-4 lg:px-6 xl:px-8 pb-8 sm:pb-12">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl max-w-7xl mx-auto transform transition-all duration-500 hover:shadow-3xl" style={{
          boxShadow: '0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}>
          <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-10 xl:py-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-gray-800 mb-6 sm:mb-8 lg:mb-10 xl:mb-12">
              Why <span className="relative">Connect<span className="absolute bottom-0 left-0 w-14 sm:w-26 h-0.5 bg-orange-400"></span></span>?
            </h2>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
              {/* Left Column - For Producers and For Providers */}
              <div className="space-y-6 sm:space-y-8">
                {/* For Producers */}
                <div className="p-4 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg">
                  <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full flex-shrink-0" />
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800">For Producers</h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    To connect with the right ecosystem of Service Providers who can support and satisfy your business needs so you can focus on your core competencies and scale up.
                  </p>
                </div>

                {/* For Providers */}
                <div className="p-4 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg">
                  <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full flex-shrink-0" />
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800">For Providers</h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    To connect with the right Product Manufacturers who can avail your services and award you the business so you can focus on your core competencies and scale up.
                  </p>
                </div>
              </div>

              {/* Right Column - Member Benefits */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 rounded-lg sm:rounded-xl transform transition-all duration-300 hover:shadow-lg">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Be a Member to:</h3>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    'Offer your services',
                    'Promote your products',
                    'Enhance global visibility of your brand',
                    'Collaborate with right partners and industry leaders',
                    'Gain competitive advantage through key performance indicators'
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white rounded-md sm:rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:translate-x-2"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* No additional styles needed */
      `}</style>
    </div>
  );
};

export default HeroSection;