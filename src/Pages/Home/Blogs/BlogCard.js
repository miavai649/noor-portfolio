import { motion } from 'framer-motion'
const BlogCard = ({ post, index }) => {
  return (
    <motion.div
      className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}>
      {/* Image Section */}
      <div className='relative'>
        <img
          src={post.coverImage}
          alt={post.title}
          className='w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105'
        />
        <div className='absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold px-2 py-1 m-2 rounded-full'>
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })}
        </div>
      </div>

      {/* Content Section */}
      <div className='p-6 flex flex-col justify-between flex-1'>
        <h3 className='text-xl font-bold mb-2 text-gray-800 hover:text-yellow-500 transition-colors duration-300'>
          {post.title}
        </h3>
        <p className='text-gray-600 mb-4 line-clamp-3'>
          {post.description.slice(0, 100)}...
        </p>

        <motion.button
          className='mt-auto bg-yellow-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          Read More
        </motion.button>
      </div>
    </motion.div>
  )
}

export default BlogCard
