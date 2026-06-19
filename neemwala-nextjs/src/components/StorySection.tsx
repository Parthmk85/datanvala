"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Leaf, CheckCircle2 } from 'lucide-react';

const benefitsList = [
  "Naturally fights bacteria",
  "Supports healthy gums",
  "Freshens breath",
  "Chemical free oral care"
];

export default function StorySection() {
  return (
    <section className="py-24 md:py-32 px-[6%] bg-cream-white relative z-10 overflow-hidden" id="story-section">
      {/* Huge Background Text for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-bold text-[12rem] lg:text-[18rem] text-primary-green opacity-[0.02] pointer-events-none whitespace-nowrap z-0">
        HERITAGE
      </div>

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* Left Side: Creative Layered Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
          className="flex-1 w-full relative"
        >
          {/* Offset Background Card */}
          <div className="absolute top-8 -left-4 md:-left-8 w-full h-full bg-light-green rounded-[32px] -z-10" />
          
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl shadow-primary-green/20 border-4 border-white group">
            
            {/* Advanced SVG Filter for Leaf-Only Animation without Blur */}
            <svg width="0" height="0" className="absolute pointer-events-none">
              <filter id="leaf-wind" x="-20%" y="-20%" width="140%" height="140%">
                
                {/* 1. Generate Mask for Green Leaves (Alpha channel only) */}
                <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -0.5 2.5 -1.5 0 -0.1" result="greenMask" />
                  
                <feComponentTransfer in="greenMask" result="thickMask">
                   <feFuncA type="linear" slope="2" intercept="0" />
                </feComponentTransfer>

                {/* 2. Create 50% Gray Background (Neutral Displacement = No Movement) */}
                <feFlood floodColor="#808080" floodOpacity="1" result="neutralGray" />

                {/* 3. Create Wind Noise */}
                <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" result="noise" />
                
                {/* 4. Smoothly Pan the Noise (Wind effect) */}
                <feOffset in="noise" result="movedNoise">
                  <animate attributeName="dx" values="0; 20; 0" keyTimes="0; 0.5; 1" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" dur="7s" repeatCount="indefinite" />
                  <animate attributeName="dy" values="0; 10; 0" keyTimes="0; 0.5; 1" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" dur="10s" repeatCount="indefinite" />
                </feOffset>

                {/* 5. Mask the Noise with the Green Mask */}
                <feComposite in="movedNoise" in2="thickMask" operator="in" result="maskedNoise" />

                {/* 6. Composite Masked Noise over Neutral Gray */}
                <feComposite in="maskedNoise" in2="neutralGray" operator="over" result="finalDisplacementMap" />

                {/* 7. Displace the Original Image using the Masked Map */}
                <feDisplacementMap in="SourceGraphic" in2="finalDisplacementMap" scale="8" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </svg>

            {/* Single Image Layer with Smart Displacement Filter */}
            <Image
              src="/story-tree.jpg"
              alt="Beautiful Natural Tree Landscape"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out z-0"
              style={{ filter: 'url(#leaf-wind)' }}
            />
            
          </div>

          {/* Floating Aesthetic Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -bottom-6 -right-2 md:bottom-10 md:-right-10 bg-white p-5 md:p-6 rounded-[24px] shadow-xl border border-primary-green/10 flex items-center gap-4 z-20"
          >
            <div className="w-12 h-12 bg-cream-white rounded-full flex items-center justify-center text-secondary-green">
              <Leaf size={24} />
            </div>
            <div>
              <p className="font-heading font-bold text-xl text-primary-green">100% Pure</p>
              <p className="text-sm text-[#4a5c4d]">Nature's Extract</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="flex-1 w-full text-left mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-light-green/50 rounded-full text-secondary-green font-medium mb-6 border border-secondary-green/20"
          >
            <Leaf size={16} />
            <span className="text-sm tracking-wide">OUR ANCIENT ROOTS</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
            className="font-heading text-[3rem] md:text-5xl lg:text-6xl text-primary-green mb-8 font-bold tracking-tight leading-[1.1]"
          >
            The Ancient Power<br/>of Neem
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.165, 0.84, 0.44, 1] }}
            className="text-lg md:text-xl text-[#4a5c4d] mb-10 font-normal leading-relaxed max-w-xl"
          >
            For centuries, neem has been nature's ultimate secret for comprehensive oral care. We've harnessed this ancient wisdom into beautifully crafted everyday essentials that protect your smile without compromising our planet.
          </motion.p>
          
          <div className="flex flex-col gap-4">
            {benefitsList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1), ease: [0.165, 0.84, 0.44, 1] }}
                className="flex items-center gap-4 bg-white/60 hover:bg-white p-4 rounded-2xl border border-primary-green/5 hover:shadow-md transition-all duration-300 w-full md:w-[80%]"
              >
                <div className="w-10 h-10 bg-[#e0f2e3] rounded-full flex items-center justify-center text-secondary-green flex-shrink-0">
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                </div>
                <span className="text-lg font-medium text-primary-green">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
