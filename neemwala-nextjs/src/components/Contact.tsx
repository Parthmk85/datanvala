"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 md:py-32 px-[6%] bg-light-green/30 relative z-10 overflow-hidden" id="contact-section">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Contact Info */}
        <div className="flex-1 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full text-secondary-green font-medium mb-6 border border-primary-green/10 shadow-sm"
          >
            <Send size={16} />
            <span className="text-sm tracking-wide">GET IN TOUCH</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-[3rem] md:text-5xl text-primary-green mb-6 font-bold tracking-tight leading-[1.1]"
          >
            Let's start a conversation
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#4a5c4d] mb-12 max-w-xl leading-relaxed"
          >
            Have questions about our sustainable products, wholesale inquiries, or just want to say hi? We'd love to hear from you.
          </motion.p>

          <div className="flex flex-col gap-8">
            {[
              { icon: Mail, title: "Email Us", detail: "hello@neemwala.com" },
              { icon: Phone, title: "Call Us", detail: "+91 98765 43210" },
              { icon: MapPin, title: "Visit Us", detail: "Eco Hub, Green Street, Mumbai, India" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary-green shadow-md border border-primary-green/10 group-hover:bg-primary-green group-hover:text-white transition-colors duration-300 shrink-0">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-green mb-1">{item.title}</h4>
                  <p className="text-[#4a5c4d]">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-primary-green/5 border border-primary-green/10 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-light-green rounded-full blur-3xl -z-10 opacity-50 transform translate-x-1/2 -translate-y-1/2" />
            
            <form className="flex flex-col gap-6 relative z-10 h-full justify-center" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-sm font-semibold text-primary-green">First Name</label>
                  <input type="text" id="firstName" className="w-full bg-[#F5F8F5] border border-transparent focus:border-primary-green/30 rounded-2xl px-5 py-4 outline-none transition-all text-primary-green" placeholder="John" />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-sm font-semibold text-primary-green">Last Name</label>
                  <input type="text" id="lastName" className="w-full bg-[#F5F8F5] border border-transparent focus:border-primary-green/30 rounded-2xl px-5 py-4 outline-none transition-all text-primary-green" placeholder="Doe" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-primary-green">Email Address</label>
                <input type="email" id="email" className="w-full bg-[#F5F8F5] border border-transparent focus:border-primary-green/30 rounded-2xl px-5 py-4 outline-none transition-all text-primary-green" placeholder="john@example.com" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-primary-green">Message</label>
                <textarea id="message" rows={4} className="w-full bg-[#F5F8F5] border border-transparent focus:border-primary-green/30 rounded-2xl px-5 py-4 outline-none transition-all text-primary-green resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button className="w-full bg-primary-green text-white font-medium rounded-2xl px-8 py-4 mt-2 hover:bg-secondary-green transition-colors duration-300 shadow-lg shadow-primary-green/20 flex justify-center items-center gap-2 group">
                <span>Send Message</span>
                <Send size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
