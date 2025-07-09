import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  
  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <footer className="bg-[#272727] text-gray-400 py-10 px-2">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Navigation Section - Left (4 columns) */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-white text-xl font-semibold mb-6">Navigation</h3>
                <nav className="space-y-3">
                  <Link 
                    to="/connect/membership" 
                    className={`block transition-colors ${
                      isActive('/connect/membership') 
                        ? 'text-[#F37E3A]' 
                        : 'hover:text-[#F37E3A]'
                    }`}
                  >
                    Connect
                  </Link>
                  <Link 
                    to="/consult/export-management" 
                    className={`block transition-colors ${
                      isActive('/consult/export-management') 
                        ? 'text-[#F37E3A]' 
                        : 'hover:text-[#F37E3A]'
                    }`}
                  >
                    Consult
                  </Link>
                  <Link 
                    to="/coserve/business-processes" 
                    className={`block transition-colors ${
                      isActive('/coserve/business-processes') 
                        ? 'text-[#F37E3A]' 
                        : 'hover:text-[#F37E3A]'
                    }`}
                  >
                    CoServe
                  </Link>
                  <Link 
                    to="/contact" 
                    className={`block transition-colors ${
                      isActive('/contact') 
                        ? 'text-[#F37E3A]' 
                        : 'hover:text-[#F37E3A]'
                    }`}
                  >
                    Contact
                  </Link>
                  <Link 
                    to="/about" 
                    className={`block transition-colors ${
                      isActive('/about') 
                        ? 'text-[#F37E3A]' 
                        : 'hover:text-[#F37E3A]'
                    }`}
                  >
                    About Us
                  </Link>
                </nav>
              </div>

              <div className="pt-12">
                <nav className="space-y-3">
                  <Link 
                    to="/why-india" 
                    className={`block transition-colors ${
                      isActive('/why-india') 
                        ? 'text-[#F37E3A]' 
                        : 'hover:text-[#F37E3A]'
                    }`}
                  >
                    Why India?
                  </Link>
                  <Link 
                    to="/terms-of-use" 
                    className={`block transition-colors ${
                      isActive('/terms-of-use') 
                        ? 'text-[#F37E3A]' 
                        : 'hover:text-[#F37E3A]'
                    }`}
                  >
                    Terms of Use
                  </Link>
                  <Link 
                    to="/privacy-policy" 
                    className={`block transition-colors ${
                      isActive('/privacy-policy') 
                        ? 'text-[#F37E3A]' 
                        : 'hover:text-[#F37E3A]'
                    }`}
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    to="/refund-policy" 
                    className={`block transition-colors ${
                      isActive('/refund-policy') 
                        ? 'text-[#F37E3A]' 
                        : 'hover:text-[#F37E3A]'
                    }`}
                  >
                    Refund Policy
                  </Link>
                  <Link 
                    to="/cancellation-policy" 
                    className={`block transition-colors ${
                      isActive('/cancellation-policy') 
                        ? 'text-[#F37E3A]' 
                        : 'hover:text-[#F37E3A]'
                    }`}
                  >
                    Cancellation Policy
                  </Link>
                </nav>
              </div>
            </div>
          </div>

          {/* Locate Us Section - Center (5 columns) */}
          <div className="lg:col-span-5">
            <h3 className="text-white text-xl font-semibold mb-3 text-center">Locate Us</h3>
            <div className="mb-6 text-center">
              <a
                href="mailto:contact@cozclub.com"
                className="text-gray-300 flex items-center justify-center gap-2 mb-0.5 hover:text-[#F37E3A] transition-colors">
                <Mail size={16} />
                contact@cozclub.com
              </a>
              <p className="text-gray-300 flex items-center justify-center gap-2">
                <Phone size={16} />
                +91 9274166689
              </p>
            </div>

            {/* Addresses - Better Layout */}
            <div className="space-y-6 flex">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full flex-shrink-0 mt-1 overflow-hidden">
                  <img
                    src="/images/flagimg.png"
                    alt="India Flag"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-sm text-gray-300">
                  <span>5 – Laxmi Society, 2<sup>nd</sup> Floor, O.P. Road, Vadodara – 390007,</span>
                  <p>Gujarat, INDIA.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full flex-shrink-0 mt-1 overflow-hidden">
                  <img
                    src="/images/usa_icon.png"
                    alt="USA Flag"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-sm text-gray-300">
                  <span>6313 Plumcreek Road, Frisco, Texas – 75036,</span>
                  <p>USA.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Logo and Social Media Section - Right (3 columns) */}
          <div className="lg:col-span-3 flex flex-col items-center">
            {/* Logo */}
            <div className="mb-8">
              <Link to="/" className="text-white text-2xl font-bold">
                <img
                  src="/images/footer_logo.png"
                  alt="Your Logo"
                  className="h-12 w-auto"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="hidden bg-gradient-to-r from-orange-400 via-red-500 to-blue-600 bg-clip-text text-transparent font-bold text-3xl">
                  YOUR LOGO
                </span>
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-[#717171] p-4 rounded-xl transition-all duration-300 ease-in-out group overflow-hidden hover:bg-[#F37E3A]"
              >
                <img
                  src="/images/linkedin.png"
                  alt="LinkedIn"
                  className="w-6 h-6 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-[#717171] p-4 rounded-xl transition-all duration-300 ease-in-out group overflow-hidden hover:bg-[#F37E3A]"
              >
                <img
                  src="/images/facebook.png"
                  alt="Facebook"
                  className="w-6 h-6 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-[#717171] p-4 rounded-xl transition-all duration-300 ease-in-out group overflow-hidden hover:bg-[#F37E3A]"
              >
                <img
                  src="/images/instagram.png"
                  alt="Instagram"
                  className="w-6 h-6 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-[#717171] p-4 rounded-xl transition-all duration-300 ease-in-out group overflow-hidden hover:bg-[#F37E3A]"
              >
                <img
                  src="/images/twitter.png"
                  alt="Twitter"
                  className="w-6 h-6 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-600">
          <p className="text-gray-500 text-sm">
            © COZ CLUB 2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;