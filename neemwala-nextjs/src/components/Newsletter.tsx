"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter an email address.');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      // API integration ready structure pointing to Next.js API route
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setStatus('success');
      setMessage("You're successfully subscribed!");
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-24 px-[6%] bg-primary-green relative z-10 overflow-hidden" id="newsletter-section">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-green opacity-20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-green opacity-20 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-[800px] mx-auto text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
        >
          <h2 className="font-heading text-[3rem] md:text-5xl lg:text-6xl text-cream-white mb-6 font-bold tracking-tight">
            Join the Green Revolution
          </h2>
          <p className="text-lg md:text-xl text-light-green mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive eco-friendly tips, oral care advice, and early access to new sustainable products.
          </p>

          <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
            <div className={`relative flex flex-col sm:flex-row items-center bg-white/10 backdrop-blur-md border rounded-[30px] sm:rounded-full p-2 transition-all duration-300 gap-2 sm:gap-0 ${
              status === 'error' ? 'border-red-400 shadow-[0_0_15px_rgba(248,113,113,0.3)]' : 
              status === 'success' ? 'border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.3)]' :
              'border-white/20 hover:border-white/40 focus-within:border-light-green focus-within:bg-white/20'
            }`}>
              <input
                type="text"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if(status !== 'idle') setStatus('idle');
                }}
                disabled={status === 'loading' || status === 'success'}
                className="w-full bg-transparent border-none outline-none px-6 py-4 sm:py-3 text-cream-white placeholder:text-light-green/60 text-lg disabled:opacity-50 text-center sm:text-left"
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-light-green text-primary-green px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-lg disabled:opacity-80 disabled:hover:scale-100 disabled:cursor-not-allowed group flex-shrink-0 sm:min-w-[160px]"
              >
                {status === 'loading' ? (
                  <span className="w-5 h-5 border-2 border-primary-green border-t-transparent rounded-full animate-spin" />
                ) : status === 'success' ? (
                  <span className="flex items-center gap-2 text-primary-green"><CheckCircle2 size={20} /> Done</span>
                ) : (
                  <>
                    Subscribe
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </div>
            
            {/* Validation Messages */}
            <div className="absolute -bottom-8 left-0 w-full flex justify-center items-center h-6">
              <AnimatePresence mode="wait">
                {status === 'error' && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-red-300 text-sm font-medium"
                  >
                    <AlertCircle size={16} />
                    <span>{message}</span>
                  </motion.div>
                )}
                {status === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-green-300 text-sm font-medium"
                  >
                    <CheckCircle2 size={16} />
                    <span>{message}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
