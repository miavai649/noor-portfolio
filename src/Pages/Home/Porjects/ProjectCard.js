import React from "react";

const ProjectCard = ({project}) => {
    const { image, title, details, liveLink, github } = project;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{title}</h2>
        <p className="text-base mb-4">{details}</p>
        <div className="card-actions justify-end">
            <a className="btn btn-primary" target='_blank' href={liveLink} rel="noreferrer">Live Demo</a>
            <a className="btn btn-primary" target='_blank' href={github} rel="noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
