import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const [project, setProject] = useState([]);

  const _id = useParams();
  // console.log(_id.id)

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/miavai649/noor-portfolio/main/public/myProjects.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const currentProject = data.find(
          (project) => project.id === parseInt(_id.id)
        );
        setProject(currentProject);
      });
  }, [_id]);

  // console.log(project)

  return (
    <div>
      <div className="container mx-auto min-h-screen">
        <div className="hero-content max-w-full flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-semibold">About this project</h2>
            <h1 className="text-5xl font-bold">{project.title}</h1>
            <p className="py-6">
              {project.details.description}
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-[50%] shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
