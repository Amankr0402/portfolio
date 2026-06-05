const Project = require('../models/Project');

/**
 * @desc    Get all portfolio projects
 * @route   GET /api/projects
 * @access  Public
 */
const getProjects = async (req, res) => {
  try {
    // Retrieve all projects sorted by creation date (newest first)
    const projects = await Project.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Failed to retrieve projects.'
    });
  }
};

/**
 * @desc    Create a new project (helper endpoint for expansion or seed checks)
 * @route   POST /api/projects
 * @access  Private/Public (Admin helper)
 */
const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getProjects,
  createProject
};
