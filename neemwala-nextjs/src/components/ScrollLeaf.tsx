"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function ScrollLeaf() {
  const { scrollYProgress } = useScroll();

  // Define complex scroll-based animations
  
  // Y position: starts at -10% (above viewport), ends at 110% (below viewport)
  // This makes it look like it's falling as you scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "150vh"]);
  
  // X position: sways left and right as it falls (kept strictly to the left side)
  const x = useTransform(scrollYProgress, 
    [0, 0.2, 0.4, 0.6, 0.8, 1], 
    ["5vw", "15vw", "2vw", "12vw", "5vw", "10vw"]
  );

  // Rotation: spins smoothly while falling
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  // Scale: changes slightly in depth
  const scale = useTransform(scrollYProgress, 
    [0, 0.5, 1], 
    [0.8, 1.2, 0.9]
  );

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[100] overflow-hidden">
      {/* Primary falling leaf */}
      <motion.div 
        style={{ y, x, rotate, scale }}
        className="absolute top-0 left-0 drop-shadow-2xl"
      >
        <div className="relative w-24 h-24 sm:w-32 sm:h-32">
          <Image 
            src="/neem_leaf_transparent.png" 
            alt="Falling Neem Leaf" 
            fill 
            className="object-contain opacity-90"
          />
        </div>
      </motion.div>

      {/* Secondary smaller leaf trailing behind */}
      <motion.div 
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ["-20vh", "130vh"]),
          x: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["85vw", "95vw", "80vw", "90vw"]),
          rotate: useTransform(scrollYProgress, [0, 1], [45, -360]),
          scale: useTransform(scrollYProgress, [0, 1], [0.6, 0.8])
        }}
        className="absolute top-0 left-0 drop-shadow-xl"
      >
        <div className="relative w-16 h-16 sm:w-20 sm:h-20">
          <Image 
            src="/neem_leaf_transparent.png" 
            alt="Falling Neem Leaf" 
            fill 
            className="object-contain opacity-70 blur-[1px]"
          />
        </div>
      </motion.div>
    </div>
  );
}
