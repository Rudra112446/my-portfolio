import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { FaCode, FaDatabase, FaChartLine, FaLaptopCode, FaRocket, FaLightbulb } from 'react-icons/fa'

const About = () => {
    const [counters, setCounters] = useState({ projects: 0, technologies: 0, experience: 0 })
    const [hasAnimated, setHasAnimated] = useState(false)

    const stats = [
        { label: 'Projects Completed', value: 20, suffix: '+', icon: <FaRocket />, color: 'from-blue-500 to-cyan-500' },
        { label: 'Technologies Mastered', value: 15, suffix: '+', icon: <FaCode />, color: 'from-purple-500 to-pink-500' },
        { label: 'Hours of Coding', value: 500, suffix: '+', icon: <FaLaptopCode />, color: 'from-orange-500 to-red-500' },
    ]

    const expertise = [
        { name: 'Web Development', level: 95, icon: <FaCode />, color: 'bg-blue-500' },
        { name: 'Data Analytics', level: 90, icon: <FaChartLine />, color: 'bg-purple-500' },
        { name: 'Database Management', level: 85, icon: <FaDatabase />, color: 'bg-green-500' },
    ]

    const journey = [
        { year: '2024', title: 'Full Stack Development', description: 'Mastered MERN stack & modern frameworks' },
        { year: '2023', title: 'Data Analytics', description: 'Advanced SQL, Power BI & Python analytics' },
        { year: '2022', title: 'Programming Fundamentals', description: 'Started with Python, Java & JavaScript' },
    ]

    useEffect(() => {
        if (hasAnimated) {
            const duration = 1000
            const steps = 40
            const interval = duration / steps

            const timer = setInterval(() => {
                setCounters(prev => ({
                    projects: Math.min(prev.projects + 1, 20),
                    technologies: Math.min(prev.technologies + 1, 15),
                    experience: Math.min(prev.experience + 13, 500),
                }))
            }, interval)

            return () => clearInterval(timer)
        }
    }, [hasAnimated])

    return (
        <section id="about" className="py-20 bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, delay: 0 }}
                        className="inline-block mb-4"
                    >
                        <FaLightbulb className="text-5xl text-primary mx-auto animate-pulse" />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0 }}
                        className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto"
                    ></motion.div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                    {/* Left Side - Text Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.h3
                                className="text-3xl font-bold mb-6 flex items-center gap-3"
                                initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
                                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    type: "spring",
                                    stiffness: 180
                                }}
                            >
                                <motion.span
                                    className="text-4xl"
                                    animate={{ rotate: [0, 10, -10, 10, 0] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatDelay: 3
                                    }}
                                >
                                    👨‍💻
                                </motion.span>
                                <motion.span
                                    className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                                    whileHover={{
                                        scale: 1.05,
                                        letterSpacing: "0.05em",
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    Who Am I?
                                </motion.span>
                            </motion.h3>

                            <div className="space-y-4">
                                <motion.p
                                    initial={{ opacity: 0, x: -100, rotateX: -90 }}
                                    whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.05,
                                        duration: 0.4,
                                        type: "spring",
                                        stiffness: 150
                                    }}
                                    className="text-gray-300 text-lg leading-relaxed transform-gpu"
                                >
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0, duration: 0.25 }}
                                    >
                                        Hello! 👋
                                    </motion.span>
                                    {' '}I'm{' '}
                                    <motion.span
                                        className="text-primary font-semibold text-xl inline-block"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0, duration: 0.25 }}
                                        whileHover={{
                                            scale: 1.1,
                                            color: '#8B5CF6',
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        Rudra Abhishek Soni
                                    </motion.span>
                                    ,{' '}
                                    a passionate{' '}
                                    <motion.span
                                        className="text-secondary font-semibold inline-block"
                                        initial={{ opacity: 0, rotateY: 180 }}
                                        whileInView={{ opacity: 1, rotateY: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0, duration: 0.3 }}
                                    >
                                        Web Developer
                                    </motion.span>
                                    {' '}and{' '}
                                    <motion.span
                                        className="text-secondary font-semibold inline-block"
                                        initial={{ opacity: 0, rotateY: -180 }}
                                        whileInView={{ opacity: 1, rotateY: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0, duration: 0.3 }}
                                    >
                                        Data Analytics enthusiast
                                    </motion.span>
                                    .{' '}
                                    <motion.span
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0, duration: 0.25 }}
                                    >
                                        I transform complex problems into elegant, scalable solutions. ✨
                                    </motion.span>
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.1,
                                        duration: 0.35,
                                        type: "spring"
                                    }}
                                    className="text-gray-300 text-lg leading-relaxed"
                                >
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.35 }}
                                    >
                                        My expertise spans{' '}
                                    </motion.span>
                                    <motion.span
                                        className="text-primary font-semibold inline-block"
                                        initial={{ opacity: 0, y: -10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4, type: "spring", bounce: 0.5 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                        full-stack development 🚀
                                    </motion.span>
                                    {' '}and{' '}
                                    <motion.span
                                        className="text-primary font-semibold inline-block"
                                        initial={{ opacity: 0, y: -10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.45, type: "spring", bounce: 0.5 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                        data analytics 📊
                                    </motion.span>
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        , allowing me to build end-to-end
                                        solutions that are both visually stunning and data-driven. From crafting pixel-perfect
                                        UIs to optimizing database queries, I love every aspect of the development lifecycle. 💻
                                    </motion.span>
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, x: 100, rotateY: 90 }}
                                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.15,
                                        duration: 0.4,
                                        type: "spring",
                                        stiffness: 120
                                    }}
                                    className="text-gray-300 text-lg leading-relaxed transform-gpu"
                                >
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        When I'm not coding, you'll find me exploring new technologies 🔍, contributing to
                                        open-source projects 🌟, or diving deep into data visualization techniques 📈. I believe
                                        in{' '}
                                    </motion.span>
                                    <motion.span
                                        className="text-secondary font-semibold inline-block"
                                        initial={{ opacity: 0, rotateX: 90 }}
                                        whileInView={{ opacity: 1, rotateX: 0 }}
                                        viewport={{ once: true }}
                                        // transition={{ delay: 0.55, duration: 0.3 }}
                                        whileHover={{
                                            scale: 1.1,
                                            // rotateZ: 5,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        continuous learning
                                    </motion.span>
                                    {' '}and staying ahead of the curve in this ever-evolving tech landscape. 🎯
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* Expertise Bars */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0 }}
                            className="space-y-6"
                        >
                            <motion.h4
                                className="text-2xl font-bold text-white mb-4"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0, type: "spring" }}
                            >
                                <motion.span
                                    animate={{
                                        textShadow: [
                                            "0 0 10px rgba(59, 130, 246, 0.5)",
                                            "0 0 20px rgba(139, 92, 246, 0.5)",
                                            "0 0 10px rgba(59, 130, 246, 0.5)"
                                        ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    My Expertise ⚡
                                </motion.span>
                            </motion.h4>
                            {expertise.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0 + index * 0.15, type: "spring" }}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <motion.span
                                                className="text-primary text-xl"
                                                animate={{ rotate: [0, 15, 0] }}
                                                transition={{
                                                    duration: 2,
                                                    delay: index * 0.2,
                                                    repeat: Infinity,
                                                    repeatDelay: 3
                                                }}
                                            >
                                                {skill.icon}
                                            </motion.span>
                                            <span className="text-gray-300 font-semibold">{skill.name}</span>
                                        </div>
                                        <motion.span
                                            className="text-primary font-bold"
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 + index * 0.08, type: "spring", bounce: 0.6 }}
                                        >
                                            {skill.level}%
                                        </motion.span>
                                    </div>
                                    <div className="h-3 bg-dark rounded-full overflow-hidden shadow-inner">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.8,
                                                delay: index * 0.1 + 0.25,
                                                ease: "easeOut"
                                            }}
                                            className={`h-full ${skill.color} rounded-full relative overflow-hidden`}
                                        >
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                                animate={{ x: ["-100%", "200%"] }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    repeatDelay: 0.5,
                                                    ease: "linear"
                                                }}
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Tags */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex gap-3 flex-wrap"
                        >
                            {['🎓 Web Developer', '📊 Data Analyst', '💻 Full Stack', '🚀 Problem Solver'].map((tag, index) => (
                                <motion.div
                                    key={tag}
                                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.6 + index * 0.05,
                                        type: "spring",
                                        stiffness: 250,
                                        damping: 12
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        rotate: [0, -5, 5, 0],
                                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                                        transition: { duration: 0.3 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/30 hover:border-primary/60 transition-all cursor-pointer"
                                >
                                    <span className="text-primary font-semibold">{tag}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Side - Image & Interactive Elements */}
                    <div className="space-y-8">
                        {/* Profile Image with Floating Elements */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, rotateY: 90 }}
                            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative group">
                                {/* Animated border */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 animate-gradient bg-[length:200%_auto]"></div>

                                {/* Floating geometric shapes */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute -top-6 -right-6 w-24 h-24 border-4 border-primary/30 rounded-lg"
                                ></motion.div>
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute -bottom-6 -left-6 w-20 h-20 border-4 border-secondary/30 rounded-full"
                                ></motion.div>

                                {/* Main Image Container */}
                                <div className="relative bg-dark-light rounded-2xl overflow-hidden">
                                    <img
                                        src="/images/profile.jpg"
                                        alt="Rudra Avhishek Soni"
                                        className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500"
                                    />

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                                    {/* Name badge */}
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                        className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark/95 to-transparent"
                                    >
                                        <h4 className="text-2xl md:text-3xl font-bold text-white mb-1">Rudra Avhishek Soni</h4>
                                        <p className="text-primary font-semibold text-lg">Full Stack Developer & Data Analyst</p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Journey Timeline */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="bg-dark/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                        >
                            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <FaRocket className="text-primary" />
                                My Journey
                            </h4>
                            <div className="space-y-4">
                                {journey.map((item, index) => (
                                    <motion.div
                                        key={item.year}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.8 + index * 0.2 }}
                                        whileHover={{ x: 10 }}
                                        className="flex gap-4 group cursor-pointer"
                                    >
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform">
                                                {item.year.slice(2)}
                                            </div>
                                            {index !== journey.length - 1 && (
                                                <div className="w-0.5 h-full bg-gradient-to-b from-primary to-transparent mt-2"></div>
                                            )}
                                        </div>
                                        <div className="flex-1 pb-6">
                                            <h5 className="text-white font-semibold mb-1 group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h5>
                                            <p className="text-gray-400 text-sm">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setHasAnimated(true)}
                    transition={{ delay: 0.4 }}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + index * 0.2 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-10 blur transition-all"></div>
                            <div className="relative bg-dark border border-gray-800 group-hover:border-primary/50 rounded-xl p-6 text-center transition-all">
                                <div className={`text-4xl mx-auto mb-3 w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white`}>
                                    {stat.icon}
                                </div>
                                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                                    {index === 0 ? counters.projects : index === 1 ? counters.technologies : counters.experience}
                                    {stat.suffix}
                                </div>
                                <div className="text-gray-400 font-medium">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default About
