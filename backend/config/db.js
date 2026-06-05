const mongoose = require('mongoose');

/**
 * Connects to MongoDB database using the MONGODB_URI environment variable.
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio');
    console.log(`MongoDB Connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    // Exit the process with failure if unable to connect
    process.exit(1);
  }
};

module.exports = connectDB;
