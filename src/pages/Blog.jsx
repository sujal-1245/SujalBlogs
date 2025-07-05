import React, { useEffect } from 'react';
import BlogList from '../components/BlogList';
import { motion } from 'framer-motion';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen px-4 py-20"
    >
      
      <BlogList />
    </motion.section>
  );
};

export default Blog;
