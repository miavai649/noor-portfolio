import React, { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import img from '../../../assets/images/bannerImg4.jpg'
import Background from '../../../component/Background'
import { motion } from 'framer-motion'

const Banner = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(${img})`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      <Background />
      <div className='absolute inset-0 bg-black bg-opacity-60' />
      <div className='relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className='text-2xl sm:text-3xl font-semibold text-yellow-400 mb-4'>
            Hello, World!
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className='text-4xl sm:text-6xl font-bold text-white mb-6'>
            I'm Mahmudul Haque Noor
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className='text-2xl sm:text-4xl text-yellow-400 font-bold mb-8'>
            <Typewriter
              words={[
                'Front-End Developer',
                'MERN Stack Web Developer',
                'Reliable Person',
                'Self Believer 💛'
              ]}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={800}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}>
            <a
              href='#contact'
              className='inline-block bg-yellow-400 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition duration-300 transform hover:scale-105'>
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent' />
    </div>
  )
}

export default Banner
