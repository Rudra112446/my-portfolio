import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import axios from 'axios'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [status, setStatus] = useState({ type: '', message: '' })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus({ type: '', message: '' })

        try {
            const response = await axios.post('/api/contact', formData)
            setStatus({ type: 'success', message: response.data.message })
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch (error) {
            setStatus({
                type: 'error',
                message: error.response?.data?.message || 'Failed to send message. Please try again.'
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact" className="py-20 bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-3xl font-bold mb-6">Let's Talk</h3>
                            <p className="text-gray-400 mb-8">
                                I'm always open to discussing new projects, creative ideas, or opportunities
                                to be part of your vision. Let's build something amazing together!
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <FaEnvelope size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Email</h4>
                                    <p className="text-gray-400">rudra.soni@example.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <FaPhone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                                    <p className="text-gray-400">+91 XXX-XXX-XXXX</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <FaMapMarkerAlt size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Location</h4>
                                    <p className="text-gray-400">India</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/30">
                            <h4 className="font-semibold text-white mb-2">Available for Opportunities</h4>
                            <p className="text-gray-400 text-sm">
                                I'm currently available for freelance projects and full-time positions.
                                Let's discuss how I can contribute to your team!
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-dark-light border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-dark-light border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-dark-light border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 bg-dark-light border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            {status.message && (
                                <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-500/10 border border-green-500/30 text-green-500' : 'bg-red-500/10 border border-red-500/30 text-red-500'
                                    }`}>
                                    {status.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Sending...' : (
                                    <>
                                        <FaPaperPlane /> Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
