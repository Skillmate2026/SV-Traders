'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import LeadForm from './LeadForm'; // Ensure this matches your path

export default function ContactForm() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const} }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0a2e1f] text-[#f9f8f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* --- Left Side: Text and Form Component --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-10"
          >
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <span className="w-12 h-[1px] bg-[#d4af37]"></span>
                <span className="text-[#d4af37] font-semibold tracking-[0.25em] uppercase text-xs">
                  Global Inquiries
                </span>
              </motion.div>
              
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                Request a <span className="italic font-light text-[#d4af37]">Quote.</span>
              </motion.h2>
              
              <motion.p variants={itemVariants} className="text-white/70 font-light leading-relaxed max-w-md">
                Looking for bulk export pricing? Fill out the form below and our dedicated global sales team will respond within 24 hours.
              </motion.p>
            </div>

            {/* Imported Reusable Form */}
            <motion.div variants={itemVariants}>
              <LeadForm />
            </motion.div>
            
          </motion.div>

          {/* --- Right Side: Map and Info --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-8 flex flex-col"
          >
            {/* Contact Details - Redesigned for perfect balance */}
            <motion.div variants={itemVariants} className="flex flex-col bg-white/5 backdrop-blur-md p-8 sm:p-10 rounded-sm border border-white/10">
              
              {/* Head Office */}
              <div className="flex items-start gap-6">
                <div className="text-[#d4af37] mt-1 bg-[#d4af37]/10 p-3 rounded-full shrink-0">
                  <MapPin strokeWidth={1.5} size={24} />
                </div>
                <div>
                  <h4 className="text-[#f9f8f6] font-serif text-xl mb-2">Head Office</h4>
                  <p className="text-white/60 text-sm leading-relaxed font-light">
                    1373/4, 23rd class, 14 main, A block<br />
                    Sahakarnagar, Bangalore - 92<br />
                    Karnataka, India
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-white/10 my-8"></div>

              {/* Phone */}
              <div className="flex items-start gap-6">
                <div className="text-[#d4af37] mt-1 bg-[#d4af37]/10 p-3 rounded-full shrink-0">
                  <Phone strokeWidth={1.5} size={24} />
                </div>
                <div>
                  <h4 className="text-[#f9f8f6] font-serif text-xl mb-2">Direct Line</h4>
                  <p className="text-white/60 text-sm font-light tracking-wide">+91 96632 39107</p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-white/10 my-8"></div>

              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="text-[#d4af37] mt-1 bg-[#d4af37]/10 p-3 rounded-full shrink-0">
                  <Mail strokeWidth={1.5} size={24} />
                </div>
                <div>
                  <h4 className="text-[#f9f8f6] font-serif text-xl mb-2">Email Desk</h4>
                  <p className="text-white/60 text-sm font-light break-all hover:text-[#d4af37] transition-colors cursor-pointer">
                    sukruthi.r4@gmail.com
                  </p>
                </div>
              </div>

            </motion.div>

            {/* Google Map */}
            <motion.div variants={itemVariants} className="w-full h-[350px] rounded-sm overflow-hidden border border-white/10 relative group">
              <div className="absolute inset-0 bg-[#0a2e1f]/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-10" />
              <iframe 
                src="https://maps.google.com/maps?q=Sahakarnagar,%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              ></iframe>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}