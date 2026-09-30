'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const team = [
  {
    name: "Sukruthi Ravindra",
    role: "Founder",
    image: "/Founder.jpeg",
    bio: "Driving the global vision of SV TRADERS. Sukruthi Ravindra is dedicated to bridging the gap between sustainable local agriculture and high-demand international markets, ensuring uncompromising quality at every step.",
    email: "sukruthi.r4@gmail.com",
    linkedin: "", // Drop the LinkedIn URL here when ready to make the icon visible
  }
];

export default function TeamSection() {
  // --- Framer Motion Animation Variants ---
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const} }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section id="team" className="py-24 md:py-32 bg-[#0a2e1f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="text-center max-w-3xl mx-auto mb-20 space-y-6"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-[1px] w-12 bg-[#d4af37]"></span>
            <span className="text-[#d4af37] font-semibold tracking-[0.25em] uppercase text-xs">
              Executive Leadership
            </span>
            <span className="h-[1px] w-12 bg-[#d4af37]"></span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#f9f8f6] leading-tight">
            Meet Our <span className="italic font-light text-[#d4af37]">Founder</span>
          </h2>
          <p className="text-sm md:text-base text-neutral-400 font-light max-w-xl mx-auto leading-relaxed">
            The visionary dedicated to elevating global agricultural trade through trust, rigorous quality standards, and established grower relationships.
          </p>
        </motion.div>

        {/* Team Container - Changed from grid to flex for single item centering */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center max-w-5xl mx-auto"
        >
          {team.map((leader, idx) => (
            <motion.div key={idx} variants={cardVariants} className="group flex flex-col items-center text-center">
              
              {/* Editorial Image Container */}
              <div className="relative w-full max-w-[320px] aspect-[4/5] mb-8 overflow-hidden rounded-sm bg-neutral-800">
                <div className="absolute inset-0 bg-[#0a2e1f]/40 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-overlay" />
                
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
                />
                
                <div className="absolute inset-4 border border-[#d4af37]/0 group-hover:border-[#d4af37]/50 transition-colors duration-700 z-20 pointer-events-none" />
              </div>
              
              {/* Leader Details */}
              <h3 className="text-3xl font-serif text-[#f9f8f6] mb-2">{leader.name}</h3>
              <p className="text-[#d4af37] font-medium tracking-[0.2em] uppercase text-xs mb-6">
                {leader.role}
              </p>
              <p className="text-neutral-400 font-light leading-relaxed max-w-md mb-8 text-sm md:text-base">
                {leader.bio}
              </p>
              
              {/* Social/Contact Links */}
              <div className="flex justify-center gap-4">
                
                {/* LinkedIn Button (Rendered only if URL exists) */}
                {leader.linkedin && (
                  <a 
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-neutral-700 text-neutral-400 hover:border-[#d4af37] hover:text-[#d4af37] rounded-sm transition-all duration-300"
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
                    className="p-3 border border-neutral-700 text-neutral-400 hover:border-[#d4af37] hover:text-[#d4af37] rounded-sm transition-all duration-300"
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
  );
}