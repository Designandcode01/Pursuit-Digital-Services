'use client';
import React, { useState } from 'react';

interface SectionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const Section: React.FC<SectionProps> = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 text-left font-semibold text-lg focus:outline-none flex justify-between items-center"
        onClick={onClick}
      >
        <span>{title}</span>
        <span className="text-xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="pb-4">
          <p className="text-gray-700">{content}</p>
        </div>
      )}
    </div>
  );
};

const EngagementGuide: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sections = [
    {
      title: "What is Engagement (And Why Does It Matter?)",
      content: "Engagement is any interaction someone has with your brand online. It's more than a vanity metric; it's a measure of relationship strength. High engagement tells algorithms your content is valuable, builds community, provides direct feedback, and drives conversions."
    },
    {
      title: "Know Your Audience Inside and Out",
      content: "You can't engage people you don't understand. Create audience personas. What are their pain points? What do they love? What language do they use? Hang out where they hang out online."
    },
    {
      title: "Provide Value, Every Single Time",
      content: "Before you post, ask: 'Why would someone care about this?' Your content should either educate, entertain, inspire, or empower your audience. Value first, promotion second."
    },
    {
      title: "Master the Art of the Ask (The Call-to-Action - CTA)",
      content: "Don't assume your audience knows what to do. Gently guide them with specific calls to action like 'What's your #1 productivity hack? Share it in the comments below!'"
    },
    {
      title: "Platform-Specific Quick Tips",
      content: "Instagram: Use all 30 hashtags and leverage Stories. Facebook: Focus on Groups. LinkedIn: Write long-form posts with personal stories. Twitter: Jump into relevant conversations. Email: Ask questions in your newsletters and reply to every response."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-300 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">The Ultimate Guide to Improving Engagement</h1>
      <p className="text-gray-600 mb-6">Transform your passive audience into an active, engaged community with these proven strategies.</p>
      
      <div className="mb-8 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Why Engagement Matters</h2>
        <p className="text-blue-700">Engagement is a measure of relationship strength that algorithms love and that drives real business results.</p>
      </div>
      
      <div className="space-y-2 mb-8">
        {sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            content={section.content}
            isOpen={activeSection === index}
            onClick={() => toggleSection(index)}
          />
        ))}
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Ready to Boost Your Engagement?</h3>
        <p className="text-gray-700 mb-4">Start implementing these strategies today and watch your community grow!</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
          Share Your Experience
        </button>
      </div>
    </div>
  );
};

export default EngagementGuide;