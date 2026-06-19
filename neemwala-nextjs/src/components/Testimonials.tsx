"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Verified Buyer',
    content: "I've completely switched to NeemWala. The quality of the neem wood is exceptional, and my teeth have never felt cleaner. It's a wonderful feeling knowing I'm not contributing to plastic waste anymore.",
    rating: 5,
    imageUrl: '/customers/customer1.png'
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'Verified Buyer',
    content: "The natural antibacterial properties of neem really make a difference. My dentist even noticed my gum health improved. The minimalist design of the brush is just a brilliant bonus.",
    rating: 5,
    imageUrl: '/customers/customer2.png'
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    role: 'Verified Buyer',
    content: "I was skeptical about wooden toothbrushes feeling rough, but NeemWala's finish is incredibly smooth and comfortable. It genuinely feels like a premium, luxury product every morning.",
    rating: 5,
    imageUrl: '/customers/customer3.png'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovering]);

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 px-[6%] bg-cream-white relative z-10 overflow-hidden" id="testimonials-section">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-light-green/40 rounded-bl-[200px] -z-10 blur-2xl opacity-70" />
      
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Content */}
        <div className="flex-1 w-full text-center lg:text-left relative z-20">
          <Quote size={140} className="text-primary-green/5 absolute -top-12 -left-10 md:-left-16 rotate-180 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full text-secondary-green font-medium mb-8 border border-primary-green/10 shadow-sm"
          >
            <Star size={16} fill="currentColor" />
            <span className="text-sm tracking-wide">COMMUNITY REVIEWS</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-[3.5rem] md:text-5xl lg:text-6xl text-primary-green mb-6 font-bold tracking-tight leading-[1.15]"
          >
            What Our <br className="hidden lg:block"/> Customers Say
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#4a5c4d] mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Don't just take our word for it. Discover the real impact of switching to NeemWala through the genuine experiences of our growing community.
          </motion.p>

          {/* Custom Controls */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center lg:justify-start gap-8"
          >
            <div className="flex gap-4">
              <button 
                onClick={prevTestimonial} 
                className="w-14 h-14 rounded-full bg-white border border-primary-green/20 shadow-md flex items-center justify-center text-primary-green hover:bg-primary-green hover:text-white transition-all duration-300 hover:-translate-x-1"
                aria-label="Previous review"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextTestimonial} 
                className="w-14 h-14 rounded-full bg-white border border-primary-green/20 shadow-md flex items-center justify-center text-primary-green hover:bg-primary-green hover:text-white transition-all duration-300 hover:translate-x-1"
                aria-label="Next review"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <div className="h-10 w-px bg-primary-green/10 hidden sm:block" />
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    currentIndex === index ? 'bg-primary-green w-10 shadow-sm' : 'bg-primary-green/20 w-2.5 hover:bg-primary-green/50'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Slider */}
        <div 
          className="flex-1 w-full relative min-h-[400px] md:min-h-[450px] lg:min-h-[500px]" 
          onMouseEnter={() => setIsHovering(true)} 
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="absolute inset-4 -right-4 -bottom-4 bg-primary-green/5 rounded-[40px] -z-10 transform rotate-3 transition-transform duration-500" />
          <div className="absolute inset-4 -right-2 -bottom-2 bg-secondary-green/5 rounded-[40px] -z-10 transform -rotate-2 transition-transform duration-500" />
           
           <AnimatePresence mode="popLayout">
             <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, scale: 0.95, rotate: 2 }}
                animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, x: -50, scale: 0.95, rotate: -2 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="absolute inset-0 bg-white rounded-[40px] p-8 md:p-12 shadow-[0_20px_40px_rgba(27,94,32,0.08)] border border-primary-green/5 flex flex-col justify-between z-10"
              >
                <div>
                  <div className="flex gap-1 text-[#F59E0B] mb-8">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={22} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-2xl md:text-3xl text-primary-green font-heading leading-snug mb-8 relative z-10">
                    "{testimonials[currentIndex].content}"
                  </p>
                </div>
                
                <div className="flex items-center gap-5 mt-auto pt-8 border-t border-primary-green/10">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg shrink-0">
                    <Image
                      src={testimonials[currentIndex].imageUrl}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-green">{testimonials[currentIndex].name}</h4>
                    <span className="text-sm font-semibold text-secondary-green bg-[#e0f2e3] px-3 py-1 rounded-full mt-2 inline-block">
                      {testimonials[currentIndex].role}
                    </span>
                  </div>
                </div>
             </motion.div>
           </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
