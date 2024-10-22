import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaCode, FaGraduationCap, FaBriefcase, FaHeart } from 'react-icons/fa'
const OtherDetails = () => {
  const [activeTab, setActiveTab] = useState('personal')

  const tabs = [
    { id: 'personal', label: 'Personal', icon: FaCode },
    { id: 'courses', label: 'Courses', icon: FaGraduationCap },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'interests', label: 'Interests', icon: FaHeart }
  ]

  const tabContent = {
    personal: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}>
        <h3 className='text-2xl font-bold mb-4 text-gray-800'>Who Am I?</h3>
        <p className='text-gray-600 mb-6'>
          Hello! I'm a passionate and honest MERN stack developer, driven by my
          love for coding and constantly exploring new technologies. I believe
          that learning never stops, and I’m always excited to tackle
          challenging problems, find solutions, and grow from them. Whether it's
          building scalable web applications or improving user experiences, I
          always strive to create high-quality, efficient solutions.
        </p>
        <p className='text-gray-600 mb-6'>
          My journey into web development began with a spark of curiosity, but
          it quickly turned into a full-fledged passion. With a solid foundation
          in MongoDB, Express.js, React, and Node.js, I've worked on various
          projects that demonstrate my ability to create clean, responsive, and
          high-performing web applications. I’m always eager to push boundaries,
          embracing new tools and technologies to stay at the cutting edge of
          web development.
        </p>
        <p className='text-gray-600'>
          Beyond just coding, I take pride in my honest and straightforward
          approach to work. Whether collaborating with a team or working
          independently, my dedication to excellence and integrity shines
          through in everything I do. I believe in continuous learning,
          improving every day, and making a positive impact with my work.
        </p>
      </motion.div>
    ),

    courses: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}>
        <h3 className='text-2xl font-bold mb-4 text-gray-800'>
          Course Achievements
        </h3>
        <div className='space-y-4'>
          <div className='bg-white rounded-lg p-4 shadow-md'>
            <h4 className='text-xl font-semibold text-gray-700'>
              Programming Hero
            </h4>
            <p className='text-gray-600'>Complete Web Development Course</p>
            <ul className='list-disc list-inside mt-2 text-gray-600'>
              <li>Learned the fundamentals of HTML, CSS, and JavaScript</li>
              <li>
                Gained a foundational understanding of React for building user
                interfaces
              </li>
              <li>
                Introduced to backend development with Node.js and Express.js
              </li>
              <li>Learned basic MongoDB to manage databases</li>
            </ul>
          </div>

          <div className='bg-white rounded-lg p-4 shadow-md'>
            <h4 className='text-xl font-semibold text-gray-700'>
              Programming Hero
            </h4>
            <p className='text-gray-600'>Next Level Web Development Course</p>
            <ul className='list-disc list-inside mt-2 text-gray-600'>
              <li>
                Advanced skills in React and Next.js for full-stack development
              </li>
              <li>Learned TypeScript for building robust applications</li>
              <li>
                Mastered advanced MongoDB techniques, including aggregation
                pipelines
              </li>
              <li>
                Deepened knowledge of Mongoose for managing complex schemas and
                queries
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    ),

    experience: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}>
        <h3 className='text-2xl font-bold mb-4 text-gray-800'>
          Work Experience
        </h3>
        <div className='bg-white rounded-lg p-4 shadow-md mb-4'>
          <h4 className='text-xl font-semibold text-gray-700'>Devnest</h4>
          <p className='text-yellow-500 italic'>
            MERN Stack Developer | January 2023 - August 2023
          </p>
          <p className='text-gray-600 mt-2'>
            Developed and maintained web applications using the MERN stack.
            Collaborated with cross-functional teams to deliver high-quality
            software, implemented responsive designs, ensured cross-browser
            compatibility, and contributed to improving development processes
            through code reviews.
          </p>
        </div>
      </motion.div>
    ),

    interests: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}>
        <h3 className='text-2xl font-bold mb-4 text-gray-800'>
          Outside of Work
        </h3>
        <p className='text-gray-600 leading-relaxed mb-4'>
          When I’m not coding, I’m still immersed in the world of technology,
          often exploring new tools and techniques to enhance my skill set. I
          have a deep interest in UI/UX design, and gaming fuels my creativity
          with innovative design ideas.
        </p>
        <p className='text-gray-600 leading-relaxed mb-4'>
          Apart from that, I enjoy staying updated with the latest tech trends,
          watching movies for inspiration, and sharing quality time with family
          and friends. Exploring new places and experiences allows me to
          maintain a balance, refresh my mind, and return to work with fresh
          perspectives.
        </p>
        <p className='text-gray-600 leading-relaxed'>
          My commitment to continuous learning extends beyond professional
          development. Whether it’s coding, design, or gaming, every aspect of
          my life contributes to my growth as a well-rounded individual and
          developer.
        </p>
      </motion.div>
    )
  }

  return (
    <div className='bg-white rounded-2xl shadow-2xl p-8'>
      <div className='flex flex-wrap justify-center mb-8'>
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            className={`flex items-center px-6 py-3 rounded-full mr-4 mb-4 transition-colors duration-300 ${
              activeTab === tab.id
                ? 'bg-yellow-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <tab.icon className='mr-2' />
            {tab.label}
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode='wait'>
        <div className='bg-gray-100 rounded-2xl p-6 min-h-[400px]'>
          {tabContent[activeTab]}
        </div>
      </AnimatePresence>
    </div>
  )
}

export default OtherDetails
