import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {

    const [projects, setProjects] = useState([])

    useEffect(()=>{
        fetch('myProjects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    
    return (
        <div className='my-20 container mx-auto'>
            <h2 className='text-center font-bold text-5xl'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-8 mx-0 sm:mx-3 md:mx-2'>
                {
                    projects.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;