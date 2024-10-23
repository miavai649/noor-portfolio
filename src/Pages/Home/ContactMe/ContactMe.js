import React from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import Divider from '../../../component/Divider'

const ContactMe = () => {
  return (
    <section
      className='py-20 bg-cover bg-center'
      style={{
        backgroundImage:
          'url(https://img.freepik.com/free-photo/contact-us-communication-support-service-assistance-concept_53876-128103.jpg?t=st=1729636891~exp=1729640491~hmac=8f30b94b2cdfd50ddbf1cdfd4004f0420fad2a970c7d5309403afc1a138d7700&w=1480)'
      }}>
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-4xl font-extrabold text-center text-white mb-12'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Get in Touch
        </motion.h2>

        <div className='flex justify-center'>
          <div className='w-full max-w-lg p-8 bg-white shadow-lg rounded-lg border border-gray-300'>
            <form>
              <div className='form-control mb-6'>
                <label className='label flex items-center text-gray-700'>
                  <FaUser className='mr-3 text-2xl text-yellow-500' />
                  <span className='label-text font-semibold'>Name</span>
                </label>
                <input
                  type='text'
                  placeholder='Enter Your Name'
                  name='client-name'
                  className='input input-bordered focus:ring-2 focus:ring-yellow-500'
                  required
                />
              </div>
              <div className='form-control mb-6'>
                <label className='label flex items-center text-gray-700'>
                  <FaEnvelope className='mr-3 text-2xl text-yellow-500' />
                  <span className='label-text font-semibold'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='Enter Your Email'
                  className='input input-bordered focus:ring-2 focus:ring-yellow-500'
                  name='email'
                  required
                />
              </div>
              <div className='form-control mb-6'>
                <label className='label flex items-center text-gray-700'>
                  <FaPaperPlane className='mr-3 text-2xl text-yellow-500' />
                  <span className='label-text font-semibold'>Message</span>
                </label>
                <textarea
                  className='textarea textarea-bordered h-40 focus:ring-2 focus:ring-yellow-500'
                  placeholder='Enter Your Message'
                  name='message'
                  required></textarea>
              </div>
              <div className='form-control'>
                <button className='btn btn-primary w-full rounded-full shadow-md transition-transform transform hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500'>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <Divider />
      </div>
    </section>
  )
}

export default ContactMe
