import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsSlider from './components/ProjectsSlider';
import Resume from './components/Resume';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Trigger loading splash screen for 1.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 1. Introductory Loading Splash Screen */}
      {isLoading && <LoadingSpinner />}

      {/* 2. Main Page Layout structure */}
      <div className="min-h-screen w-full overflow-x-hidden bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
        
        {/* Responsive Navbar */}
        <Navbar />

        {/* Core sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <ProjectsSlider />
          <Resume />
          <ContactForm />
        </main>

        {/* Footer & Navigation overlays */}
        <Footer />
        <ScrollToTop />

      </div>
    </>
  );
}

export default App;
