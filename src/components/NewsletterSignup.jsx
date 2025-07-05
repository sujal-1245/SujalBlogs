// src/components/NewsletterSignup.jsx
import React from 'react';
import { motion } from 'framer-motion';

const NewsletterSignup = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative my-20 max-w-4xl mx-auto px-6 py-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl overflow-hidden"
    >
      {/* Sparkles or glow */}
      <div id='contact' className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-400/30 rounded-full blur-2xl opacity-10 pointer-events-none" />

      <div className="relative z-10 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          📬 Join the Newsletter
        </h2>
        <p className="text-sm md:text-base text-gray-300 mb-8 max-w-xl mx-auto">
          Get new blogs, updates, and coding insights right in your inbox — no spam, ever.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('✅ Subscribed to Sujal Blogs!');
          }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="w-full md:w-2/3 px-5 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:opacity-90 transition px-6 py-3 rounded-lg font-semibold text-sm"
          >
            Subscribe
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-5">Unsubscribe anytime. No BS.</p>
      </div>
    </motion.section>
  );
};

export default NewsletterSignup;
