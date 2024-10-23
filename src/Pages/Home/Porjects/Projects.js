import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'
import Spinner from '../../../component/Spinner'
import Divider from '../../../component/Divider'

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
    <section className='pb-20 bg-gray-100' id='projects'>
      <div className='container mx-auto px-4'>
        <div className='pt-10'>
          {' '}
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
        </div>
        {/* divider */}
        <Divider />
      </div>
    </section>
  )
}

export default Projects
