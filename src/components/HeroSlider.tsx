import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Zap, CheckCircle2, ChevronRight, MessageSquare } from 'lucide-react';

interface HeroSliderProps {
  onOpenAppointment: () => void;
  setTab: (tab: string) => void;
}

export default function HeroSlider({ onOpenAppointment, setTab }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Transform Your Ideas Into Digital Solutions',
      highlight: 'Digital Solutions',
      description: 'Anjali Solutions delivers innovative and professional solutions with 5+ years of experience.',
      buttonText: 'Get Started',
      action: 'get-started',
      imageUrl: '/src/assets/images/hero_transform_solutions_1782314643216.jpg',
      badge: '5+ Years of Trust'
    },
    {
      id: 2,
      title: 'Grow Your Business With Smart Technology',
      highlight: 'Smart Technology',
      description: 'Reliable, creative and future-ready solutions designed for your success.',
      buttonText: 'Contact Us',
      action: 'contact',
      imageUrl: '/src/assets/images/hero_smart_technology_1782314658189.jpg',
      badge: 'Innovative & Scalable'
    }
  ];

  // Auto-play slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev === 0 ? 1 : 0));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide(prev => (prev === 0 ? 1 : 0));
  };

  const handlePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? 1 : 0));
  };

  const handleAction = (actionType: string) => {
    if (actionType === 'get-started') {
      onOpenAppointment();
    } else {
      setTab('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[85vh] min-h-[580px] lg:h-[90vh] bg-[#03060f] overflow-hidden flex items-center" id="hero-slider-section">
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].imageUrl})` }}
          />
        </AnimatePresence>
        {/* Modern dark gradient masks for deep contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03060f] via-[#03060f]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03060f] via-transparent to-transparent z-10" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 w-full pt-16">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-mono tracking-wider uppercase mb-5">
                <Zap size={12} className="animate-pulse" />
                {slides[currentSlide].badge}
              </div>

              {/* Title with highlighted words */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-5">
                {slides[currentSlide].title.split(slides[currentSlide].highlight)[0]}
                <span className="text-neon-blue neon-glow-text">
                  {slides[currentSlide].highlight}
                </span>
                {slides[currentSlide].title.split(slides[currentSlide].highlight)[1]}
              </h1>

              {/* Description */}
              <p className="text-slate-300 text-lg sm:text-xl font-light mb-8 leading-relaxed max-w-2xl">
                {slides[currentSlide].description}
              </p>

              {/* Buttons & Trust Metrics */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAction(slides[currentSlide].action)}
                  className="bg-gradient-to-r from-neon-blue to-cyan-500 hover:from-cyan-400 hover:to-neon-blue text-slate-950 font-bold py-3.5 px-8 rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2 text-base"
                >
                  {slides[currentSlide].buttonText}
                  <ChevronRight size={18} />
                </motion.button>
                
                <button
                  onClick={() => { setTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="border border-slate-700 hover:border-neon-blue/50 hover:bg-neon-blue/5 text-white font-medium py-3.5 px-8 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer bg-slate-900/40 backdrop-blur-sm text-sm"
                >
                  Learn About Us
                </button>
              </div>

              {/* Secondary Trust Badges */}
              <div className="mt-12 pt-6 border-t border-slate-800/60 flex flex-wrap gap-x-8 gap-y-3">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                  <CheckCircle2 size={14} className="text-neon-blue" />
                  ISO certified standard
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                  <CheckCircle2 size={14} className="text-neon-blue" />
                  5+ years in Dwaraka Nagar, Vizag
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                  <CheckCircle2 size={14} className="text-neon-blue" />
                  100% Secure & Reliable
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <div className="absolute bottom-8 right-8 sm:right-12 z-25 flex items-center gap-3">
        <button
          onClick={handlePrev}
          className="h-10 w-10 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 hover:text-neon-blue text-slate-400 transition-all flex items-center justify-center cursor-pointer hover:border-neon-blue/30"
          aria-label="Previous slide"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          onClick={handleNext}
          className="h-10 w-10 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 hover:text-neon-blue text-slate-400 transition-all flex items-center justify-center cursor-pointer hover:border-neon-blue/30"
          aria-label="Next slide"
        >
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Slide Indicators / Dots */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-25 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === idx 
                ? 'w-8 bg-neon-blue shadow-[0_0_8px_rgba(0,240,255,0.8)]' 
                : 'w-2.5 bg-slate-700 hover:bg-slate-600'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
