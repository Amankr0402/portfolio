import React from 'react';
import { ArrowRight, Download, FileText, BarChart2, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Glow Decorations (Glassmorphic) */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl dark:bg-indigo-600/10"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl dark:bg-teal-600/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content (Column span 7 on large screens) */}
          <motion.div 
            className="lg:col-span-7 text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            
            {/* Target Role Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50">
                <Code className="w-3.5 h-3.5" /> Software Developer
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-400 border border-teal-100 dark:border-teal-900/50">
                <BarChart2 className="w-3.5 h-3.5" /> Data Analyst
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-550 dark:text-slate-400">
                Hello, I'm
              </h3>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 dark:from-white dark:via-slate-100 dark:to-slate-300 bg-clip-text text-transparent leading-none">
                Aman Kumar
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-teal-400 mt-2">
                Aspiring Data Analyst & Software Developer
              </h2>
            </div>

            {/* Paragraph / Intro Description */}
            <p className="text-base sm:text-lg text-slate-650 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I am a <strong className="font-semibold text-slate-800 dark:text-slate-200">BCA student specializing in Data Science</strong> with hands-on experience in Data Analysis and Full-Stack Web Development. I focus on building scalable web solutions while extracting actionable, database-driven insights.
            </p>

            {/* Actions Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 font-semibold transition-all duration-200"
              >
                Hire Me <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#resume"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 active:scale-95 shadow-sm font-semibold transition-all duration-200"
              >
                <Download className="w-4 h-4" /> View Resume
              </a>
            </div>

          </motion.div>

          {/* Hero Right Avatar (Column span 5 on large screens) */}
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[440px] lg:h-[440px]">
              
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-400/30 dark:border-teal-400/20 animate-spin-slow"></div>
              
              {/* Central avatar photo frame */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl bg-gradient-to-tr from-indigo-500 to-teal-400 flex items-center justify-center">
                <img
                  src="/profile.jpg"
                  alt="Aman Kumar"
                  className="w-full h-full object-cover object-[center_10%] transition-all duration-500"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
