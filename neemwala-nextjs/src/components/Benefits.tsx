"use client";

import { motion } from 'framer-motion';
import { Shield, Recycle, Smile, Globe, LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  span: string;
  bgClass: string;
}

const BenefitCard = ({ icon: Icon, title, description, index, span, bgClass }: BenefitCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.165, 0.84, 0.44, 1] }}
      className={`relative overflow-hidden rounded-[32px] p-8 md:p-12 flex group hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl ${span} ${bgClass}`}
    >
      {/* Huge Background Number */}
      <div className="absolute -bottom-10 -right-4 font-heading font-bold text-[10rem] leading-none text-primary-green opacity-[0.03] pointer-events-none group-hover:scale-110 group-hover:opacity-[0.05] transition-all duration-700 z-0">
        0{index + 1}
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-8 z-10 w-full">
        <div className="shrink-0 w-16 h-16 rounded-[20px] bg-white shadow-sm flex items-center justify-center text-primary-green group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
          <Icon size={28} strokeWidth={2} />
        </div>
        
        <div className="flex-1 mt-1">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-green leading-snug mb-3">
            {title}
          </h3>
          <p className="text-[#4a5c4d] text-lg leading-relaxed max-w-xl">
            {description}
          </p>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white opacity-40 blur-[40px] rounded-full pointer-events-none z-0" />
    </motion.div>
  );
};

const benefits = [
  {
    icon: Shield,
    title: 'Natural Antibacterial Protection',
    description: 'Neem naturally fights germs and bacteria, providing a powerful shield for your teeth and gums without any harsh chemicals.',
    span: 'lg:col-span-8',
    bgClass: 'bg-[#F2FCEE]' // Very soft green
  },
  {
    icon: Recycle,
    title: '100% Biodegradable',
    description: 'Return to the earth naturally. Our brushes leave zero plastic footprint behind.',
    span: 'lg:col-span-4',
    bgClass: 'bg-light-green'
  },
  {
    icon: Smile,
    title: 'Ayurvedic Oral Care',
    description: 'Rooted in 5000 years of Ayurveda, neem twigs are the ancient secret to strong teeth.',
    span: 'lg:col-span-4',
    bgClass: 'bg-cream-white border border-primary-green/10'
  },
  {
    icon: Globe,
    title: 'Eco Friendly Alternative',
    description: 'Every brush makes a difference. Join the movement towards a sustainable and greener planet for future generations.',
    span: 'lg:col-span-8',
    bgClass: 'bg-[#e0f2e3]' // slightly deeper soft green
  },
];

export default function Benefits() {
  return (
    <section className="py-24 md:py-32 px-[6%] bg-white relative z-10 overflow-hidden" id="benefits-section">
      {/* Background Decorative Shapes */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-light-green opacity-50 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-secondary-green opacity-10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-secondary-green font-medium mb-6"
            >
              <div className="w-12 h-[2px] bg-secondary-green" />
              <span>THE NEEM ADVANTAGE</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-green font-bold tracking-tight leading-[1.1]"
            >
              Why Choose NeemWala?
            </motion.h2>
          </div>
        </div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              index={index}
              span={benefit.span}
              bgClass={benefit.bgClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
