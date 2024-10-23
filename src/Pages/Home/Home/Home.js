import React from 'react'
import AboutMe from '../AboutME/AboutMe'
import Banner from '../Banner/Banner'
import Projects from '../Porjects/Projects'
import Skills from '../Skills/Skills'
import ContactMe from '../ContactMe/ContactMe'
import Blogs from '../Blogs/Blogs'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Skills />
      <Projects></Projects>
      <AboutMe></AboutMe>
      <Blogs />
      <ContactMe />
    </div>
  )
}

export default Home
