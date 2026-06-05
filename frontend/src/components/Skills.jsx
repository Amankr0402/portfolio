import React from 'react';
import { Layout, Server, Cpu, Database, PieChart, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Cpu className="w-5 h-5 text-indigo-650 dark:text-teal-400" />,
      skills: [
        { name: 'Python' },
        { name: 'Java' },
        { name: 'C' },
        { name: 'C++' }
      ]
    },
    {
      title: 'Web Technologies',
      icon: <Layout className="w-5 h-5 text-indigo-600 dark:text-teal-400" />,
      skills: [
        { name: 'HTML5 / CSS3' },
        { name: 'JavaScript' },
        { name: 'React.js' },
        { name: 'Tailwind CSS' },
        { name: 'Bootstrap' },
        { name: 'Node.js' },
        { name: 'Framer Motion' }
      ]
    },
    {
      title: 'Data Analysis & Visualization',
      icon: <PieChart className="w-5 h-5 text-indigo-650 dark:text-teal-400" />,
      skills: [
        { name: 'MS Excel' },
        { name: 'SQL Databases' },
        { name: 'Power BI' },
        { name: 'Pandas & NumPy' },
        { name: 'Matplotlib & Seaborn' }
      ]
    },
    {
      title: 'Developer Tools',
      icon: <Database className="w-5 h-5 text-indigo-650 dark:text-teal-400" />,
      skills: [
        { name: 'Git & GitHub' },
        { name: 'Jupyter Notebook' },
        { name: 'VS Code' }
      ]
    },
    {
      title: 'Core Technical Concepts',
      icon: <Check className="w-5 h-5 text-indigo-650 dark:text-teal-400" />,
      skills: [
        { name: 'Data Structures & Algorithms' },
        { name: 'Object-Oriented Programming (OOP)' },
        { name: 'Data Manipulation & Cleaning' }
      ]
    }
  ];

  // Card staggered animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: (idx) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: idx * 0.12,
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.06, // Triggers children pop anims one after another
        delayChildren: 0.15   // Waits until card slides up slightly
      }
    })
  };

  // Skill badge sequential pop anim variants
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.75, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold tracking-wider text-indigo-600 dark:text-teal-400 uppercase">
            My Skill Set
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white">
            What I Bring to the Table
          </h2>
          <div className="h-1.5 w-20 bg-indigo-600 dark:bg-teal-400 mx-auto rounded-full"></div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              custom={catIdx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-60px" }}
              className={`bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-150/70 dark:border-slate-800/80 hover:shadow-md transition-all duration-300 ${
                catIdx === 4 ? 'md:col-span-2 max-w-2xl mx-auto w-full' : ''
              }`}
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200 dark:border-slate-700">
                <div className="p-2 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Container Div */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    variants={badgeVariants}
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 450, damping: 16 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 shadow-sm cursor-default"
                  >
                    <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-teal-400"></span>
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
