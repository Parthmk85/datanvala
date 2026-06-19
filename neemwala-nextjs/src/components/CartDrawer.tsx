"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { X, Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-[110] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-primary-green/10">
              <div className="flex items-center gap-3 text-primary-green">
                <ShoppingBag size={24} />
                <h2 className="text-2xl font-heading font-bold">Your Cart</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-cream-white rounded-full text-secondary-green transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-[#4a5c4d] gap-4 opacity-70">
                  <ShoppingBag size={64} strokeWidth={1} />
                  <p className="text-xl">Your cart is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 text-primary-green font-medium hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-cream-white/50 rounded-2xl border border-primary-green/5 relative group">
                    {/* Item Image */}
                    <div className="relative w-24 h-24 bg-white rounded-xl overflow-hidden border border-primary-green/10 flex-shrink-0">
                      <Image 
                        src={item.imageUrl} 
                        alt={item.name} 
                        fill 
                        className="object-contain p-2"
                      />
                    </div>
                    
                    {/* Item Details */}
                    <div className="flex flex-col justify-between flex-1 py-1">
                      <div>
                        <h3 className="font-bold text-primary-green leading-snug pr-8">{item.name}</h3>
                        <p className="text-secondary-green font-semibold mt-1">₹{item.price}</p>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center bg-white border border-primary-green/20 rounded-full">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 text-secondary-green hover:bg-light-green rounded-full transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center font-medium text-primary-green">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 text-secondary-green hover:bg-light-green rounded-full transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="absolute top-4 right-4 text-red-400 hover:text-red-600 p-1.5 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 bg-cream-white border-t border-primary-green/10">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg text-[#4a5c4d] font-medium">Subtotal</span>
                  <span className="text-2xl font-bold text-primary-green">₹{cartTotal}</span>
                </div>
                <button className="w-full py-4 bg-primary-green text-white rounded-full font-bold text-lg hover:bg-secondary-green hover:shadow-xl hover:shadow-primary-green/20 transition-all duration-300">
                  Proceed to Checkout
                </button>
                <p className="text-center text-sm text-[#4a5c4d] mt-4 opacity-80">
                  Taxes and shipping calculated at checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
