"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const DigitalMarketingIntro: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('intro');

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans bg-white">
      {/* Header */}
      <header className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
          Digital Marketing Basics
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What is Digital Marketing? A Simple Explanation for Business Owners
        </h1>
        <p className="text-gray-600 text-lg">
          Cutting through the jargon to show how digital marketing can grow your business
        </p>
        <div className="flex items-center justify-center mt-6 text-gray-500">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center mr-3">
              <span className="text-blue-800 font-semibold">P</span>
            </div>
            <span>Pursuit Digital Services</span>
          </div>
          <span className="mx-4">•</span>
          <span>September 15, 2025</span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center">
          <div className="text-center p-6 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Digital Marketing Made Accessible</h2>
            <p className="max-w-2xl mx-auto">No technical jargon. Just practical insights for business growth.</p>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <nav className="bg-gray-50 p-6 rounded-lg mb-12 sticky top-4 z-10 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-3">In this article:</h3>
        <div className="flex flex-wrap gap-2">
          {['intro', 'components', 'benefits', 'getting-started'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeSection === section
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {section === 'intro' && 'Introduction'}
              {section === 'components' && 'Key Components'}
              {section === 'benefits' && 'Benefits'}
              {section === 'getting-started' && 'Getting Started'}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none mb-20">
        {/* Introduction Section */}
        <section id="intro" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">So, What Exactly is Digital Marketing?</h2>
          <p className="text-gray-700 mb-6">
            If you&#39;re a business owner who feels overwhelmed by terms like SEO, PPC, and content marketing, you&#39;re not alone. 
            Digital marketing is simply the use of online channels to promote your products or services. Think of it as the digital 
            equivalent of traditional marketing methods like print ads, billboards, or radio commercials.
          </p>
          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-8">
            <p className="text-blue-800 font-medium">
              Digital marketing is about connecting with your audience where they spend their time—online.
            </p>
          </div>
          <p className="text-gray-700">
            The key difference? Digital marketing offers precision targeting, measurable results, and often at a fraction of the cost 
            of traditional marketing. Whether you run a local bakery, a consulting firm, or an e-commerce store, digital marketing 
            provides tools to reach exactly the right people with the right message at the right time.
          </p>
        </section>

        <div className="my-12 border-t border-gray-200"></div>

        {/* Key Components Section */}
        <section id="components" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Main Components of Digital Marketing</h2>
          <p className="text-gray-700 mb-8">
            Digital marketing consists of several key components. You don&#39;t need to use them all, but understanding each will help you 
            make informed decisions about where to focus your efforts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: 'Website & SEO',
                description: 'Your digital storefront and the process of optimizing it to be found on search engines like Google.',
                icon: '🌐'
              },
              {
                title: 'Content Marketing',
                description: 'Creating valuable content (blogs, videos, guides) to attract and engage your target audience.',
                icon: '✏️'
              },
              {
                title: 'Social Media Marketing',
                description: 'Promoting your business and connecting with customers on platforms like Facebook, Instagram, and LinkedIn.',
                icon: '💬'
              },
              {
                title: 'Email Marketing',
                description: 'Sending targeted messages to people who have expressed interest in your business.',
                icon: '📧'
              },
              {
                title: 'PPC Advertising',
                description: 'Pay-per-click ads that appear at the top of search results and on other websites.',
                icon: '🔍'
              },
              {
                title: 'Analytics',
                description: 'Measuring and analyzing data to understand what\'s working and what needs improvement.',
                icon: '📊'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors shadow-sm">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="my-12 border-t border-gray-200"></div>

        {/* Benefits Section */}
        <section id="benefits" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Digital Marketing Matters for Your Business</h2>
          <p className="text-gray-700 mb-8">
            You might be wondering if digital marketing is worth the investment. Here&#39;s why it&#39;s essential for modern businesses:
          </p>

          <div className="space-y-6 mb-12">
            {[
              {
                title: 'Precision Targeting',
                description: 'Reach specific demographics, locations, and even people with particular interests or behaviors.'
              },
              {
                title: 'Measurable Results',
                description: 'Track exactly how many people saw your ad, clicked on it, and made a purchase.'
              },
              {
                title: 'Cost Effectiveness',
                description: 'Start with small budgets and scale up as you see what works for your business.'
              },
              {
                title: 'Flexibility & Adaptability',
                description: 'Change your messaging, targeting, or budget in real-time based on performance.'
              },
              {
                title: 'Level Playing Field',
                description: 'Small businesses can compete with larger ones through smart digital strategies.'
              }
            ].map((item, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-4">
                  <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Real-World Example:</h3>
            <p className="text-gray-700">
              A local bakery used Google My Business to appear in local search results, posted photos of their daily specials on Instagram, 
              and ran a small Facebook ad campaign targeting people within 5 miles who were interested in baking. Within three months, 
              their foot traffic increased by 40% and they had to hire additional staff.
            </p>
          </div>
        </section>

        <div className="my-12 border-t border-gray-200"></div>

        {/* Getting Started Section */}
        <section id="getting-started" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to Get Started with Digital Marketing</h2>
          <p className="text-gray-700 mb-8">
            Ready to dip your toes into digital marketing? Here&#39;s a simple step-by-step approach:
          </p>

          <div className="space-y-10 mb-12">
            {[
              {
                step: '1',
                title: 'Define Your Goals',
                description: 'What do you want to achieve? More website visitors? Increased sales? Brand awareness?'
              },
              {
                step: '2',
                title: 'Understand Your Audience',
                description: 'Who are your ideal customers? What problems do they have that you can solve?'
              },
              {
                step: '3',
                title: 'Start with One Channel',
                description: 'Don\'t try to do everything at once. Pick one channel that aligns with your goals and audience.'
              },
              {
                step: '4',
                title: 'Create Valuable Content',
                description: 'Provide useful information that helps your audience, not just sales pitches.'
              },
              {
                step: '5',
                title: 'Measure and Adjust',
                description: 'Track your results and make changes based on what\'s working.'
              }
            ].map((item, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-5">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <h3 className="font-bold text-xl text-blue-800 mb-4">Ready to Take the Next Step?</h3>
            <p className="text-blue-700 mb-6">
              Pursuit Digital Services specializes in helping businesses like yours navigate the digital landscape.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              Schedule a Free Consultation
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 pt-12 text-center">
        <h3 className="font-semibold text-gray-900 mb-6">Explore More Topics</h3>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['SEO', 'Social Media', 'Email Marketing', 'PPC', 'Analytics'].map((topic) => (
            <a
              key={topic}
              href="#"
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              {topic}
            </a>
          ))}
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Pursuit Digital Services. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default DigitalMarketingIntro;