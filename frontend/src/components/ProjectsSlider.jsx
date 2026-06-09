import React, { useState } from 'react';
import { Github, ExternalLink, Code2, BarChart3 } from 'lucide-react';

// High-quality local fallback data if backend is offline or loading fails
const localMockProjects = [
  // --- SOFTWARE DEVELOPMENT PROJECTS ---
  {
    _id: 'mock-s1',
    title: 'Online Quiz Platform',
    description: 'Built a full-stack MERN quiz platform featuring robust JWT user authentication, dynamic quiz handling logic, score dashboards, and fluid Tailwind CSS layouts.',
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
    description: 'Developed a content-based recommendation system using cosine similarity. Cleaned and analyzed 5,000+ movie records, extracted structural features, and built an interactive Streamlit UI.',
    category: 'Data Analyst',
    techStack: ['Python', 'Streamlit', 'Cosine Similarity', 'Pandas', 'Scikit-learn'],
    githubUrl: 'https://github.com/example/movie-recommendation',
    liveUrl: 'https://movie-recommendation-system04.streamlit.app/',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80'
  },
  {
    _id: 'mock-d2',
    title: 'Weather Dashboard',
    description: 'Designed an interactive Power BI weather dashboard. Formatted data utilizing Power Query, developed analytical measures in DAX, and visualized live temperature, humidity, AQI, and rainfall.',
    category: 'Data Analyst',
    techStack: ['Power BI', 'Power Query', 'DAX', 'Data Analysis', 'Data Cleaning'],
    githubUrl: 'https://github.com/Amankr0402/weather-dashboard',
    liveUrl: 'https://www.linkedin.com/posts/aman-kumar-a864b335a_powerbi-dataanalytics-businessintelligence-ugcPost-7470055878252097536-jSyP/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFlrJUYBkftNIXA2InM2dVMV3E4rWeBYWvA',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&auto=format&fit=crop&q=80'
  }
];

const ProjectsSlider = () => {
  const [projects, setProjects] = useState(localMockProjects);
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter projects by selected category
  const filteredProjects = projects.filter(project => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-transparent transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-sm font-bold tracking-wider text-indigo-600 dark:text-teal-400 uppercase">
            Curated Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white uppercase tracking-wide">
            Projects
          </h2>
          <div className="h-1.5 w-20 bg-indigo-600 dark:bg-teal-400 mx-auto rounded-full"></div>
        </div>

        {/* Category Tabs/Filter buttons */}
        <div className="flex justify-center items-center gap-3 mb-16">
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

        {/* Sticky Stack Cards Container */}
        {filteredProjects.length > 0 ? (
          <div className="flex flex-col gap-12 sm:gap-20 pb-20 relative">
            {filteredProjects.map((project, idx) => {
              
              return (
                <div 
                  key={project._id || idx}
                  className="w-full bg-slate-950 text-white rounded-3xl border border-slate-850 shadow-2xl relative overflow-hidden transition-all duration-300 transform hover:scale-[1.005]"
                  style={{
                    position: 'sticky',
                    // On desktop/tablet, stack cards at incrementally increasing top offsets
                    // leaving previous card headers exposed (about 76px high)
                    top: `calc(90px + ${idx * 76}px)`,
                    zIndex: (idx + 1) * 10
                  }}
                >
                  {/* Card Header Row (Fixed height structure for clean sticky matching) */}
                  <div className="h-[76px] px-6 sm:px-8 border-b border-slate-900 flex items-center justify-between">
                    <div className="flex items-center gap-4 sm:gap-6">
                      {/* Big Number */}
                      <span className="text-2xl sm:text-3xl font-black text-slate-700 tracking-tight">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      {/* Title & Info */}
                      <div className="text-left">
                        <span className="text-[9px] font-extrabold text-slate-500 uppercase tracking-widest block">
                          Client / Track
                        </span>
                        <h3 className="text-sm sm:text-base font-extrabold text-white mt-0.5 tracking-wide">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Live Link Button inside header */}
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-bold border border-slate-800 hover:border-slate-600 text-slate-350 hover:text-white bg-slate-900 hover:bg-slate-850 active:scale-95 transition-all shadow-sm"
                      >
                        Live Project
                      </a>
                    )}
                  </div>

                  {/* Card Content Grid */}
                  <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    
                    {/* Left Details Column (Span 6) */}
                    <div className="lg:col-span-6 flex flex-col justify-between space-y-6 text-left">
                      <div className="space-y-4">
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                          {project.description}
                        </p>

                        {/* Technologies List */}
                        <div className="space-y-2.5">
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                            Technologies Used
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, techIdx) => (
                              <span
                                key={techIdx}
                                className="px-2.5 py-1 text-xs font-bold rounded-lg bg-slate-900 text-slate-300 border border-slate-850"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Repository Links */}
                      <div className="pt-4 border-t border-slate-900">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-450 hover:text-indigo-400 transition-colors"
                        >
                          <Github className="w-4 h-4" /> GitHub Repository
                        </a>
                      </div>
                    </div>

                    {/* Right Perspective Images Column (Span 6) */}
                    <div className="lg:col-span-6 flex items-center justify-center">
                      <div className="flex gap-3 h-56 sm:h-64 lg:h-72 w-full">
                        {/* Main Image (Left, 65% width) */}
                        <div className="w-2/3 h-full overflow-hidden rounded-2xl border border-slate-900 relative group">
                          <img
                            src={project.image}
                            alt={`${project.title} screenshot`}
                            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                          />
                        </div>
                        
                        {/* Cropped Stacked Details (Right, 35% width) */}
                        <div className="w-1/3 flex flex-col gap-3 h-full">
                          <div className="h-[calc(50%-6px)] overflow-hidden rounded-2xl border border-slate-900 relative group">
                            <img
                              src={project.image}
                              alt={`${project.title} detail`}
                              className="w-full h-full object-cover object-top filter brightness-[0.85] contrast-[1.05] group-hover:scale-102 transition-transform duration-500"
                            />
                          </div>
                          <div className="h-[calc(50%-6px)] overflow-hidden rounded-2xl border border-slate-900 relative group">
                            <img
                              src={project.image}
                              alt={`${project.title} detail zoom`}
                              className="w-full h-full object-cover object-bottom filter brightness-[0.75] contrast-[1.1] group-hover:scale-102 transition-transform duration-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
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
