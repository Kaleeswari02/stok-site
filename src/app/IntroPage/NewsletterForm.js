'use client';
import React, { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      // Optional: Send to backend or show toast here
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl max-w-xl w-full p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Stay Updated</h2>
        <p className="text-gray-500 mb-6">Subscribe to our newsletter for the latest updates.</p>

        {subscribed ? (
          <div className="text-green-600 font-medium">🎉 Thanks for subscribing!</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none w-full"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterForm;
