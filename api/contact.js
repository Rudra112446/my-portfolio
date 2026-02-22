import nodemailer from 'nodemailer'

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
})

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )

    if (req.method === 'OPTIONS') {
        res.status(200).end()
        return
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' })
    }

    const { name, email, subject, message } = req.body

    // Validation
    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required',
        })
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: 'Valid email is required',
        })
    }

    try {
        // Log the contact form submission
        console.log('Contact Form Submission:', {
            name,
            email,
            subject,
            message,
            timestamp: new Date().toISOString(),
        })

        // Send email if configured
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                replyTo: email,
                subject: `Portfolio Contact: ${subject}`,
                html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
            }

            await transporter.sendMail(mailOptions)
        }

        res.status(200).json({
            success: true,
            message: 'Thank you for your message! I will get back to you soon.',
        })
    } catch (error) {
        console.error('Error processing contact form:', error)
        res.status(500).json({
            success: false,
            message: 'Failed to send message. Please try again later.',
        })
    }
}
