import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu, PhoneCall, CalendarRange } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setTab: (tab: string) => void;
  onOpenAppointment: () => void;
}

export default function Navbar({ currentTab, setTab, onOpenAppointment }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'projects', label: 'Our Projects' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id: string) => {
    setTab(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#060913]/80 backdrop-blur-md border-b border-[rgba(0,240,255,0.08)] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
        id="main-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 cursor-pointer group"
              id="header-logo"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-neon-blue to-indigo-600 shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all group-hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]">
                <Cpu className="text-white h-5.5 w-5.5 transition-transform group-hover:rotate-12" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-tight text-white group-hover:text-neon-blue transition-colors">
                  Anjali <span className="text-neon-blue">Solutions</span>
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                  Future Ready Tech
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Desktop navigation">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative font-medium text-sm transition-all py-1.5 cursor-pointer ${
                    currentTab === item.id
                      ? 'text-neon-blue'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {currentTab === item.id && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-blue shadow-[0_0_8px_rgba(0,240,255,0.8)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+918911449475"
                className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-neon-blue transition-colors px-3 py-1.5 border border-slate-800 rounded-lg bg-slate-900/40"
              >
                <PhoneCall size={14} className="text-neon-blue" />
                +91 8911449475
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenAppointment}
                className="relative overflow-hidden bg-gradient-to-r from-neon-blue to-cyan-500 hover:from-cyan-400 hover:to-neon-blue text-slate-950 font-bold px-5 py-2.5 rounded-xl transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] flex items-center gap-2 cursor-pointer text-sm"
                id="header-appointment-cta"
              >
                <CalendarRange size={16} />
                Book Appointment
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href="tel:+918911449475"
                className="flex items-center justify-center h-9 w-9 rounded-xl border border-slate-800 bg-slate-900/40 text-neon-blue hover:bg-slate-800"
              >
                <PhoneCall size={16} />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-neon-blue hover:bg-slate-900/60 rounded-xl transition-all"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[65px] left-0 right-0 z-30 bg-[#060913]/95 border-b border-[rgba(0,240,255,0.1)] backdrop-blur-lg md:hidden overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              <div className="space-y-1">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium text-base transition-all flex items-center justify-between ${
                      currentTab === item.id
                        ? 'bg-neon-blue/10 text-neon-blue border-l-4 border-neon-blue'
                        : 'text-slate-300 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    {item.label}
                    {currentTab === item.id && (
                      <span className="h-1.5 w-1.5 rounded-full bg-neon-blue animate-pulse" />
                    )}
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between px-4">
                  <span className="text-xs text-slate-400 uppercase font-mono">Direct line</span>
                  <a href="tel:+918911449475" className="text-neon-blue font-bold text-sm">
                    +91 8911449475
                  </a>
                </div>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenAppointment();
                  }}
                  className="w-full bg-gradient-to-r from-neon-blue to-cyan-500 text-slate-950 font-bold py-3 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CalendarRange size={18} />
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
