"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Explicitly defining paths to avoid routing errors
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Products', path: '/our-products' },
  { name: 'Contact Us', path: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to change navbar styling dynamically
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm py-2" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-4 group">
            <div className="flex flex-col justify-center">
              <span className={`text-2xl sm:text-3xl font-serif tracking-wider leading-none transition-colors duration-300 ${isScrolled ? "text-[#0a2e1f]" : "text-white"}`}>
                SV TRADERS
              </span>
              <span className={`text-[9px] sm:text-[11px] font-medium tracking-[0.2em] mt-1 uppercase hidden sm:block transition-colors duration-300 ${isScrolled ? "text-[#d4af37]" : "text-white/80"}`}>
                Agriculture | Supply | Production
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-10 text-sm tracking-widest uppercase font-medium">
            {navLinks.map((link, i) => (
              <Link 
                key={i} 
                href={link.path} 
                className={`relative group overflow-hidden transition-colors ${isScrolled ? "text-gray-800" : "text-white"}`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#d4af37] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </Link>
            ))}
            
            {/* Primary CTA Button */}
            <Link 
              href="/contact" 
              className={`px-8 py-3 rounded-sm transition-all duration-500 border ${
                isScrolled 
                  ? "bg-[#0a2e1f] text-[#f9f8f6] border-[#0a2e1f] hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-[#0a2e1f]" 
                  : "bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white hover:text-[#0a2e1f]"
              }`}
            >
              Inquire Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`focus:outline-none ${isScrolled ? "text-[#0a2e1f]" : "text-white"}`}>
              {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-2xl absolute w-full left-0 top-full"
          >
            <div className="px-6 py-8 space-y-6 flex flex-col">
              {navLinks.map((link, i) => (
                <Link 
                  key={i} 
                  href={link.path} 
                  onClick={() => setIsOpen(false)} 
                  className="text-gray-800 font-serif text-xl tracking-wide border-b border-gray-100 pb-2"
                >
                  {link.name}
                </Link>
              ))}
              
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)} 
                className="text-center bg-[#0a2e1f] text-[#f9f8f6] py-4 rounded-sm font-medium mt-4 tracking-widest uppercase text-sm"
              >
                Inquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}