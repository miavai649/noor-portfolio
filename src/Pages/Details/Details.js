import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const [project, setProject] = useState([])
    
    const _id = useParams() 
    console.log(_id.id)

    useEffect(() => {
        fetch('myProjects.json')
        .then(res => res.json())
            .then(data => {
            const currentProject = data.find(project => project.id === parseInt(_id.id))
            setProject(currentProject)
        })
    },[_id])

    console.log(project)

    return (
        <div>
            <h2>this is details route</h2>
        </div>
    );
};

export default Details;