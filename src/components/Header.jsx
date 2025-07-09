import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        setOpenDropdown(null); // Close any open dropdowns when toggling mobile menu
    };

    // Updated dropdown items with proper routes
    const dropdownItems = {
        connect: [
            { label: 'Be a member', href: '/connect/membership' },
            { label: 'Producers', href: '/connect/producers' },
            { label: 'Providers', href: '/connect/providers' },
        ],
        consult: [
            { label: 'Export Management', href: '/consult/export-management' },
            { label: 'Project Management', href: '/consult/project-management' },
            { label: 'Operations Management', href: '/consult/operations-management' },
        ],
        coserve: [
            { label: 'Business Processes', href: '/coserve/business-processes' },
            { label: 'Predictive Analysis', href: '/coserve/predictive-analysis' },
            { label: 'Artificial Intelligence', href: '/coserve/artificial-intelligence' },
        ]
    };

    return (
        <header className="bg-white pt-2 sm:pt-4 lg:pt-6 mx-4 lg:mx-10 relative">
            <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-18">
                <div className="flex items-center justify-between h-12 sm:h-14 lg:h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center justify-center">
                            <img
                                src="/images/logo_gif.gif"
                                alt="Company Logo"
                                className="h-6 sm:h-8 lg:h-12 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-end space-x-3">
                        {/* Join Us + Connect Column */}
                        <div className="flex flex-col items-center space-y-3 relative">
                            <Link 
                                to="/about" 
                                className="text-black font-medium cursor-pointer transition-colors text-lg hover:text-gray-600"
                            >
                                About Us
                            </Link>
                            <div className="relative">
                                <button
                                    onClick={() => toggleDropdown('connect')}
                                    className="bg-[#F37E3A] text-white text-lg px-7 py-3 rounded-full font-medium transition-colors flex items-center space-x-1 hover:bg-[#d66a2f]"
                                >
                                    <span>Connect</span>
                                    {openDropdown === 'connect' ?
                                        <ChevronUp className="w-4 h-4" /> :
                                        <ChevronDown className="w-4 h-4" />
                                    }
                                </button>

                                {openDropdown === 'connect' && (
                                    <div className="absolute top-full mt-2 w-60 bg-[#F37E3A] rounded-xl shadow-xl border border-gray-200 z-50">
                                        {dropdownItems.connect.map((item, index) => (
                                            <Link
                                                key={index}
                                                to={item.href}
                                                className={`block px-4 py-2 text-lg rounded-lg font-medium text-white hover:bg-white hover:text-black hover:rounded-lg transition-colors ${index < dropdownItems.connect.length - 1 ? 'border-b border-white' : ''
                                                    }`}
                                                onClick={() => setOpenDropdown(null)}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Log In + Consult Column */}
                        <div className="flex flex-col items-center space-y-3 relative">
                            <Link 
                                to="/location" 
                                className="text-black font-medium cursor-pointer transition-colors text-lg hover:text-gray-600"
                            >
                                Location
                            </Link>
                            <div className="relative">
                                <button
                                    onClick={() => toggleDropdown('consult')}
                                    className="bg-[#288EC2] text-white text-lg px-7 py-3 rounded-full font-medium transition-colors flex items-center space-x-1 hover:bg-[#236f9a]"
                                >
                                    <span>Consult</span>
                                    {openDropdown === 'consult' ?
                                        <ChevronUp className="w-4 h-4" /> :
                                        <ChevronDown className="w-4 h-4" />
                                    }
                                </button>

                                {openDropdown === 'consult' && (
                                    <div className="absolute top-full mt-2 w-60 bg-[#288EC2] rounded-xl shadow-xl border border-gray-200 z-50">
                                        {dropdownItems.consult.map((item, index) => (
                                            <Link
                                                key={index}
                                                to={item.href}
                                                className={`block px-4 py-2 text-lg rounded-lg font-medium text-white hover:bg-white hover:text-black hover:rounded-lg transition-colors ${index < dropdownItems.consult.length - 1 ? 'border-b border-white' : ''
                                                    }`}
                                                onClick={() => setOpenDropdown(null)}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Location + CoServe Column */}
                        <div className="flex flex-col items-center space-y-3 relative">
                            <Link 
                                to="/signin" 
                                className="text-black font-medium cursor-pointer transition-colors text-lg hover:text-gray-600"
                            >
                                Sign In
                            </Link>
                            <div className="relative">
                                <button
                                    onClick={() => toggleDropdown('coserve')}
                                    className="bg-[#6EBD49] text-white text-lg px-7 py-3 rounded-full font-medium transition-colors flex items-center space-x-1 hover:bg-[#5da33e]"
                                >
                                    <span>CoServe</span>
                                    {openDropdown === 'coserve' ?
                                        <ChevronUp className="w-4 h-4" /> :
                                        <ChevronDown className="w-4 h-4" />
                                    }
                                </button>

                                {openDropdown === 'coserve' && (
                                    <div className="absolute top-full mt-2 w-60 bg-[#6EBD49] rounded-xl shadow-xl border border-gray-200 z-50">
                                        {dropdownItems.coserve.map((item, index) => (
                                            <Link
                                                key={index}
                                                to={item.href}
                                                className={`block px-4 py-2 text-lg rounded-lg text-white font-medium hover:bg-white hover:text-black hover:rounded-lg transition-colors ${index < dropdownItems.coserve.length - 1 ? 'border-b border-white' : ''
                                                    }`}
                                                onClick={() => setOpenDropdown(null)}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        >
                            {mobileMenuOpen ? (
                                <X className="block h-6 w-6" />
                            ) : (
                                <Menu className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="lg:hidden relative z-40">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 mt-2 relative z-50">
                            {/* Top navigation items */}
                            <div className="flex flex-col space-y-3 mb-4">
                                <Link 
                                    to="/about" 
                                    className="text-black font-medium cursor-pointer transition-colors text-lg hover:text-gray-600 px-3 py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    About Us
                                </Link>
                                <Link 
                                    to="/location" 
                                    className="text-black font-medium cursor-pointer transition-colors text-lg hover:text-gray-600 px-3 py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Location
                                </Link>
                                <Link 
                                    to="/signin" 
                                    className="text-black font-medium cursor-pointer transition-colors text-lg hover:text-gray-600 px-3 py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Sign In
                                </Link>
                            </div>

                            {/* Connect Section */}
                            <div className="border-t border-gray-200 pt-4">
                                <button
                                    onClick={() => toggleDropdown('connect')}
                                    className="w-full bg-[#F37E3A] text-white text-lg px-6 py-3 rounded-full font-medium transition-colors flex items-center justify-center space-x-2 hover:bg-[#d66a2f] mb-2"
                                >
                                    <span>Connect</span>
                                    {openDropdown === 'connect' ?
                                        <ChevronUp className="w-4 h-4" /> :
                                        <ChevronDown className="w-4 h-4" />
                                    }
                                </button>

                                {openDropdown === 'connect' && (
                                    <div className="bg-[#F37E3A] rounded-xl shadow-xl border border-gray-200 mb-4">
                                        {dropdownItems.connect.map((item, index) => (
                                            <Link
                                                key={index}
                                                to={item.href}
                                                className={`block px-4 py-3 text-lg rounded-lg font-medium text-white hover:bg-white hover:text-black hover:rounded-lg transition-colors ${index < dropdownItems.connect.length - 1 ? 'border-b border-white' : ''
                                                    }`}
                                                onClick={() => {
                                                    setOpenDropdown(null);
                                                    setMobileMenuOpen(false);
                                                }}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Consult Section */}
                            <div className="border-t border-gray-200 pt-4">
                                <button
                                    onClick={() => toggleDropdown('consult')}
                                    className="w-full bg-[#288EC2] text-white text-lg px-6 py-3 rounded-full font-medium transition-colors flex items-center justify-center space-x-2 hover:bg-[#236f9a] mb-2"
                                >
                                    <span>Consult</span>
                                    {openDropdown === 'consult' ?
                                        <ChevronUp className="w-4 h-4" /> :
                                        <ChevronDown className="w-4 h-4" />
                                    }
                                </button>

                                {openDropdown === 'consult' && (
                                    <div className="bg-[#288EC2] rounded-xl shadow-xl border border-gray-200 mb-4">
                                        {dropdownItems.consult.map((item, index) => (
                                            <Link
                                                key={index}
                                                to={item.href}
                                                className={`block px-4 py-3 text-lg rounded-lg font-medium text-white hover:bg-white hover:text-black hover:rounded-lg transition-colors ${index < dropdownItems.consult.length - 1 ? 'border-b border-white' : ''
                                                    }`}
                                                onClick={() => {
                                                    setOpenDropdown(null);
                                                    setMobileMenuOpen(false);
                                                }}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* CoServe Section */}
                            <div className="border-t border-gray-200 pt-4">
                                <button
                                    onClick={() => toggleDropdown('coserve')}
                                    className="w-full bg-[#6EBD49] text-white text-lg px-6 py-3 rounded-full font-medium transition-colors flex items-center justify-center space-x-2 hover:bg-[#5da33e] mb-2"
                                >
                                    <span>CoServe</span>
                                    {openDropdown === 'coserve' ?
                                        <ChevronUp className="w-4 h-4" /> :
                                        <ChevronDown className="w-4 h-4" />
                                    }
                                </button>

                                {openDropdown === 'coserve' && (
                                    <div className="bg-[#6EBD49] rounded-xl shadow-xl border border-gray-200 mb-4">
                                        {dropdownItems.coserve.map((item, index) => (
                                            <Link
                                                key={index}
                                                to={item.href}
                                                className={`block px-4 py-3 text-lg rounded-lg text-white font-medium hover:bg-white hover:text-black hover:rounded-lg transition-colors ${index < dropdownItems.coserve.length - 1 ? 'border-b border-white' : ''
                                                    }`}
                                                onClick={() => {
                                                    setOpenDropdown(null);
                                                    setMobileMenuOpen(false);
                                                }}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Click outside to close dropdowns - Desktop only */}
            {openDropdown && !mobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setOpenDropdown(null)}
                />
            )}
        </header>
    );
};

export default Header;