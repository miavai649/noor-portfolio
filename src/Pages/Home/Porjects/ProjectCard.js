import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({project}) => {
    const { id, image, title, summary, details } = project;
  return (
    <div data-aos="fade-left"
    data-aos-anchor="#example-anchor"
    data-aos-offset="500"
    data-aos-duration="500">
      <div className="card card-compact w-96 bg-base-100 shadow-xl transform transition duration-500 hover:scale-110" >
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{title}</h2>
        <p className="text-base mb-4">{summary}</p>
        <div className="card-actions justify-end">
            <Link className="btn btn-primary" to={`/details/${id}`}>Details</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProjectCard;
