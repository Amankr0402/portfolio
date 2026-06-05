const mongoose = require('mongoose');

// The Certificate schema represents courses or workshops completed by the student
const certificateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Certificate title is required.'],
    trim: true
  },
  platform: {
    type: String,
    required: [true, 'Platform name (e.g., Coursera, Udemy) is required.'],
    trim: true
  },
  date: {
    type: String,
    required: [true, 'Completion date (e.g., July 2024) is required.'],
    trim: true
  },
  imageUrl: {
    type: String,
    default: 'https://via.placeholder.com/600x400' // Default placeholder certificate visual
  },
  credentialUrl: {
    type: String,
    default: '#' // Optional verification link
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Certificate', certificateSchema);
