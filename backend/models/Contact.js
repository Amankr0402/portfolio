const mongoose = require('mongoose');

// The Contact schema defines what information is stored when someone submits the contact form
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name.'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long.']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email address.'],
    trim: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address.'
    ]
  },
  message: {
    type: String,
    required: [true, 'Please provide a message.'],
    trim: true,
    minlength: [10, 'Message must be at least 10 characters long.']
  },
  createdAt: {
    type: Date,
    default: Date.now // Automatically tracks when the message was received
  }
});

module.exports = mongoose.model('Contact', contactSchema);
