"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ShieldCheck, Globe, Leaf, TrendingUp, Target, Eye, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const team = [
  {
    name: "Dhanush Salian",
    role: "Founder & CEO",
    image: "/Founder.avif",
    bio: "Driving the global vision of SV TRADERS. Dhanush is dedicated to bridging the gap between sustainable local agriculture and high-demand international markets, ensuring uncompromising quality at every step.",
    email: "dhanushsalian333@gmail.com",
    linkedin: "", // Add the LinkedIn URL here later to make the button visible
  },
  {
    name: "Anand N Kalal", 
    role: "Founder & Chairman",
    image: "/Cofounder.jpg",
    bio: "Overseeing our vast international logistics network. Ensuring that our supply chain remains seamless, efficient, and perfectly compliant with global trade standards from farm to port.",
    email: "kalalanandsts@gmail.com",
    linkedin: "", // Add the LinkedIn URL here later to make the button visible
  }
];

const values = [
  { icon: <ShieldCheck className="w-8 h-8 text-[#d4af37]" />, title: "Certified Quality", desc: "Rigorous grading and export-ready processing for every shipment." },
  { icon: <Globe className="w-8 h-8 text-[#d4af37]" />, title: "Global Network", desc: "Seamless logistics connecting local farms to international markets." },
  { icon: <Leaf className="w-8 h-8 text-[#d4af37]" />, title: "Sustainable Sourcing", desc: "Direct partnerships with trusted, eco-conscious local growers." },
  { icon: <TrendingUp className="w-8 h-8 text-[#d4af37]" />, title: "Reliable Supply", desc: "Consistent, dependable fulfillment for high-volume wholesale orders." },
];

