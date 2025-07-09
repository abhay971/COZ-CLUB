import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Users, Building, Award, Globe, Send, User, Phone, Mail, MessageSquare, Tag } from 'lucide-react';

const HelpSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    subject: '',
    message: ''
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showForm]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowForm(false);
    setFormData({
      name: '',
      contact: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleModalClose = () => {
    setShowForm(false);
  };

  // Member companies with your 9 images
  const memberCompanies = [
    { name: "Company 1", image: "1724655722.jpg" },
    { name: "Company 2", image: "1724755177.jpg" },
    { name: "Company 3", image: "1724755427.jpg" },
    { name: "Company 4", image: "1724837498.png" },
    { name: "Company 5", image: "1724905956.png" },
    { name: "Company 6", image: "1724906016.png" },
    { name: "Company 7", image: "1747052091.png" },
  ];

  return (
    <div className="relative mt-6">
      {/* Main Help Section */}
      <div className="bg-black text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center sm:text-left">How may we help you?</h2>
          <button 
            onClick={() => setShowForm(true)}
            className="bg-[#F37E3A] hover:bg-[#6EBD49] text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 text-sm sm:text-base"
          >
            Ask an Expert
            <ArrowRight size={16} className="sm:hidden" />
            <ArrowRight size={20} className="hidden sm:block" />
          </button>
        </div>
      </div>

      {/* Members Section with Enhanced Logo Slider */}
      <div className="bg-gray-200 py-12 sm:py-16 px-2 sm:px-4 overflow-hidden">
        <div className="w-full max-w-full">
          <div className="flex items-center justify-center gap-1 sm:gap-4 mb-8 sm:mb-12">
            <div className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-gray-800">α</div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">Members</h3>
          </div>
          
          {/* Enhanced Logo Slider */}
          <div className="relative h-24 sm:h-32 md:h-40 lg:h-48 overflow-hidden w-full">
            <div className="absolute inset-0 flex items-center">
              <div className="flex animate-scroll-smooth gap-6 sm:gap-8 md:gap-10 lg:gap-12 whitespace-nowrap">
                {/* First set */}
                {memberCompanies.map((company, index) => (
                  <div 
                    key={`first-${index}`}
                    className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-3 sm:p-4 md:p-5 lg:p-6 flex items-center justify-center transform  group"
                  >
                    <div className="w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 bg-white rounded-lg sm:rounded-xl flex items-center justify-center overflow-hidden group-hover:border-orange-300 transition-all duration-300">
                      <img 
                        src={`/images/${company.image}`} 
                        alt={company.name}
                        className="max-w-full max-h-full object-contain rounded-lg sm:rounded-xl transition-transform duration-300"
                        onError={(e) => {
                          console.log(`Failed to load image: /images/${company.image}`);
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg sm:rounded-xl hidden items-center justify-center text-white font-bold text-xs sm:text-sm md:text-base">
                        {company.name}
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {memberCompanies.map((company, index) => (
                  <div 
                    key={`second-${index}`}
                    className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-3 sm:p-4 md:p-5 lg:p-6 flex items-center justify-center transform group"
                  >
                    <div className="bg-white w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 rounded-lg sm:rounded-xl flex items-center justify-center overflow-hidden group-hover:border-orange-300 transition-all duration-300">
                      <img 
                        src={`/images/${company.image}`} 
                        alt={company.name}
                        className="max-w-full max-h-full object-contain  rounded-lg sm:rounded-xl transition-transform duration-300"
                        onError={(e) => {
                          console.log(`Failed to load image: /images/${company.image}`);
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg sm:rounded-xl hidden items-center justify-center text-white font-bold text-xs sm:text-sm md:text-base">
                        {company.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal - Fully Responsive */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-3 sm:p-4 md:p-6">
          {/* Backdrop with blur effect */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={handleModalClose}
          />
          
          {/* Modal Container - Fully responsive */}
          <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto transform transition-all duration-300 scale-100 border border-gray-100 max-h-[95vh] overflow-y-auto">
            {/* Close Button */}
            <button 
              onClick={handleModalClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-all duration-200 hover:scale-105"
            >
              <X size={18} className="sm:hidden" />
              <X size={20} className="hidden sm:block" />
            </button>
            
            {/* Header - Mobile optimized */}
            <div className="bg-gradient-to-r border-6 from-gray-200 to-gray-300 text-white p-4 sm:p-6 md:p-8 rounded-t-2xl sm:rounded-t-3xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full mb-3 sm:mb-4">
                  <MessageSquare size={24} className="text-gray-800 sm:hidden" />
                  <MessageSquare size={32} className="text-gray-800 hidden sm:block" />
                </div>
                <h3 className="text-xl sm:text-2xl text-gray-800 font-bold mb-2">Get Expert Help</h3>
                <p className="text-gray-800 text-lg sm:text-sm">We're here to assist you with your questions</p>
              </div>
            </div>
            
            {/* Form Content - Mobile optimized */}
            <div className="p-4 sm:p-6 md:p-8">
              <div className="space-y-4 sm:space-y-6">
                {/* Name and Contact Row - Stack on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={16} />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2.5 sm:pl-12 sm:pr-4 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-all duration-300 bg-white/80 text-gray-700 placeholder-gray-400 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div className="relative group">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={16} />
                    <input
                      type="tel"
                      name="contact"
                      placeholder="Phone Number"
                      value={formData.contact}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2.5 sm:pl-12 sm:pr-4 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-all duration-300 bg-white/80 text-gray-700 placeholder-gray-400 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                
                {/* Email */}
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={16} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2.5 sm:pl-12 sm:pr-4 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-all duration-300 bg-white/80 text-gray-700 placeholder-gray-400 text-sm sm:text-base"
                    required
                  />
                </div>
                
                {/* Subject */}
                <div className="relative group">
                  <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={16} />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2.5 sm:pl-12 sm:pr-4 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-all duration-300 bg-white/80 text-gray-700 placeholder-gray-400 text-sm sm:text-base"
                    required
                  />
                </div>
                
                {/* Message */}
                <div className="relative group">
                  <MessageSquare className="absolute left-3 top-3 sm:top-4 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={16} />
                  <textarea
                    name="message"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full pl-10 pr-3 py-2.5 sm:pl-12 sm:pr-4 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-all duration-300 resize-none bg-white/80 text-gray-700 placeholder-gray-400 text-sm sm:text-base min-h-[80px] sm:min-h-[100px]"
                    required
                  />
                </div>
                
                {/* Submit Button - Mobile optimized */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#F37E3A] hover:from-orange-500 hover:to-orange-600 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg"
                >
                  <Send size={18} className="sm:hidden" />
                  <Send size={20} className="hidden sm:block" />
                  Send Message
                </button>
              </div>
              
              {/* Footer */}
              <div className="mt-4 sm:mt-6 text-center">
                <p className="text-gray-500 text-xs sm:text-sm">
                  We'll get back to you within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-smooth {
          animation: scroll-smooth 40s linear infinite;
        }
        
        .animate-scroll-smooth:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default HelpSection;