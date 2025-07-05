// src/components/BlogCard.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const BlogCard = ({ post }) => {
  const { id, title, excerpt, tags, coverImage } = post;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300"
    >
      <img
        src={coverImage}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6 space-y-4">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-gray-400 text-sm">{excerpt}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium pt-2"
        >
          Read More <FaArrowRight className="mt-[1px]" />
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
