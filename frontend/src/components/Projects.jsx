import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Projects = () => {
    const scrollRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleMouseDown = (e) => {
        setIsDragging(true)
        setStartX(e.pageX - scrollRef.current.offsetLeft)
        setScrollLeft(scrollRef.current.scrollLeft)
    }

    const handleMouseLeave = () => {
        setIsDragging(false)
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    const handleMouseMove = (e) => {
        if (!isDragging) return
        e.preventDefault()
        const x = e.pageX - scrollRef.current.offsetLeft
        const walk = (x - startX) * 2
        scrollRef.current.scrollLeft = scrollLeft - walk
    }

    const scrollToProject = (index) => {
        if (scrollRef.current) {
            const cardWidth = 400 // 384px (w-96) + 32px gap
            scrollRef.current.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            })
            setCurrentIndex(index)
        }
    }

    const scrollLeftBtn = () => {
        const newIndex = Math.max(currentIndex - 1, 0)
        scrollToProject(newIndex)
    }

    const scrollRightBtn = () => {
        const newIndex = Math.min(currentIndex + 1, projects.length - 1)
        scrollToProject(newIndex)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current && !isDragging) {
                const cardWidth = 400
                const scrollPosition = scrollRef.current.scrollLeft
                const index = Math.round(scrollPosition / cardWidth)
                setCurrentIndex(index)
            }
        }

        const scrollElement = scrollRef.current
        if (scrollElement) {
            scrollElement.addEventListener('scroll', handleScroll)
            return () => scrollElement.removeEventListener('scroll', handleScroll)
        }
    }, [isDragging])

    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce application with payment integration, user authentication, and admin dashboard.',
            tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
            github: '#',
            live: '#',
            image: 'https://via.placeholder.com/600x400/1E293B/3B82F6?text=E-Commerce+Platform'
        },
        {
            title: 'Data Analytics Dashboard',
            description: 'Interactive dashboard for business intelligence with real-time data visualization and reporting.',
            tech: ['Power BI', 'SQL', 'Python', 'Pandas'],
            github: '#',
            live: '#',
            image: 'https://via.placeholder.com/600x400/1E293B/8B5CF6?text=Analytics+Dashboard'
        },
        {
            title: 'Task Management App',
            description: 'Collaborative task management tool with drag-and-drop functionality and team features.',
            tech: ['React', 'Express.js', 'MongoDB', 'Socket.io'],
            github: '#',
            live: '#',
            image: 'https://via.placeholder.com/600x400/1E293B/3B82F6?text=Task+Manager'
        },
        {
            title: 'Weather Forecast App',
            description: 'Real-time weather application with location-based forecasts and interactive maps.',
            tech: ['JavaScript', 'React', 'API Integration', 'CSS'],
            github: '#',
            live: '#',
            image: 'https://via.placeholder.com/600x400/1E293B/8B5CF6?text=Weather+App'
        },
        {
            title: 'Social Media Analytics',
            description: 'Data analytics tool for tracking social media metrics and generating insights.',
            tech: ['Python', 'SQL', 'Power BI', 'APIs'],
            github: '#',
            live: '#',
            image: 'https://via.placeholder.com/600x400/1E293B/3B82F6?text=Social+Analytics'
        },
        {
            title: 'Portfolio Website',
            description: 'Personal portfolio with modern design, animations, and contact form integration.',
            tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
            github: '#',
            live: '#',
            image: 'https://via.placeholder.com/600x400/1E293B/8B5CF6?text=Portfolio+Site'
        },
    ]

    return (
        <section id="projects" className="py-20 bg-dark overflow-hidden w-full">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 sm:mb-8"></div>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
                        A showcase of my recent work and personal projects
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Left Navigation Button */}
                    <button
                        onClick={scrollLeftBtn}
                        disabled={currentIndex === 0}
                        className={`absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-primary/20 hover:bg-primary/40 p-2 sm:p-3 md:p-4 rounded-full backdrop-blur-sm transition-all duration-300 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                            }`}
                    >
                        <FaChevronLeft className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Right Navigation Button */}
                    <button
                        onClick={scrollRightBtn}
                        disabled={currentIndex === projects.length - 1}
                        className={`absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-primary/20 hover:bg-primary/40 p-2 sm:p-3 md:p-4 rounded-full backdrop-blur-sm transition-all duration-300 ${currentIndex === projects.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                            }`}
                    >
                        <FaChevronRight className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </button>

                    <div
                        ref={scrollRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        className={`flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto pb-6 sm:pb-8 px-6 sm:px-8 md:px-12 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
                            } scrollbar-hide snap-x snap-mandatory`}
                        style={{ scrollBehavior: isDragging ? 'auto' : 'smooth', WebkitOverflowScrolling: 'touch' }}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="bg-dark rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-300 group flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-96 lg:w-[28rem] snap-start snap-always"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                                </div>

                                <div className="p-4 sm:p-5 md:p-6">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-white group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm bg-primary/10 text-primary rounded-full border border-primary/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-3 sm:gap-4 text-sm sm:text-base">
                                        <a
                                            href={project.github}
                                            className="flex items-center gap-1.5 sm:gap-2 text-gray-400 hover:text-primary transition-colors"
                                        >
                                            <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" /> <span className="hidden sm:inline">Code</span>
                                        </a>
                                        <a
                                            href={project.live}
                                            className="flex items-center gap-1.5 sm:gap-2 text-gray-400 hover:text-secondary transition-colors"
                                        >
                                            <FaExternalLinkAlt className="w-4 h-4 sm:w-5 sm:h-5" /> <span className="hidden sm:inline">Live Demo</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bullet Point Indicators */}
                    <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToProject(index)}
                                className={`transition-all duration-300 rounded-full ${currentIndex === index
                                    ? 'w-6 sm:w-8 h-2 sm:h-3 bg-gradient-to-r from-primary to-secondary'
                                    : 'w-2 sm:w-3 h-2 sm:h-3 bg-gray-600 hover:bg-gray-500'
                                    }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
