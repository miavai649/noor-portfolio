import React from 'react';
import img1 from '../../../assets/myProjectsImg/fantasticFurniture.png';
import img2 from '../../../assets/myProjectsImg/knowledgeMedia.png';
import img3 from '../../../assets/myProjectsImg/myCakeHouse.png';
import ProjectCard from './ProjectCard';

const Projects = () => {

    const myProjects = [
        {
            id: 1,
            image: img1,
            title: 'Fantastic Furniture',
            details: 'It is a Full-stack MERN project. Use admin, seller, and buyer-specific dashboards. Where users can buy/sell used furniture. Use MongoDB for store data, Stripe for payment & basic CRUD operation done on the server site',
            liveLink: 'https://assignment-12-43568.web.app/',
            github: 'https://github.com/miavai649/assignment-12-client'
        },
        {
            id: 2,
            image: img2,
            title: 'Knowledge Media',
            details: 'A basic skill learning website. Users can see details of the course and choose any of the courses. Course details can be downloaded in pdf form.',
            liveLink: 'https://assignment-10-2cb68.web.app/',
            github: 'https://github.com/miavai649/assignment-10-client'
        },
        {
            id: 3,
            image: img3,
            title: 'My Cake House',
            details: 'A full-stack responsive service review-based project. Users can add/remove/update reviews. Single page application. Use MongoDB for data storage and do basic CRUD operations on the server site',
            liveLink: 'https://assignment-11-4e916.web.app/',
            github: 'https://github.com/miavai649/assignment-11-client'
        },
    ]
    
    return (
        <div className='my-20 container mx-auto'>
            <h2 className='text-center font-bold text-5xl'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-8 mx-0 sm:mx-3 md:mx-2'>
                {
                    myProjects.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;