const mongoose = require('mongoose');

// The Project schema represents academic or personal projects that a BCA student highlights
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required.'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Project description is required.']
  },
  category: {
    type: String,
    required: [true, 'Category is required.'],
    enum: ['Software Development', 'Data Analyst'], // Restricts categories to our two target tracks
    default: 'Software Development'
  },
  techStack: {
    type: [String], // Array of strings (e.g., ['React', 'Node', 'MongoDB'])
    required: [true, 'Tech stack is required.']
  },
  githubUrl: {
    type: String,
    default: '#'
  },
  liveUrl: {
    type: String,
    default: '#'
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/600x400' // Default placeholder image path
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', projectSchema);
