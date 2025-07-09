import React, { useState } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    companyName: '',
    category: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <div className='mt-8 bg-white min-h-screen'>
      {/* Header Section */}
      <div className="relative h-54 sm:h-70 md:h-56 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/images/connect_banner.jpg')`
      }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-gray-900 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-4">
              <span className="relative">
                Contact Us
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 sm:w-26 h-0.5" style={{backgroundColor: '#F37E3A'}}></span>
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Reach Us Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Reach Us</h2>
              <div className="w-16 h-1 mb-8" style={{backgroundColor: '#F37E3A'}}></div>
            </div>

            {/* India Office */}
            <div className="p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow" style={{backgroundColor: '#FDF1E6', borderLeft: '7px solid  #F37E3A'}}>
              <div className="flex items-start space-x-4">
                <div className="rounded-full">
                  <img src="/images/flagimg.png" 
                       alt="India Flag" 
                       className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">COZ CLUB Consulting Pvt Ltd</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 mt-1 flex-shrink-0" style={{color: '#F37E3A'}} />
                      <span>5 - Laxmi Society, 2nd Floor,<br />O.P. Road, Vadodara-390007,<br />Gujarat, INDIA.</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" style={{color: '#F37E3A'}} />
                      <span>+91 92741 66689</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* USA Office */}
            <div className="p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow" style={{backgroundColor: '#E8F3FB', borderLeft: '7px solid #288EC2'}}>
              <div className="flex items-start space-x-4">
                <div className="rounded-full">
                  <img src="/images/usa_icon.png" 
                       alt="USA Flag" 
                       className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">COZ CLUB Corporation LLC</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 mt-1 flex-shrink-0" style={{color: '#288EC2'}} />
                      <span>6313 Plumcreek Road,<br />Frisco, Texas – 75036,<br />USA.</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" style={{color: '#288EC2'}} />
                      <span>+1 (469) 955 1244</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow" style={{backgroundColor: '#F0F8EC', borderLeft: '7px solid #6EBD49'}}>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full" style={{backgroundColor: '#6EBD49'}}>
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                  <p className="text-gray-700">contact@cozclub.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Message Us Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Message Us</h2>
              <div className="w-16 h-1 mb-8" style={{backgroundColor: '#F37E3A'}}></div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{'--tw-ring-color': '#F37E3A'}}
                      onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #F37E3A'}
                      onBlur={(e) => e.target.style.boxShadow = 'none'}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{'--tw-ring-color': '#F37E3A'}}
                      onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #F37E3A'}
                      onBlur={(e) => e.target.style.boxShadow = 'none'}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="tel"
                      name="contactNo"
                      placeholder="Contact No."
                      value={formData.contactNo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{'--tw-ring-color': '#F37E3A'}}
                      onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #F37E3A'}
                      onBlur={(e) => e.target.style.boxShadow = 'none'}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{'--tw-ring-color': '#F37E3A'}}
                      onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #F37E3A'}
                      onBlur={(e) => e.target.style.boxShadow = 'none'}
                    />
                  </div>
                </div>

                <div>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors text-gray-700 focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{'--tw-ring-color': '#F37E3A'}}
                    onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #F37E3A'}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                  >
                    <option value="">Select Category</option>
                    <option value="consulting">Producers</option>
                    <option value="support">Providers</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{'--tw-ring-color': '#F37E3A'}}
                    onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #F37E3A'}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                    required
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={handleSubmit}
                    className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <span>Submit</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact