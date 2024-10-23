import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FaCalendar,
  FaUser,
  FaTags,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn
} from 'react-icons/fa'
import Spinner from '../../component/Spinner'

const dummyBlogPost = {
  id: 1,
  title: 'Mastering React Hooks: A Comprehensive Guide',
  author: 'Mahmudul Haque Noor',
  date: '2024-03-15',
  tags: ['React', 'JavaScript', 'Web Development'],
  coverImage: 'https://i.ibb.co.com/Z2yfxtY/0-y6-Ic-Be5-J1-Ad-ALz-Xw.webp',
  mainContent: `
    <p>React Hooks revolutionized the way developers build React applications. Introduced in React 16.8, hooks allow you to use state and other React features without writing a class. This guide covers some of the most commonly used hooks and how they simplify your React code.</p>
    
    <h2>1. The useState Hook</h2>
    <p>The useState hook lets you add state to functional components. Instead of managing state in a class, you can now manage it directly in functional components.</p>
    <pre><code>const [count, setCount] = useState(0);</code></pre>
    <p>This hook returns an array with two elements: the current state and a function to update that state.</p>

    <h2>2. The useEffect Hook</h2>
    <p>The useEffect hook enables you to perform side effects in functional components. You can think of it as a combination of componentDidMount, componentDidUpdate, and componentWillUnmount in class-based components.</p>
    <pre><code>useEffect(() => {
  document.title = \`You clicked \${count} times\`;
}, [count]);</code></pre>
    <p>This hook runs after every render by default. You can control when it runs by passing an array of dependencies.</p>

    <h2>3. The useContext Hook</h2>
    <p>The useContext hook allows you to use context values in your functional components without having to use Context.Consumer in class-based components. It helps to make the code more readable and maintainable.</p>
    <pre><code>const theme = useContext(ThemeContext);</code></pre>

    <h2>4. Custom Hooks</h2>
    <p>With custom hooks, you can extract reusable logic from your components and share them across your project. This is a powerful way to avoid code duplication.</p>
    <pre><code>function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return width;
}</code></pre>
    <p>In this example, the custom hook useWindowWidth tracks the window width and returns the current width.</p>

    <h2>Conclusion</h2>
    <p>React Hooks provide a more intuitive and flexible way to work with React's features. By mastering these hooks, you can write more concise, readable, and maintainable React code. Keep exploring and experimenting with hooks to unlock their full potential in your projects!</p>
  `
}

const BlogDetails = () => {
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulating an API call delay
    const timer = setTimeout(() => {
      setBlog(dummyBlogPost)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Spinner />
  }

  if (!blog) {
    return <div className='text-center text-2xl mt-10'>Blog post not found</div>
  }

  return (
    <motion.article
      className='max-w-4xl mx-auto px-4 py-32'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <motion.h1
        className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}>
        {blog.title}
      </motion.h1>

      <motion.div
        className='flex flex-wrap items-center text-gray-600 mb-8'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}>
        <span className='flex items-center mr-6 mb-2'>
          <FaCalendar className='mr-2 text-yellow-500' />
          {new Date(blog.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </span>
        <span className='flex items-center mr-6 mb-2'>
          <FaUser className='mr-2 text-yellow-500' />
          {blog.author}
        </span>
        <span className='flex items-center mb-2'>
          <FaTags className='mr-2 text-yellow-500' />
          {blog.tags.join(', ')}
        </span>
      </motion.div>

      <motion.div
        className='mb-10'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}>
        <img
          src={blog.coverImage}
          alt={blog.title}
          className='w-full h-64 md:h-96 object-cover rounded-lg shadow-lg'
        />
      </motion.div>

      <motion.div
        className='prose prose-lg max-w-none'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        dangerouslySetInnerHTML={{ __html: blog.mainContent }}
      />
    </motion.article>
  )
}

export default BlogDetails
