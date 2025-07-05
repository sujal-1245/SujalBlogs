import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

const AuthorSpotlight = () => {
  return (
    <motion.section
      className="relative bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-2xl my-20 max-w-5xl mx-auto overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Soft gradient glow blobs */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl opacity-10 pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-white">
        {/* Avatar with animation */}
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative"
        >
          <img
            src="/sujal bhagat.jpg"
            alt="Sujal Bhagat"
            className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full border-4 border-blue-500 shadow-lg"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 pointer-events-none"
          />
        </motion.div>

        {/* Text content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">👋 Meet the Author</h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
            I'm <strong>Sujal Bhagat</strong> — a full-stack developer passionate about blending design with logic to craft immersive web experiences, write dev-focused content, and bring ideas to life.
          </p>

          {/* Social links */}
          <div className="flex justify-center md:justify-start gap-5 mt-4">
            <a
              href="https://github.com/sujal-1245"
              target="_blank"
              className="text-white hover:text-blue-400 transition text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/sujal-bhagat-sdb1245"
              target="_blank"
              className="text-white hover:text-blue-400 transition text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://sujal-bhagat.vercel.app"
              target="_blank"
              className="text-white hover:text-blue-400 transition text-xl"
            >
              <FaGlobe />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AuthorSpotlight;
