import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  // Explicitly defining paths to avoid routing errors
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Products', path: '/our-products' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <footer className="bg-[#051810] pt-24 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <span className="text-3xl font-serif text-[#f9f8f6] tracking-wider block">
              SV TRADERS
            </span>
            <p className="text-white/50 text-sm leading-relaxed pr-4 font-light">
              Connecting farmers and growing together. Your trusted, established partner for high-quality global agricultural exports and supply chain logistics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#f9f8f6] font-semibold mb-8 uppercase tracking-[0.2em] text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path} 
                    className="text-white/50 hover:text-[#d4af37] transition-colors text-sm font-light inline-flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-[#d4af37] mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[#f9f8f6] font-semibold mb-8 uppercase tracking-[0.2em] text-xs">Commodities</h4>
            <ul className="space-y-4">
              {[
                { name: 'Export-Grade Onions', slug: 'onion' },
                { name: 'Premium Garlic', slug: 'garlic' },
                { name: 'Farm-Fresh Potatoes', slug: 'potato' },
                { name: 'High-Yield Coconuts', slug: 'coconut' }
              ].map((product) => (
                <li key={product.slug}>
                  <Link 
                    /* --- UPDATED LINK HERE --- */
                    href={`/our-products/${product.slug}`} 
                    className="text-white/50 hover:text-[#d4af37] transition-colors text-sm font-light inline-flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-[#d4af37] mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#f9f8f6] font-semibold mb-8 uppercase tracking-[0.2em] text-xs">Global Desk</h4>
            <ul className="space-y-6 text-sm text-white/50 font-light">
              
              <li className="flex gap-4 items-start">
                <MapPin size={18} className="text-[#d4af37] mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="leading-relaxed">
                  1373/4, 23rd class, 14 main, A block<br />Sahakarnagar, Bangalore - 92<br />Karnataka, India
                </span>
              </li>
              
              <li className="pt-2">
                <a href="tel:+919663239107" className="flex items-center gap-4 hover:text-[#d4af37] transition-colors">
                  <Phone size={18} className="text-[#d4af37]" strokeWidth={1.5} /> 
                  <span className="tracking-wide">+91 96632 39107</span>
                </a>
              </li>

              <li>
                <a href="mailto:sukruthi.r4@gmail.com" className="flex items-center gap-4 hover:text-[#d4af37] transition-colors">
                  <Mail size={18} className="text-[#d4af37]" strokeWidth={1.5} /> 
                  sukruthi.r4@gmail.com
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-light tracking-wide">
            © {new Date().getFullYear()} SV TRADERS. Made with ❤️ by Skillmate
          </p>
          <div className="flex gap-8 text-xs font-light tracking-wide">
            <Link href="#" className="text-white/40 hover:text-[#d4af37] transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/40 hover:text-[#d4af37] transition-colors">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}