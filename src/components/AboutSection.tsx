'use client';

import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Leaf, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PremiumAboutSection() {
  const features = [
    { icon: <ShieldCheck className="w-6 h-6 text-[#d4af37]" />, title: "Certified Quality", desc: "Rigorous grading and export-ready processing." },
    { icon: <Globe className="w-6 h-6 text-[#d4af37]" />, title: "Global Network", desc: "Seamless logistics to international markets." },
    { icon: <Leaf className="w-6 h-6 text-[#d4af37]" />, title: "Farm to Port", desc: "Direct sourcing from trusted local growers." },
    { icon: <TrendingUp className="w-6 h-6 text-[#d4af37]" />, title: "Reliable Supply", desc: "Consistent fulfillment for high-volume orders." },
  ];

  // --- Framer Motion Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const} }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" as const} }
  };

  return (
    // Replaced standard white with a luxurious cream/off-white background
    <section id="about" className="py-32 bg-[#f9f8f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* --- Left Side: Copywriting & Features --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <motion.span variants={itemVariants} className="text-[#d4af37] font-semibold tracking-[0.25em] uppercase text-xs flex items-center gap-4">
                <span className="w-16 h-[1px] bg-[#d4af37]"></span>
                The SV TRADERS Standard
              </motion.span>
              
              {/* Added font-serif to the heading for a high-end editorial feel */}
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0a2e1f] leading-tight">
                Commitment to <br className="hidden md:block" />
                <span className="italic font-light text-[#d4af37]">Global Excellence.</span>
              </motion.h2>
              
              <motion.p variants={itemVariants} className="text-lg text-neutral-600 leading-relaxed font-light max-w-lg">
                SV TRADERS is a premier export-import enterprise dedicated to bridging the gap between fertile farms and international markets. We specialize in sourcing, grading, and exporting high-grade agricultural commodities, ensuring that every shipment meets stringent global standards.
              </motion.p>
            </div>

            {/* Feature Grid */}
            <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {features.map((feat, idx) => (
                <motion.div key={idx} variants={itemVariants} className="group flex items-start gap-5">
                  <div className="p-4 bg-white shadow-sm border border-neutral-100 rounded-sm group-hover:border-[#d4af37] transition-colors duration-500">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a2e1f] tracking-wide mb-1">{feat.title}</h3>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-6">
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center gap-4 bg-[#0a2e1f] text-[#f9f8f6] px-10 py-5 text-sm uppercase tracking-widest font-medium hover:bg-[#d4af37] hover:text-[#0a2e1f] transition-all duration-500 rounded-sm group"
              >
                Discover Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </motion.div>
          </motion.div>

          {/* --- Right Side: Image Grid --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative lg:h-[750px] w-full flex items-center justify-end mt-16 lg:mt-0"
          >
            {/* Main Large Image */}
            <motion.div variants={imageVariants} className="w-[85%] h-[90%] relative z-10">
              {/* Optional dark overlay to make the image feel more moody/premium */}
              <div className="absolute inset-0 bg-[#0a2e1f]/10 z-10 mix-blend-overlay rounded-sm"></div>
              <img 
                src="/about1.png" 
                alt="Agricultural fields" 
                className="w-full h-full object-cover rounded-sm shadow-2xl"
              />
            </motion.div>

            {/* Secondary Offset Image */}
            <motion.div 
              variants={imageVariants} 
              className="absolute left-0 bottom-12 w-[60%] h-[55%] z-20"
            >
              <img 
                src="/about2.png" 
                alt="Harvest sorting" 
                className="w-full h-full object-cover rounded-sm shadow-2xl border-8 border-[#f9f8f6]"
              />
              
              {/* Grounded Experience Badge (Replaces the floating center badge) */}
              <div className="absolute -bottom-8 -left-8 bg-[#0a2e1f] p-8 shadow-2xl border-l-4 border-[#d4af37] hidden sm:block">
                <span className="block text-5xl font-serif text-[#f9f8f6] mb-2">100%</span>
                <span className="text-xs font-bold text-[#d4af37] uppercase tracking-[0.2em]">Export Grade</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}