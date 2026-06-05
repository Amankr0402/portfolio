import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink, Code2, BarChart3 } from 'lucide-react';
import axios from 'axios';

// High-quality local fallback data if backend is offline or loading fails
const localMockProjects = [
  // --- SOFTWARE DEVELOPMENT PROJECTS ---
  {
    _id: 'mock-s1',
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
    _id: 'mock-d1',
    title: 'Movie Recommendation System',
    description: 'Developed a content-based movie recommendation system using cosine similarity. Cleaned and processed 5,000+ movie records in Jupyter Notebook, conducted feature extraction, and built an interactive Streamlit interface.',
    category: 'Data Analyst',
    techStack: ['Python', 'Streamlit', 'Cosine Similarity', 'Pandas', 'Scikit-learn'],
    githubUrl: 'https://github.com/example/movie-recommendation',
    liveUrl: 'https://movie-recommendation-system04.streamlit.app/',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80'
  },
  {
    _id: 'mock-d2',
    title: 'Weather Dashboard',
    description: 'Developed an interactive weather dashboard using Microsoft Power BI. Cleaned meteorological metrics using Power Query, developed DAX measures, and visualized live temperature, humidity, AQI, and rainfall.',
    category: 'Data Analyst',
    techStack: ['Power BI', 'Power Query', 'DAX', 'Data Analysis', 'Data Cleaning'],
    githubUrl: 'https://github.com/example/weather-dashboard',
    liveUrl: 'https://example.com/weather-dashboard',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&auto=format&fit=crop&q=80'
  },
  {
    _id: 'mock-d3',
    title: 'E-Commerce Sales Dashboard',
    description: 'An interactive, multi-sheet dashboard analyzing online sales operations, profit margins, product performances, and customer retention. Supports regional and category-level filtering.',
    category: 'Data Analyst',
    techStack: ['Excel', 'Power BI', 'SQL', 'Data Modeling'],
    githubUrl: 'https://github.com/example/sales-dashboard',
    liveUrl: 'https://example.com/sales-dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80'
  }
];

const ProjectsSlider = () => {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const autoPlayTimer = useRef(null);

  // Fetch projects from DB
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/projects');
        if (res.data && res.data.success && res.data.data.length > 0) {
          setProjects(res.data.data);
        } else {
          setProjects(localMockProjects);
        }
      } catch (error) {
        console.warn('Backend server down, loading local mock projects database...', error.message);
        setProjects(localMockProjects);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Filter projects by selected tab
  const filteredProjects = projects.filter(project => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  // Reset index when changing category filters
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Setup auto-scroll effect
  useEffect(() => {
    if (filteredProjects.length <= 1) return;

    if (!isHovered) {
      autoPlayTimer.current = setInterval(() => {
        handleNext();
      }, 4000); // Transitions slide every 4 seconds
    }

    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, [currentIndex, isHovered, filteredProjects.length]);

  const handleNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
    );
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 dark:border-teal-400"></div>
      </div>
    );
  }

  // Active Project item
  const activeProject = filteredProjects[currentIndex] || null;

  return (
    <section id="projects" className="py-20 bg-slate-100/50 dark:bg-slate-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-sm font-bold tracking-wider text-indigo-600 dark:text-teal-400 uppercase">
            Curated Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white">
            Academic & Personal Projects
          </h2>
          <div className="h-1.5 w-20 bg-indigo-600 dark:bg-teal-400 mx-auto rounded-full"></div>
        </div>

        {/* Category Tabs/Filter buttons */}
        <div className="flex justify-center items-center gap-3 mb-10">
          {['All', 'Software Development', 'Data Analyst'].map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all transform hover:scale-102 active:scale-98 ${
                activeCategory === category
                  ? 'bg-indigo-600 border-indigo-600 text-white dark:bg-teal-500 dark:border-teal-500 dark:text-slate-950 shadow-md'
                  : 'bg-white border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-750'
              }`}
            >
              <span className="flex items-center gap-1.5">
                {category === 'Software Development' && <Code2 className="w-4 h-4" />}
                {category === 'Data Analyst' && <BarChart3 className="w-4 h-4" />}
                {category}
              </span>
            </button>
          ))}
        </div>

        {/* Dynamic Project Carousel Slider Container */}
        {filteredProjects.length > 0 && activeProject ? (
          <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            
            {/* Project Frame Box */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700/70 transition-all duration-500 min-h-[420px] flex flex-col lg:flex-row">
              
              {/* Left Side: Images section */}
              <div className="w-full lg:w-1/2 relative overflow-hidden group h-64 lg:h-auto min-h-[250px]">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Visual Accent Category Badge */}
                <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-lg bg-indigo-600/90 text-white dark:bg-teal-500/90 dark:text-slate-950 backdrop-blur-sm">
                  {activeProject.category === 'Software Development' ? <Code2 className="w-3 h-3" /> : <BarChart3 className="w-3 h-3" />}
                  {activeProject.category}
                </span>
              </div>

              {/* Right Side: Details section */}
              <div className="w-full lg:w-1/2 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  
                  {/* Category Tracker Indicators */}
                  <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                    Project {currentIndex + 1} of {filteredProjects.length}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {activeProject.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {activeProject.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {activeProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-bold rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Git/Live Action triggers */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-indigo-600 dark:text-slate-350 dark:hover:text-teal-400 transition-colors"
                  >
                    <Github className="w-4 h-4" /> GitHub Repository
                  </a>
                  {activeProject.liveUrl && activeProject.liveUrl !== '#' && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-teal-400 transition-colors ml-auto"
                    >
                      Live Demo <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>

            </div>

            {/* Previous slide manual button */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 -left-4 lg:-left-6 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:scale-105 active:scale-95"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next slide manual button */}
            <button
              onClick={handleNext}
              className="absolute top-1/2 -right-4 lg:-right-6 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:scale-105 active:scale-95"
              aria-label="Next Project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Bottom dot indicators */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {filteredProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-8 bg-indigo-600 dark:bg-teal-400'
                      : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                  }`}
                  aria-label={`Go to project slide ${idx + 1}`}
                ></button>
              ))}
            </div>

          </div>
        ) : (
          <div className="text-center py-20 text-slate-500">
            No projects found matching the selected track.
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectsSlider;
