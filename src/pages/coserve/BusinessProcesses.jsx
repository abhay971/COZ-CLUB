import React, { useState, useEffect } from 'react'
import { X, ArrowRight, Send, User, Phone, Mail, MessageSquare, Tag } from 'lucide-react'

function BusinessProcesses() {
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

    return (
        <>
            <div className='mt-8'>
                <div className="relative h-54 sm:h-70 md:h-56 bg-cover bg-center bg-no-repeat" style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/images/connect_banner.jpg')`
                }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-gray-900 px-4">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-4">
                                <span className="relative">
                                    Business Process
                                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 sm:w-26 h-0.5 bg-orange-400"></span>
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Three Cards Section */}
            <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-[1700px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 - Orange */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-[#F37E3A] border-t-8">
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                    Create Value
                                </h3>
                                {/* <div className="flex justify-end">
                                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        {/* Card 2 - Blue */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-[#288EC2] border-t-8">
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                    Drive Delivery
                                </h3>
                                {/* <div className="flex justify-end">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        {/* Card 3 - Green */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-[#6EBD49] border-t-8">
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                    Enhance Efficiency
                                </h3>
                                {/* <div className="flex justify-end">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* Description Text */}
                    <div className="mt-12 max-w-[1700px] mx-auto">
                        <p className="text-gray-700 font-medium text-[22px] leading-relaxed text-justify">
                            Shared Services refer to the clustering of non-core but vital functions like financial operations, procurement, logistics, inventory management, and sales support into centralized units where these units standardize processes and adopt best practices and use technology for achieving operational excellence. Whether it’s procure-to-pay process coordination, customer service, or auditing of financial performance, shared services allow core business departments to focus on strategic objectives while support functions get their projects done quickly, reliably, and accurately.
                        </p>
                    </div>
                </div>
            </div>

            {/* We Help to Section */}
            <div className="pt-5 px-4 pb-10 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-[1700px] mx-auto">
                    <div className="text-left mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            We Help to...
                            <div className="w-16 h-1 bg-orange-400 mt-2"></div>
                        </h2>
                    </div>

                    {/* First Row - 3 cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* Identify */}
                        <div className="bg-white rounded-2xl shadow-2xl px-10 py-6 text-center">
                            <div className="mb-4 flex justify-center">
                                <img
                                    src="/images/cost_saving.png"
                                    alt="Identify"
                                    className="w-16 h-16 object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Save</h3>
                            <p className="text-gray-800 text-xl leading-relaxed">
                                Tap into a talent pool with lower labour costs
                            </p>
                        </div>

                        {/* Implement */}
                        <div className="bg-white rounded-2xl shadow-2xl px-10 py-6 text-center">
                            <div className="mb-4 flex justify-center">
                                <img
                                    src="/images/lower_overheads.png"
                                    alt="Implement"
                                    className="w-16 h-16 object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Reduce</h3>
                            <p className="text-gray-800 text-xl leading-relaxed">
                                Reduce expenses related to infrastructure, equipment, and training
                            </p>
                        </div>

                        {/* Audit */}
                        <div className="bg-white rounded-2xl shadow-2xl px-10 py-6 text-center">
                            <div className="mb-4 flex justify-center">
                                <img
                                    src="/images/improve_productivity.png"
                                    alt="Audit"
                                    className="w-16 h-16 object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Focus</h3>
                            <p className="text-gray-800 text-xl leading-relaxed">
                                Free up internal resources to focus on core competencies for higher productivity
                            </p>
                        </div>
                    </div>

                    {/* Second Row - 2 cards centered */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
                            {/* Assure */}
                            <div className="bg-white rounded-2xl shadow-2xl px-10 py-6 text-center">
                                <div className="mb-4 flex justify-center">
                                    <img
                                        src="/images/access_to_technology.png"
                                        alt="Assure"
                                        className="w-16 h-16 object-contain"
                                    />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Advance</h3>
                                <p className="text-gray-800 text-xl leading-relaxed">
                                    Benefit from the advanced technology and cutting-edge solutions for seamless growth
                                </p>
                            </div>

                            {/* Distribute */}
                            <div className="bg-white rounded-2xl shadow-2xl px-10 py-6 text-center">
                                <div className="mb-4 flex justify-center">
                                    <img
                                        src="/images/round_the_clock.png"
                                        alt="Distribute"
                                        className="w-16 h-16 object-contain"
                                    />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Deliver</h3>
                                <p className="text-gray-800 text-xl leading-relaxed">
                                    Improve customer satisfaction and meet deadlines thru round-the-clock operations support
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Help Section - Extracted from first code */}
            <div className="relative">
                {/* Main Help Section */}
                <div className="bg-black text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-[1700px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-center lg:text-left leading-relaxed max-w-4xl">
                            We help you to focus on your core competencies by providing diligent support in the non-core business functions!
                        </h2>
                        <button
                            onClick={() => setShowForm(true)}
                            className="bg-[#F37E3A] hover:bg-[#6EBD49] text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 text-sm sm:text-base whitespace-nowrap flex-shrink-0"
                        >
                            Inquire Now
                            <ArrowRight size={16} className="sm:hidden" />
                            <ArrowRight size={20} className="hidden sm:block" />
                        </button>
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
            </div>
        </>
    )
}

export default BusinessProcesses