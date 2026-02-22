import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaChartBar, FaLaptopCode } from 'react-icons/fa'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = [
    { text: 'Web Developer', icon: <FaCode /> },
    { text: 'Data Analyst', icon: <FaChartBar /> },
    { text: 'Full Stack Engineer', icon: <FaLaptopCode /> }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-dark pt-16 overflow-hidden w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Greeting with bounce animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 250,
              damping: 15
            }}
            className="mb-4"
          >
            <span className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-wave">👋</span>
          </motion.div>

          {/* Main heading with stagger effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 px-2">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-block"
              >
                I'm{' '}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="block md:inline-block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]"
              >
                Rudra Abhishek Soni
              </motion.span>
            </h1>
          </motion.div>

          {/* Animated role switcher */}
          <div className="h-14 sm:h-16 md:h-20 flex items-center justify-center mb-6 md:mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                initial={{ y: 20, opacity: 0, rotateX: 90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: -20, opacity: 0, rotateX: -90 }}
                transition={{ duration: 0.3 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold flex items-center gap-2 md:gap-3"
              >
                <span className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  {roles[currentRole].icon}
                </span>
                <span className="bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                  {roles[currentRole].text}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Creative introduction text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="relative"
          >
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-4 leading-relaxed px-4">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-semibold text-primary"
              >
                Transforming ideas into elegant code
              </motion.span>
              {' '}and{' '}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="font-semibold text-secondary"
              >
                turning data into actionable insights.
              </motion.span>
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 max-w-2xl mx-auto mb-12"
            >
              I craft seamless digital experiences with modern web technologies while uncovering
              hidden patterns in data. From pixel-perfect frontends to robust backends, and from
              SQL queries to Power BI dashboards — I bring the full spectrum of tech expertise.
            </motion.p>
          </motion.div>

          {/* CTA Buttons with 3D effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold overflow-hidden shadow-lg shadow-primary/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaEnvelope /> Let's Connect
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary to-primary"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, rotateY: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-primary rounded-full text-primary font-semibold hover:bg-primary/10 backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
            >
              <FaCode /> View My Work
            </motion.a>
          </motion.div>

          {/* Social links with stagger animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex justify-center gap-6"
          >
            {[
              { icon: <FaGithub size={28} />, href: 'https://github.com/Rudra112446/my-portfolio', label: 'GitHub' },
              { icon: <FaLinkedin size={28} />, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: <FaEnvelope size={28} />, href: 'mailto:soniabhi530@gmail.com', label: 'Email' }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + index * 0.05 }}
                // whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="relative group p-3 rounded-full bg-dark-light/50 backdrop-blur-sm border border-gray-700 hover:border-primary transition-all duration-300"
                aria-label={social.label}
              >
                <span className="text-gray-400 group-hover:text-primary transition-colors duration-300">
                  {social.icon}
                </span>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gray-500 text-sm flex flex-col items-center gap-2"
            >
              <span>Scroll Down</span>
              <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
