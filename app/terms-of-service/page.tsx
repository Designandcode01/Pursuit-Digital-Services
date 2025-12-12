// app/terms-of-service/page.tsx
import React from 'react';
import Link from 'next/link';
import { CheckIcon, XIcon } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  const effectiveDate = "December 1, 2023";
  
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to Digital Pursuit Services. By accessing our services, you agree to these terms.
          </p>
          <div className="mt-6 inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Effective Date: {effectiveDate}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Quick Navigation</h3>
              <nav className="space-y-2">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-3">Need Help?</h4>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Contact Our Legal Team
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Agreement Section */}
            <section id="agreement" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">1. Agreement to Terms</h2>
              </div>
              <p className="text-gray-600 mb-6">
                By accessing or using Digital Pursuit Services <span className='bold'>(Services)</span>, you agree to be bound by these 
                Terms of Service <span className='bold'>(Terms)</span>. If you disagree with any part of these Terms, you may not access 
                our Services.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex">
                  <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 mr-3 shrink-0" />
                  <p className="text-blue-800">
                    <strong>Important:</strong> These Terms constitute a legally binding agreement between you 
                    and Digital Pursuit Services. Please read them carefully.
                  </p>
                </div>
              </div>
            </section>

            {/* Services Description */}
            <section id="services" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Our Services</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex">
                  <svg className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-yellow-800 font-medium mb-1">Service Limitations</p>
                    <p className="text-yellow-700 text-sm">
                      We reserve the right to modify, suspend, or discontinue any service at any time without 
                      prior notice. We are not liable for any modification, suspension, or discontinuance.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* User Responsibilities */}
            <section id="responsibilities" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. User Responsibilities</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 text-lg flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-600 mr-2" />
                    You Agree To:
                  </h3>
                  <ul className="space-y-3">
                    {agreements.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="w-4 h-4 text-green-500 mt-1 mr-3 shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 text-lg flex items-center">
                    <XIcon className="w-5 h-5 text-red-600 mr-2" />
                    You Agree Not To:
                  </h3>
                  <ul className="space-y-3">
                    {prohibitions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <XIcon className="w-4 h-4 text-red-500 mt-1 mr-3 shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Payments and Billing */}
            <section id="payments" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Payments and Billing</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Service Tier
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Billing Cycle
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Payment Terms
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cancellation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {billingTiers.map((tier, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="font-medium text-gray-900">{tier.tier}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-gray-600">{tier.billing}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-gray-600">{tier.terms}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-gray-600">{tier.cancellation}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Refund Policy</h3>
                <p className="text-gray-600">
                  Refunds are processed on a case-by-case basis. Generally, we offer a 30-day money-back 
                  guarantee for annual subscriptions. Monthly subscriptions are non-refundable after the 
                  first 7 days of service.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section id="intellectual-property" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Intellectual Property</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-900 mb-3">Our Property</h3>
                  <p className="text-blue-800 mb-4">
                    All content, features, and functionality on our platform are owned by Digital Pursuit 
                    Services and are protected by international copyright, trademark, and other intellectual 
                    property laws.
                  </p>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Website content and design
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Software and algorithms
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Branding and trademarks
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-semibold text-green-900 mb-3">Your Content</h3>
                  <p className="text-green-800 mb-4">
                    You retain ownership of any content you submit to our Services. By submitting content, 
                    you grant us a license to use, display, and distribute it for service delivery.
                  </p>
                  <div className="text-green-800">
                    <p className="font-medium mb-2">License Grant:</p>
                    <p className="text-sm">
                      You grant Digital Pursuit Services a worldwide, non-exclusive, royalty-free license 
                      to use your content solely for providing and improving our Services.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section id="liability" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Limitation of Liability</h2>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <div className="flex">
                  <svg className="w-6 h-6 text-red-600 mt-0.5 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-red-800 font-medium mb-2">Important Legal Disclaimer</p>
                    <p className="text-red-700">
                      To the maximum extent permitted by law, Digital Pursuit Services shall not be liable for 
                      any indirect, incidental, special, consequential, or punitive damages resulting from 
                      your use or inability to use our Services.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Maximum Liability</h3>
                  <p className="text-gray-600 text-sm">
                    Our total liability for any claims under these Terms shall not exceed the amount 
                    you paid us in the six months preceding the claim.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">No Warranties</h3>
                  <p className="text-gray-600 text-sm">
                    Our Services are provided <span className='blod'>as is</span> without warranties of any kind, either express 
                    or implied, including merchantability or fitness for a particular purpose.
                  </p>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section id="termination" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Termination</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.73 0L4.347 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">By Us</h3>
                    <p className="text-gray-600">
                      We may terminate or suspend your access to our Services immediately, without 
                      prior notice, for conduct that we believe violates these Terms or is harmful 
                      to other users, us, or third parties.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">By You</h3>
                    <p className="text-gray-600">
                      You may terminate your account at any time by contacting our support team. 
                      Upon termination, your right to use our Services will immediately cease.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Governing Law */}
            <section id="governing-law" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Governing Law and Dispute Resolution</h2>
              
              <div className="bg-indigo-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-indigo-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-semibold text-indigo-900">Legal Jurisdiction</h3>
                </div>
                
                <div className="space-y-4 text-indigo-800">
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of 
                    the State of California, without regard to its conflict of law provisions.
                  </p>
                  <p>
                    Any disputes arising from these Terms or your use of our Services shall be 
                    resolved through binding arbitration in San Francisco, California, rather than 
                    in court.
                  </p>
                  <div className="bg-white rounded-lg p-4 mt-4">
                    <p className="font-medium text-indigo-900 mb-2">Arbitration Agreement</p>
                    <p className="text-indigo-700 text-sm">
                      You and Digital Pursuit Services agree that any dispute shall be settled by 
                      arbitration administered by the American Arbitration Association under its 
                      Commercial Arbitration Rules.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Changes to Terms */}
            <section id="changes" className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Changes to Terms</h2>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex">
                  <svg className="w-6 h-6 text-yellow-600 mt-0.5 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-yellow-800 font-medium mb-2">Notification of Changes</p>
                    <p className="text-yellow-700">
                      We reserve the right to modify these Terms at any time. We will provide notice 
                      of significant changes by posting the updated Terms on our website and updating 
                      the &quot;Effective Date.&quot; Your continued use of our Services after changes constitutes 
                      acceptance of the new Terms.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section id="contact" className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="mb-6 text-blue-100">
                  If you have any questions about these Terms of Service, please contact us.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="font-medium mb-1">Email</p>
                    <a href="/contact" className="text-blue-200 hover:text-white">
                            epassionate01@gmail.com
                      {/* mailto:legal@digitalpursuitservices.com */}
                    </a>
                  </div>
                  {/* <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="font-medium mb-1">Phone</p>
                    <p className="text-blue-200">+1 (555) 123-4567</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="font-medium mb-1">Address</p>
                    <p className="text-blue-200">123 Tech Avenue, SF, CA</p>
                  </div> */}
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link 
                    href="/privacy-policy" 
                    className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    View Privacy Policy
                  </Link>
                  <Link 
                    href="/contact" 
                    className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="text-center pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Digital Pursuit Services. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                These Terms of Service were last updated on {effectiveDate}.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

// Table of Contents Items
const tocItems = [
  { id: 'agreement', title: '1. Agreement to Terms' },
  { id: 'services', title: '2. Our Services' },
  { id: 'responsibilities', title: '3. User Responsibilities' },
  { id: 'payments', title: '4. Payments and Billing' },
  { id: 'intellectual-property', title: '5. Intellectual Property' },
  { id: 'liability', title: '6. Limitation of Liability' },
  { id: 'termination', title: '7. Termination' },
  { id: 'governing-law', title: '8. Governing Law' },
  { id: 'changes', title: '9. Changes to Terms' },
  { id: 'contact', title: 'Contact Information' },
];

// Services Offered
const services = [
  {
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Digital Consulting',
    description: 'Strategic guidance for digital transformation and technology implementation.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Software Development',
    description: 'Custom software solutions, web applications, and mobile app development.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: 'Data Analytics',
    description: 'Business intelligence, data visualization, and predictive analytics services.'
  }
];

// User Agreements
const agreements = [
  'Provide accurate and complete information',
  'Maintain the security of your account credentials',
  'Use our Services in compliance with all applicable laws',
  'Respect intellectual property rights',
  'Report any security breaches or unauthorized access'
];

// User Prohibitions
const prohibitions = [
  'Engage in illegal activities or promote illegal content',
  'Attempt to circumvent security measures',
  'Use our Services to distribute malware or spam',
  'Reverse engineer or attempt to extract source code',
  'Impersonate others or provide false information'
];

// Billing Tiers
const billingTiers = [
  {
    tier: 'Starter',
    billing: 'Monthly',
    terms: 'Credit card required, billed monthly',
    cancellation: 'Anytime, no long-term commitment'
  },
  {
    tier: 'Professional',
    billing: 'Quarterly',
    terms: 'Invoice billing, net 30 terms',
    cancellation: '30-day notice required'
  },
  {
    tier: 'Enterprise',
    billing: 'Annual',
    terms: 'Custom contract, PO billing',
    cancellation: 'Subject to contract terms'
  }
];

export default TermsOfServicePage;