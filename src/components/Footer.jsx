// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white/10 backdrop-blur-md text-white py-6 px-4 mt-20 border-t border-white/20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm tracking-wide">
          &copy; {new Date().getFullYear()} Sujal Bhagat — All rights reserved.
        </p>

        <div className="flex gap-6 text-xl">
          <a href="https://github.com/sujal-1245" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/sujal-bhagat-sdb1245" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            <FaLinkedin />
          </a>
          
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
