require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Import routes
const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');
const certificateRoutes = require('./routes/certificateRoutes');

// Initialize Express app
const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors({
  origin: '*', // Allow connections from all origins (easy configuration for student projects)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// API Routes
app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/certificates', certificateRoutes);

// Base route for server health check
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'BCA Portfolio Backend API is up and running!',
    endpoints: {
      contacts: 'POST /api/contacts',
      projects: 'GET /api/projects',
      certificates: 'GET /api/certificates'
    }
  });
});

// 404 Route handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Not Found - The requested URL ${req.originalUrl} does not exist.`
  });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Global Error Handler caught:', err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error. Please contact support.'
  });
});

// Define Server Port
const PORT = process.env.PORT || 5000;

// Start listening for requests
app.listen(PORT, () => {
  console.log(`Server is running in development mode on port ${PORT}`);
});
