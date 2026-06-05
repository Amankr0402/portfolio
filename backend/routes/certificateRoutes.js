const express = require('express');
const router = express.Router();
const { getCertificates, createCertificate } = require('../controllers/certificateController');

// Routes at /api/certificates
router.route('/')
  .get(getCertificates)
  .post(createCertificate);

module.exports = router;
