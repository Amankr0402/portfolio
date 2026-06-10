import React from 'react';
import { Download, FileText, CheckCircle2, Star, Sparkles } from 'lucide-react';

const Resume = () => {
  const highlights = [
    {
      title: 'Strong Programming Foundations',
      description: 'Solid knowledge of Object-Oriented Programming (OOP) in Java and scripting in Python.'
    },
    {
      title: 'Database & SQL Querying',
      description: 'Experienced in writing complex SQL queries, JOINs, subqueries, and database indexing techniques.'
    },
    {
      title: 'Interactive Business Dashboards',
      description: 'Built multiple functional Power BI sheets using custom DAX parameters for sales and logistics tracking.'
    },
    {
      title: 'Modern Front-end Architecture',
      description: 'Adept in React.js hooks, local state manipulation, and styling interfaces with Tailwind CSS.'
    }
  ];

  return (
    <section id="resume" className="py-20 bg-slate-100/50 dark:bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold tracking-wider text-indigo-600 dark:text-teal-400 uppercase">
            Curriculum Vitae
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white">
            Resume & Accomplishments
          </h2>
          <div className="h-1.5 w-20 bg-indigo-600 dark:bg-teal-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Mock Resume Preview Visual Card (Column span 5) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm bg-white dark:bg-slate-900/40 dark:border-slate-800/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-slate-200/70 transition-transform duration-300 hover:scale-101 flex flex-col justify-between min-h-[480px]">
              
              {/* Header inside mock card */}
              <div className="space-y-4 text-center">
                <div className="mx-auto w-14 h-14 rounded-2xl bg-indigo-50 hover:bg-indigo-100 dark:bg-slate-700 flex items-center justify-center text-indigo-600 dark:text-teal-400 transition-colors">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">Aman Kumar</h3>
                  <p className="text-xs font-bold text-indigo-600 dark:text-teal-400 mt-1 uppercase tracking-wider">
                    Software Developer & Data Analyst
                  </p>
                </div>
              </div>

              {/* Core Info details inside mock card */}
              <div className="border-t border-b border-slate-100 dark:border-slate-700/80 py-6 my-6 space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-500">Degree:</span>
                  <span className="font-extrabold text-slate-800 dark:text-slate-200">BCA (Final Year)</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-500">Target Fields:</span>
                  <span className="font-extrabold text-slate-800 dark:text-slate-200">Dev & Analytics</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-500">Core Languages:</span>
                  <span className="font-extrabold text-slate-800 dark:text-slate-200">Java, Python, SQL, JS</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-500">Core Libraries:</span>
                  <span className="font-extrabold text-slate-800 dark:text-slate-200">React, Pandas, NumPy</span>
                </div>
              </div>

              {/* Mock Resume Action trigger */}
              <div className="text-center">
                <a
                  href="/Aman_kumar_Resume.pdf"
                  download="Aman_Kumar_Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 active:scale-97 font-bold shadow-md shadow-indigo-600/10 transition-all duration-200"
                >
                  <Download className="w-4 h-4" /> Download Resume PDF
                </a>
                <p className="text-[10px] text-slate-400 mt-2">
                  Clicking will download a formatted PDF resume.
                </p>
              </div>

            </div>
          </div>

          {/* Right Side: Key accomplishments and text (Column span 7) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-indigo-600 dark:text-teal-400" />
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Core Competencies & Strengths
              </h3>
            </div>

            {/* List of competencies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-850 dark:text-white text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-550 dark:text-slate-350 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Extra summary timeline banner */}
            <div className="bg-gradient-to-r from-indigo-55 to-indigo-100/40 dark:from-slate-800 dark:to-slate-800/80 p-6 rounded-3xl border border-indigo-100/50 dark:border-slate-700/60 mt-4">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-indigo-600 dark:text-teal-400" />
                <div>
                  <p className="text-sm font-bold text-slate-850 dark:text-white">
                    Looking for a dedicated junior talent?
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-355 mt-1 leading-relaxed">
                    I am trained in database design, statistics, and modern web frameworks. I am highly adaptable and excited to join agile software development or business analytics teams.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;
