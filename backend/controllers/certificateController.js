const Certificate = require('../models/Certificate');

/**
 * @desc    Get all certificates
 * @route   GET /api/certificates
 * @access  Public
 */
const getCertificates = async (req, res) => {
  try {
    // Retrieve all certificates sorted by completion date or creation date
    const certificates = await Certificate.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: certificates.length,
      data: certificates
    });
  } catch (error) {
    console.error('Error fetching certificates:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Failed to retrieve certificates.'
    });
  }
};

/**
 * @desc    Create a new certificate
 * @route   POST /api/certificates
 * @access  Private/Public (Admin helper)
 */
const createCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.create(req.body);
    res.status(201).json({
      success: true,
      data: certificate
    });
  } catch (error) {
    console.error('Error creating certificate:', error);
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getCertificates,
  createCertificate
};
