import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ project }) => {
  const { id, image, title, summary, liveLink, githubClient } = project

  return (
    <motion.div
      className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <div className='relative overflow-hidden group'>
        <img
          src={image}
          alt={title}
          className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <div className='text-white text-center'>
            <h3 className='text-2xl font-bold mb-2'>{title}</h3>
            <p className='text-sm mb-4'>{summary}</p>
            <div className='flex justify-center space-x-4'>
              <a
                href={githubClient}
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-yellow-400 transition-colors duration-300'>
                <FaGithub size={24} />
              </a>
              <a
                href={liveLink}
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-yellow-400 transition-colors duration-300'>
                <FaExternalLinkAlt size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='p-6 flex justify-between items-center'>
        <div>
          <h3 className='text-xl font-bold mb-2'>{title}</h3>
          <p className='text-gray-600 mb-4'>{summary}</p>
        </div>
        <Link
          to={`/details/${id}`}
          className='inline-block bg-yellow-400 text-yellow-900 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors duration-300'>
          View Details
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectCard
