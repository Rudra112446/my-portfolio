import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-light/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 md:gap-3 flex-shrink-0 min-w-0"
          >
            <img
              src="/images/profile.jpg"
              alt="Rudra Abhishek Soni"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-primary flex-shrink-0"
            />
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent truncate">
              <span className="hidden sm:inline">Rudra Abhishek Soni</span>
              <span className="sm:hidden">Rudra</span>
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-4 lg:space-x-8 items-center flex-shrink-0">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm lg:text-base text-gray-300 hover:text-primary transition-colors duration-300 relative group whitespace-nowrap"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          {/* Mobile Menu Button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-dark-light/98 backdrop-blur-md border-t border-gray-800 shadow-xl overflow-hidden"
        >
          <div className="w-full max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
