import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaArrowLeft
} from 'react-icons/fa'

const project = {
  id: '1',
  title: 'Task Management App',
  shortDescription:
    'A collaborative task management tool with real-time updates.',
  longDescription:
    'This task management application was designed to streamline team collaboration and project organization. It features real-time updates, allowing team members to see changes instantly, and integrates with popular productivity tools to create a seamless workflow.',
  thumbnail: '/placeholder.svg?height=600&width=800',
  technologies: [
    'Vue.js',
    'Firebase',
    'Vuex',
    'Element UI',
    'Google Calendar API',
    'WebSockets',
    'Node.js'
  ],
  features: [
    'Real-time task updates',
    'Team collaboration tools',
    'Project timeline visualization',
    'Integration with Google Calendar',
    'File attachment and sharing',
    'Customizable project boards',
    'Advanced filtering and sorting options'
  ],
  githubLink: 'https://github.com/yourusername/task-management-app',
  liveLink: 'https://task-management-app-demo.com',
  startDate: '2023-07-01',
  endDate: '2023-11-30'
}

const ProjectDetails = () => {
  const { id } = useParams()
  console.log('🚀 ~ ProjectDetails ~ id:', id)

  return (
    <div className='container mx-auto px-4 py-32'>
      <Link
        to='/projects'
        className='btn btn-ghost mb-8 inline-flex items-center'>
        <FaArrowLeft className='mr-2' /> Back to Projects
      </Link>
      <div className='bg-base-100 shadow-xl rounded-lg overflow-hidden'>
        <div className='relative h-64 md:h-96'>
          <img
            src={project.thumbnail}
            alt={project.title}
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-white text-center px-4'>
              {project.title}
            </h1>
          </div>
        </div>
        <div className='p-6 md:p-10'>
          <div className='flex flex-wrap items-center justify-between mb-6'>
            <div className='flex items-center text-base-content opacity-70 mb-2 md:mb-0'>
              <FaCalendarAlt className='mr-2' />
              <span>
                {project.startDate} - {project.endDate}
              </span>
            </div>
            <div className='flex space-x-4'>
              <a
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary'>
                <FaGithub className='mr-2' /> GitHub
              </a>
              <a
                href={project.liveLink}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-secondary'>
                <FaExternalLinkAlt className='mr-2' /> Live Demo
              </a>
            </div>
          </div>
          <p className='text-xl text-base-content mb-8'>
            {project.longDescription}
          </p>
          <div className='grid md:grid-cols-2 gap-8 mb-8'>
            <div>
              <h2 className='text-2xl font-bold mb-4 text-primary'>
                Technologies Used
              </h2>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech, index) => (
                  <span key={index} className='badge badge-primary'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className='text-2xl font-bold mb-4 text-primary'>
                Key Features
              </h2>
              <ul className='list-disc list-inside space-y-2'>
                {project.features.map((feature, index) => (
                  <li key={index} className='text-base-content'>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
