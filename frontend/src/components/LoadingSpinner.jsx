import React from 'react';
import { Terminal } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-slate-900 text-white select-none">
      
      {/* Decorative center logo spinner */}
      <div className="relative flex items-center justify-center w-24 h-24 mb-6">
        {/* Spinning border ring */}
        <div className="absolute inset-0 rounded-full border-4 border-slate-800 border-t-indigo-500 border-r-teal-400 animate-spin"></div>
        {/* Central Terminal Icon */}
        <Terminal className="w-8 h-8 text-teal-400 animate-pulse" />
      </div>

      {/* Brand & Loading details */}
      <h1 className="text-xl font-black tracking-wide text-slate-100 uppercase">
        Aman Kumar
      </h1>
      <p className="text-xs text-indigo-400 dark:text-teal-400 font-bold tracking-widest mt-1 uppercase">
        Portfolio Loading
      </p>

      {/* Modern code mock block */}
      <div className="text-[10px] font-mono text-slate-500 mt-6 max-w-xs text-center border border-slate-800 rounded-lg p-2 bg-slate-950/60 px-4">
        <code>import &#123; Developer, Analyst &#125; from 'Aman';</code>
      </div>

    </div>
  );
};

export default LoadingSpinner;
