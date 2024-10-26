import React from 'react'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'
import Divider from '../../../component/Divider'
import { useGetAllProjectsQuery } from '../../../redux/features/project/projectApi'

const Projects = () => {
  // const projects = [
  //   {
  //     id: '1',
  //     title: 'Task Management App',
  //     shortDescription:
  //       'A collaborative task management tool with real-time updates.',
  //     thumbnail: '/placeholder.svg?height=300&width=400',
  //     technologies: [
  //       'Vue.js',
  //       'Firebase',
  //       'Vuex',
  //       'Element UI',
  //       'Google Calendar API',
  //       'WebSockets',
  //       'Node.js'
  //     ],
  //     githubLink: 'https://github.com/yourusername/task-management-app',
  //     liveLink: 'https://task-management-app-demo.com',
  //     startDate: '2023-07-01',
  //     endDate: '2023-11-30'
  //   },
  //   {
  //     id: '2',
  //     title: 'E-commerce Platform',
  //     shortDescription:
  //       'A full-stack e-commerce solution with real-time inventory management.',
  //     thumbnail: '/placeholder.svg?height=300&width=400',
  //     technologies: [
  //       'React',
  //       'Node.js',
  //       'Express',
  //       'MongoDB',
  //       'Redux',
  //       'Stripe API',
  //       'Socket.io'
  //     ],
  //     githubLink: 'https://github.com/yourusername/ecommerce-platform',
  //     liveLink: 'https://ecommerce-platform-demo.com',
  //     startDate: '2023-01-15',
  //     endDate: '2023-06-30'
  //   },
  //   {
  //     id: '3',
  //     title: 'AI-powered Chatbot',
  //     shortDescription:
  //       'An intelligent chatbot using natural language processing for customer support.',
  //     thumbnail: '/placeholder.svg?height=300&width=400',
  //     technologies: [
  //       'Python',
  //       'TensorFlow',
  //       'Flask',
  //       'React',
  //       'Docker',
  //       'AWS Lambda',
  //       'DynamoDB'
  //     ],
  //     githubLink: 'https://github.com/yourusername/ai-chatbot',
  //     liveLink: 'https://ai-chatbot-demo.com',
  //     startDate: '2023-03-01',
  //     endDate: '2023-08-31'
  //   },
  //   {
  //     id: '4',
  //     title: 'Fitness Tracking App',
  //     shortDescription:
  //       'A mobile app for tracking workouts, nutrition, and health metrics.',
  //     thumbnail: '/placeholder.svg?height=300&width=400',
  //     technologies: [
  //       'React Native',
  //       'GraphQL',
  //       'Apollo Client',
  //       'Node.js',
  //       'PostgreSQL',
  //       'Redux Toolkit',
  //       'Expo'
  //     ],
  //     githubLink: 'https://github.com/yourusername/fitness-tracker',
  //     liveLink: 'https://fitness-tracker-demo.com',
  //     startDate: '2023-05-15',
  //     endDate: '2023-10-31'
  //   }
  // ]

  const { data: projectsData } = useGetAllProjectsQuery({})

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
            {projectsData?.data?.map((project) => (
              <ProjectCard key={project?._id} project={project} />
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
