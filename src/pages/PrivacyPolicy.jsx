import React from 'react';

function PrivacyPolicy() {
    return (
        <div className='mt-8'>
            <div className="relative h-54 sm:h-70 md:h-56 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/images/connect_banner.jpg')` }}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-900 px-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-4">
                            Privacy Policy
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-justify">
                <div className="max-w-[1700px] mx-auto">

                    {/* Protection of Information Section */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Protection of Information</h2>

                        <div className="space-y-4">
                            <p className="text-xl text-gray-800 font-medium">
                                COZ CLUB is committed to safeguard its user's privacy.
                            </p>

                            <p className="text-gray-700 text-xl leading-relaxed">
                                COZ CLUB does not sell any information of its clients or associates to any third party unless and until permitted by the user. All the contents of these services are only for general information or use. They do not constitute advice and should not be relied upon in making (or refraining from making) any decision. Any specific advice or replies to queries in any part of the service is/are the personal opinion of such experts/consultants/persons available only to the clients or associates using our services. You acknowledge your right to use the services.
                            </p>
                        </div>
                    </div>

                    {/* Governing Law Section */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Governing Law and Jurisdiction</h2>

                        <div className="space-y-4">
                            <p className="text-gray-700 text-xl leading-relaxed">
                                Subject to terms and conditions set forth herein, any use of the website or its services and all legal disputes arising in connections there with shall be exclusively governed by the Indian Law.
                            </p>

                            <p className="text-gray-700 text-xl leading-relaxed">
                                Non-usage of any services does not entitle you for a refund of any portion of the payment made to us for the respective service.
                            </p>

                            <p className="text-xl text-gray-700">
                                Jurisdiction is Vadodara, India
                            </p>

                        </div>
                    </div>

                    {/* Changes in Privacy Policy Section */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Changes in Privacy Policy</h2>

                        <p className="text-gray-700 text-xl leading-relaxed">
                            The policy may change from time to time so please check periodically.
                        </p>
                    </div>

                    {/* Footer Notice */}
                    <div className="border-t border-gray-200 pt-8">
                        <div className="text-center">
                            <div className="inline-flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F37E3A' }}></div>
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#288EC2' }}></div>
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#6EBD49' }}></div>
                        </div>
                            <p className="text-gray-600 text-lg mt-4">
                                COZ CLUB - Committed to protecting your privacy and data
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;





