import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';
import axios from 'axios';

const ContactForm = () => {
  // Input fields state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // UI state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Custom Self-Contained Toast State
  const [toast, setToast] = useState({
    show: false,
    type: 'success', // 'success' or 'error'
    message: ''
  });

  // Trigger Toast Notification utility
  const triggerToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 4000); // Closes automatically after 4 seconds
  };

  // Input Change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear validation error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Form Validation logic
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler (Direct Mailto Redirect - No Passwords or Database required!)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check validation first
    if (!validateForm()) {
      triggerToast('error', 'Please fill out all fields correctly before sending.');
      return;
    }

    setIsSubmitting(true);

    try {
      const recipient = 'amankumar.ak0402@gmail.com';
      const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Hello Aman,\n\n${formData.message}\n\n---\nSent from Portfolio by:\nName: ${formData.name}\nEmail: ${formData.email}`
      );

      // Trigger the visitor's native mail client directly pre-filled!
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

      triggerToast('success', 'Opening your email client to send your message!');
      
      // Clear form values
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      triggerToast('error', 'Failed to open email client. Please email directly to amankumar.ak0402@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-transparent transition-colors relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold tracking-wider text-indigo-600 dark:text-teal-400 uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white">
            Send Me a Message
          </h2>
          <div className="h-1.5 w-20 bg-indigo-600 dark:bg-teal-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Info Card (Column span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50 dark:bg-slate-900/40 dark:border-slate-800/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-slate-150/70">
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                Have an internship opportunity, a project collaboration idea, or just want to chat about data and code? Drop a message! I'll get back to you within 24 hours.
              </p>
            </div>

            {/* Practical contact points */}
            <div className="space-y-6 my-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-slate-700 flex items-center justify-center text-indigo-600 dark:text-teal-400 flex-shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-505 font-semibold">Location & Contact</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Jamshedpur, Jharkhand</p>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Mob: (+91) 7277912970</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-slate-700 flex items-center justify-center text-indigo-600 dark:text-teal-400 flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-505 font-semibold">Email Address</p>
                  <a href="mailto:amankumar.ak0402@gmail.com" className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-teal-400 transition-colors">
                    amankumar.ak0402@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* College brand slogan */}
            <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-slate-950/40 border border-indigo-100/40 dark:border-slate-800/50 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              ⭐ Seeking entry-level Software Developer or Associate Data Analyst opportunities. Ready to relocate.
            </div>

          </div>

          {/* Right Column: Interactive Form Box (Column span 7) */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-900/40 dark:border-slate-800/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-slate-150/70">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                  Your Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white dark:bg-slate-950/50 dark:border-slate-800 text-sm transition-all focus:outline-none focus:ring-2 backdrop-blur-sm ${
                      errors.name 
                        ? 'border-rose-450 focus:ring-rose-200 dark:border-rose-900/60' 
                        : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-100 dark:focus:border-teal-400 dark:focus:ring-teal-900/35'
                    }`}
                    placeholder="Aman Kumar"
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white dark:bg-slate-950/50 dark:border-slate-800 text-sm transition-all focus:outline-none focus:ring-2 backdrop-blur-sm ${
                      errors.email 
                        ? 'border-rose-450 focus:ring-rose-200 dark:border-rose-900/60' 
                        : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-100 dark:focus:border-teal-450 dark:focus:ring-teal-900/35'
                    }`}
                    placeholder="amankumar.ak0402@gmail.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                  Your Message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white dark:bg-slate-950/50 dark:border-slate-800 text-sm transition-all focus:outline-none focus:ring-2 backdrop-blur-sm ${
                      errors.message 
                        ? 'border-rose-450 focus:ring-rose-200 dark:border-rose-900/60' 
                        : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-100 dark:focus:border-teal-400 dark:focus:ring-teal-900/35'
                    }`}
                    placeholder="Write your message here (min. 10 characters)..."
                  ></textarea>
                </div>
                {errors.message && (
                  <p className="text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Send Button trigger */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-600 dark:hover:bg-indigo-500 active:scale-[0.98] shadow-md shadow-indigo-650/10 dark:shadow-none hover:shadow-indigo-650/20 disabled:opacity-70 disabled:pointer-events-none transition-all duration-200"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                    Sending message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>

      {/* CUSTOM FLOATING TOAST NOTIFICATION */}
      {toast.show && (
        <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3.5 rounded-2xl shadow-xl border animate-bounce ${
          toast.type === 'success' 
            ? 'bg-emerald-50 dark:bg-emerald-950 border-emerald-250 dark:border-emerald-900 text-emerald-800 dark:text-emerald-300' 
            : 'bg-rose-50 dark:bg-rose-950 border-rose-250 dark:border-rose-900 text-rose-800 dark:text-rose-300'
        }`}>
          {toast.type === 'success' ? <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
          <span className="text-xs font-bold">{toast.message}</span>
        </div>
      )}

    </section>
  );
};

export default ContactForm;
