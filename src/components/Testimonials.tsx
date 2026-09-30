'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Procurement Director, Dubai",
    content: "SV TRADERS has been our most reliable partner for premium onions and garlic. Their grading standards are impeccable, and shipments always arrive on schedule.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Wholesale Distributor, Spain",
    content: "The quality of their farm-fresh potatoes is unmatched. They handle the complex export logistics flawlessly, giving us total peace of mind.",
    rating: 5,
  },
  {
    name: "Mohammed Al-Fayed",
    role: "Supermarket Chain Owner, UAE",
    content: "We source our high-yield coconuts exclusively from SV TRADERS. Their direct-to-farm network ensures we get the freshest produce at highly competitive rates.",
    rating: 5,
  }
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const} }
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#f9f8f6] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-20 space-y-6"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-[1px] w-12 bg-[#d4af37]"></span>
            <span className="text-[#d4af37] font-semibold tracking-[0.25em] uppercase text-xs">Global Trust</span>
            <span className="h-[1px] w-12 bg-[#d4af37]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0a2e1f] leading-tight">
            Industry <span className="italic font-light text-[#d4af37]">Endorsements.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="flex flex-col bg-white p-10 md:p-12 rounded-sm shadow-sm border border-neutral-100 hover:border-[#d4af37]/30 transition-colors duration-500"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                ))}
              </div>
              
              <p className="text-[#0a2e1f] font-serif text-lg md:text-xl leading-relaxed mb-10 flex-grow">
                "{testimonial.content}"
              </p>
              
              <div className="pt-6 border-t border-neutral-100">
                <h4 className="font-semibold text-[#0a2e1f] uppercase tracking-wide text-sm">{testimonial.name}</h4>
                <p className="text-xs text-[#d4af37] font-medium tracking-widest uppercase mt-2">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}