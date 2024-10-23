import React from 'react'
import { motion } from 'framer-motion'
import Divider from '../../../component/Divider'

const skillsData = [
  {
    name: 'HTML',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    category: 'Frontend'
  },
  {
    name: 'CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    category: 'Frontend'
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    category: 'Frontend'
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    category: 'Frontend'
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    category: 'Backend'
  },
  {
    name: 'Express',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    category: 'Backend'
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    category: 'Database'
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    category: 'Version Control'
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    category: 'Frontend'
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    category: 'Frontend'
  }
]

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      className='bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105'
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}>
      <img src={skill.logo} alt={skill.name} className='w-16 h-16 mb-4' />
      <h3 className='text-lg font-semibold text-gray-800 mb-2'>{skill.name}</h3>
      <span className='text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded-full'>
        {skill.category}
      </span>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section className='py-20 bg-gray-100' id='skills'>
      <div className='container mx-auto px-4'>
        <div>
          <motion.h2
            className='text-4xl font-extrabold text-center text-gray-800 mb-12'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            My Technical Toolkit
          </motion.h2>
          <motion.div
            className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            {skillsData.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </motion.div>
        </div>

        {/* divider */}
        <Divider />
      </div>
    </section>
  )
}

export default Skills
