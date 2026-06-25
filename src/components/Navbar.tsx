import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, UtensilsCrossed, PhoneCall } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setTab: (tab: string) => void;
  onOpenCallRequest: () => void;
}

export default function Navbar({ currentTab, setTab, onOpenCallRequest }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'specials', label: 'Today Specials' },
    { id: 'foods', label: 'Our Foods' },
    { id: 'book', label: 'Book Table' },
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
            ? 'bg-white/95 backdrop-blur-md border-b border-brand-brown/10 py-2.5 shadow-md'
            : 'bg-gradient-to-b from-brand-brown/70 to-transparent py-4 border-b border-transparent'
        }`}
        id="main-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 cursor-pointer group"
              id="header-logo"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-brown text-gold-accent shadow-md transition-all group-hover:scale-105">
                <UtensilsCrossed size={18} className="transition-transform group-hover:rotate-12" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-display text-lg sm:text-xl font-bold tracking-tight leading-none transition-colors ${
                    isScrolled ? 'text-brand-brown' : 'text-white'
                  }`}
                >
                  The Daily <span className="text-gold-accent">Craving</span>
                </span>
                <span className="text-[9px] text-gold-accent font-semibold tracking-widest uppercase mt-0.5">
                  Culinary Excellence
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Desktop navigation">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative font-medium text-sm transition-all py-1.5 cursor-pointer ${
                    currentTab === item.id
                      ? 'text-gold-accent font-semibold'
                      : isScrolled
                      ? 'text-brand-brown/80 hover:text-gold-accent'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  {currentTab === item.id && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+918919449475"
                className={`flex items-center gap-2 text-xs font-semibold px-3.5 py-2 border rounded-xl transition-all ${
                  isScrolled
                    ? 'border-brand-brown/10 bg-brand-brown/5 text-brand-brown hover:bg-brand-brown hover:text-white'
                    : 'border-white/20 bg-white/10 text-white hover:bg-white hover:text-brand-brown'
                }`}
              >
                <PhoneCall size={14} className="text-gold-accent animate-pulse" />
                +91 8919449475
              </a>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenCallRequest}
                className="bg-gradient-to-r from-gold-accent to-appetite-orange hover:from-appetite-orange hover:to-gold-accent text-white font-bold px-5 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer text-sm"
                id="header-call-now-cta"
              >
                Call Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="tel:+918919449475"
                className={`flex items-center justify-center h-9 w-9 rounded-xl border transition-all ${
                  isScrolled
                    ? 'border-brand-brown/10 bg-brand-brown/5 text-brand-brown'
                    : 'border-white/20 bg-white/10 text-white'
                }`}
              >
                <PhoneCall size={15} />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-xl transition-all ${
                  isScrolled
                    ? 'text-brand-brown hover:bg-brand-brown/5'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
            className="fixed top-[60px] left-0 right-0 z-30 bg-white border-b border-brand-brown/10 backdrop-blur-lg lg:hidden overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-4">
              <div className="space-y-1">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium text-base transition-all flex items-center justify-between ${
                      currentTab === item.id
                        ? 'bg-cream-bg text-gold-accent border-l-4 border-gold-accent'
                        : 'text-brand-brown/80 hover:text-brand-brown hover:bg-cream-bg/50'
                    }`}
                  >
                    {item.label}
                    {currentTab === item.id && (
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-accent" />
                    )}
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-brand-brown/10 space-y-3.5">
                <div className="flex items-center justify-between px-4">
                  <span className="text-xs text-brand-brown/60 uppercase tracking-wider font-semibold">Direct line</span>
                  <a href="tel:+918919449475" className="text-brand-brown font-bold text-sm hover:text-gold-accent">
                    +91 8919449475
                  </a>
                </div>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenCallRequest();
                  }}
                  className="w-full bg-gradient-to-r from-gold-accent to-appetite-orange text-white font-bold py-3 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  Request Call Back
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
