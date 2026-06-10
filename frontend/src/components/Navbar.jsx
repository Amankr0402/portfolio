import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scrolling to add background color and shadow to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass shadow-md py-4' 
        : 'bg-transparent py-7'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 w-full">

          {/* Desktop Navigation Links (Centered with Hover Animations) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 text-base font-semibold text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-teal-400 transition-all duration-200 transform hover:scale-105 active:scale-95 group"
              >
                {link.name}
                {/* Sliding Underline Animation */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

          </div>

          {/* Mobile Menu Button Container */}
          <div className="flex md:hidden items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-80 opacity-100 bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 shadow-lg' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-teal-400 dark:hover:bg-slate-800 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
