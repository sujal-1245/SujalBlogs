import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import posts from '../constants/posts';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';
import 'highlight.js/styles/github-dark.css';

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const index = posts.findIndex((p) => p.slug === slug);
  const prevPost = posts[index - 1];
  const nextPost = posts[index + 1];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="text-center py-20 text-white">
        Post not found.
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen px-6 py-20 text-white max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {post.title}
      </motion.h1>

      <motion.div
        className="text-sm text-gray-400 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        🗓️ {post.date} • ⏱️ {post.readingTime}
      </motion.div>

      {post.tags && (
        <motion.div
          className="flex flex-wrap gap-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-700/30 text-blue-300 text-xs px-2 py-1 rounded-full font-mono"
            >
              #{tag}
            </span>
          ))}
        </motion.div>
      )}

      <motion.div
        className="prose prose-invert prose-code:text-green-400 prose-pre:bg-[#0d1117] prose-pre:rounded-md prose-pre:p-4 prose-a:text-blue-400 max-w-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
        >
          {post.content}
        </ReactMarkdown>
      </motion.div>

      <motion.div
        className="flex justify-between mt-12 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {prevPost ? (
          <Link to={`/blog/${prevPost.slug}`} className="text-blue-400 hover:underline">
            ← {prevPost.title}
          </Link>
        ) : <span />}
        {nextPost ? (
          <Link to={`/blog/${nextPost.slug}`} className="text-blue-400 hover:underline ml-auto">
            {nextPost.title} →
          </Link>
        ) : <span />}
      </motion.div>
    </motion.div>
  );
};

export default BlogPost;
