import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { body, validationResult } from 'express-validator'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Nodemailer transporter configuration (optional - configure with your email)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// Contact form endpoint
app.post(
  '/api/contact',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('subject').trim().notEmpty().withMessage('Subject is required'),
    body('message').trim().notEmpty().withMessage('Message is required'),
  ],
  async (req, res) => {
    // Validate input
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Validation failed', 
        errors: errors.array() 
      })
    }

    const { name, email, subject, message } = req.body

    try {
      // Store contact data (in a real app, you'd save to database)
      console.log('Contact Form Submission:', {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
      })

      // Optional: Send email notification
      // Uncomment and configure with your email credentials
      /*
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'rudra.soni@example.com', // Your email
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }

      await transporter.sendMail(mailOptions)
      */

      res.status(200).json({
        success: true,
        message: 'Thank you for your message! I will get back to you soon.',
      })
    } catch (error) {
      console.error('Contact form error:', error)
      res.status(500).json({
        success: false,
        message: 'Failed to send message. Please try again later.',
      })
    }
  }
)

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Portfolio API is running' })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Portfolio backend server running on port ${PORT}`)
  console.log(`📧 Contact API: http://localhost:${PORT}/api/contact`)
})
