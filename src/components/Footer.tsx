import React from 'react';
import { UtensilsCrossed, Facebook, Instagram, MessageSquare, Phone, Mail, MapPin, ArrowUp, Clock } from 'lucide-react';

interface FooterProps {
  setTab: (tab: string) => void;
}

export default function Footer({ setTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (tabId: string) => {
    setTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: MessageSquare, href: 'https://wa.me/918919449475', label: 'WhatsApp' }
  ];

  return (
    <footer className="bg-[#2A1A14] border-t border-white/5 pt-16 pb-8 text-cream-dark/80 relative overflow-hidden" id="main-footer">
      {/* Soft Gold backdrop ambient accent */}
      <div className="absolute bottom-0 right-1/4 h-64 w-64 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleLinkClick('home')}>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-accent text-white">
                <UtensilsCrossed size={16} />
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                The Daily <span className="text-gold-accent font-semibold">Craving</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-cream-dark/70 leading-relaxed font-light">
              Experience modern luxury dining, authentic recipes, and unparalleled hospitality in the heart of Jubilee Hills, Hyderabad.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((soc, idx) => {
                const IconComp = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="h-8.5 w-8.5 rounded-xl border border-white/10 bg-white/5 hover:bg-gold-accent hover:text-white hover:border-transparent text-cream-dark transition-all flex items-center justify-center cursor-pointer"
                    aria-label={soc.label}
                  >
                    <IconComp size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-gold-accent text-xs font-semibold uppercase tracking-widest mb-5 pb-2 border-b border-white/10 w-2/5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-gold-accent transition-colors cursor-pointer text-cream-dark/80 font-medium flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 bg-white/20 group-hover:bg-gold-accent rounded-full transition-colors" />
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('specials')}
                  className="hover:text-gold-accent transition-colors cursor-pointer text-cream-dark/80 font-medium flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 bg-white/20 group-hover:bg-gold-accent rounded-full transition-colors" />
                  Today Specials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('foods')}
                  className="hover:text-gold-accent transition-colors cursor-pointer text-cream-dark/80 font-medium flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 bg-white/20 group-hover:bg-gold-accent rounded-full transition-colors" />
                  Our Foods Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('book')}
                  className="hover:text-gold-accent transition-colors cursor-pointer text-cream-dark/80 font-medium flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 bg-white/20 group-hover:bg-gold-accent rounded-full transition-colors" />
                  Book Table
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-gold-accent transition-colors cursor-pointer text-cream-dark/80 font-medium flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 bg-white/20 group-hover:bg-gold-accent rounded-full transition-colors" />
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="text-gold-accent text-xs font-semibold uppercase tracking-widest mb-5 pb-2 border-b border-white/10 w-2/5">
              Contact Detail
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-cream-dark/80">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="text-gold-accent shrink-0 mt-0.5" />
                <a href="tel:+918919449475" className="hover:text-gold-accent transition-colors font-semibold">
                  +91 89194 49475
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="text-gold-accent shrink-0 mt-0.5" />
                <a href="mailto:info@thedailycraving.com" className="hover:text-gold-accent transition-colors break-all">
                  info@thedailycraving.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-gold-accent shrink-0 mt-0.5" />
                <span className="font-light">
                  Road No-12, Jubilee Hills, Hyderabad
                </span>
              </li>
            </ul>
          </div>

          {/* Opening Hours Column */}
          <div>
            <h3 className="text-gold-accent text-xs font-semibold uppercase tracking-widest mb-5 pb-2 border-b border-white/10 w-2/5">
              Opening Hours
            </h3>
            <div className="space-y-3">
              <p className="text-xs text-cream-dark/70 leading-relaxed font-light">
                We welcome gourmet enthusiasts daily. Join us for a memorable fine dining experience:
              </p>
              <div className="p-3 bg-white/5 rounded-2xl border border-white/5 text-[11px] flex items-start gap-2">
                <Clock size={14} className="text-gold-accent shrink-0 mt-0.5" />
                <div>
                  <span className="text-gold-accent font-bold">Mon - Sun:</span>
                  <br />
                  11:00 AM - 11:30 PM
                  <br />
                  <span className="text-white/40 italic">Kitchen orders close at 11:00 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-cream-dark/50 text-center sm:text-left">
            &copy; 2026 The Daily Craving. All Rights Reserved. Created with professional culinary dedication.
          </p>

          {/* Scroll to Top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-white/10 hover:border-gold-accent text-xs text-cream-dark hover:text-gold-accent transition-all cursor-pointer bg-white/5 backdrop-blur-sm"
          >
            <span>Back to Top</span>
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
}
