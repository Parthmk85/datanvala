"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 'q1',
    question: "Why Neem Toothbrush?",
    answer: "Neem has natural antibacterial and antimicrobial properties. Using a neem toothbrush helps fight bacteria, prevents plaque formation, and supports overall gum health naturally without harsh chemicals."
  },
  {
    id: 'q2',
    question: "Is it biodegradable?",
    answer: "Yes! Our neem toothbrushes are 100% biodegradable. The handle is made from sustainably sourced neem wood, and the bristles are plant-based, meaning you can confidently compost the entire brush."
  },
  {
    id: 'q3',
    question: "How long does it last?",
    answer: "Just like a standard plastic toothbrush, dentists recommend replacing your neem toothbrush every 3 to 4 months, or sooner if the bristles start to fray. With proper care, it lasts just as long as conventional alternatives."
  },
  {
    id: 'q4',
    question: "How to use it?",
    answer: "Use it exactly like a regular toothbrush! For best results, pair it with our organic neem toothpaste. After brushing, rinse the bristles thoroughly and store it in a dry, open space to maintain the wood's integrity."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 px-[6%] bg-white relative z-10" id="faq-section">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
            className="font-heading text-[3rem] md:text-5xl lg:text-5xl text-primary-green mb-4 font-bold tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.165, 0.84, 0.44, 1] }}
            className="text-lg text-[#4a5c4d]"
          >
            Everything you need to know about making the sustainable switch.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.165, 0.84, 0.44, 1] }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen ? 'border-primary-green bg-light-green/20 shadow-md shadow-primary-green/5' : 'border-primary-green/20 bg-white hover:border-primary-green/50'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg md:text-xl font-semibold transition-colors duration-300 pr-8 ${
                    isOpen ? 'text-primary-green' : 'text-primary-green/80'
                  }`}>
                    {item.question}
                  </span>
                  <div className={`flex-shrink-0 rounded-full p-2 transition-colors duration-300 ${
                    isOpen ? 'bg-primary-green text-white' : 'bg-light-green text-primary-green'
                  }`}>
                    {isOpen ? <Minus size={20} strokeWidth={2.5} /> : <Plus size={20} strokeWidth={2.5} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-0 text-[#4a5c4d] leading-relaxed text-lg">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
