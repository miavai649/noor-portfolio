import React from 'react'
import { motion } from 'framer-motion'
import BlogCard from './BlogCard'
import Divider from '../../../component/Divider'

const blogPosts = [
  {
    id: 1,
    title: 'Mastering React Hooks: A Comprehensive Guide',
    description:
      'A deep dive into the powerful features of React Hooks and how they simplify state management and side effects in functional components.',
    coverImage: 'https://i.ibb.co.com/Z2yfxtY/0-y6-Ic-Be5-J1-Ad-ALz-Xw.webp',
    date: '2024-03-15'
  },
  {
    id: 2,
    title: 'Building RESTful APIs with Node.js and Express',
    description:
      'Learn how to create a fully functional RESTful API using Node.js and Express, the leading tools for server-side development.',
    coverImage: 'https://i.ibb.co.com/sFxLTv0/1671543340465.png',
    date: '2024-03-10'
  },
  {
    id: 2,
    title: 'Building RESTful APIs with Node.js and Express',
    description:
      'Learn how to create a fully functional RESTful API using Node.js and Express, the leading tools for server-side development.',
    coverImage: 'https://i.ibb.co.com/sFxLTv0/1671543340465.png',
    date: '2024-03-10'
  },
  {
    id: 3,
    title: 'Understanding MongoDB: A NoSQL Database for Modern Apps',
    description:
      'Dive into MongoDB, a NoSQL database that is known for its flexibility and scalability in handling large datasets.',
    coverImage: 'https://i.ibb.co.com/Sd9c1Jb/1677609185621.png',
    date: '2024-03-05'
  }
]

const Blogs = () => {
  return (
    <section className='pb-20 bg-gray-100' id='blog'>
      <div className='container mx-auto px-4'>
        <div className='pt-10'>
          <motion.h2
            className='text-4xl font-extrabold text-center text-gray-800 mb-12'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            Explore All Blog Posts
          </motion.h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </div>
      <Divider />
    </section>
  )
}

export default Blogs
