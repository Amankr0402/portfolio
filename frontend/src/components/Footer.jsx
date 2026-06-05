import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 transition-colors border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-end gap-6 pb-8 border-b border-slate-800">

          {/* Social Icons Link Group */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 active:scale-95 transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-indigo-400 active:scale-95 transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/917277912970"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-emerald-600 active:scale-95 transition-all duration-200"
              aria-label="WhatsApp Chat"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.845.002-2.63-1.023-5.101-2.887-6.968C16.48 1.975 14.007 1.026 11.378 1.026 5.942 1.026 1.518 5.437 1.515 10.871c.001 1.637.452 3.237 1.31 4.673l-.994 3.634 3.726-.977zm11.238-6.95c-.297-.15-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
            </a>
            <a
              href="mailto:amankumar.ak0402@gmail.com"
              className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-rose-405 active:scale-95 transition-all duration-200"
              aria-label="Email Address"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Bottom bar credits */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          
          <p className="w-full text-center">
            &copy; {currentYear} Aman Kumar. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
