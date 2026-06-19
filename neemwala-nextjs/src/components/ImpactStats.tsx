"use client";

import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  {
    id: 1,
    title: "Plastic Brushes Replaced",
    value: 50000,
    suffix: "+",
    description: "Preventing plastic waste from reaching our oceans and landfills.",
  },
  {
    id: 2,
    title: "Happy Customers",
    value: 25000,
    suffix: "+",
    description: "Joining the global movement for sustainable oral care.",
  },
  {
    id: 3,
    title: "Natural Materials Used",
    value: 100,
    suffix: "%",
    description: "Pure organic neem wood and plant-based compostable bristles.",
  },
  {
    id: 4,
    title: "CO2 Emissions Reduced (kg)",
    value: 12500,
    suffix: "+",
    description: "Significantly offsetting our collective carbon footprint.",
  },
];

export default function ImpactStats() {
  return (
    <section className="py-24 px-[6%] bg-[#1b5e20] relative z-10 overflow-hidden" id="impact-section">
      {/* Subtle radial gradient background effect */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-cream-white)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto relative z-20">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
            className="font-heading text-[3.5rem] md:text-5xl lg:text-6xl text-cream-white mb-6 font-bold tracking-tight"
          >
            Our Impact Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.165, 0.84, 0.44, 1] }}
            className="text-lg md:text-xl text-light-green max-w-2xl mx-auto opacity-90"
          >
            Small changes in our daily routine can create a massive positive environmental impact on the planet.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.165, 0.84, 0.44, 1] }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-10 text-center flex flex-col items-center hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20 transition-all duration-400 group"
            >
              <div className="font-heading text-5xl md:text-6xl font-bold text-light-green mb-6 group-hover:scale-105 transition-transform duration-300">
                <CountUp 
                  end={stat.value} 
                  duration={3} 
                  separator="," 
                  suffix={stat.suffix}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  scrollSpyDelay={index * 100}
                />
              </div>
              <h3 className="text-xl font-semibold text-cream-white mb-3">
                {stat.title}
              </h3>
              <p className="text-light-green/70 text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
