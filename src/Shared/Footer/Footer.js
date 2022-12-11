import React from 'react';
import { FaEnvelope, FaFacebook, FaGithub, FaHome, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import footerImg from '../../assets/images/footerFinal.jpg';
import img from '../../assets/images/noor.png';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 text-black" style={{ backgroundImage: `url(${footerImg})` }}>
  <div>
    <img className='w-32 rounded-full' src={img} alt="" />
    <p className="text-2xl font-bold">
      Mahmudul Haque Noor
    </p> 
    <p className='text-xl'><FaHome className='inline text-2xl'></FaHome> Dhaka, Bangladesh</p>
    <p className='text-xl'><FaPhoneAlt className='inline text-2xl'></FaPhoneAlt>  +8801779190094</p>
    <p className='text-xl'><FaEnvelope className='inline text-2xl'></FaEnvelope>  mahmudulhaquenoor@gmail.comx</p>
    
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4 text-4xl">
      <a target='_blank' href="https://github.com/miavai649" rel="noreferrer" ><FaGithub></FaGithub></a>
      <a target="_blank" href='https://www.facebook.com/mahmudulhaque.noor.1/' rel="noreferrer"><FaFacebook></FaFacebook></a>
      <a target='_blank' href='https://www.linkedin.com/in/noor2001/' rel="noreferrer"><FaLinkedin></FaLinkedin></a>
    </div>
    <p className='mt-3'>Copyright © 2022 - Mahmudul Haque Noor</p>
  </div>
</footer>
    );
};

export default Footer;