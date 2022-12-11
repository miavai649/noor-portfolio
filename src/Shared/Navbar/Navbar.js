import React from 'react';
import { HiDownload } from "react-icons/hi";
import { Link } from 'react-router-dom';
import img from '../../assets/images/noor.png';

const Navbar = () => {

    const menuItem = (
        <React.Fragment>
          <li>
            <Link className='mr-10' to="/">Home</Link>
          </li>
          <li>
          <Link className='mr-10' to="/blog">Blog
          </Link>
          </li>
          <li>
            <Link className='mr-10' to="/contact">Contact Me</Link>
        </li>
        <li>
            <a className='mr-10' href="https://drive.google.com/u/0/uc?id=1uQ0w3Vh0bOd-5OTb2nOyjSC7TtNB1jIl&export=download">My Resume <HiDownload className='text-2xl'></HiDownload></a>
          </li>
        </React.Fragment>
      );

    return (
        <div className="navbar h-20 flex justify-between shadow-2xl py-12 text-neutral lg:px-28">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact font-semibold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <img className='w-14 mr-5 rounded-full' src={img} alt="" />
        <Link className="normal-case text-2xl font-bold hover:text-primary" to="/">
          Mahmudul Haque Noor
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg p-0 font-semibold">{menuItem}</ul>
      </div>
    </div>
    );
};

export default Navbar;