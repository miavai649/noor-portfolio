import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import img from '../../../assets/images/bannerImg4.jpg';
import Background from '../../../component/Background';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
<Background></Background>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
    <div className="max-w-4xl">
      <h1 className="mb-3 text-6xl"><span className='block text-primary mb-3 '>Hello!</span>I'm Mahmudul Haque Noor</h1>
      <div>
      <p className="mb-5 text-6xl text-white"><span style={{ color: 'white', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Front-End Developer', 'MERN Stack Web Developer', 'Reliable Person', 'Self Believer 💛 ']}
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
</div>
    );
};

export default Banner;