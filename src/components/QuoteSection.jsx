import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import astronautAnimation from '../assets/animations/astronaut_developer.json'; 

const QuoteSection = () => {
  return (
    <motion.section
      className="bg-[#0d0d0d] rounded-2xl shadow-2xl p-8 md:p-12 my-20 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Left: Quote Content */}
      <div className="text-white text-center md:text-left flex-1">
        <blockquote className="italic text-2xl md:text-3xl font-light leading-relaxed">
          "The best way to learn is by building — and failing forward."
        </blockquote>
        <p className="mt-4 text-blue-400 text-sm md:text-base">— Sujal Bhagat</p>
      </div>

      {/* Right: Lottie Animation */}
      <div className="w-full md:w-1/3 max-w-xs">
        <Lottie animationData={astronautAnimation} loop={true} />
      </div>
    </motion.section>
  );
};

export default QuoteSection;
