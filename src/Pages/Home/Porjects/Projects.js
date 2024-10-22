import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'
import Spinner from '../../../component/Spinner'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/miavai649/noor-portfolio/main/public/myProjects.json'
    )
      .then((res) => res.json())
      .then((data) => {
        setProjects(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching projects:', error)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <section className='py-20'>
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-4xl font-extrabold text-center text-gray-800 mb-12'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Explore My Creative Journey
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Divider */}
        <div className='flex items-center justify-center my-10'>
          <hr className='w-1/4 border-t-2 border-gray-500' />
          <span className='mx-4 text-gray-600 text-lg font-semibold'>X</span>
          <hr className='w-1/4 border-t-2 border-gray-500' />
        </div>
      </div>
    </section>
  )
}

export default Projects
