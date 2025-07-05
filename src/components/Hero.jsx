// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Lottie from 'lottie-react';
import animationData from '../assets/animations/thinking_developer.json';
import '@fontsource/fira-code';

const Hero = () => {
  return (
    <section className="min-h-screen overflow-hidden bg-gradient-to-tr from-[#0f0f0f] to-[#1a1a1a] flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            👋 Hey, I’m <span className="text-blue-400">Sujal</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A full-stack developer who shares code, insights, and experiences
            from real-world projects.
          </p>

          <p className="text-sm text-gray-500 italic mt-1">
            Built with React, TailwindCSS & caffeine ☕
          </p>

          <div className="bg-[#1e1e1e] border border-[#2c2c2c] rounded-md text-left text-sm w-fit mx-auto px-4 py-3 font-mono text-green-400 shadow-inner shadow-black/40">
            <span className="text-gray-500">~$</span>{' '}
            <Typewriter
              words={[
                'npm run dev',
                'git commit -m "Build amazing UIs"',
                'npx create-impact',
                'code .',
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <Link
              to="/blog"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition duration-300"
            >
              <div className='flex '>
                <h1>Read my Blogs</h1><span className='ml-5 mt-1'><FaArrowRight /></span>
              </div>
            </Link>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition duration-300 font-medium"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Lottie Animation Visual */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full flex justify-center"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full blur-2xl opacity-30 animate-pulse absolute" />
          <Lottie
            animationData={animationData}
            loop
            autoplay
            className="relative z-10 w-72 md:w-96 animate-float"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
