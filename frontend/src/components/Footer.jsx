import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-dark-light border-t border-gray-800 overflow-hidden w-full">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {/* About */}
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                            Rudra Abhishek Soni
                        </h3>
                        <p className="text-gray-400">
                            Passionate Web Developer and Data Analytics enthusiast creating innovative digital solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-gray-400 hover:text-primary transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="text-gray-400 hover:text-primary transition-colors">
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-gray-400 hover:text-primary transition-colors">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/Rudra112446/my-portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-dark rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-110"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-dark rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-110"
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-dark rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-110"
                            >
                                <FaTwitter size={20} />
                            </a>
                            <a
                                href="mailto:soniabhi530@gmail.com"
                                className="p-3 bg-dark rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-110"
                            >
                                <FaEnvelope size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-750 pt-2 flex flex-col md:flex-row justify-between items-center gap-2">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Rudra Abhishek Soni. All rights reserved.
                    </p>
                    <p className="text-gray-300 text-sm flex items-center gap-2">
                        Made with <FaHeart className="text-red-500 animate-pulse" /> using React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
