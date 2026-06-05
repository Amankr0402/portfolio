const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController');

// POST route at /api/contacts to submit form details
router.post('/', submitContactForm);

module.exports = router;