export default function AboutPage() {
  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        
        {/* --- Page Header (Cinematic Hero) --- */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-[#0a2e1f]">
          {/* Moody Parallax Background */}
          <div className="absolute inset-0 bg-[url('/about1.png')] bg-cover bg-center opacity-30 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e1f] via-transparent to-transparent" />
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <motion.div variants={itemVariants} className="flex justify-center items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-[#d4af37]"></span>
              <span className="text-[#d4af37] font-semibold tracking-[0.3em] uppercase text-xs">
                Discover Our Roots
              </span>
              <span className="w-12 h-[1px] bg-[#d4af37]"></span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#f9f8f6] tracking-tight leading-tight">
              About <span className="italic font-light text-[#d4af37]">SV TRADERS</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-white/70 font-light leading-relaxed">
              We don't just export commodities; we export trust, quality, and the rich agricultural heritage of our local farmers to the world.
            </motion.p>
          </motion.div>
        </section>

        {/* --- Our Story & Mission Section (Editorial Layout) --- */}
        <section className="py-24 md:py-32 bg-[#f9f8f6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              {/* Left Side: Copy */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="space-y-10"
              >
                <div className="space-y-6">
                  <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif text-[#0a2e1f] leading-tight">
                    Bridging the Gap Between <br className="hidden md:block"/>
                    <span className="italic font-light text-[#d4af37]">Farms & the World.</span>
                  </motion.h2>
                </div>
                
                <motion.div variants={itemVariants} className="space-y-6 text-neutral-600 font-light leading-relaxed text-lg">
                  <p>
                    SV TRADERS began with a simple but powerful idea: to ensure that the hard work of local farmers reaches global markets without compromising on quality or fairness. Based in Udupi with a network stretching across India, we have built a supply chain that prioritizes freshness, compliance, and reliability.
                  </p>
                  <p>
                    Our expertise lies in sourcing premium onions, garlic, potatoes, and coconuts directly from the growers. By eliminating unnecessary middlemen, we not only ensure better returns for farmers but also guarantee competitive pricing and unmatched quality for our international buyers.
                  </p>
                </motion.div>

                {/* Mission / Vision Blocks - Sharp & Premium */}
                <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                  <div className="p-8 bg-white border border-neutral-100 rounded-sm shadow-sm hover:border-[#d4af37]/50 transition-colors duration-500 group">
                    <Target className="w-8 h-8 text-[#0a2e1f] mb-6 group-hover:-translate-y-1 transition-transform duration-500" strokeWidth={1.5} />
                    <h4 className="text-lg font-serif text-[#0a2e1f] mb-3">Our Mission</h4>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed">To provide seamless, high-quality agricultural exports while fostering sustainable and profitable relationships with our farming partners.</p>
                  </div>
                  <div className="p-8 bg-white border border-neutral-100 rounded-sm shadow-sm hover:border-[#d4af37]/50 transition-colors duration-500 group">
                    <Eye className="w-8 h-8 text-[#d4af37] mb-6 group-hover:-translate-y-1 transition-transform duration-500" strokeWidth={1.5} />
                    <h4 className="text-lg font-serif text-[#0a2e1f] mb-3">Our Vision</h4>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed">To be the most trusted global trading partner, recognized for our integrity, efficiency, and commitment to agricultural excellence.</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Side: Architectural Image Frame */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: "easeOut" as const }}
                className="relative lg:h-[800px]"
              >
                <div className="absolute inset-0 bg-[#0a2e1f]/5 z-10 mix-blend-overlay rounded-sm" />
                <img 
                  src="/hero2.png" 
                  alt="Farm to Port Logistics" 
                  className="rounded-sm w-full h-full object-cover shadow-2xl"
                />
                
                {/* Grounded Badge */}
                <div className="absolute -bottom-10 -left-10 bg-[#0a2e1f] p-10 shadow-2xl border-l-4 border-[#d4af37] hidden md:block max-w-xs">
                  <span className="block text-5xl font-serif text-[#f9f8f6] mb-3">100%</span>
                  <span className="text-xs font-bold text-[#d4af37] uppercase tracking-[0.2em] leading-relaxed">Commitment to Global Standards</span>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* --- Core Values Section (Dark Contrast) --- */}
        <section className="py-24 md:py-32 bg-[#0a2e1f] text-[#f9f8f6] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="text-center max-w-3xl mx-auto mb-20 space-y-6"
            >
              <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
                <span className="h-[1px] w-12 bg-[#d4af37]"></span>
                <span className="text-[#d4af37] font-semibold tracking-[0.25em] uppercase text-xs">The SV TRADERS Difference</span>
                <span className="h-[1px] w-12 bg-[#d4af37]"></span>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                Our Core <span className="italic font-light text-[#d4af37]">Values.</span>
              </motion.h2>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((val, idx) => (
                <motion.div key={idx} variants={itemVariants} className="bg-white/5 backdrop-blur-sm p-10 rounded-sm border border-white/10 hover:border-[#d4af37]/50 transition-colors duration-500 group">
                  <div className="mb-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-serif text-[#f9f8f6] mb-4">{val.title}</h3>
                  <p className="text-white/60 font-light text-sm leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- Leadership / Founders Section --- */}
        <section className="py-24 md:py-32 bg-white border-t border-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="text-center max-w-3xl mx-auto mb-20 space-y-6"
            >
              <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
                <span className="h-[1px] w-12 bg-[#d4af37]"></span>
                <span className="text-[#d4af37] font-semibold tracking-[0.25em] uppercase text-xs">Executive Leadership</span>
                <span className="h-[1px] w-12 bg-[#d4af37]"></span>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0a2e1f] leading-tight">
                Meet Our <span className="italic font-light text-[#d4af37]">Founders.</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-sm md:text-base text-neutral-500 font-light max-w-xl mx-auto leading-relaxed">
                The visionaries dedicated to elevating global agricultural trade through trust, rigorous quality standards, and established grower relationships.
              </motion.p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto"
            >
              {team.map((leader, idx) => (
                <motion.div key={idx} variants={itemVariants} className="group flex flex-col items-center text-center">
                  
                  {/* Editorial Image Container */}
                  <div className="relative w-full max-w-[320px] aspect-[4/5] mb-8 overflow-hidden rounded-sm bg-neutral-100">
                    <div className="absolute inset-0 bg-[#0a2e1f]/20 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-overlay" />
                    
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
                    />
                    
                    <div className="absolute inset-4 border border-[#d4af37]/0 group-hover:border-[#d4af37]/50 transition-colors duration-700 z-20 pointer-events-none" />
                  </div>
                  
                  <h3 className="text-3xl font-serif text-[#0a2e1f] mb-2">{leader.name}</h3>
                  <p className="text-[#d4af37] font-semibold tracking-[0.2em] uppercase text-xs mb-6">
                    {leader.role}
                  </p>
                  <p className="text-neutral-500 font-light leading-relaxed max-w-md mb-8 text-sm md:text-base">
                    {leader.bio}
                  </p>
                  
                  <div className="flex justify-center gap-4">
                    
                    {/* LinkedIn Button (Conditionally Rendered) */}
                    {leader.linkedin && (
                      <a 
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-neutral-200 text-neutral-400 hover:border-[#d4af37] hover:text-[#d4af37] rounded-sm transition-all duration-300"
                        aria-label={`${leader.name} LinkedIn`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    )}

                    {/* Email Button */}
                    {leader.email && (
                      <a 
                        href={`mailto:${leader.email}`} 
                        className="p-3 border border-neutral-200 text-neutral-400 hover:border-[#d4af37] hover:text-[#d4af37] rounded-sm transition-all duration-300"
                        aria-label={`Email ${leader.name}`}
                      >
                        <Mail size={18} strokeWidth={1.5} />
                      </a>
                    )}
                    
                  </div>
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