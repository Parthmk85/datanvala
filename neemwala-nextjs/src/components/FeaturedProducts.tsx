"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const mockProducts: Product[] = [
  {
    id: 'prod-1',
    name: 'Neem Datun',
    description: 'Pack of 5 fresh Limda (Neem) datuns for traditional antibacterial oral care.',
    price: 50,
    imageUrl: '/Neem Batun.png',
  },
  {
    id: 'prod-2',
    name: 'Karanj Datun',
    description: 'Pack of 5 fresh Karanj datuns known for strengthening gums and preventing cavities.',
    price: 50,
    imageUrl: '/Karanj Datun.png',
  },
  {
    id: 'prod-3',
    name: 'Neem & Karanj Combo',
    description: 'Combo Pack containing 3 Limda (Neem) datuns and 3 Karanj datuns. The ultimate oral care duo.',
    price: 60,
    imageUrl: '/Combo.png',
  },
];

const ProductCard = ({ product, index }: { product: Product; index: number }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.165, 0.84, 0.44, 1] }}
      className="bg-white rounded-[24px] border border-primary-green/10 p-6 flex flex-col group hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-green/10 transition-all duration-400 overflow-hidden"
    >
      <div className="relative w-full aspect-[4/5] mb-6 rounded-[16px] overflow-hidden bg-cream-white/50">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3 gap-4">
          <h3 className="text-xl font-bold text-primary-green font-heading leading-tight">
            {product.name}
          </h3>
          <span className="text-lg font-semibold text-secondary-green whitespace-nowrap">
            ₹{product.price}
          </span>
        </div>
        <p className="text-[#4a5c4d] text-sm leading-relaxed mb-6 flex-grow">
          {product.description}
        </p>
        <a 
          href={`https://wa.me/919000000000?text=Hello! I am interested in buying the ${product.name} (₹${product.price}).`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-6 rounded-full bg-transparent border border-primary-green text-primary-green font-medium flex items-center justify-center gap-2 hover:bg-primary-green hover:text-white transition-all duration-300"
        >
          <MessageCircle size={18} />
          Contact on WhatsApp
        </a>
      </div>
    </motion.div>
  );
};

export default function FeaturedProducts() {
  return (
    <section className="py-24 px-[6%] bg-cream-white relative z-10" id="products-section">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
            className="font-heading text-[3.5rem] md:text-5xl lg:text-6xl text-primary-green mb-4 font-bold tracking-tight"
          >
            Featured Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.165, 0.84, 0.44, 1] }}
            className="text-lg text-[#4a5c4d] max-w-2xl mx-auto"
          >
            Explore our curated selection of premium eco-friendly oral care products.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
