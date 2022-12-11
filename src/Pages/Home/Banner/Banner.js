import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import bannerImg from '../../../assets/images/bannerImg.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-4xl">
      <h1 className="mb-5 text-5xl text-secondary font-bold"><span className='block text-primary text-8xl font-extrabold'>Hello!</span>My Name is Mahmudul Haque Noor</h1>
      <p className="mb-5 text-3xl text-black">I'm <span style={{ color: 'black', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['A Front-End Developer', 'A MERN Stack Web Developer', 'A Reliable Person', 'A Self Believer 💛 ']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={800}
          />
        </span></p>
    </div>
  </div>
</div>
    );
};

export default Banner;