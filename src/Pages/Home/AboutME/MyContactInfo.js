import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLanguage,
  FaPhone
} from 'react-icons/fa'

import { motion } from 'framer-motion'

const MyContactInfo = () => {
  const personalInfo = {
    name: 'Mahmudul Haque Noor',
    title: 'MERN Stack Developer',
    email: 'mahmudulhaquenoor@gmail.com',
    location: 'Dhaka, Bangladesh',
    phone: '+88 01603491969',
    image: 'https://i.ibb.co.com/6YHpRPt/IMG-20241023-013157.jpg',
    languages: [
      { name: 'English', proficiency: 75 },
      { name: 'Bangla', proficiency: 100 },
      { name: 'Hindi', proficiency: 80 }
    ]
  }

  const LanguageProgressBar = ({ language, proficiency }) => (
    <div className='mb-4'>
      <div className='flex justify-between mb-1'>
        <span className='text-base font-medium text-gray-700'>{language}</span>
        <span className='text-sm font-medium text-gray-700'>
          {proficiency}%
        </span>
      </div>
      <div className='w-full bg-gray-200 rounded-full h-2.5'>
        <div
          className='bg-yellow-500 h-2.5 rounded-full'
          style={{ width: `${proficiency}%` }}></div>
      </div>
    </div>
  )

  return (
    <motion.div
      className='lg:w-1/3'
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}>
      <div className='bg-white rounded-2xl shadow-2xl overflow-hidden'>
        <div className='relative h-80'>
          <img
            src={personalInfo.image}
            alt={personalInfo.name}
            className='absolute inset-0 w-full h-full object-cover object-top'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
          <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
            <h3 className='text-3xl font-bold'>{personalInfo.name}</h3>
            <p className='text-xl'>{personalInfo.title}</p>
          </div>
        </div>
        <div className='p-6 space-y-4'>
          <div className='flex items-center'>
            <FaEnvelope className='text-yellow-500 mr-3' size={20} />
            <span className='text-gray-700'>{personalInfo.email}</span>
          </div>
          <div className='flex items-center'>
            <FaMapMarkerAlt className='text-yellow-500 mr-3' size={20} />
            <span className='text-gray-700'>{personalInfo.location}</span>
          </div>
          <div className='flex items-center'>
            <FaPhone className='text-yellow-500 mr-3' size={20} />{' '}
            <span className='text-gray-700'>{personalInfo.phone}</span>{' '}
          </div>
          <div className='pt-4'>
            <h4 className='text-xl font-semibold text-gray-800 mb-3 flex items-center'>
              <FaLanguage className='mr-2' /> Language Proficiency
            </h4>
            {personalInfo.languages.map((lang, index) => (
              <LanguageProgressBar
                key={index}
                language={lang.name}
                proficiency={lang.proficiency}
              />
            ))}
          </div>
          <div className='flex justify-center space-x-6 mt-6'>
            <a
              href='https://github.com/miavai649'
              className='text-gray-400 hover:text-yellow-500 transition-colors duration-300'
              target='_blank'
              rel='noopener noreferrer'>
              <FaGithub size={28} />
            </a>
            <a
              href='https://www.linkedin.com/in/noor2001/'
              className='text-gray-400 hover:text-yellow-500 transition-colors duration-300'
              target='_blank'
              rel='noopener noreferrer'>
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default MyContactInfo
