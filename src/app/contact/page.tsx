"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f9f8f6] font-sans">
      <Navbar />

      <main className="flex-grow">
        
        {/* --- Premium Page Header --- */}
        <section className="relative bg-[#0a2e1f] pt-32 pb-48 md:pt-48 md:pb-64 overflow-hidden">
          {/* Moody Parallax Background */}
          <div className="absolute inset-0 bg-[url('/about1.png')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e1f] via-[#0a2e1f]/80 to-transparent" />
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <motion.div variants={itemVariants} className="flex justify-center items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-[#d4af37]"></span>
              <span className="text-[#d4af37] font-semibold tracking-[0.25em] uppercase text-xs">
                Global Operations
              </span>
              <span className="w-12 h-[1px] bg-[#d4af37]"></span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#f9f8f6] tracking-tight leading-tight">
              Let's Talk <span className="italic font-light text-[#d4af37]">Business.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="mt-8 max-w-2xl mx-auto text-lg text-white/70 font-light leading-relaxed">
              Whether you are looking to place a bulk order or inquire about our global supply chain, our executive team is ready to assist you.
            </motion.p>
          </motion.div>
        </section>

        {/* --- Contact Info Cards (Overlapping the header) --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-32 relative z-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            
            {/* Head Office */}
            <motion.div variants={itemVariants} className="bg-white p-10 rounded-sm shadow-xl border border-neutral-100 flex flex-col items-center text-center group hover:border-[#d4af37]/50 transition-all duration-500">
              <div className="mb-6 text-[#0a2e1f] group-hover:-translate-y-2 group-hover:text-[#d4af37] transition-all duration-500">
                <MapPin size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-[#0a2e1f] text-xl mb-3">Head Office</h3>
              <p className="text-neutral-500 text-sm font-light leading-relaxed">1373/4, 23rd class, 14 main, A block<br />Sahakarnagar, Bangalore - 92</p>
            </motion.div>

            {/* Phone (Clickable) */}
            <motion.div variants={itemVariants}>
              <Link href="tel:+919663239107" className="bg-white p-10 rounded-sm shadow-xl border border-neutral-100 flex flex-col items-center text-center group hover:border-[#d4af37]/50 transition-all duration-500 cursor-pointer h-full">
                <div className="mb-6 text-[#0a2e1f] group-hover:-translate-y-2 group-hover:text-[#d4af37] transition-all duration-500">
                  <Phone size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[#0a2e1f] text-xl mb-3">Direct Line</h3>
                <p className="text-[#d4af37] font-medium tracking-widest text-xs uppercase mt-2">+91 96632 39107</p>
              </Link>
            </motion.div>

            {/* Email (Clickable) */}
            <motion.div variants={itemVariants}>
              <Link href="mailto:sukruthi.r4@gmail.com" className="bg-white p-10 rounded-sm shadow-xl border border-neutral-100 flex flex-col items-center text-center group hover:border-[#d4af37]/50 transition-all duration-500 cursor-pointer h-full">
                <div className="mb-6 text-[#0a2e1f] group-hover:-translate-y-2 group-hover:text-[#d4af37] transition-all duration-500">
                  <Mail size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[#0a2e1f] text-xl mb-3">Email Desk</h3>
                <p className="text-[#d4af37] font-medium tracking-wide text-sm mt-2 break-all">sukruthi.r4<br/>@gmail.com</p>
              </Link>
            </motion.div>

          </motion.div>
        </section>

        {/* --- Map and Form Section --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#051810] rounded-sm shadow-2xl overflow-hidden"
          >
            
            {/* Left: Huge Map */}
            <div className="h-[500px] lg:h-auto w-full relative group">
              <div className="absolute inset-0 bg-[#0a2e1f]/20 pointer-events-none z-10 mix-blend-overlay transition-colors duration-700 group-hover:bg-transparent" />
              <iframe 
                src="https://maps.google.com/maps?q=Sahakarnagar,%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 object-cover"
              ></iframe>
            </div>

            {/* Right: Dark Form Container */}
            <div className="relative p-10 sm:p-14 md:p-20 flex flex-col justify-center">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-[1px] bg-[#d4af37]"></span>
                  <span className="text-[#d4af37] font-semibold tracking-[0.25em] uppercase text-xs">
                    Inquire Now
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-serif text-[#f9f8f6] mb-4 leading-tight">
                  Request a Formal Quote.
                </h3>
                
                <p className="text-white/60 mb-12 font-light text-sm md:text-base leading-relaxed">
                  Fill out the details below and our global sales team will respond with your personalized commodity quote within 24 hours.
                </p>
                
                {/* Reused Form Component */}
                <div className="form-wrapper">
                  <LeadForm />
                </div>
              </div>
            </div>

          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}