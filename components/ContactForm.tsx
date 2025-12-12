// components/ContactForm.tsx
"use client";

import React, { useState } from 'react';

export default function ContactForm() {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Replace with your Formspree endpoint: https://formspree.io/f/your-form-id
    const response = await fetch('https://formspree.io/f/mwpnrvbk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
    });
    
    if (response.ok) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="p-5 bg-green-900/20 border border-green-800 rounded-lg text-center">
        <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3>
        <p className="text-green-200">Thank you for your message. We will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-700 space-y-4 rounded-2xl">
      <div>
        <label htmlFor="name" className="block pl-2 text-sm font-medium text-cyan-400 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={state.name}
          onChange={handleChange}
          required
          className="w-full px-1 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          placeholder="Your name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block pl-2 text-sm font-medium text-cyan-400 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block pl-2 text-sm font-medium text-cyan-400 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={state.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          placeholder="Your message..."
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="w-full py-3 px-4 bg-linear-to-r from-gray-700 to-gray-900 hover:from-cyan-700 hover:to-blue-700 text-white font-medium rounded-md transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
}