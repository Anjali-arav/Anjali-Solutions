import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Star, ChevronRight, Clock, MapPin } from 'lucide-react';

interface HeroSliderProps {
  setTab: (tab: string) => void;
}

export default function HeroSlider({ setTab }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Delicious Moments Start Here',
      description: 'Experience fresh, tasty and unforgettable dishes crafted with passion by Hyderabad’s premier culinary team.',
      btn1Text: 'Explore Foods',
      btn1Tab: 'foods',
      btn2Text: 'Book Table',
      btn2Tab: 'book',
      imageUrl: '/src/assets/images/hero_food_slide_1_1782359496053.jpg',
      badge: 'Fine Dining Destination',
      highlight: 'Delicious Moments'
    },
    {
      id: 2,
      title: 'Your Daily Dose of Happiness',
      description: 'Fresh ingredients, amazing flavors, and a perfect luxurious dining experience located in Jubilee Hills.',
      btn1Text: 'Today Specials',
      btn1Tab: 'specials',
      btn2Text: 'Contact Us',
      btn2Tab: 'contact',
      imageUrl: '/src/assets/images/hero_dining_slide_2_1782359510444.jpg',
      badge: 'Luxurious Atmosphere',
      highlight: 'Daily Dose'
    }
  ];

  // Auto-play slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide(prev => (prev === 0 ? 1 : 0));
  };

  const handlePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? 1 : 0));
  };

  const navigateToTab = (tab: string) => {
    setTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-[88vh] min-h-[550px] lg:h-[92vh] bg-[#1a0f0a] overflow-hidden flex items-center" id="hero-slider-section">
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.65, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].imageUrl})` }}
          />
        </AnimatePresence>
        {/* Deep luxurious vignette mask */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown/95 via-brand-brown/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a] via-transparent to-transparent z-10" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 w-full pt-16">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold-accent/15 border border-gold-accent/30 text-gold-accent text-xs font-semibold tracking-wider uppercase mb-5">
                <Star size={12} className="fill-gold-accent" />
                {slides[currentSlide].badge}
              </div>

              {/* Title with Serif font */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-5">
                {slides[currentSlide].title.includes(slides[currentSlide].highlight) ? (
                  <>
                    {slides[currentSlide].title.split(slides[currentSlide].highlight)[0]}
                    <span className="text-gold-accent italic font-normal">
                      {slides[currentSlide].highlight}
                    </span>
                    {slides[currentSlide].title.split(slides[currentSlide].highlight)[1]}
                  </>
                ) : (
                  slides[currentSlide].title
                )}
              </h1>

              {/* Description */}
              <p className="text-cream-dark/90 text-base sm:text-lg lg:text-xl font-light mb-8 leading-relaxed max-w-2xl">
                {slides[currentSlide].description}
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigateToTab(slides[currentSlide].btn1Tab)}
                  className="bg-gradient-to-r from-gold-accent to-appetite-orange hover:from-appetite-orange hover:to-gold-accent text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  {slides[currentSlide].btn1Text}
                  <ChevronRight size={18} />
                </motion.button>
                
                <button
                  onClick={() => navigateToTab(slides[currentSlide].btn2Tab)}
                  className="border border-white/20 hover:border-gold-accent hover:bg-gold-accent/10 text-white font-semibold py-3.5 px-8 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer bg-white/5 backdrop-blur-sm text-sm sm:text-base"
                >
                  {slides[currentSlide].btn2Text}
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-3 text-cream-dark/70 text-xs">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-gold-accent" />
                  Open Daily: 11:00 AM - 11:30 PM
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-gold-accent" />
                  Jubilee Hills, Hyderabad
                </div>
                <div className="flex items-center gap-2">
                  <Star size={14} className="text-gold-accent fill-gold-accent" />
                  4.8+ Google Rating
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
          className="h-10 w-10 rounded-xl border border-white/10 bg-brand-brown/40 backdrop-blur-sm text-white/70 hover:text-gold-accent hover:border-gold-accent/50 transition-all flex items-center justify-center cursor-pointer"
          aria-label="Previous slide"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          onClick={handleNext}
          className="h-10 w-10 rounded-xl border border-white/10 bg-brand-brown/40 backdrop-blur-sm text-white/70 hover:text-gold-accent hover:border-gold-accent/50 transition-all flex items-center justify-center cursor-pointer"
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
                ? 'w-8 bg-gold-accent' 
                : 'w-2.5 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
