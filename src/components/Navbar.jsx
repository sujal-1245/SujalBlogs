// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg shadow-md px-6 py-3 flex justify-between items-center"
    >
      <Link to="/" className="text-xl font-bold text-white tracking-wide">
        SujalBhagat Blogs
      </Link>
      <div className="flex items-center gap-6 text-white">
        <Link to="/" className="hover:text-accent transition">Home</Link>
        <Link to="/blog" className="hover:text-accent transition">Blog</Link>
        
      </div>
    </motion.nav>
  );
};

export default Navbar;
