"use client";
import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar'; // Adjust paths based on your folder structure
import Footer from '../../../components/Footer';
import { Package, Scale, MapPin, Calendar, ArrowRight, ArrowLeft, ShieldCheck, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

// Centralized Data
const productData: Record<string, any> = {
  onion: {
    name: "Export-Grade Onions",
    subtitle: "Premium Red & Pink Onions",
    desc: "Sourced from the most fertile regions, our onions are known for their pungent aroma, uniform size, and crisp texture. Rigorously sorted to remove defects, ensuring high shelf-life for long-distance sea freight.",
    img: "/about2.png", 
    specs: [
      { icon: <Tag size={24} strokeWidth={1.5} />, title: "Current Rate", val: "₹45 - ₹50" },
      { icon: <Scale size={24} strokeWidth={1.5} />, title: "Size & Grading", val: "40mm to 60mm+" },
      { icon: <Package size={24} strokeWidth={1.5} />, title: "Packaging", val: "5kg - 50kg Mesh/Jute Bags" },
      { icon: <MapPin size={24} strokeWidth={1.5} />, title: "Origin", val: "Maharashtra / Karnataka, India" },
      { icon: <Calendar size={24} strokeWidth={1.5} />, title: "Shelf Life", val: "3 to 4 Months (in ideal storage)" },
    ]
  },
  potato: {
    name: "Farm-Fresh Potatoes",
    subtitle: "High-Yield Processing & Table Potatoes",
    desc: "Our potatoes are harvested at peak maturity, offering excellent texture and taste. Available in multiple varieties suitable for direct consumption or industrial processing (chips/fries).",
    img: "/hero2.png", 
    specs: [
      { icon: <Tag size={24} strokeWidth={1.5} />, title: "Current Rate", val: "₹15 - ₹17 /kg" },
      { icon: <Scale size={24} strokeWidth={1.5} />, title: "Size & Grading", val: "50g to 150g+" },
      { icon: <Package size={24} strokeWidth={1.5} />, title: "Packaging", val: "10kg - 50kg Mesh Bags" },
      { icon: <MapPin size={24} strokeWidth={1.5} />, title: "Origin", val: "Gujarat / UP, India" },
      { icon: <Calendar size={24} strokeWidth={1.5} />, title: "Shelf Life", val: "Long-lasting in cold storage" },
    ]
  },
  garlic: {
    name: "Premium Garlic",
    subtitle: "Pungent White Garlic Bulbs",
    desc: "Matured white garlic with tight, unbroken skins and a strong, spicy flavor profile. Carefully cured and dried to prevent sprouting during international transit.",
    img: "/Garlic.avif",
    specs: [
      { icon: <Tag size={24} strokeWidth={1.5} />, title: "Current Rate", val: "₹170 - ₹200 /kg" },
      { icon: <Scale size={24} strokeWidth={1.5} />, title: "Size & Grading", val: "40mm to 55mm+" },
      { icon: <Package size={24} strokeWidth={1.5} />, title: "Packaging", val: "10kg Carton / 20kg Mesh Bags" },
      { icon: <MapPin size={24} strokeWidth={1.5} />, title: "Origin", val: "Madhya Pradesh / Rajasthan, India" },
      { icon: <Calendar size={24} strokeWidth={1.5} />, title: "Shelf Life", val: "8 to 10 Months" },
    ]
  },
  coconut: {
    name: "High-Yield Coconuts",
    subtitle: "Fresh Semi-Husked Coconuts",
    desc: "Plucked from premium coastal belts, our semi-husked coconuts are heavy, water-filled, and feature thick, sweet meat. Perfect for culinary and industrial coconut derivatives.",
    img: "/Coconut.jpeg", 
    specs: [
      { icon: <Tag size={24} strokeWidth={1.5} />, title: "Current Rate", val: "₹25 - ₹30 /kg" },
      { icon: <Scale size={24} strokeWidth={1.5} />, title: "Weight", val: "500g to 700g+ per piece" },
      { icon: <Package size={24} strokeWidth={1.5} />, title: "Packaging", val: "25 Pcs per PP Bag" },
      { icon: <MapPin size={24} strokeWidth={1.5} />, title: "Origin", val: "Tamil Nadu / Karnataka, India" },
      { icon: <Calendar size={24} strokeWidth={1.5} />, title: "Shelf Life", val: "50 to 60 Days" },
    ]
  }
};

export default function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const product = productData[resolvedParams.slug];

  if (!product) {
    notFound();
  }

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f9f8f6] font-sans">
      <Navbar />

      <main className="flex-grow">
        
        {/* --- 1. DARK HERO BANNER --- */}
        <section className="relative pt-32 pb-40 md:pt-48 md:pb-64 overflow-hidden bg-[#0a2e1f]">
          {/* Dynamic Background Image based on the specific product */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
            style={{ backgroundImage: `url(${product.img})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e1f] via-[#0a2e1f]/60 to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            {/* Breadcrumb - Now white/gold to pop against the dark background */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 flex justify-center"
            >
              <Link 
                href="/our-products" 
                className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-white/70 hover:text-[#d4af37] transition-colors duration-300 group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" />
                Back to Catalog
              </Link>
            </motion.div>

            {/* Title & Subtitle */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="flex justify-center items-center gap-4">
                <span className="w-8 h-[1px] bg-[#d4af37]"></span>
                <span className="text-[#d4af37] font-semibold tracking-[0.25em] uppercase text-xs">
                  {product.subtitle}
                </span>
                <span className="w-8 h-[1px] bg-[#d4af37]"></span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#f9f8f6] leading-tight">
                {product.name}
              </motion.h1>
            </motion.div>
          </div>
        </section>


        {/* --- 2. MAIN CONTENT (Overlapping the Hero) --- */}
        <section className="relative z-20 -mt-24 md:-mt-40 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* --- Left Side: Editorial Sticky Image --- */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" as const}}
              className="lg:col-span-5 sticky top-32"
            >
              <div className="relative rounded-sm overflow-hidden shadow-2xl h-[450px] lg:h-[650px] group bg-[#0a2e1f] border-4 border-[#f9f8f6]">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e1f]/60 via-transparent to-transparent opacity-80" />
                
                {/* Export Grade Badge */}
                <div className="absolute bottom-0 left-0 bg-[#0a2e1f] p-6 md:p-8 flex items-center gap-4 border-t-4 border-r-4 border-[#d4af37]">
                  <ShieldCheck size={24} className="text-[#d4af37]" strokeWidth={1.5} />
                  <span className="text-[#f9f8f6] font-semibold text-xs uppercase tracking-[0.2em]">
                    Export Grade
                  </span>
                </div>
              </div>
            </motion.div>

            {/* --- Right Side: Details & Specs --- */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-16 lg:pt-8"
            >
              
              {/* Description */}
              <motion.div variants={itemVariants} className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-neutral-100">
                <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed">
                  {product.desc}
                </p>
              </motion.div>

              {/* Specifications Grid */}
              <motion.div variants={itemVariants} className="space-y-8">
                <h3 className="text-2xl font-serif text-[#0a2e1f] border-b border-[#0a2e1f]/10 pb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {product.specs.map((spec: any, idx: number) => (
                    <div 
                      key={idx} 
                      className="group bg-white p-8 rounded-sm border border-neutral-200 hover:border-[#d4af37]/60 transition-colors duration-500 flex flex-col gap-5"
                    >
                      <div className="text-[#0a2e1f] group-hover:-translate-y-1 transition-transform duration-500">
                        {spec.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#0a2e1f] uppercase tracking-widest mb-2">{spec.title}</p>
                        <p className="text-sm text-neutral-500 font-light leading-relaxed">{spec.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Immersive CTA Block */}
              <motion.div variants={itemVariants} className="relative overflow-hidden rounded-sm bg-[#0a2e1f] px-8 py-14 sm:p-16 shadow-2xl mt-12 border border-[#d4af37]/20">
                <div className="absolute inset-0 bg-[url('/about1.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                
                <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-10 text-center xl:text-left">
                  <div className="flex-1">
                    <h3 className="text-3xl font-serif text-[#f9f8f6] mb-4">Ready for bulk ordering?</h3>
                    <p className="text-white/60 font-light text-sm md:text-base leading-relaxed">
                      Secure customized FOB/CIF pricing and global shipping timelines for our {product.name}.
                    </p>
                  </div>
                  
                  <div className="flex-shrink-0 w-full xl:w-auto">
                    <Link 
                      href="/contact" 
                      className="flex items-center justify-center gap-4 bg-[#d4af37] text-[#0a2e1f] w-full xl:w-auto px-10 py-5 rounded-sm font-medium text-sm tracking-widest uppercase hover:bg-[#f9f8f6] transition-colors duration-500 group"
                    >
                      Request a Quote
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                    </Link>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}