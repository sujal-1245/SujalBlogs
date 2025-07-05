import BlogCard from './BlogCard';
import posts from '../constants/posts';

const BlogList = () => {
  return (
    <section className="min-h-screen bg-[#0f0f0f] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          📚 My Blog Posts
        </h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
