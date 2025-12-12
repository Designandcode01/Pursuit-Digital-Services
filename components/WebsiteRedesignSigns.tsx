"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const WebsiteRedesignSigns: React.FC = () => {
  const [activeSign, setActiveSign] = useState<number>(0);


  const signs = [
    {
      title: "Your Website Isn't Mobile-Friendly",
      description: "With over 60% of web traffic coming from mobile devices, a non-responsive website means you're losing potential customers. If your site doesn't adapt seamlessly to smartphones and tablets, it's time for an upgrade.",
      stats: "60% of users won't recommend a business with a poorly designed mobile site",
      icon: "📱",
    },
    {
      title: "Slow Loading Times",
      description: "Website speed directly impacts user experience and search engine rankings. If your pages take more than 3 seconds to load, you're likely losing visitors and conversions.",
      stats: "A 1-second delay in page load time can reduce conversions by 7%",
      icon: "⏱️"
    },
    {
      title: "High Bounce Rate & Low Engagement",
      description: "If analytics show visitors are leaving quickly without exploring your site or taking action, your website isn't effectively capturing interest or guiding users toward conversion.",
      stats: "The average bounce rate for websites is between 41-51% (above 70% indicates a problem)",
      icon: "📉"
    },
    {
      title: "Outdated Design & Content",
      description: "Web design trends and user expectations change rapidly. An outdated website makes your business look unprofessional and untrustworthy, even if your services are excellent.",
      stats: "75% of consumers admit to making judgments about a company's credibility based on their website design",
      icon: "🔄"
    },
    {
      title: "Not Generating Leads or Sales",
      description: "Your website should be your hardest-working salesperson. If it's not converting visitors into customers or leads, the design, user experience, or calls-to-action need improvement.",
      stats: "Companies with poor web design have 4.6% fewer conversions than industry averages",
      icon: "💰"
    }
  ];

  // Related posts data
  const relatedPosts = [
    {
      title: "How to Conduct a Website Audit",
      excerpt: "Learn step-by-step how to evaluate your website's performance and identify areas for improvement.",
      href: "/blog/website-audit-guide",
      readTime: "8 min read"
    },
    {
      title: "Mobile-First Design Principles",
      excerpt: "Discover why designing for mobile first leads to better user experiences across all devices.",
      href: "/blog/mobile-first-design",
      readTime: "6 min read"
    },
    {
      title: "Increasing Website Conversion Rates",
      excerpt: "Proven strategies to turn more visitors into customers with simple design changes.",
      href: "/blog/conversion-rate-optimization",
      readTime: "10 min read"
    }
  ];

  // Popular posts data
  const popularPosts = [
    {
      title: "The Complete Guide to SEO in 2025",
      href: "/blog/seo-guide-2025"
    },
    {
      title: "10 Web Design Trends Dominating 2025",
      href: "/blog/web-design-trends-2025"
    },
    {
      title: "How to Choose the Right CMS for Your Business",
      href: "/blog/choosing-a-cms"
    }
  ];



  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans bg-white">

      {/* Header */}
      <header className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
          <Link href="/blog/website-optimization-series" className="hover:underline">
            Website Optimization Series
          </Link>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          5 Signs Your Business Needs a Professional Website Redesign
        </h1>
        <p className="text-gray-600 text-lg">
          Is your website helping or hurting your business? Learn the telltale signs that it&#39;s time for an upgrade.
        </p>
        <div className="flex items-center justify-center mt-6 text-gray-500">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center mr-3">
              <span className="text-purple-800 font-semibold">P</span>
            </div>
            <Link href="/about" className="hover:text-purple-600 transition-colors">
              Pursuit Digital Services
            </Link>
          </div>
          <span className="mx-4">•</span>
          <span>September 22, 2025</span>
        </div>
        
        {/* Breadcrumb Navigation */}
        <nav className="mt-6 text-sm text-gray-500 flex justify-center">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <Link href="/blog" className="hover:text-purple-600 transition-colors">Blog</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <Link href="/blog/web-design" className="hover:text-purple-600 transition-colors">Web Design</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-800">Website Redesign Signs</li>
          </ol>
        </nav>
      </header>

        {/* Main Content Column */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          {/* Featured Image */}
          <div className="relative h-64 rounded-xl overflow-hidden mb-12 bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
            <div className="text-center p-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Website Should Work For You, Not Against You</h2>
              <p className="max-w-2xl mx-auto">Recognize these warning signs before they cost you customers</p>
            </div>
          </div>

          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-16">
            <p className="text-gray-700 text-lg mb-6">
              Your website is often the first impression potential customers have of your business. 
              In today&#39;s digital landscape, an outdated or poorly functioning website can significantly impact 
              your credibility and bottom line. But how do you know when it&#39;s time for a redesign rather than just minor updates?
            </p>
            <p className="text-gray-700">
              After working with hundreds of businesses, we&#39;ve identified five key indicators that signal 
              it&#39;s time to invest in a professional website redesign. If you recognize any of these signs, 
              your website might be holding your business back more than you realize.
            </p>
            
            {/* Quick Navigation Links */}
            <div className="bg-purple-50 p-6 rounded-lg mt-8">
              <h3 className="font-semibold text-purple-900 mb-3">In this article:</h3>
              <ul className="list-disc pl-5 space-y-1 text-purple-800">
                {signs.map((sign, index) => (
                  <li key={index}>
                    <a 
                      href={`#sign-${index+1}`} 
                      className="hover:underline hover:text-purple-600 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(`sign-${index+1}`)?.scrollIntoView({ behavior: 'smooth' });
                        setActiveSign(index);
                      }}
                    >
                      {sign.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Signs Navigation */}
          <nav className="bg-gray-50 p-4 rounded-lg mb-12 sticky top-4 z-10 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-3 text-center">Jump to a sign:</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {signs.map((sign, index) => (
                <button
                  key={index}
                  onClick={() => {
                    document.getElementById(`sign-${index+1}`)?.scrollIntoView({ behavior: 'smooth' });
                    setActiveSign(index);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeSign === index
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {index + 1}. {sign.title.split(' ').slice(0, 3).join(' ')}...
                </button>
              ))}
            </div>
          </nav>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-20">
            {/* Signs List */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-40">The 5 Warning Signs</h2>
              
              <div className="space-y-20 mb-16">
                {signs.map((sign, index) => (
                  <div key={index} id={`sign-${index+1}`} className="scroll-mt-48">
                    <div className="flex items-start mb-6">
                      <div className="text-4xl mr-4">{sign.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Sign #{index + 1}: {sign.title}
                        </h3>
                        <p className="text-gray-700 text-lg">{sign.description}</p>
                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600 mt-4">
                          <p className="text-purple-800 font-medium">{sign.stats}</p>
                        </div>
                      </div>
                    </div>

                    {/* Specific advice for each sign */}
                    {index === 0 && (
                      <div className="bg-gray-50 p-6 rounded-xl mt-6">
                        <h4 className="font-semibold text-gray-900 mb-3">What to do:</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Test your website on various mobile devices and screen sizes</li>
                          <li>Implement responsive design principles</li>
                          <li>Simplify navigation for touch interfaces</li>
                          <li>Optimize images and media for mobile viewing</li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <Link 
                            href="/mobile-responsive-design" 
                            className="text-purple-600 hover:underline font-medium inline-flex items-center"
                          >
                            Learn more about mobile optimization 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    )}

                    {index === 1 && (
                      <div className="bg-gray-50 p-6 rounded-xl mt-6">
                        <h4 className="font-semibold text-gray-900 mb-3">What to do:</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Compress and optimize images</li>
                          <li>Minify CSS and JavaScript files</li>
                          <li>Leverage browser caching</li>
                          <li>Consider a more performant hosting solution</li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <Link 
                            href="/" 
                            className="text-purple-600 hover:underline font-medium inline-flex items-center"
                          >
                            Explore our website optimization services
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    )}

                    {index === 2 && (
                      <div className="bg-gray-50 p-6 rounded-xl mt-6">
                        <h4 className="font-semibold text-gray-900 mb-3">What to do:</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Analyze user behavior with heatmaps and session recordings</li>
                          <li>Improve website navigation and content organization</li>
                          <li>Create clear calls-to-action</li>
                          <li>Enhance content readability and scannability</li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <Link 
                            href="/engagementguide" 
                            className="text-purple-600 hover:underline font-medium inline-flex items-center"
                          >
                            Read our guide to improving engagement
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    )}

                    {index === 3 && (
                      <div className="bg-gray-50 p-6 rounded-xl mt-6">
                        <h4 className="font-semibold text-gray-900 mb-3">What to do:</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Refresh design with modern aesthetics</li>
                          <li>Update content to reflect current offerings</li>
                          <li>Ensure visual consistency across all pages</li>
                          <li>Implement contemporary UX best practices</li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <Link 
                            href="/portfolio" 
                            className="text-purple-600 hover:underline font-medium inline-flex items-center"
                          >
                            View our recent design projects
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    )}

                    {index === 4 && (
                      <div className="bg-gray-50 p-6 rounded-xl mt-6">
                        <h4 className="font-semibold text-gray-900 mb-3">What to do:</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Implement strategic calls-to-action throughout the site</li>
                          <li>Create valuable lead magnets</li>
                          <li>Simplify conversion processes</li>
                          <li>Build trust with testimonials and case studies</li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <Link 
                            href="/blog/increase-conversions" 
                            className="text-purple-600 hover:underline font-medium inline-flex items-center"
                          >
                            Discover conversion optimization strategies
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Redesign Process */}
            <section className="bg-blue-50 p-8 rounded-xl mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Website Redesign Process</h2>
              <p className="text-gray-700 mb-6">
                If you recognized any of these signs, a professional redesign might be in order. Here&#39;s what a typical redesign process looks like:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="text-blue-600 font-bold text-2xl mb-3">1</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Discovery & Strategy</h3>
                  <p className="text-gray-600">Understanding your goals, audience, and requirements</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="text-blue-600 font-bold text-2xl mb-3">2</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Design & Development</h3>
                  <p className="text-gray-600">Creating a visually appealing, functional website</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="text-blue-600 font-bold text-2xl mb-3">3</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Testing & Launch</h3>
                  <p className="text-gray-600">Ensuring everything works perfectly before going live</p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Link 
                  href="/process" 
                  className="text-blue-600 hover:underline font-medium inline-flex items-center justify-center"
                >
                  Learn more about our redesign process
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-600 to-blue-700 p-8 rounded-xl text-center text-white mb-16">
              <h2 className="text-2xl font-bold mb-4">Ready for a Website That Converts?</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Don&#39;t let an outdated website cost you customers. Our team specializes in creating beautiful, 
                functional websites that drive results for businesses like yours.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white text-purple-700 font-medium py-3 px-6 rounded-lg transition-colors hover:bg-gray-100 text-center"
                >
                  Schedule Free Consultation
                </Link>
                <Link 
                  href="/portfolio" 
                  className="bg-transparent border-2 border-white text-white font-medium py-3 px-6 rounded-lg transition-colors hover:bg-white/10 text-center"
                >
                  View Our Portfolio
                </Link>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Website Redesign FAQs</h2>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">How long does a website redesign typically take?</h3>
                  <p className="text-gray-600">
                    The timeline varies based on complexity, but most business website redesigns take between 4-8 weeks from discovery to launch.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Will a redesign hurt my SEO?</h3>
                  <p className="text-gray-600">
                    When done correctly, a redesign should improve your SEO. We implement proper redirects, maintain URL structure when beneficial, and ensure all best practices are followed to preserve and enhance your search rankings.
                    <Link href="/blog/website-redesign-seo" className="text-purple-600 hover:underline ml-2">
                      Learn more about preserving SEO during a redesign
                    </Link>
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">How much does a professional website redesign cost?</h3>
                  <p className="text-gray-600">
                    Investment varies based on scope and features, but most business websites range from $3,000 to $15,000. We offer packages to suit different needs and budgets.
                    <Link href="/pricing" className="text-purple-600 hover:underline ml-2">
                      View our pricing guide
                    </Link>
                  </p>
                </div>
              </div>
            </section>
            
            {/* Related Posts Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Learning</h2>
              <p className="text-gray-600 mb-6">
                Explore these related articles to learn more about website optimization and design:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((post, index) => (
                  <article key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                        <Link href={post.href} className="hover:text-purple-600 transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{post.readTime}</span>
                        <Link 
                          href={post.href} 
                          className="text-purple-600 hover:underline font-medium inline-flex items-center"
                        >
                          Read more
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
            
          </div>
        </div>
        
        {/* Sidebar Column */}
        <aside className="lg:w-1/3">
          <div className="sticky top-24 space-y-8">
            {/* Popular Posts */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg border-b pb-2">Popular Posts</h3>
              <ul className="space-y-3">
                {popularPosts.map((post, index) => (
                  <li key={index}>
                    <Link 
                      href={post.href} 
                      className="text-gray-700 hover:text-purple-600 transition-colors flex items-start"
                    >
                      <span className="text-purple-600 mr-2">•</span>
                      <span>{post.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Categories */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg border-b pb-2">Categories</h3>
              <ul className="space-y-2">
                {['Web Design', 'Development', 'SEO', 'Content Strategy', 'E-Commerce', 'UX/UI'].map((category) => (
                  <li key={category}>
                    <Link 
                      href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="text-gray-700 hover:text-purple-600 transition-colors flex justify-between"
                    >
                      <span>{category}</span>
                      <span className="text-gray-400">(12)</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Newsletter Signup */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-4 text-lg">Stay Updated</h3>
              <p className="text-purple-800 text-sm mb-4">Get the latest web design tips and industry insights delivered to your inbox.</p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-purple-700 text-xs mt-3">We respect your privacy. Unsubscribe at any time.</p>
            </div>
            
            {/* Free Resource */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-4 text-lg">Free Website Audit</h3>
              <p className="text-blue-800 text-sm mb-4">Get a comprehensive analysis of your website performance with our free audit tool.</p>
              <Link 
                href="/free-website-audit" 
                className="block w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
              >
                Get Your Free Audit
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 pt-12 text-center mt-12">
        <h3 className="font-semibold text-gray-900 mb-6">Explore More Topics</h3>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['Website Development', 'SEO', 'Content Strategy', 'E-Commerce', 'UX Design'].map((topic) => (
            <Link
              key={topic}
              href={`/blog/category/${topic.toLowerCase().replace(/\s+/g, '-')}`}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              {topic}
            </Link>
          ))}
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <Link href="/blog" className="text-gray-600 hover:text-purple-600 transition-colors">Blog Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">About Us</Link>
          <Link href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">Contact</Link>
          <Link href="/privacy" className="text-gray-600 hover:text-purple-600 transition-colors">Privacy Policy</Link>
        </div>
        
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Pursuit Digital Services. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default WebsiteRedesignSigns;














// "use client";

// import React, { useState } from 'react';

// const WebsiteRedesignSigns: React.FC = () => {
//   const [activeSign, setActiveSign] = useState<number>(0);

//   const signs = [
//     {
//       title: "Your Website Isn't Mobile-Friendly",
//       description: "With over 60% of web traffic coming from mobile devices, a non-responsive website means you're losing potential customers. If your site doesn't adapt seamlessly to smartphones and tablets, it's time for an upgrade.",
//       stats: "60% of users won't recommend a business with a poorly designed mobile site",
//       icon: "📱",
//     },
//     {
//       title: "Slow Loading Times",
//       description: "Website speed directly impacts user experience and search engine rankings. If your pages take more than 3 seconds to load, you're likely losing visitors and conversions.",
//       stats: "A 1-second delay in page load time can reduce conversions by 7%",
//       icon: "⏱️"
//     },
//     {
//       title: "High Bounce Rate & Low Engagement",
//       description: "If analytics show visitors are leaving quickly without exploring your site or taking action, your website isn't effectively capturing interest or guiding users toward conversion.",
//       stats: "The average bounce rate for websites is between 41-51% (above 70% indicates a problem)",
//       icon: "📉"
//     },
//     {
//       title: "Outdated Design & Content",
//       description: "Web design trends and user expectations change rapidly. An outdated website makes your business look unprofessional and untrustworthy, even if your services are excellent.",
//       stats: "75% of consumers admit to making judgments about a company's credibility based on their website design",
//       icon: "🔄"
//     },
//     {
//       title: "Not Generating Leads or Sales",
//       description: "Your website should be your hardest-working salesperson. If it's not converting visitors into customers or leads, the design, user experience, or calls-to-action need improvement.",
//       stats: "Companies with poor web design have 4.6% fewer conversions than industry averages",
//       icon: "💰"
//     }
//   ];

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8 font-sans bg-white">
//       {/* Header */}
//       <header className="text-center mb-12">
//         <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
//           Website Optimization Series
//         </div>
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//           5 Signs Your Business Needs a Professional Website Redesign
//         </h1>
//         <p className="text-gray-600 text-lg">
//           Is your website helping or hurting your business? Learn the telltale signs that it&#39;s time for an upgrade.
//         </p>
//         <div className="flex items-center justify-center mt-6 text-gray-500">
//           <div className="flex items-center">
//             <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center mr-3">
//               <span className="text-purple-800 font-semibold">P</span>
//             </div>
//             <span>Pursuit Digital Services</span>
//           </div>
//           <span className="mx-4">•</span>
//           <span>September 22, 2025</span>
//         </div>
//       </header>

//       {/* Featured Image */}
//       <div className="relative h-64 rounded-xl overflow-hidden mb-12 bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
//         <div className="text-center p-6 text-white">
//           <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Website Should Work For You, Not Against You</h2>
//           <p className="max-w-2xl mx-auto">Recognize these warning signs before they cost you customers</p>
//         </div>
//       </div>

//       {/* Introduction */}
//       <section className="prose prose-lg max-w-none mb-16">
//         <p className="text-gray-700 text-lg mb-6">
//           Your website is often the first impression potential customers have of your business. 
//           In today&#39;s digital landscape, an outdated or poorly functioning website can significantly impact 
//           your credibility and bottom line. But how do you know when it&#39;s time for a redesign rather than just minor updates?
//         </p>
//         <p className="text-gray-700">
//           After working with hundreds of businesses, we&#39;ve identified five key indicators that signal 
//           it&#39;s time to invest in a professional website redesign. If you recognize any of these signs, 
//           your website might be holding your business back more than you realize.
//         </p>
//       </section>

//       {/* Signs Navigation */}
//       <nav className="bg-gray-50 p-4 rounded-lg mb-12 sticky top-4 z-10 shadow-sm">
//         <h3 className="font-semibold text-gray-800 mb-3 text-center">Jump to a sign:</h3>
//         <div className="flex flex-wrap justify-center gap-2">
//           {signs.map((sign, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveSign(index)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                 activeSign === index
//                   ? 'bg-purple-600 text-white'
//                   : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
//               }`}
//             >
//               {index + 1}. {sign.title.split(' ').slice(0, 3).join(' ')}...
//             </button>
//           ))}
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="prose prose-lg max-w-none mb-20">
//         {/* Signs List */}
//         <section>
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">The 5 Warning Signs</h2>
          
//           <div className="space-y-20 mb-16">
//             {signs.map((sign, index) => (
//               <div key={index} id={`sign-${index+1}`} className="scroll-mt-24">
//                 <div className="flex items-start mb-6">
//                   <div className="text-4xl mr-4">{sign.icon}</div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                       Sign #{index + 1}: {sign.title}
//                     </h3>
//                     <p className="text-gray-700 text-lg">{sign.description}</p>
//                     <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600 mt-4">
//                       <p className="text-purple-800 font-medium">{sign.stats}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Specific advice for each sign */}
//                 {index === 0 && (
//                   <div className="bg-gray-50 p-6 rounded-xl mt-6">
//                     <h4 className="font-semibold text-gray-900 mb-3">What to do:</h4>
//                     <ul className="list-disc pl-5 space-y-2 text-gray-700">
//                       <li>Test your website on various mobile devices and screen sizes</li>
//                       <li>Implement responsive design principles</li>
//                       <li>Simplify navigation for touch interfaces</li>
//                       <li>Optimize images and media for mobile viewing</li>
//                     </ul>
//                   </div>
//                 )}

//                 {index === 1 && (
//                   <div className="bg-gray-50 p-6 rounded-xl mt-6">
//                     <h4 className="font-semibold text-gray-900 mb-3">What to do:</h4>
//                     <ul className="list-disc pl-5 space-y-2 text-gray-700">
//                       <li>Compress and optimize images</li>
//                       <li>Minify CSS and JavaScript files</li>
//                       <li>Leverage browser caching</li>
//                       <li>Consider a more performant hosting solution</li>
//                     </ul>
//                   </div>
//                 )}

//                 {index === 2 && (
//                   <div className="bg-gray-50 p-6 rounded-xl mt-6">
//                     <h4 className="font-semibold text-gray-900 mb-3">What to do:</h4>
//                     <ul className="list-disc pl-5 space-y-2 text-gray-700">
//                       <li>Analyze user behavior with heatmaps and session recordings</li>
//                       <li>Improve website navigation and content organization</li>
//                       <li>Create clear calls-to-action</li>
//                       <li>Enhance content readability and scannability</li>
//                     </ul>
//                   </div>
//                 )}

//                 {index === 3 && (
//                   <div className="bg-gray-50 p-6 rounded-xl mt-6">
//                     <h4 className="font-semibold text-gray-900 mb-3">What to do:</h4>
//                     <ul className="list-disc pl-5 space-y-2 text-gray-700">
//                       <li>Refresh design with modern aesthetics</li>
//                       <li>Update content to reflect current offerings</li>
//                       <li>Ensure visual consistency across all pages</li>
//                       <li>Implement contemporary UX best practices</li>
//                     </ul>
//                   </div>
//                 )}

//                 {index === 4 && (
//                   <div className="bg-gray-50 p-6 rounded-xl mt-6">
//                     <h4 className="font-semibold text-gray-900 mb-3">What to do:</h4>
//                     <ul className="list-disc pl-5 space-y-2 text-gray-700">
//                       <li>Implement strategic calls-to-action throughout the site</li>
//                       <li>Create valuable lead magnets</li>
//                       <li>Simplify conversion processes</li>
//                       <li>Build trust with testimonials and case studies</li>
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Redesign Process */}
//         <section className="bg-blue-50 p-8 rounded-xl mb-16">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">The Website Redesign Process</h2>
//           <p className="text-gray-700 mb-6">
//             If you recognized any of these signs, a professional redesign might be in order. Here&#39;s what a typical redesign process looks like:
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white p-5 rounded-lg shadow-sm">
//               <div className="text-blue-600 font-bold text-2xl mb-3">1</div>
//               <h3 className="font-semibold text-gray-900 mb-2">Discovery & Strategy</h3>
//               <p className="text-gray-600">Understanding your goals, audience, and requirements</p>
//             </div>
            
//             <div className="bg-white p-5 rounded-lg shadow-sm">
//               <div className="text-blue-600 font-bold text-2xl mb-3">2</div>
//               <h3 className="font-semibold text-gray-900 mb-2">Design & Development</h3>
//               <p className="text-gray-600">Creating a visually appealing, functional website</p>
//             </div>
            
//             <div className="bg-white p-5 rounded-lg shadow-sm">
//               <div className="text-blue-600 font-bold text-2xl mb-3">3</div>
//               <h3 className="font-semibold text-gray-900 mb-2">Testing & Launch</h3>
//               <p className="text-gray-600">Ensuring everything works perfectly before going live</p>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="bg-gradient-to-r from-purple-600 to-blue-700 p-8 rounded-xl text-center text-white mb-16">
//           <h2 className="text-2xl font-bold mb-4">Ready for a Website That Converts?</h2>
//           <p className="mb-6 max-w-2xl mx-auto">
//             Don&#39;t let an outdated website cost you customers. Our team specializes in creating beautiful, 
//             functional websites that drive results for businesses like yours.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <button className="bg-white text-purple-700 font-medium py-3 px-6 rounded-lg transition-colors hover:bg-gray-100">
//               Schedule Free Consultation
//             </button>
//             <button className="bg-transparent border-2 border-white text-white font-medium py-3 px-6 rounded-lg transition-colors hover:bg-white/10">
//               View Our Portfolio
//             </button>
//           </div>
//         </section>

//         {/* FAQ Section */}
//         <section className="mb-16">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Website Redesign FAQs</h2>
          
//           <div className="space-y-6">
//             <div className="border-b border-gray-200 pb-6">
//               <h3 className="font-semibold text-gray-900 mb-2">How long does a website redesign typically take?</h3>
//               <p className="text-gray-600">
//                 The timeline varies based on complexity, but most business website redesigns take between 4-8 weeks from discovery to launch.
//               </p>
//             </div>
            
//             <div className="border-b border-gray-200 pb-6">
//               <h3 className="font-semibold text-gray-900 mb-2">Will a redesign hurt my SEO?</h3>
//               <p className="text-gray-600">
//                 When done correctly, a redesign should improve your SEO. We implement proper redirects, maintain URL structure when beneficial, and ensure all best practices are followed to preserve and enhance your search rankings.
//               </p>
//             </div>
            
//             <div className="border-b border-gray-200 pb-6">
//               <h3 className="font-semibold text-gray-900 mb-2">How much does a professional website redesign cost?</h3>
//               <p className="text-gray-600">
//                 Investment varies based on scope and features, but most business websites range from $3,000 to $15,000. We offer packages to suit different needs and budgets.
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* Footer */}
//       <footer className="border-t border-gray-200 pt-12 text-center">
//         <h3 className="font-semibold text-gray-900 mb-6">Continue Reading</h3>
//         <div className="flex flex-wrap justify-center gap-4 mb-8">
//           {['Website Development', 'SEO', 'Content Strategy', 'E-Commerce', 'UX Design'].map((topic) => (
//             <a
//               key={topic}
//               href="#"
//               className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
//             >
//               {topic}
//             </a>
//           ))}
//         </div>
//         <p className="text-gray-500 text-sm">
//           © {new Date().getFullYear()} Pursuit Digital Services. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default WebsiteRedesignSigns;