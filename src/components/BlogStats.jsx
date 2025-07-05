// src/components/BlogStats.jsx
import React from 'react';
import { motion } from 'framer-motion';
import posts from '../constants/posts';

const BlogStats = () => {
  const totalPosts = posts.length;
  const totalReadingTime = posts.reduce((acc, post) => {
    const time = parseInt(post.readingTime);
    return isNaN(time) ? acc : acc + time;
  }, 0);

  const uniqueCategories = new Set(posts.flatMap((p) => p.tags || []));
  const totalCategories = uniqueCategories.size;

  const stats = [
    { label: 'Total Posts', value: totalPosts },
    { label: 'Reading Minutes', value: totalReadingTime },
    { label: 'Topics Covered', value: totalCategories },
  ];

  return (
    <motion.section
      className="py-16 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300"
        >
          <h3 className="text-4xl font-bold text-blue-400">{stat.value}</h3>
          <p className="text-gray-300 mt-2">{stat.label}</p>
        </div>
      ))}
    </motion.section>
  );
};

export default BlogStats;
