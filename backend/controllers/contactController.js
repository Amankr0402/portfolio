const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

/**
 * @desc    Submit a new contact form message
 * @route   POST /api/contacts
 * @access  Public
 */
const submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  // Simple validation check before interacting with database
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields (Name, Email, Message) are required.'
    });
  }

  try {
    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    // Nodemailer direct email notification integration
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (emailUser && emailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: emailUser,
            pass: emailPass
          }
        });

        const mailOptions = {
          from: `"${name}" <${emailUser}>`,
          to: 'amankumar.ak0402@gmail.com', // Aman's personal email
          replyTo: email, // Direct reply back to sender
          subject: `Portfolio Contact: Message from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h2 style="color: #4f46e5; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 0;">New Message from Portfolio</h2>
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #4f46e5; font-style: italic; color: #334155; border-radius: 4px;">
                "${message}"
              </div>
              <div style="margin-top: 30px; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 15px; text-align: center;">
                This email was sent automatically from your BCA Student Portfolio contact form.
              </div>
            </div>
          `
        };

        await transporter.sendMail(mailOptions);
        console.log(`Email sent successfully to amankumar.ak0402@gmail.com from ${email}`);
      } catch (mailError) {
        console.error('Failed to send email notification:', mailError.message);
      }
    } else {
      console.warn('Email notification skipped: EMAIL_USER and EMAIL_PASS environment variables are not configured in backend/.env.');
    }

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been saved and sent successfully.'
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);

    // Mongoose schema validation error extractor
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: messages[0] // Return the first schema validation message
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error. Failed to save the message. Please try again later.'
    });
  }
};

module.exports = {
  submitContactForm
};
