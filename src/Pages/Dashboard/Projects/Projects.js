import { useEffect, useState } from 'react'
import AddProjectModal from '../../../component/AddProjectModal'
import Spinner from '../../../component/Spinner'
import ProjectCard from '../../Home/Porjects/ProjectCard'
import { useGetAllProjectsQuery } from '../../../redux/features/project/projectApi'

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
  const { data: projectsData } = useGetAllProjectsQuery({})
  console.log('🚀 ~ Projects ~ projectsData:', projectsData)

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className='p-4 lg:p-8'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-semibold text-gray-800'>My Projects</h1>
        <AddProjectModal />
      </div>

      <div className='h-1 w-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 my-6'></div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
