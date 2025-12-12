"use client";

import React, { useState } from 'react';

const OurApproach: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('philosophy');

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans bg-white">
      {/* Header */}
      <header className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium mb-4">
          Inside Pursuit Digital
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Why Pursuit Digital Services: Our Approach to Driving Growth
        </h1>
        <p className="text-gray-600 text-lg">
          Discover how our unique methodology delivers measurable results for businesses
        </p>
        <div className="flex items-center justify-center mt-6 text-gray-500">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3">
              <span className="text-white font-semibold">P</span>
            </div>
            <span>Pursuit Digital Services</span>
          </div>
          <span className="mx-4">•</span>
          <span>September 29, 2025</span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative h-64 rounded-xl overflow-hidden mb-12 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-center p-6 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Growth-Driven Digital Solutions</h2>
          <p className="max-w-2xl mx-auto">Where strategy, creativity, and technology converge</p>
        </div>
      </div>

      {/* Introduction */}
      <section className="prose prose-lg max-w-none mb-16">
        <p className="text-gray-700 text-lg mb-6">
          In a crowded digital marketing landscape, what sets Pursuit Digital Services apart? 
          It is not just what we do, but how we do it. Our approach combines strategic thinking, 
          creative excellence, and technical expertise to deliver sustainable growth for our clients.
        </p>
        <p className="text-gray-700">
          We don&#39;t believe in one-size-fits-all solutions or vanity metrics. Instead, we focus on 
          what truly matters: driving measurable business results through digital channels. In this article, 
          we&#39;ll pull back the curtain on our methodology and explain why our approach delivers exceptional ROI.
        </p>
      </section>

      {/* Navigation */}
      <nav className="bg-gray-50 p-4 rounded-lg mb-12 sticky top-4 z-10 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-3 text-center">Explore Our Approach:</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {['philosophy', 'process', 'difference', 'results'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeSection === section
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {section === 'philosophy' && 'Our Philosophy'}
              {section === 'process' && 'Our Process'}
              {section === 'difference' && 'The Difference'}
              {section === 'results' && 'Proven Results'}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none mb-20">
        {/* Philosophy Section */}
        <section id="philosophy" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Core Philosophy</h2>
          <p className="text-gray-700 mb-8">
            At Pursuit Digital Services, we believe that effective digital marketing begins with 
            understanding your business objectives first and selecting tactics second. Our philosophy 
            is built on three foundational principles:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
              <div className="text-blue-600 text-2xl font-bold mb-3">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Strategy First</h3>
              <p className="text-gray-600">
                We develop comprehensive strategies aligned with your business goals before implementing any tactics.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-600">
              <div className="text-purple-600 text-2xl font-bold mb-3">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Data-Driven Decisions</h3>
              <p className="text-gray-600">
                We let metrics guide our decisions, focusing on what actually drives growth rather than assumptions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-400">
              <div className="text-gradient-to-r from-blue-600 to-purple-600 text-2xl font-bold mb-3">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Continuous Optimization</h3>
              <p className="text-gray-600">
                We constantly test, measure, and refine our approaches to maximize results over time.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-3">What This Means for You:</h4>
            <p className="text-gray-700">
              Unlike agencies that apply the same tactics to every client, we start by deeply understanding 
              your business, audience, and objectives. This ensures that every dollar you invest in digital 
              marketing works toward your specific goals, whether that is lead generation, e-commerce sales, 
              or brand awareness.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our 4-Phase Process</h2>
          <p className="text-gray-700 mb-8">
            Our systematic approach ensures that we deliver consistent, measurable results. 
            Here&#39;s how we partner with you to drive growth:
          </p>

          <div className="space-y-12 mb-12">
            <div className="flex flex-col md:flex-row items-start">
              <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery & Strategy Development</h3>
                <p className="text-gray-700 mb-4">
                  We begin by conducting a comprehensive audit of your current digital presence, 
                  analyzing your competition, and understanding your target audience. From this research, 
                  we develop a customized strategy with clear KPIs and milestones.
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>In-depth business and competitor analysis</li>
                  <li>Audience persona development</li>
                  <li>Custom strategy with measurable objectives</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start">
              <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation & Execution</h3>
                <p className="text-gray-700 mb-4">
                  Our team of experts brings the strategy to life through careful implementation 
                  of selected tactics. We maintain transparent communication throughout this process, 
                  ensuring you&#39;re informed and involved every step of the way.
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Cross-channel tactic implementation</li>
                  <li>Regular progress updates and reviews</li>
                  <li>Ongoing collaboration with your team</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start">
              <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Measurement & Analysis</h3>
                <p className="text-gray-700 mb-4">
                  We implement robust tracking and analytics to measure performance against our 
                  established KPIs. Our team provides clear, actionable reports that show exactly 
                  how our efforts are contributing to your business goals.
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Comprehensive performance tracking</li>
                  <li>Regular reporting with insights, not just data</li>
                  <li>ROI calculation and analysis</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start">
              <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimization & Scaling</h3>
                <p className="text-gray-700 mb-4">
                  Digital marketing is never &quot;set and forget.&quot; We continuously test, learn, and 
                  optimize our approaches based on performance data. As we identify winning strategies, 
                  we scale them to maximize your return on investment.
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Continuous A/B testing and optimization</li>
                  <li>Strategic scaling of successful tactics</li>
                  <li>Ongoing strategy refinement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Difference Section */}
        <section id="difference" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Pursuit Difference</h2>
          <p className="text-gray-700 mb-8">
            What truly sets us apart from other digital marketing agencies? It is our commitment to 
            these differentiating factors:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Transparent Reporting</h3>
              <p className="text-gray-600">
                We provide clear, understandable reports that focus on metrics that matter to your business, 
                not vanity numbers that look impressive but don&#39;t drive growth.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Dedicated Team</h3>
              <p className="text-gray-600">
                You work with the same dedicated team throughout our partnership, ensuring consistency, 
                deep understanding of your business, and accountability.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">
                We don&#39;t offer cookie-cutter packages. Every strategy is tailored to your specific 
                business needs, goals, and budget constraints.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Results Focus</h3>
              <p className="text-gray-600">
                We are obsessed with delivering measurable ROI. If a tactic is not working, we pivot. 
                If something is delivering exceptional results, we double down.
              </p>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Proven Results</h2>
          <p className="text-gray-700 mb-8">
            Our approach delivers tangible business outcomes. Here is what some of our clients have experienced:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-xl text-white text-center">
              <div className="text-3xl font-bold mb-2">187%</div>
              <p>Average increase in organic traffic for SEO clients</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-6 rounded-xl text-white text-center">
              <div className="text-3xl font-bold mb-2">42%</div>
              <p>Average reduction in cost-per-lead for PPC clients</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-700 to-purple-700 p-6 rounded-xl text-white text-center">
              <div className="text-3xl font-bold mb-2">3.8x</div>
              <p>Average ROI for our comprehensive digital marketing clients</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-3">Client Success Story: Local Restaurant Chain</h4>
            <p className="text-gray-700 mb-4">
              A regional restaurant chain struggling with stagnant sales came to us for help. 
              Through a combination of localized SEO, targeted social media advertising, and 
              website optimization, we helped them achieve:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>214% increase in online orders within 6 months</li>
              <li>37% higher average order value through upselling strategies</li>
              <li>Consistent page one rankings for 12+ key local search terms</li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl text-center text-white mb-16">
          <h2 className="text-2xl font-bold mb-4">Ready to Experience the Pursuit Difference?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Let us develop a customized growth strategy for your business. Schedule a free consultation 
            to discover how our approach can drive meaningful results for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 font-medium py-3 px-6 rounded-lg transition-colors hover:bg-gray-100">
              Schedule Free Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white font-medium py-3 px-6 rounded-lg transition-colors hover:bg-white/10">
              View Case Studies
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 pt-12 text-center">
        <h3 className="font-semibold text-gray-900 mb-6">Explore Our Services</h3>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['SEO', 'PPC Advertising', 'Web Design', 'Social Media', 'Content Marketing'].map((topic) => (
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

export default OurApproach;