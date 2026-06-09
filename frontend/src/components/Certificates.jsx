import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// High-quality local fallback data if backend is offline
const localMockCertificates = [
  {
    _id: 'cert-1',
    title: 'MERN Stack Developer Internship Certificate',
    platform: 'IT Developer',
    date: 'July 2025 - Sep 2025',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=80',
    credentialUrl: 'https://example.com/credentials/mern'
  },
  {
    _id: 'cert-2',
    title: 'Data Science & Machine Learning Internship Certificate',
    platform: 'Infotact Solutions',
    date: 'May 2025 - July 2025',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80',
    credentialUrl: 'https://example.com/credentials/datascience'
  },
  {
    _id: 'cert-3',
    title: 'Data Analytics Virtual Experience Certificate',
    platform: 'Deloitte Australia / Forage',
    date: 'July 2025',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    credentialUrl: 'https://example.com/credentials/deloitte'
  },
  {
    _id: 'cert-4',
    title: 'SQL for Data Analytics and Warehousing',
    platform: 'Google / Coursera',
    date: 'Oct 2024',
    imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&auto=format&fit=crop&q=80',
    credentialUrl: 'https://example.com/credentials/sql'
  },
  {
    _id: 'cert-5',
    title: 'Java Programming Foundations & Data Structures',
    platform: 'Oracle Academy / Coursera',
    date: 'Mar 2024',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80',
    credentialUrl: 'https://example.com/credentials/java'
  }
];

const Certificates = () => {
  const [certificates, setCertificates] = useState(localMockCertificates);
  const [activeModalImage, setActiveModalImage] = useState(null);

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold tracking-wider text-indigo-600 dark:text-teal-400 uppercase">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white">
            Professional Certifications
          </h2>
          <div className="h-1.5 w-20 bg-indigo-600 dark:bg-teal-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
              <div
                key={cert._id}
                className="group bg-slate-50 dark:bg-slate-900/40 dark:border-slate-800/80 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-150/70 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Certificate Visual Image */}
                <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-900">
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Magnifier overlay button */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <button
                      onClick={() => setActiveModalImage(cert.imageUrl)}
                      className="px-4 py-2 bg-white text-slate-900 text-xs font-extrabold rounded-lg shadow-md hover:bg-slate-100 transform scale-90 group-hover:scale-100 transition-all duration-300"
                    >
                      Quick Preview
                    </button>
                  </div>

                  {/* Top-Right Platform Badge */}
                  <span className="absolute top-3 right-3 px-2 py-1 text-[10px] font-extrabold tracking-wide uppercase bg-slate-900/80 text-white rounded backdrop-blur-sm">
                    {cert.platform.split('/')[0].trim()}
                  </span>
                </div>

                {/* Card Content body */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2">
                    
                    {/* Date completion metadata */}
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-650 dark:text-teal-400">
                      <Calendar className="w-3.5 h-3.5" /> Completed: {cert.date}
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-slate-850 dark:text-white line-clamp-2 leading-snug group-hover:text-indigo-600 dark:group-hover:text-teal-400 transition-colors">
                      {cert.title}
                    </h3>

                    {/* Platform description */}
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Offered by: <span className="font-semibold text-slate-600 dark:text-slate-350">{cert.platform}</span>
                    </p>

                  </div>

                  {/* Actions buttons */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" /> Verified
                    </span>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-extrabold text-indigo-600 hover:text-indigo-500 dark:text-teal-400 dark:hover:text-teal-350 transition-colors"
                    >
                      Verify Credential <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>

              </div>
            ))}
        </div>


        {/* Dynamic Image Popup Preview Modal */}
        <AnimatePresence>
          {activeModalImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveModalImage(null)} // Close modal when clicking on the backdrop
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm cursor-zoom-out"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 15 }}
                transition={{ type: "spring", duration: 0.45, bounce: 0.3 }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the card
                className="relative max-w-4xl w-full bg-white dark:bg-slate-850 rounded-2xl overflow-hidden p-2 shadow-2xl cursor-default"
              >
                
                {/* Close trigger button */}
                <button
                  onClick={() => setActiveModalImage(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/65 text-white hover:bg-slate-900 transition-colors z-10"
                  aria-label="Close Preview"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Certificate Image Frame */}
                <img
                  src={activeModalImage}
                  alt="Certificate Full Size Preview"
                  className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
                />

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Certificates;
