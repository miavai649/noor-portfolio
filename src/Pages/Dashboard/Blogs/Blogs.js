import AddBlogModal from '../../../component/AddBlogModal'
import BlogCard from '../../Home/Blogs/BlogCard'

const Blogs = () => {
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

  return (
    <div className='p-4 lg:p-8'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-semibold text-gray-800'>My Blogs</h1>
        <AddBlogModal />
      </div>

      <div className='h-1 w-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 my-6'></div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {blogPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Blogs
