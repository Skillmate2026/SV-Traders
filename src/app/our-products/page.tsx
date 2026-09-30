"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  { 
    id: "onion", 
    name: "Export-Grade Onions", 
    desc: "Premium red and pink onions sourced directly from the finest farms, sorted for consistent size and extended shelf life.", 
    img: "/about2.png",
    rate: "45-50 /kg"
  },
  { 
    id: "potato", 
    name: "Farm-Fresh Potatoes", 
    desc: "High-yield, disease-free potatoes perfect for consumption and industrial processing, available in bulk quantities.", 
    img: "/hero2.png",
    rate: "15-17 /kg"
  }, 
  { 
    id: "garlic", 
    name: "Premium Garlic", 
    desc: "Pungent, fully matured white garlic bulbs with tight skins, graded meticulously for international markets.", 
    img: "/Garlic.avif",
    rate: "170-200 /kg"
  },
  { 
    id: "coconut", 
    name: "High-Yield Coconuts", 
    desc: "Fresh, semi-husked coconuts rich in water and meat, handpicked from the coastal belts for maximum freshness.", 
    img: "/Coconut.jpeg",
    rate: "25-30 /kg"
  } 
];

export default function ProductsPage() {
  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const} }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f9f8f6] font-sans">
      <Navbar />

      <main className="flex-grow">
        
        {/* --- Premium Page Header --- */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-[#0a2e1f]">
          {/* Moody Parallax Background */}
          <div className="absolute inset-0 bg-[url('/about1.png')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e1f] via-[#0a2e1f]/60 to-transparent" />
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <motion.div variants={itemVariants} className="flex justify-center items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-[#d4af37]"></span>
              <span className="text-[#d4af37] font-semibold tracking-[0.25em] uppercase text-xs">
                Our Catalog
              </span>
              <span className="w-12 h-[1px] bg-[#d4af37]"></span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#f9f8f6] tracking-tight leading-tight">
              Global Agricultural <br className="hidden md:block"/>
              <span className="italic font-light text-[#d4af37]">Commodities.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="mt-8 max-w-2xl mx-auto text-lg text-white/70 font-light leading-relaxed">
              Explore our range of premium export-quality products, rigorously graded and packed to meet strict international standards.
            </motion.p>
          </motion.div>
        </section>

        {/* --- Products Grid (Editorial Layout) --- */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            >
              {products.map((product) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <Link 
                    href={`/our-products/${product.id}`}
                    className="group relative block rounded-sm overflow-hidden h-[450px] lg:h-[550px] shadow-sm hover:shadow-xl transition-shadow duration-500 bg-[#0a2e1f]"
                  >
                    {/* Background Image with Cinematic Hover Effect (Color Restored) */}
                    <div className="absolute inset-0">
                      <img 
                        src={product.img} 
                        alt={product.name} 
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-1000 ease-out opacity-90 group-hover:opacity-100"
                      />
                      {/* Dark Gradient Overlay for Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e1f] via-[#0a2e1f]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-700" />
                      
                      {/* Subtle Gold Border reveal on hover */}
                      <div className="absolute inset-4 border border-[#d4af37]/0 group-hover:border-[#d4af37]/40 transition-colors duration-700 z-20 pointer-events-none" />
                    </div>

                    {/* Card Content */}
                    <div className="relative z-20 h-full flex flex-col justify-end p-8 lg:p-12">
                      <h2 className="text-3xl lg:text-4xl font-serif text-[#f9f8f6] mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {product.name}
                      </h2>
                      
                      {/* Rate Tag added here */}
                      <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        <span className="inline-flex items-center gap-1.5 bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#d4af37] px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-sm backdrop-blur-sm">
                          <Tag size={12} /> Rate: {product.rate}
                        </span>
                      </div>
                      
                      <p className="text-sm lg:text-base text-white/80 font-light leading-relaxed mb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {product.desc}
                      </p>
                      
                      <div className="inline-flex items-center gap-3 text-[#d4af37] font-semibold tracking-[0.2em] uppercase text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                        View Specifications
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" strokeWidth={2} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
      </main>

      <Footer />
    </div>
  );
}