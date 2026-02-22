import React from 'react'
import { motion } from 'framer-motion'
import { FaPython, FaJava, FaJsSquare, FaNodeJs, FaDatabase, FaReact } from 'react-icons/fa'
import { SiMongodb, SiMysql, SiPowerbi, SiTailwindcss, SiExpress } from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: 'Python', icon: <FaPython />, color: 'text-yellow-400', category: 'Programming' },
    { name: 'Java', icon: <FaJava />, color: 'text-red-500', category: 'Programming' },
    { name: 'JavaScript', icon: <FaJsSquare />, color: 'text-yellow-300', category: 'Programming' },
    { name: 'React.js', icon: <FaReact />, color: 'text-cyan-400', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-500', category: 'Frontend' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500', category: 'Backend' },
    { name: 'Express.js', icon: <SiExpress />, color: 'text-gray-400', category: 'Backend' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600', category: 'Database' },
    { name: 'SQL', icon: <SiMysql />, color: 'text-blue-500', category: 'Database' },
    { name: 'Power BI', icon: <SiPowerbi />, color: 'text-yellow-500', category: 'Analytics' },
  ]

  const categories = ['All', 'Programming', 'Frontend', 'Backend', 'Database', 'Analytics']
  const [activeCategory, setActiveCategory] = React.useState('All')

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="py-20 bg-dark overflow-hidden w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeCategory === category
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                : 'bg-dark-light text-gray-400 hover:text-white border border-gray-700 hover:border-primary'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="bg-dark-light p-4 sm:p-5 md:p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                <div className={`text-4xl sm:text-5xl md:text-6xl ${skill.color} group-hover:animate-bounce`}>
                  {skill.icon}
                </div>
                <h3 className="text-white font-semibold text-center text-sm sm:text-base">{skill.name}</h3>
                <span className="text-xs text-gray-500 bg-dark px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-br from-primary/10 to-transparent p-5 sm:p-6 md:p-8 rounded-xl border border-primary/30">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">Web Development</h3>
            <p className="text-sm sm:text-base text-gray-300">
              Building responsive, scalable, and user-friendly web applications using modern
              frameworks and best practices. Expertise in both frontend and backend development.
            </p>
          </div>
          <div className="bg-gradient-to-br from-secondary/10 to-transparent p-5 sm:p-6 md:p-8 rounded-xl border border-secondary/30">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-secondary">Data Analytics</h3>
            <p className="text-sm sm:text-base text-gray-300">
              Transforming raw data into actionable insights through visualization and analysis.
              Proficient in SQL, Power BI, and data-driven decision making.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
