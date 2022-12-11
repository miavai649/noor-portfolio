import React from 'react';
import image from '../../../assets/images/bannerIMG3.jpg';

const AboutMe = () => {
    return (
        <div>
      <div className="hero my-20 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} alt="" className="w-3/5 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              About Me 
            </h1>
            <p className="py-6 text-lg">
            Hello, my name is Mahmudul Haque Noor, and I am a BBA marketing student with no prior experience in the field of web development. However, I am currently developing my react skill. Additionally, I am familiar with Javascript, Bootstrap, Tailwind CSS, React JS, React Bootstrap, and React Hook Form. I also have knowledge with HTML5, CSS3, and Firebase. I work diligently to design a strong user interface and have created a few react projects. Building new projects piques my intense curiosity and excitement. I enjoy learning about new technology, and as a partitioner, I prefer to follow the newest trends about technology. My current main goal is to develop innovative, understandable, accessible, and modular projects.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AboutMe;