// app/privacy-policy/page.tsx
import React from 'react';
import Link from 'next/link';

const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = "December 1, 2023";
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 px-8 py-12 text-white">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-blue-100 text-lg">
            Digital Pursuit Services is committed to protecting your privacy
          </p>
          <p className="mt-2 text-sm opacity-90">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content Container */}
        <div className="px-8 py-12">
          {/* Introduction */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              At Digital Pursuit Services (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed to protecting your 
              privacy and ensuring the security of your personal information. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you visit 
              our website, use our services, or interact with us.
            </p>
            <p className="text-gray-600">
              By accessing our website or using our services, you consent to the practices described 
              in this Privacy Policy. If you do not agree with our policies and practices, please 
              do not use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">Personal Information</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Name, email address, phone number, and company details</li>
              <li>Billing and payment information</li>
              <li>Professional credentials and employment information</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-700 mb-3">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>IP address, browser type, and device information</li>
              <li>Usage data, pages visited, and time spent on our website</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Referral source and navigation patterns</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-700 mb-3">Information from Third Parties</h3>
            <p className="text-gray-600">
              We may receive information about you from third-party services, such as analytics 
              providers, advertising networks, and business partners.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-5 rounded-lg">
                <h3 className="font-semibold text-blue-700 mb-2">Service Delivery</h3>
                <p className="text-gray-600 text-sm">
                  To provide, maintain, and improve our digital services
                </p>
              </div>
              <div className="bg-blue-50 p-5 rounded-lg">
                <h3 className="font-semibold text-blue-700 mb-2">Communication</h3>
                <p className="text-gray-600 text-sm">
                  To respond to inquiries and send important updates
                </p>
              </div>
              <div className="bg-blue-50 p-5 rounded-lg">
                <h3 className="font-semibold text-blue-700 mb-2">Marketing</h3>
                <p className="text-gray-600 text-sm">
                  To send promotional materials with your consent
                </p>
              </div>
              <div className="bg-blue-50 p-5 rounded-lg">
                <h3 className="font-semibold text-blue-700 mb-2">Analytics</h3>
                <p className="text-gray-600 text-sm">
                  To understand user behavior and improve our website
                </p>
              </div>
            </div>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 mb-4">
              We use cookies and similar technologies to enhance your experience, analyze site 
              traffic, and personalize content. You can control cookies through your browser settings.
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-50 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left">Cookie Type</th>
                    <th className="py-3 px-4 text-left">Purpose</th>
                    <th className="py-3 px-4 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">Essential</td>
                    <td className="py-3 px-4">Site functionality and security</td>
                    <td className="py-3 px-4">Session</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Analytics</td>
                    <td className="py-3 px-4">Usage statistics and improvements</td>
                    <td className="py-3 px-4">2 years</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Marketing</td>
                    <td className="py-3 px-4">Personalized advertising</td>
                    <td className="py-3 px-4">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your explicit consent</li>
              <li>Successor entities in case of merger or acquisition</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-start">
                <div className="shrink-0">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-green-800 font-medium">Our Security Measures</p>
                  <p className="mt-1 text-green-700 text-sm">
                    We implement industry-standard security measures including encryption, 
                    access controls, and regular security audits to protect your data from 
                    unauthorized access, alteration, or destruction.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Privacy Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Access", desc: "Request copies of your personal data" },
                { title: "Correction", desc: "Request correction of inaccurate data" },
                { title: "Deletion", desc: "Request deletion of your personal data" },
                { title: "Objection", desc: "Object to processing of your data" },
                { title: "Portability", desc: "Request transfer of your data" },
                { title: "Withdraw Consent", desc: "Withdraw consent at any time" },
              ].map((right, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-700">{right.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{right.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* International Transfers */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">International Data Transfers</h2>
            <p className="text-gray-600">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your data in accordance 
              with applicable data protection laws.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-600">
              Our services are not directed to individuals under 16. We do not knowingly collect 
              personal information from children under 16. If you believe we have collected such 
              information, please contact us immediately.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-10 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, 
              please contact us:
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Email:</span>{' '}
                <a href="mailto:privacy@digitalpursuitservices.com" className="text-blue-600 hover:underline">
                  privacy@digitalpursuitservices.com
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Address:</span>{' '}
                123 Tech Avenue, Suite 500, San Francisco, CA 94107
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Phone:</span> +1 (555) 123-4567
              </p>
            </div>
          </section>

          {/* Policy Updates */}
          <section className="border-t pt-8">
            <div className="flex items-start">
              <div className="shrink-0">
                <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-800">Policy Updates</h3>
                <p className="mt-1 text-gray-600">
                  We may update this Privacy Policy periodically. We will notify you of significant 
                  changes by posting the new policy on our website and updating the Last Updated date.
                </p>
              </div>
            </div>
          </section>

          {/* Footer Navigation */}
          <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 sm:mb-0">
              &copy; {new Date().getFullYear()} Digital Pursuit Services. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="/" 
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Return to Home
              </Link>
              <Link 
                href="/terms" 
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Terms of Service
              </Link>
              <Link 
                href="/contact" 
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;