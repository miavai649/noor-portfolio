import React from 'react';
import bannerImg from '../../../assets/images/bannerImg.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-secondary font-bold">HEY, I'M Mahmudul Haque Noor</h1>
      <p className="mb-5 text-lg text-secondary">Our Fantastic Furniture website for those people who wants to buy or sell their well home furnishings products and discover the most stylish, contemporary and chic furniture with a low price.</p>
    </div>
  </div>
</div>
    );
};

export default Banner;