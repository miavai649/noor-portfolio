import React, { useState, useEffect } from 'react'
import { HiDownload, HiMenu, HiX } from 'react-icons/hi'
import img from '../../assets/images/noor.jpg'
import myResume from '../../assets/my-resume/Noor-Resume-Jr.pdf'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Home', to: 'home' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'About', to: 'about' },
    { name: 'Blog', to: 'blog' },
    { name: 'Contact', to: 'contact' }
  ]

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const navbarHeight = 80 // Adjust this value based on your navbar height
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false) // Close mobile menu after clicking
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg text-gray-800' : 'bg-black/30 text-white'
      }`}>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-20'>
          <div className='flex-shrink-0 flex items-center'>
            <img
              className='w-12 h-12 rounded-full border-2 border-yellow-400 transition-transform duration-300 hover:scale-110'
              src={img}
              alt='Mahmudul Haque Noor'
            />
            <span className='ml-3 text-xl font-bold transition-colors duration-300'>
              <span className='text-yellow-500'>&lt;</span>
              <span className={`${scrolled ? 'text-gray-800' : 'text-white'}`}>
                noor
              </span>
              <span className='text-yellow-500'>/&gt;</span>
            </span>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.to}`}
                  onClick={(e) => handleNavClick(e, item.to)}
                  className={`${
                    scrolled ? 'text-gray-700' : 'text-white'
                  } hover:text-yellow-500 px-3 py-2 rounded-md text-base font-semibold transition-colors duration-300`}>
                  {item.name}
                </a>
              ))}
              <a
                target='_blank'
                href={myResume}
                rel='noreferrer'
                download='noor-resume'
                className={`inline-flex items-center ${
                  scrolled ? 'text-gray-700' : 'text-white'
                } hover:text-yellow-500 px-3 py-2 rounded-md text-base font-semibold transition-colors duration-300 group`}>
                My Resume
                <HiDownload className='ml-2 text-xl group-hover:animate-bounce' />
              </a>
            </div>
          </div>
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled ? 'text-gray-700' : 'text-white'
              } hover:text-yellow-500 focus:outline-none transition-colors duration-300`}>
              {isOpen ? (
                <HiX className='block h-6 w-6' aria-hidden='true' />
              ) : (
                <HiMenu className='block h-6 w-6' aria-hidden='true' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* for mobile screen */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
        <div
          className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
            scrolled ? 'bg-white' : 'bg-black/30'
          } shadow-lg`}>
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.to}`}
              onClick={(e) => handleNavClick(e, item.to)}
              className={`${
                scrolled ? 'text-gray-700' : 'text-white'
              } hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300`}>
              {item.name}
            </a>
          ))}
          <a
            href={myResume}
            download='noor-resume'
            className={`inline-flex items-center ${
              scrolled ? 'text-gray-700' : 'text-white'
            } hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 group`}>
            My Resume
            <HiDownload className='ml-2 text-xl group-hover:animate-bounce' />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
