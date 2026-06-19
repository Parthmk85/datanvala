"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export default function Hero() {

  return (
    <section className="min-h-screen flex items-center relative px-[6%] overflow-hidden pt-24 md:pt-0">
      
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-chatgpt-bg.png"
          alt="NeemWala Premium Organic Oral Care"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1400px] mx-auto z-10 relative">
        {/* Left Content */}
        <div className="flex-1 pr-0 md:pr-[5%] max-w-[700px] mb-12 md:mb-0 text-center md:text-left">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-primary-green/20 text-primary-green font-semibold text-sm mb-8 shadow-lg"
          >
            <Sparkles size={16} className="text-[#F59E0B]" />
            <span>100% Organic Oral Care</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.165, 0.84, 0.44, 1] }}
            className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] mb-7 text-primary-green font-bold tracking-tight drop-shadow-sm"
          >
            Naturally <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-[#4ade80]">
              Healthy Smiles
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
            className="text-lg md:text-xl text-[#2d3a2f] mb-11 font-medium max-w-[90%] mx-auto md:mx-0 leading-relaxed drop-shadow-sm"
          >
            Experience the power of natural neem toothbrushes designed for healthier teeth and a healthier planet. Every brush makes a difference.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start"
          >
            <a href="#" className="px-11 py-4 rounded-full font-medium text-lg bg-primary-green text-cream-white border border-primary-green shadow-xl shadow-primary-green/30 hover:bg-secondary-green hover:border-secondary-green hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full z-0" />
            </a>
            <a href="#" className="px-11 py-4 rounded-full font-medium text-lg bg-white/80 backdrop-blur-md text-primary-green border border-primary-green/30 hover:bg-white hover:border-primary-green hover:-translate-y-1 transition-all duration-300 shadow-lg">
              Explore Benefits
            </a>
          </motion.div>
        </div>

        {/* Right Side Empty Space for Background to Shine */}
        <div className="flex-1 hidden md:block h-[500px] md:h-[700px]">
          {/* Transparent area allowing the beautiful background to be fully visible on desktop */}
        </div>
      </div>
    </section>
  );
}
