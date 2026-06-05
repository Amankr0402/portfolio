const express = require('express');
const router = express.Router();
const { getProjects, createProject } = require('../controllers/projectController');

// Routes at /api/projects
router.route('/')
  .get(getProjects)
  .post(createProject);

module.exports = router;
