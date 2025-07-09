import React from 'react'

function TermsOfUse() {
    return (
        <div className='mt-8'>
            <div className="relative h-54 sm:h-70 md:h-56 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/images/connect_banner.jpg')` }}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-900 px-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-4">
                            <span className="relative">
                                Terms of Use
                                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 sm:w-26 h-0.5" style={{ backgroundColor: '#F37E3A' }}></span>
                            </span>
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-justify">
                <div className="max-w-[1700px] mx-auto">

                    {/* Introduction */}
                    <div className="mb-12">
                        <p className="text-xl text-gray-700 leading-relaxed">
                            By accessing the website and its pages, you declare that you acknowledge to the terms and conditions of use under all applicable laws and regulations. If you do not agree, please abstain from further use of website.
                        </p>
                    </div>

                    {/* Website Purpose */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">
                            Our Purpose
                        </h2>
                        <div className="mb-6">
                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                The aim of this website is to advise and assist the businesses on investing in India and importing from India based on their individual needs and requirements. It offers a complete solution, which one can use for his/her organization in several forms like:
                            </p>
                            <div className="space-y-4 ml-4">
                                <div className="flex items-start">
                                    <span className="w-2 h-2 rounded-full mt-2 mr-4 bg-gray-800"></span>
                                    <span className="text-xl text-gray-700">Instant connectivity with the distant clients.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="w-2 h-2 rounded-full mt-2 mr-4 bg-gray-800"></span>
                                    <span className="text-xl text-gray-700">Customized solutions through specialized consulting practices.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="w-2 h-2 rounded-full mt-2 mr-4 bg-gray-800"></span>
                                    <span className="text-xl text-gray-700">Real-time guidance by full-time practitioners to conduct business with and in India.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Service Information */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">
                            Service Information
                        </h2>
                        <div className="mb-6">
                            <p className="text-xl leading-relaxed text-gray-700">
                                It provides information about varied manufacturers and providers; an opportunity to choose from diversified products and services, thus making it the most comprehensive tool for enhancing the growth of your business.
                            </p>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">
                            Disclaimer
                        </h2>
                        <div className="mb-6">
                            <p className="text-xl text-gray-700 leading-relaxed mb-4">
                                The information from or through this service is provided on "AS IS" basis, and all warranties, expressed or implied of any kind, regarding any matter pertaining to any goods, service or channel, including without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement are disclaimed and excluded.
                            </p>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                COZ CLUB makes reasonable efforts in order to ensure the reliability of the information provided on the website but makes no warranty or representation or whatsoever with respect to accuracy/reliability of the information provided on the website. It will be the sole responsibility of the associate to verify any information before entering into any business terms.
                            </p>
                        </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">
                            Terms and Conditions
                        </h2>
                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed text-xl">
                                You agree & accept that all services provided by COZ CLUB would commence only after complete payment of the agreed amount.
                            </p>

                            <p className="text-gray-700 leading-relaxed text-xl">
                                You agree that under any circumstances, the amount of compensation claimed because of any reason would not exceed the amount actually paid for using COZ CLUB services.
                            </p>

                            <p className="text-gray-700 leading-relaxed text-xl">
                                You agree and confirm that COZ CLUB may, at its sole discretion, change the pricing structure at any time without prior intimation. However, this will only apply to future period/s.
                            </p>
                        </div>
                    </div>

                    {/* Violation Notice */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Important Notice</h3>
                        <p className="text-xl leading-relaxed text-gray-700">
                            The violation of the terms & conditions will result in cancellation of services and no refund will be made.
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="text-center py-8 border-t border-gray-200">
                        <div className="inline-flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F37E3A' }}></div>
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#288EC2' }}></div>
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#6EBD49' }}></div>
                        </div>
                        <p className="text-gray-700 mt-4">
                            Thank you for choosing COZ CLUB for your business needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsOfUse