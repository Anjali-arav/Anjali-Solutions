import React from 'react';
import { Cpu, Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

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
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <footer className="bg-[#03060d] border-t border-[rgba(0,240,255,0.06)] pt-16 pb-8 text-slate-400 relative overflow-hidden" id="main-footer">
      {/* Accent glow behind footer */}
      <div className="absolute bottom-0 right-1/4 h-64 w-64 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleLinkClick('home')}>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-neon-blue to-indigo-600 shadow-[0_0_10px_rgba(0,240,255,0.25)]">
                <Cpu className="text-white h-5 w-5" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Anjali <span className="text-neon-blue">Solutions</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              We leverage future-ready technological frameworks to transform conceptual business ideas into production-ready full-scale web platforms.
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
                    className="h-8 w-8 rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-neon-blue hover:text-slate-950 hover:border-transparent text-slate-400 transition-all flex items-center justify-center cursor-pointer"
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
            <h3 className="text-white text-xs font-mono font-bold uppercase tracking-wider mb-5 pb-2 border-b border-slate-800 w-1/3">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-neon-blue transition-colors cursor-pointer text-slate-400 font-light flex items-center gap-1 group"
                >
                  <span className="h-1.5 w-1.5 bg-slate-800 group-hover:bg-neon-blue rounded-full transition-colors" />
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-neon-blue transition-colors cursor-pointer text-slate-400 font-light flex items-center gap-1 group"
                >
                  <span className="h-1.5 w-1.5 bg-slate-800 group-hover:bg-neon-blue rounded-full transition-colors" />
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('projects')}
                  className="hover:text-neon-blue transition-colors cursor-pointer text-slate-400 font-light flex items-center gap-1 group"
                >
                  <span className="h-1.5 w-1.5 bg-slate-800 group-hover:bg-neon-blue rounded-full transition-colors" />
                  Our Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-neon-blue transition-colors cursor-pointer text-slate-400 font-light flex items-center gap-1 group"
                >
                  <span className="h-1.5 w-1.5 bg-slate-800 group-hover:bg-neon-blue rounded-full transition-colors" />
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Office Contact Column */}
          <div>
            <h3 className="text-white text-xs font-mono font-bold uppercase tracking-wider mb-5 pb-2 border-b border-slate-800 w-1/3">
              Contact Detail
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="text-neon-blue shrink-0 mt-0.5" />
                <a href="tel:+918911449475" className="hover:text-neon-blue transition-colors font-mono">
                  +91 8911449475
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="text-neon-blue shrink-0 mt-0.5" />
                <a href="mailto:info@anjalisolutions.com" className="hover:text-neon-blue transition-colors font-mono break-all">
                  info@anjalisolutions.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-neon-blue shrink-0 mt-0.5" />
                <span className="font-light">
                  Dwaraka Nagar 1st Lane, Vizag, AP, India
                </span>
              </li>
            </ul>
          </div>

          {/* Vizag Branch Column */}
          <div>
            <h3 className="text-white text-xs font-mono font-bold uppercase tracking-wider mb-5 pb-2 border-b border-slate-800 w-1/3">
              HQ Location
            </h3>
            <div className="space-y-3">
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Our main consulting workspace is open for walkthroughs and physical consultations:
              </p>
              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-[11px] font-mono">
                <span className="text-neon-blue font-bold">Dwaraka Nagar branch:</span>
                <br />
                Opposite local business hub, Vizag.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-mono text-slate-500 text-center sm:text-left">
            &copy; {currentYear} Anjali Solutions. All rights reserved. Created with professional craft.
          </p>

          {/* Scroll to Top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-neon-blue text-xs text-slate-500 hover:text-neon-blue transition-all cursor-pointer bg-slate-900/20"
          >
            <span>Back to Top</span>
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
}
