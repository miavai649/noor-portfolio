import React, { useEffect, useState } from "react";
import { FaCode, FaExternalLinkAlt, FaServer } from "react-icons/fa";
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

  const { title, technology, feature, img1, img2, img3, liveLink, githubClient, githubServer } =
    project;

  return (
    <div className="container mt-40 mx-auto h-screen">
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="carousel w-1/2">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={img1} alt="" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-secondary btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-secondary btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} alt="" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-secondary btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-secondary btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} alt="" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-secondary btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-secondary btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>

        <div className="divider lg:divider-horizontal"></div> 

        <div>
          <h2 className="text-4xl font-bold">{title}</h2>
          <div className="flex gap-3 my-3">
            <a target='_blank' className="btn btn-primary" href={liveLink} rel="noreferrer"><FaExternalLinkAlt className="font-bold text-lg"></FaExternalLinkAlt></a>

            <a target='_blank' className="btn btn-primary" href={githubClient} rel="noreferrer"><FaCode className="font-bold text-lg"></FaCode></a>

            <a target='_blank' className="btn btn-primary" href={githubServer} rel="noreferrer"><FaServer className="font-bold text-lg"></FaServer></a>

            {/* <a target='_blank' className="btn btn-primary" href={githubClient} rel="noreferrer"><FaCode className="font-bold text-lg"></FaCode></a> */}

            {/* <a target='_blank' className="btn btn-primary" href={githubServer} rel="noreferrer"><FaServer className="font-bold text-lg"></FaServer></a> */}
          </div>
          <h3 className="text-2xl">Features & Technologies:</h3>
          <ul>
            {
              feature?.map((data, i) => <li className="text-lg" key={i}># {data}</li>)
            }
          </ul>
          <div className="mt-3 flex gap-3">
            {
              technology?.map((data, i) => <kbd key={i} class="kbd kbd-md">{data}</kbd>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
