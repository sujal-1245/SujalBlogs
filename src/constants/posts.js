import post1 from '../content/building-a-portfolio.md?raw';
import post2 from '../content/react-vs-vite.md?raw';
import post3 from '../content/react-vs-html.md?raw';
import post4 from '../content/tailwind-vs-css.md?raw'
import post5 from '../content/Javascript.md?raw'
import post6 from '../content/hosting-with-vercel.md?raw'

const posts = [
  {
    id: '1',
    slug: 'building-a-portfolio',
    title: 'Building a Dev Portfolio from Scratch',
    excerpt: 'Learn how to create a stunning portfolio using React, Tailwind, and Framer Motion...',
    tags: ['react', 'portfolio', 'tailwind'],
    coverImage: '/image.png',
    date: 'July 1, 2025',
    readingTime: '4 min read',
    content: post1,
  },
  {
    id: '2',
    slug: 'react-vs-vite',
    title: 'React vs Vite: Which One Should You Choose?',
    excerpt: 'Breaking down the key differences and performance wins of Vite over CRA...',
    tags: ['vite', 'react', 'build-tools'],
    coverImage: '/blog-images/vite-vs-react.jpg',
    date: 'July 3, 2025',
    readingTime: '3 min read',
    content: post2,
  },
  {
    id: '3',
    slug: 'react-vs-html',
    title: 'React vs HTML: What is best for you?',
    excerpt: 'Breaking down the key differences and performance wins of Vanilla HTML and JS VS React...',
    tags: ['HTML','JavaScript', 'React'],
    coverImage: '/blog-images/html-vs-react.jpg',
    date: 'July 4, 2025',
    readingTime: '3 min read',
    content: post3,
  },
  {
    id: '3',
    slug: 'tailwind-vs-css',
    title: 'CSS VS TAILWIND CSS',
    excerpt: 'Breaking down the key differences and performance wins of Vanilla CSS and TailwindCSS...',
    tags: ['CSS','TailwindCSS'],
    coverImage: '/blog-images/css vs tailwind.jpg',
    date: 'July 4, 2025',
    readingTime: '3 min read',
    content: post4,
  },
  {
    id: '3',
    slug: 'JavaScript',
    title: 'JavaScript Basics',
    excerpt: 'Breaking down the basics of JavaScript',
    tags: ['JavaScript'],
    coverImage: '/blog-images/javascript.jpg',
    date: 'July 5, 2025',
    readingTime: '3 min read',
    content: post5,
  },
  {
    id: '3',
    slug: 'vercel',
    title: 'Hosting your websites',
    excerpt: 'How to Host your Websites?',
    tags: ['vercel','netlify'],
    coverImage: '/blog-images/vercel vs netlify.jpg',
    date: 'July 4, 2025',
    readingTime: '3 min read',
    content: post6,
  }

];

export default posts;
