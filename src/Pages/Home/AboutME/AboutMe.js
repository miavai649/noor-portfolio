import React from 'react'
import { motion } from 'framer-motion'

import Divider from '../../../component/Divider'
import MyContactInfo from './MyContactInfo'
import OtherDetails from './OtherDetails'

const AboutSection = () => {
  return (
    <section className='pb-20 bg-gray-100' id='about'>
      <div className='container mx-auto px-4'>
        <div className='pt-10'>
          <motion.h2
            className='text-4xl font-extrabold text-center text-gray-800 mb-12'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            About Me
          </motion.h2>
          <div className='flex flex-col lg:flex-row gap-12'>
            {/* right side personal contact information */}
            <MyContactInfo />

            {/* left side other about me details  */}
            <div className='lg:w-2/3'>
              <OtherDetails />
            </div>
          </div>
        </div>
        {/* divider */}
        <Divider />
      </div>
    </section>
  )
}

export default AboutSection
