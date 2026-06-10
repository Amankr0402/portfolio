import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const ThemeContext = createContext();

/**
 * ThemeProvider component that wraps the app and manages theme state.
 */
export const ThemeProvider = ({ children }) => {
  // Check if a theme choice was saved in localStorage, or default to dark mode for modern visual appeal
  const [isDarkMode] = useState(true);

  // Apply changes to the HTML document element whenever the state changes
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  // Toggle theme handler
  const toggleTheme = () => {
    // Always dark mode
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to easily consume the ThemeContext inside any React component.
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
