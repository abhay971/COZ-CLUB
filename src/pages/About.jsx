import React from 'react'

function About() {
    return (
        <div className='mt-4 sm:mt-8'>
            {/* Hero Section */}
            <div className="relative h-54 sm:h-70 md:h-56 bg-cover bg-center bg-no-repeat" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/images/connect_banner.jpg')`
            }}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-900 px-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-4">
                            <span className="relative">
                                About Us
                                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 sm:w-26 h-0.5 bg-orange-400"></span>
                            </span>
                        </h1>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-white py-12 sm:py-20">
                <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">

                    {/* COZ CLUB Definition */}
                    <div className="text-center mb-20">
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                            {/* COZ */}
                            <div className="text-center group">
                                <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full border-2 flex items-center justify-center mb-4 mx-auto shadow-sm group-hover:shadow-md transition-shadow" style={{ borderColor: '#F37E3A' }}>
                                    <span className="text-3xl">🎯</span>
                                </div>
                                <div className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2" style={{ color: '#F37E3A' }}>COZ</div>
                                <div className="text-gray-600">A Purpose</div>
                            </div>

                            {/* Plus */}
                            <div className="text-3xl lg:text-4xl font-light text-gray-400">+</div>

                            {/* CLUB */}
                            <div className="text-center group">
                                <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full border-2 flex items-center justify-center mb-4 mx-auto shadow-sm group-hover:shadow-md transition-shadow" style={{ borderColor: '#288EC2' }}>
                                    <span className="text-3xl">🤝</span>
                                </div>
                                <div className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2" style={{ color: '#288EC2' }}>CLUB</div>
                                <div className="text-gray-600">Producers & Providers</div>
                            </div>

                            {/* Equals */}
                            <div className="text-3xl lg:text-4xl font-light text-gray-400">=</div>

                            {/* Result */}
                            <div className="text-center group">
                                <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full border-2 flex items-center justify-center mb-4 mx-auto shadow-sm group-hover:shadow-md transition-shadow" style={{ borderColor: '#6EBD49' }}>
                                    <span className="text-3xl">🌍</span>
                                </div>
                                <div className="text-2xl lg:text-3xl font-bold mb-2" style={{ color: '#6EBD49' }}>GO GLOBAL</div>
                            </div>
                        </div>
                    </div>

                    {/* Purpose & Principles Section */}
                    <div className="grid lg:grid-cols-3 gap-8 mb-20">
                        {/* Purpose */}
                        <div className="lg:col-span-2">
                            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 h-full border-l-7 relative" style={{ borderColor: '#288EC2' }}>
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Our Purpose</h2>
                                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                                    To <span className="font-semibold px-2 py-1 rounded text-white" style={{ color: '#F37E3A' }}>CONNECT</span>,
                                    <span className="font-semibold px-2 py-1 rounded text-white mx-1" style={{ color: '#288EC2' }}>CONSULT</span> and
                                    <span className="font-semibold px-2 py-1 rounded text-white" style={{ color: '#6EBD49' }}>CoSERVE</span> global businesses so the right product and service is delivered at the right cost to the right place and in the right time.
                                </p>
                                <div className="absolute bottom-4 right-4 text-6xl opacity-20" style={{ color: '#288EC2' }}>🌐</div>
                            </div>
                        </div>


                        {/* Principles */}
                        <div className="lg:col-span-1">
                            <div className="bg-gray-50 rounded-2xl p-8 h-full">
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">Our Values</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                                            <img src="/images/honest_logo.png" alt="Honesty" className="w-7 h-7 object-contain" />
                                        </div>
                                        <span className="text-lg font-semibold text-gray-800">Honesty</span>
                                    </div>
                                    <div className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                                            <img src="/images/sincerity_logo.png" alt="Sincerity" className="w-7 h-7 object-contain" />
                                        </div>
                                        <span className="text-lg font-semibold text-gray-800">Sincerity</span>
                                    </div>
                                    <div className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                                            <img src="/images/integration_logo.png" alt="Integrity" className="w-7 h-7 object-contain" />
                                        </div>
                                        <span className="text-lg font-semibold text-gray-800">Integrity</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* Stats */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-4xl font-bold mb-3 text-gray-800">18%</div>
                                <div className="text-gray-600 font-medium">World's Population</div>
                                <div className="text-sm text-gray-600 font-medium mt-1">Lives in India</div>
                                <div className="w-8 h-1 rounded-full mx-auto mt-3" style={{ backgroundColor: '#6EBD49' }}></div>
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-4xl font-bold mb-3 text-gray-800">65%</div>
                                <div className="text-gray-600 font-medium">Under 35</div>
                                <div className="text-sm text-gray-600 font-medium mt-1">Young Workforce</div>
                                <div className="w-8 h-1 rounded-full mx-auto mt-3" style={{ backgroundColor: '#288EC2' }}></div>
                            </div>
                        </div>

                        {/* Main Description */}
                        <div className="lg:col-span-3">
                            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 h-full shadow-sm">
                                <div className="flex flex-col justify-center h-full">
                                    <div className="space-y-6 text-justify">
                                        <p className="text-lg lg:text-xl text-gray-800 leading-relaxed">
                                            <span className="font-bold text-2xl lg:text-3xl" style={{ color: '#F37E3A' }}>COZ CLUB</span> is a consortium of Global Business practitioners to streamline commerce with and in India. The world is becoming increasingly flat and the marketplace is shrinking rapidly.
                                        </p>
                                        <p className="text-lg lg:text-xl text-gray-800 leading-relaxed">
                                            We develop and implement customized solutions for our Customers and personalized services for our Members to achieve overall sustainable growth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="lg:col-span-1">
                            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 h-full text-center flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                                <div className="text-xl font-bold text-gray-800 mb-2">Join Our</div>
                                <div className="text-2xl font-bold text-gray-800 mb-6">Movement</div>
                                <div className="flex justify-center space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-gray-300" style={{ backgroundColor: '#F37E3A' }}></div>
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#288EC2' }}></div>
                                    <div className="w-2 h-2 rounded-full bg-gray-300" style={{ backgroundColor: '#6EBD49' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About

// import React from 'react'

// function About() {
//     return (
//         <div className='mt-4 sm:mt-8'>
//             {/* Hero Section */}
//             <div className="relative h-40 sm:h-54 md:h-56 lg:h-64 bg-cover bg-center bg-no-repeat" style={{
//                 backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/images/connect_banner.jpg')`
//             }}>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="text-center text-gray-900 px-4">
//                         <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4">
//                             <span className="relative">
//                                 About Us
//                                 <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 sm:w-14 md:w-26 h-0.5" style={{ backgroundColor: '#F37E3A' }}></span>
//                             </span>
//                         </h1>
//                     </div>
//                 </div>
//             </div>

//             {/* Infographic Style Layout */}
//             <div className="bg-white py-4 sm:py-8">
//                 <div className="max-w-[1700px] mx-auto px-2 sm:px-4">

//                     {/* Top Section - COZ CLUB Definition */}
//                     <div className="relative mb-6 sm:mb-8">
//                         {/* Mobile Layout (Stack vertically) */}
//                         <div className="block lg:hidden">
//                             <div className="space-y-4">
//                                 {/* COZ Block */}
//                                 <div className="text-center">
//                                     <div className="relative p-4 sm:p-6 rounded-2xl sm:rounded-3xl mx-auto max-w-xs" style={{ backgroundColor: '#F37E3A' }}>
//                                         <div className="text-white">
//                                             <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">COZ</div>
//                                             <div className="text-sm sm:text-lg md:text-xl font-medium">A PURPOSE</div>
//                                         </div>
//                                         <div className="absolute -top-3 -right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center">
//                                             <span className="text-lg sm:text-2xl">🎯</span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Plus Sign */}
//                                 <div className="text-center">
//                                     <div className="text-4xl sm:text-5xl font-bold" style={{ color: '#288EC2' }}>+</div>
//                                 </div>

//                                 {/* CLUB Block */}
//                                 <div className="text-center">
//                                     <div className="relative p-4 sm:p-6 rounded-2xl sm:rounded-3xl mx-auto max-w-xs" style={{ backgroundColor: '#288EC2' }}>
//                                         <div className="text-white">
//                                             <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">CLUB</div>
//                                             <div className="text-sm sm:text-lg md:text-xl font-medium">PRODUCERS & PROVIDERS</div>
//                                         </div>
//                                         <div className="absolute -top-3 -right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center">
//                                             <span className="text-lg sm:text-2xl">🤝</span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Equals Sign */}
//                                 <div className="text-center">
//                                     <div className="text-4xl sm:text-5xl font-bold" style={{ color: '#6EBD49' }}>=</div>
//                                 </div>

//                                 {/* Result Block */}
//                                 <div className="text-center">
//                                     <div className="relative p-4 sm:p-6 rounded-2xl sm:rounded-3xl mx-auto max-w-xs" style={{ backgroundColor: '#6EBD49' }}>
//                                         <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">GO</div>
//                                         <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">GLOBAL</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Desktop Layout (Horizontal) */}
//                         <div className="hidden lg:block">
//                             <div className="grid grid-cols-11 gap-4 items-center">
//                                 {/* COZ Block */}
//                                 <div className="col-span-3 text-center">
//                                     <div className="relative p-6 rounded-3xl" style={{ backgroundColor: '#F37E3A' }}>
//                                         <div className="text-white">
//                                             <div className="text-4xl font-bold mb-2">COZ</div>
//                                             <div className="text-xl font-medium">A PURPOSE</div>
//                                         </div>
//                                         <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center">
//                                             <span className="text-2xl">🎯</span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Plus Sign */}
//                                 <div className="col-span-1 text-center">
//                                     <div className="text-6xl font-bold" style={{ color: '#288EC2' }}>+</div>
//                                 </div>

//                                 {/* CLUB Block */}
//                                 <div className="col-span-3 text-center">
//                                     <div className="relative p-6 rounded-3xl" style={{ backgroundColor: '#288EC2' }}>
//                                         <div className="text-white">
//                                             <div className="text-4xl font-bold mb-2">CLUB</div>
//                                             <div className="text-xl font-medium">PRODUCERS & PROVIDERS</div>
//                                         </div>
//                                         <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center">
//                                             <span className="text-2xl">🤝</span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Equals Sign */}
//                                 <div className="col-span-1 text-center">
//                                     <div className="text-6xl font-bold" style={{ color: '#6EBD49' }}>=</div>
//                                 </div>

//                                 {/* Result Block */}
//                                 <div className="col-span-3 text-center">
//                                     <div className="relative p-6 rounded-3xl" style={{ backgroundColor: '#6EBD49' }}>
//                                         <div className="text-4xl font-bold text-white">GO</div>
//                                         <div className="text-4xl font-bold text-white">GLOBAL</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Middle Section - Purpose & Principles */}
//                     <div className="mb-6 sm:mb-8">
//                         {/* Mobile Layout (Stack vertically) */}
//                         <div className="block lg:hidden space-y-6">
//                             {/* Purpose Block */}
//                             <div className="relative p-4 sm:p-6 rounded-2xl sm:rounded-3xl" style={{ backgroundColor: '#f8f9fa', border: '4px solid #288EC2' }}>
//                                 <div className="absolute -top-4 left-4 px-3 py-1 rounded-full text-white font-bold text-sm sm:text-lg" style={{ backgroundColor: '#288EC2' }}>
//                                     PURPOSE
//                                 </div>
//                                 <div className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center">
//                                     To <span className="font-bold" style={{ color: '#F37E3A' }}>CONNECT</span>,
//                                     <span className="font-bold" style={{ color: '#288EC2' }}> CONSULT</span> and
//                                     <span className="font-bold" style={{ color: '#6EBD49' }}> CoSERVE</span> the global businesses so the right product and service is delivered at the right cost to the right place and in the right time.
//                                 </div>
//                             </div>

//                             {/* Principles Block */}
//                             <div className="relative">
//                                 <div className="absolute -top-4 left-4 px-3 py-1 rounded-full text-white font-bold text-sm sm:text-lg" style={{ backgroundColor: '#F37E3A' }}>
//                                     PRINCIPLES
//                                 </div>
//                                 <div className="space-y-3 mt-4">
//                                     {/* Honesty */}
//                                     <div className="flex items-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border-2 sm:border-4 hover:shadow-lg transition-shadow" style={{ borderColor: '#F37E3A' }}>
//                                         <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 overflow-hidden">
//                                             <img src="/images/honest_logo.png" alt="Honesty" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
//                                         </div>
//                                         <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">Honesty</div>
//                                     </div>

//                                     {/* Sincerity */}
//                                     <div className="flex items-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border-2 sm:border-4 hover:shadow-lg transition-shadow" style={{ borderColor: '#288EC2' }}>
//                                         <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 overflow-hidden">
//                                             <img src="/images/sincerity_logo.png" alt="Sincerity" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
//                                         </div>
//                                         <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">Sincerity</div>
//                                     </div>

//                                     {/* Integrity */}
//                                     <div className="flex items-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border-2 sm:border-4 hover:shadow-lg transition-shadow" style={{ borderColor: '#6EBD49' }}>
//                                         <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 overflow-hidden">
//                                             <img src="/images/integration_logo.png" alt="Integrity" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
//                                         </div>
//                                         <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">Integrity</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Desktop Layout (Side by side) */}
//                         <div className="hidden lg:grid grid-cols-12 gap-6">
//                             {/* Purpose - Large Left Block */}
//                             <div className="col-span-7">
//                                 <div className="relative h-full p-8 rounded-3xl flex items-center justify-center" style={{ backgroundColor: '#f8f9fa', border: '6px solid #288EC2' }}>
//                                     <div className="absolute -top-6 left-8 px-4 py-2 rounded-full text-white font-bold text-xl" style={{ backgroundColor: '#288EC2' }}>
//                                         PURPOSE
//                                     </div>
//                                     <div className="text-xl text-gray-700 leading-relaxed text-center">
//                                         To <span className="font-bold" style={{ color: '#F37E3A' }}>CONNECT</span>,
//                                         <span className="font-bold" style={{ color: '#288EC2' }}> CONSULT</span> and
//                                         <span className="font-bold" style={{ color: '#6EBD49' }}> CoSERVE</span> the global businesses so the right product and service is delivered at the right cost to the right place and in the right time.
//                                     </div>
//                                     <div className="absolute bottom-4 right-4 text-6xl opacity-20" style={{ color: '#288EC2' }}>🌐</div>
//                                 </div>
//                             </div>

//                             {/* Principles - Right Column */}
//                             <div className="col-span-5">
//                                 <div className="relative h-full">
//                                     <div className="absolute -top-6 left-4 px-4 py-2 rounded-full text-white font-bold text-xl" style={{ backgroundColor: '#F37E3A' }}>
//                                         PRINCIPLES
//                                     </div>

//                                     <div className="space-y-4 mt-4">
//                                         {/* Honesty */}
//                                         <div className="flex items-center p-4 rounded-2xl bg-white border-4 hover:shadow-lg transition-shadow" style={{ borderColor: '#F37E3A' }}>
//                                             <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 overflow-hidden">
//                                                 <img src="/images/honest_logo.png" alt="Honesty" className="w-8 h-8 object-contain" />
//                                             </div>
//                                             <div className="text-2xl font-bold text-gray-800">Honesty</div>
//                                         </div>

//                                         {/* Sincerity */}
//                                         <div className="flex items-center p-4 rounded-2xl bg-white border-4 hover:shadow-lg transition-shadow" style={{ borderColor: '#288EC2' }}>
//                                             <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 overflow-hidden">
//                                                 <img src="/images/sincerity_logo.png" alt="Sincerity" className="w-8 h-8 object-contain" />
//                                             </div>
//                                             <div className="text-2xl font-bold text-gray-800">Sincerity</div>
//                                         </div>

//                                         {/* Integrity */}
//                                         <div className="flex items-center p-4 rounded-2xl bg-white border-4 hover:shadow-lg transition-shadow" style={{ borderColor: '#6EBD49' }}>
//                                             <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 overflow-hidden">
//                                                 <img src="/images/integration_logo.png" alt="Integrity" className="w-8 h-8 object-contain" />
//                                             </div>
//                                             <div className="text-2xl font-bold text-gray-800">Integrity</div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Bottom Section - Description */}
//                     <div>
//                         {/* Mobile Layout (Stack vertically) */}
//                         <div className="block lg:hidden space-y-4">
//                             {/* Stats Blocks */}
//                             <div className="grid grid-cols-2 gap-4">
//                                 <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl text-center" style={{ backgroundColor: '#6EBD49' }}>
//                                     <div className="text-white">
//                                         <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">18%</div>
//                                         <div className="text-sm sm:text-base md:text-lg">World's Population</div>
//                                         <div className="text-xs sm:text-sm mt-2">Lives in India</div>
//                                     </div>
//                                 </div>
//                                 <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl text-center" style={{ backgroundColor: '#F37E3A' }}>
//                                     <div className="text-white">
//                                         <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">65%</div>
//                                         <div className="text-sm sm:text-base md:text-lg">Under 35</div>
//                                         <div className="text-xs sm:text-sm mt-2">Young Workforce</div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Main Description */}
//                             <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl" style={{ backgroundColor: '#f8f9fa', border: '4px solid #6EBD49' }}>
//                                 <div className="text-justify">
//                                     <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
//                                         <span className="font-bold text-lg sm:text-xl md:text-2xl" style={{ color: '#F37E3A' }}>COZ CLUB</span> is a consortium of Global Business practitioners to streamline commerce with and in India. The world is becoming increasingly flat and the marketplace is shrinking rapidly.
//                                     </p>
//                                     <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
//                                         We develop and implement customized solutions for our Customers and personalized services for our Members to achieve overall sustainable growth.
//                                     </p>
//                                 </div>
//                             </div>

//                             {/* Join Us Block */}
//                             <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl text-center" style={{ backgroundColor: '#288EC2' }}>
//                                 <div className="text-white">
//                                     <div className="text-2xl sm:text-3xl md:text-4xl mb-4">🚀</div>
//                                     <div className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Join The</div>
//                                     <div className="text-xl sm:text-2xl md:text-3xl font-bold">Movement</div>
//                                     <div className="mt-4 flex justify-center space-x-2">
//                                         <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
//                                         <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
//                                         <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Desktop Layout (Side by side) */}
//                         <div className="hidden lg:grid grid-cols-12 gap-6">
//                             {/* Stats Block */}
//                             <div className="col-span-3">
//                                 <div className="p-6 rounded-3xl text-center" style={{ backgroundColor: '#6EBD49' }}>
//                                     <div className="text-white">
//                                         <div className="text-4xl font-bold mb-2">18%</div>
//                                         <div className="text-lg">World's Population</div>
//                                         <div className="text-sm mt-2">Lives in India</div>
//                                     </div>
//                                 </div>
//                                 <div className="mt-4 p-6 rounded-3xl text-center" style={{ backgroundColor: '#F37E3A' }}>
//                                     <div className="text-white">
//                                         <div className="text-4xl font-bold mb-2">65%</div>
//                                         <div className="text-lg">Under 35</div>
//                                         <div className="text-sm mt-2">Young Workforce</div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Main Description */}
//                             <div className="col-span-6">
//                                 <div className="p-8 rounded-3xl h-full flex items-center justify-center" style={{ backgroundColor: '#f8f9fa', border: '6px solid #6EBD49' }}>
//                                     <div className="text-justify">
//                                         <p className="text-lg text-gray-700 leading-relaxed mb-4">
//                                             <span className="font-bold text-2xl" style={{ color: '#F37E3A' }}>COZ CLUB</span> is a consortium of Global Business practitioners to streamline commerce with and in India. The world is becoming increasingly flat and the marketplace is shrinking rapidly.
//                                         </p>
//                                         <p className="text-lg text-gray-700 leading-relaxed">
//                                             We develop and implement customized solutions for our Customers and personalized services for our Members to achieve overall sustainable growth.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Join Us Block */}
//                             <div className="col-span-3">
//                                 <div className="p-6 rounded-3xl h-full text-center flex flex-col justify-center" style={{ backgroundColor: '#288EC2' }}>
//                                     <div className="text-white">
//                                         <div className="text-4xl mb-4">🚀</div>
//                                         <div className="text-2xl font-bold mb-2">Join The</div>
//                                         <div className="text-3xl font-bold">Movement</div>
//                                         <div className="mt-4 flex justify-center space-x-2">
//                                             <div className="w-3 h-3 rounded-full bg-white"></div>
//                                             <div className="w-3 h-3 rounded-full bg-white"></div>
//                                             <div className="w-3 h-3 rounded-full bg-white"></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default About