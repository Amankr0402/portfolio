import React from 'react';
import { GraduationCap, Target, Heart, Award } from 'lucide-react';

const About = () => {
  const educationTimeline = [
    {
      degree: 'IT Developer (MERN Stack Quiz Platform)',
      institution: 'MERN Stack Developer (Internship)',
      duration: 'July 2025 - September 2025',
      grade: 'Professional Experience',
      details: 'Built a full-stack web application using MongoDB, Express.js, React, and Node.js. Integrated authentication, quiz handling, score tracking features, and Tailwind CSS layouts.'
    },
    {
      degree: 'Data Science Intern (Remote)',
      institution: 'Infotact Solutions',
      duration: 'May 2025 - July 2025',
      grade: 'Professional Experience',
      details: 'Processed 5,000+ records of structured and unstructured data using Python (Pandas, NumPy). Built machine learning models with Scikit-learn, and designed Power BI & Seaborn reports.'
    },
    {
      degree: 'Bachelor of Computer Application (BCA)',
      institution: 'Arka Jain University, Jamshedpur',
      duration: 'August 2023 - Present',
      grade: 'Degree Coursework (Specializing in Data Science)',
      details: 'Focusing on Core Java, Database Management Systems (DBMS), Web Technologies, Data Structures, and statistical analysis.'
    },
    {
      degree: '12th Grade (JAC Commerce)',
      institution: 'A.B.M College, Jamshedpur',
      duration: 'April 2022 - April 2023',
      grade: 'Higher Secondary',
      details: 'Completed JAC Commerce board coursework with mathematical and analytical bases.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-100/50 dark:bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold tracking-wider text-indigo-600 dark:text-teal-400 uppercase">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white">
            My Journey & Background
          </h2>
          <div className="h-1.5 w-20 bg-indigo-600 dark:bg-teal-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* About Text and Career Goal (Column span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white dark:bg-slate-900/40 dark:border-slate-800/80 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-slate-100 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-indigo-600 dark:text-teal-400" /> Who I Am
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                I am a <strong className="font-semibold text-slate-800 dark:text-slate-200">BCA student specializing in Data Science</strong> with hands-on experience in Data Analysis and Full-Stack Web Development.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                I am skilled in <strong className="font-semibold text-slate-800 dark:text-slate-200">React.js, Node.js, and MongoDB</strong> for building web applications, along with <strong className="font-semibold text-slate-800 dark:text-slate-200">Python, SQL, and Power BI</strong> for data analytics.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Experienced in data cleaning, exploratory data analysis (EDA), and building data-driven solutions.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900/40 dark:border-slate-800/80 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-slate-100 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-650 dark:text-teal-400" /> Career Goal
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                My objective is to secure a junior position where I can apply my dual interests: writing modular <strong className="font-semibold text-slate-800 dark:text-slate-200">React & Node</strong> applications, while also building dashboards and writing queries in <strong className="font-semibold text-slate-800 dark:text-slate-200">Power BI & SQL</strong>. I want to build robust software systems while ensuring that the underlying operational metrics are completely measurable and understood.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900/40 dark:border-slate-800/80 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-slate-100 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-indigo-650 dark:text-teal-400" /> Interests & Hobbies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-950/40 rounded-xl">
                  <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Competitive Coding</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Solving DSA problems in Java/Python</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-950/40 rounded-xl">
                  <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">UI/UX Layouts</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Fascinated by clean dark mode pages</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-950/40 rounded-xl">
                  <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Designing through Figma</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Creating sleek vector layouts & wireframes</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-950/40 rounded-xl">
                  <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Open Source</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Contributing simple fixes in React</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Timeline (Column span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white dark:bg-slate-900/40 dark:border-slate-800/80 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-slate-100 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-teal-400" /> Education & Experience
              </h3>
              
              <div className="relative border-l-2 border-slate-200 dark:border-slate-700 pl-6 space-y-8">
                {educationTimeline.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    {/* Circle Indicator on the line */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-indigo-650 dark:border-teal-400 bg-white dark:bg-slate-950 group-hover:scale-125 transition-transform duration-200"></div>
                    
                    {/* Degree and Institution */}
                    <span className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 mb-2">
                      {edu.duration}
                    </span>
                    <h4 className="text-lg font-bold text-slate-850 dark:text-white leading-tight">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm font-bold text-indigo-600 dark:text-teal-400 mt-1">
                      {edu.grade}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
