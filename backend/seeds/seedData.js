require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const Project = require('../models/Project');
const Certificate = require('../models/Certificate');

const sampleProjects = [
  // --- SOFTWARE DEVELOPMENT PROJECTS ---
  {
    title: 'Online Quiz Platform',
    description: 'Built a full-stack web application utilizing MongoDB, Express.js, React, Node.js (MERN), and Tailwind CSS. Developed robust JWT authentication, dynamic quiz handling logic, and custom score tracking dashboards.',
    category: 'Software Development',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/example/online-quiz',
    liveUrl: 'https://it-developer-project.vercel.app',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80'
  },

  // --- DATA ANALYST PROJECTS ---
  {
    title: 'Movie Recommendation System',
    description: 'Developed a content-based movie recommendation system using cosine similarity. Cleaned and processed 5,000+ movie records in Jupyter Notebook, conducted feature extraction, and built an interactive Streamlit interface.',
    category: 'Data Analyst',
    techStack: ['Python', 'Streamlit', 'Cosine Similarity', 'Pandas', 'Scikit-learn'],
    githubUrl: 'https://github.com/example/movie-recommendation',
    liveUrl: 'https://movie-recommendation-system04.streamlit.app/',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Weather Dashboard',
    description: 'Developed an interactive weather dashboard using Microsoft Power BI. Cleaned meteorological metrics using Power Query, developed DAX measures, and visualized live temperature, humidity, AQI, and rainfall.',
    category: 'Data Analyst',
    techStack: ['Power BI', 'Power Query', 'DAX', 'Data Analysis', 'Data Cleaning'],
    githubUrl: 'https://github.com/example/weather-dashboard',
    liveUrl: 'https://example.com/weather-dashboard',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&auto=format&fit=crop&q=80'
  },
  {
    title: 'E-Commerce Sales Dashboard',
    description: 'An interactive, multi-sheet dashboard analyzing online sales operations, profit margins, product performances, and customer retention. Supports regional and category-level filtering.',
    category: 'Data Analyst',
    techStack: ['Excel', 'Power BI', 'SQL', 'Data Modeling'],
    githubUrl: 'https://github.com/example/sales-dashboard',
    liveUrl: 'https://example.com/sales-dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80'
  }
];

const sampleCertificates = [
  {
    title: 'MERN Stack Developer Internship Certificate',
    platform: 'IT Developer',
    date: 'Sep 2025',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=80',
    credentialUrl: 'https://example.com/credentials/mern'
  },
  {
    title: 'Data Science & Machine Learning Internship Certificate',
    platform: 'Infotact Solutions',
    date: 'July 2025',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80',
    credentialUrl: 'https://example.com/credentials/datascience'
  },
  {
    title: 'Data Analytics Virtual Experience Certificate',
    platform: 'Deloitte Australia / Forage',
    date: 'July 2025',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    credentialUrl: 'https://example.com/credentials/deloitte'
  },
  {
    title: 'SQL for Data Analytics and Warehousing',
    platform: 'Google / Coursera',
    date: 'Oct 2024',
    imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&auto=format&fit=crop&q=80',
    credentialUrl: 'https://example.com/credentials/sql'
  },
  {
    title: 'Java Programming Foundations & Data Structures',
    platform: 'Oracle Academy / Coursera',
    date: 'Mar 2024',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80',
    credentialUrl: 'https://example.com/credentials/java'
  }
];

const seedDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';
    console.log(`Attempting to seed to DB: ${mongoUri}`);

    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB for seeding.');

    // Clear existing data to avoid duplicate inputs
    await Project.deleteMany({});
    console.log('Cleared existing projects from DB.');
    await Certificate.deleteMany({});
    console.log('Cleared existing certificates from DB.');

    // Insert new data
    await Project.insertMany(sampleProjects);
    console.log(`Successfully seeded ${sampleProjects.length} Projects.`);

    await Certificate.insertMany(sampleCertificates);
    console.log(`Successfully seeded ${sampleCertificates.length} Certificates.`);

    console.log('Database Seeding Completed Successfully!');
    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Seeding process failed with error:', error);
    process.exit(1);
  }
};

seedDB();
