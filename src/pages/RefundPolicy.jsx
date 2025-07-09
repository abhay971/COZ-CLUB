import React from 'react'

function RefundPolicy() {
  return (
    <div className='mt-8'>
      <div className="relative h-54 sm:h-70 md:h-56 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/images/connect_banner.jpg')`
      }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-gray-900 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-4">
              Refund Policy
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-justify">
        <div className="max-w-[1700px] mx-auto">
          {/* Introduction */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Service Excellence Commitment
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-[1700px] mx-auto">
              At COZ CLUB, we strive to offer our members and course participants the highest level of service. Due to the nature of our services and the immediate access to proprietary content, membership benefits, and educational courses, we have a strict no-refund policy.
            </p>
          </div>

          {/* Important Notice */}
          <div className="mb-12">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Please read the policy carefully before making a purchase.
            </h2>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {/* Membership Fees */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Membership Fees</h3>
              <p className="text-gray-700 text-xl leading-relaxed">
                All membership fees are non-refundable. Once payment has been made and access to the COZ CLUB platform has been granted, no refunds will be issued. Members are encouraged to thoroughly review the membership details before signing up to ensure that it meets their needs and expectations.
              </p>
            </div>

            {/* Course Fees */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Course Fees</h3>
              <p className="text-gray-700 text-xl leading-relaxed mb-4">
                All course fees are non-refundable. Once access to the course materials has been granted, refunds or cancellations are not possible, regardless of usage. We recommend that participants carefully review the course outlines, objectives, and expectations before enrolling to ensure they align with their learning goals.
              </p>
              <p className="text-gray-600 text-xl italic">
                Due to any circumstances if the course gets cancelled COZ CLUB will reschedule and send the updated details to the participant.
              </p>
            </div>

            {/* Exceptions */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Exceptions</h3>
              <p className="text-gray-700 text-xl leading-relaxed">
                In rare cases, COZ CLUB may consider exceptions in situations involving technical issues or other extenuating circumstances that prevent members or participants from accessing the platform or course content. These requests will be reviewed case-by-case, and decisions are at the sole discretion of COZ CLUB management.
              </p>
            </div>

            {/* Account Termination */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Account Termination</h3>
              <p className="text-gray-700 text-xl leading-relaxed">
                If a member or course participant violates our terms of service, their account may be terminated without a refund. COZ CLUB reserves the right to suspend or terminate access to the platform in the case of misconduct, misuse, or other actions that negatively affect the community.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Changes to the Refund Policy</h3>
              <p className="text-gray-700 text-xl leading-relaxed">
                COZ CLUB reserves the right to modify or update this Refund Policy at any time. Changes will be communicated via our website, and continued use of the services after such changes constitutes acceptance of the new terms.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 text-center">
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Need Assistance?
              </h3>
              <p className="text-gray-700 text-xl mb-4">
                For any inquiries or assistance related to this Refund Policy, please get in touch with us at:
              </p>
              
              <a 
                href="mailto:contact@cozclub.com" 
                className="inline-block text-xl text-gray-900 hover:text-gray-700 transition-colors underline"
              >
                contact@cozclub.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RefundPolicy