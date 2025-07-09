import React from 'react'

function CancellationPolicy() {
  return (
    <div className='mt-8'>
      <div className="relative h-54 sm:h-70 md:h-56 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/images/connect_banner.jpg')`
      }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-gray-900 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-4">
              Cancellation Policy
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-justify">
        <div className="max-w-[1700px] mx-auto">
          
          {/* Important Notice */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Important Notice
            </h2>
            <p className="text-gray-800 text-xl leading-relaxed">
              Membership cancellation only applies to membership levels that automatically renew at the end of each membership cycle.
            </p>
          </div>

          {/* Cancellation Terms */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Cancellation Terms
            </h3>
            <div className="space-y-6">
              <p className="text-gray-800 text-xl leading-relaxed">
                You may cancel your membership at any time and you will still receive the full membership cycle that you purchased.
              </p>
              
              <p className="text-gray-800 text-xl leading-relaxed">
                Once your cancellation request is processed, your access to the COZ CLUB site and all related benefits and/or privileges will continue until the end of membership cycle you have purchased and your membership will no longer automatically renew.
              </p>
            </div>
          </div>

          {/* Billing Information */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Billing Information
            </h3>
            <p className="text-gray-800 text-xl leading-relaxed">
              Your membership must be cancelled prior to the upcoming year's recurring membership billing charge to stop the upcoming billing cycle. Purchaser agrees and understands that once your yearly membership charge is billed and processed, your charge for that year is not refundable and will be prorated.
            </p>
          </div>

          {/* Termination Conditions */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Termination Conditions
            </h3>
            <p className="text-gray-800 text-xl font-medium mb-4">
              COZ CLUB reserves the right to terminate the membership with immediate effect in below conditions:
            </p>
            
            <div className="space-y-3 ml-4">
              <p className="text-gray-800 text-xl leading-relaxed">
                • Member fails to pay the membership renewal charges.
              </p>
              
              <p className="text-gray-800 text-xl leading-relaxed">
                • Member fails to delivery as per the professional commitment.
              </p>
              
              <p className="text-gray-800 text-xl leading-relaxed">
                • Member fails to comply with the ethics and is convicted under the law.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center border-t border-gray-200 pt-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Need Help?
            </h3>
            <p className="text-gray-700 text-xl">
              If you have any questions about our cancellation policy, please contact our support team.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CancellationPolicy