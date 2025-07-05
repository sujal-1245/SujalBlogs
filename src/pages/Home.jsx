// src/pages/Home.jsx
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import AuthorSpotlight from '../components/AuthorSpotlight';
import QuoteSection from '../components/QuoteSection';
import BlogStats from '../components/BlogStats';
import NewsletterSignup from '../components/NewsletterSignup';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Hero />
      <BlogStats/>
      <AuthorSpotlight/>
      <QuoteSection/>
      <NewsletterSignup/>
    </motion.main>
  );
};

export default Home;
