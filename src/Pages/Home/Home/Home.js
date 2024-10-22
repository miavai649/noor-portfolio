import React from 'react'
import AboutMe from '../AboutME/AboutMe'
import Banner from '../Banner/Banner'
import Projects from '../Porjects/Projects'
import Skills from '../Skills/Skills'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Skills />
      <Projects></Projects>
      <AboutMe></AboutMe>
    </div>
  )
}

export default Home
