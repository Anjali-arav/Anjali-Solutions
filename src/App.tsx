import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, ArrowRight, Award, UtensilsCrossed, Star } from 'lucide-react';

// Import Components
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import ProjectsPage from './components/ProjectsPage';
import AboutUsPage from './components/AboutUsPage';
import BookTablePage from './components/BookTablePage';
import ContactUsPage from './components/ContactUsPage';
import Footer from './components/Footer';
import CallRequestModal from './components/CallRequestModal';

export default function App() {
  const [currentTab, setTab] = useState<string>('home');
  const [isCallRequestOpen, setIsCallRequestOpen] = useState<boolean>(false);

  const restaurantPhoneRaw = '918919449475';
  const restaurantPhoneFormatted = '+91 89194 49475';

  const handleOpenCallRequest = () => {
    setIsCallRequestOpen(true);
  };

  const handleFloatingWhatsApp = () => {
    const text = encodeURIComponent("Hello The Daily Craving, I am visiting your website and would like to ask a few questions regarding reservations and menus!");
    window.open(`https://wa.me/${restaurantPhoneRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-cream-bg selection:bg-gold-accent selection:text-white font-sans" id="app-root">
      
      {/* Decorative Top Accent Overlay */}
      <div className="absolute inset-x-0 top-0 h-[1000px] bg-[radial-gradient(ellipse_at_top,rgba(217,119,6,0.08),transparent_60%)] pointer-events-none z-0" />

      {/* Sticky Translucent Header */}
      <Navbar
        currentTab={currentTab}
        setTab={setTab}
        onOpenCallRequest={handleOpenCallRequest}
      />

      {/* Main Multi-Page Content Handler */}
      <main className="relative z-10" id="main-content-flow">
        <AnimatePresence mode="wait">
          {currentTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              id="home-view"
            >
              {/* 2-Slide Hero Slider */}
              <HeroSlider setTab={setTab} />

              {/* About Us Segment */}
              <AboutUsPage />

              {/* Today Specials Preview (ServicesSection) */}
              <ServicesSection />

              {/* Why Choose Us Section with Animated Counters */}
              <WhyChooseUs />

              {/* Premium Experience Callout */}
              <section className="py-16 bg-cream-bg" id="experience-callout">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-[#2A1A14] text-white rounded-3xl p-8 md:p-12 shadow-xl border border-white/5 relative overflow-hidden">
                    {/* Corner decorative light */}
                    <div className="absolute top-0 left-0 h-1.5 w-48 bg-gradient-to-r from-gold-accent to-appetite-orange" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                      <div className="lg:col-span-8 space-y-4">
                        <div className="inline-flex items-center gap-1.5 text-gold-accent text-xs font-semibold uppercase tracking-wider">
                          <Star size={14} className="fill-gold-accent" />
                          Experience Pure Culinary Artistry
                        </div>
                        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                          Savor Unforgettable Tastes In <span className="text-gold-accent">Hyderabad</span>
                        </h2>
                        <p className="text-cream-dark/90 text-sm sm:text-base leading-relaxed font-light">
                          Our dishes are handcrafted with immense detail and love. From the sizzling spices of our slow-cooked claypot mutton biryani to the sweet decadence of our molten Belgian chocolate, we bring you culinary perfection.
                        </p>
                      </div>

                      <div className="lg:col-span-4 flex justify-start lg:justify-end">
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => {
                            setTab('foods');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="px-8 py-4 bg-gold-accent hover:bg-gold-accent-hover text-white font-bold rounded-2xl transition-all text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
                          id="home-view-menu-btn"
                        >
                          Explore Our Menu
                          <ArrowRight size={16} />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {currentTab === 'specials' && (
            <motion.div
              key="specials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              id="specials-view"
              className="pt-12"
            >
              <ServicesSection />
            </motion.div>
          )}

          {currentTab === 'foods' && (
            <motion.div
              key="foods"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              id="foods-view"
              className="pt-12"
            >
              <ProjectsPage />
            </motion.div>
          )}

          {currentTab === 'book' && (
            <motion.div
              key="book"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              id="book-view"
              className="pt-12"
            >
              <BookTablePage />
            </motion.div>
          )}

          {currentTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              id="contact-view"
              className="pt-12"
            >
              <ContactUsPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Premium Food-Focused Footer */}
      <Footer setTab={setTab} />

      {/* Call Request Popup Modal */}
      <CallRequestModal
        isOpen={isCallRequestOpen}
        onClose={() => setIsCallRequestOpen(false)}
      />

      {/* Floating Action Elements (Call Now & WhatsApp) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3" id="floating-actions">
        
        {/* Floating Call Now Button */}
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          href={`tel:${restaurantPhoneRaw}`}
          className="h-12 w-12 rounded-full bg-gold-accent hover:bg-gold-accent-hover text-white flex items-center justify-center shadow-lg transition-all border border-white/10"
          title="Call The Daily Craving"
          id="floating-call-now"
        >
          <Phone size={18} />
        </motion.a>

        {/* Floating WhatsApp Chat Widget */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={handleFloatingWhatsApp}
          className="h-12 w-12 rounded-full bg-soft-green hover:bg-soft-green/90 text-white flex items-center justify-center shadow-lg transition-all relative group cursor-pointer border border-white/10"
          title="Direct WhatsApp Chat"
          id="floating-whatsapp-widget"
        >
          {/* Ripple pulse wave animation */}
          <span className="absolute inset-0 rounded-full bg-soft-green opacity-25 group-hover:animate-ping" />
          <MessageSquare size={18} className="relative z-10 fill-current text-white" />
        </motion.button>
      </div>

    </div>
  );
}
