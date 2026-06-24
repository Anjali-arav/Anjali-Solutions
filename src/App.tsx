import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircleCode, ArrowRight, Zap, CheckCircle2, ChevronRight, Sparkles, Building, Globe, MessageSquare } from 'lucide-react';

// Import Types
import { Service } from './types';

// Import Components
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import ProjectsPage from './components/ProjectsPage';
import AboutUsPage from './components/AboutUsPage';
import ContactUsPage from './components/ContactUsPage';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';

export default function App() {
  const [currentTab, setTab] = useState<string>('home');
  const [isAppointmentOpen, setIsAppointmentOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const companyPhone = '+918911449475';

  const handleOpenAppointment = () => {
    setSelectedService('');
    setIsAppointmentOpen(true);
  };

  const handleOpenAppointmentWithService = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsAppointmentOpen(true);
  };

  const handleFloatingWhatsApp = () => {
    const text = encodeURIComponent("Hello Anjali Solutions, I am visiting your website and would like to ask a few questions!");
    window.open(`https://wa.me/${companyPhone.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-[#060913] selection:bg-neon-blue selection:text-slate-950 font-sans" id="app-root">
      
      {/* Background Grid Accent Lines */}
      <div className="absolute inset-x-0 top-0 h-[1000px] bg-[radial-gradient(ellipse_at_top,rgba(0,240,255,0.06),transparent_60%)] pointer-events-none z-0" />

      {/* Sticky Translucent Header */}
      <Navbar
        currentTab={currentTab}
        setTab={setTab}
        onOpenAppointment={handleOpenAppointment}
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
              <HeroSlider
                onOpenAppointment={handleOpenAppointment}
                setTab={setTab}
              />

              {/* 6 Services Section */}
              <ServicesSection
                onOpenAppointmentWithService={handleOpenAppointmentWithService}
              />

              {/* Why Choose Us Section with Animated Counters */}
              <WhyChooseUs />

              {/* About Preview Section */}
              <section className="py-20 bg-[#060913] relative overflow-hidden" id="about-preview-section">
                {/* Glowing Backlight */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 h-80 w-80 rounded-full bg-neon-blue/5 blur-3xl pointer-events-none" />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="glass-panel rounded-3xl p-8 md:p-12 border border-slate-800 relative overflow-hidden">
                    {/* High tech glow accents */}
                    <div className="absolute top-0 left-0 h-1.5 w-48 bg-gradient-to-r from-neon-blue to-indigo-600" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                      <div className="lg:col-span-8 space-y-4">
                        <div className="inline-flex items-center gap-1.5 text-neon-blue text-xs font-mono uppercase tracking-widest">
                          <Building size={14} />
                          Local Presence, Elite Standards
                        </div>
                        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                          Innovative Solutions Crafted in <span className="text-neon-blue">Vizag</span>
                        </h2>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                          Anjali Solutions is a professional technology and business solutions company based in Vizag. We help businesses grow with innovative digital solutions, creative designs and advanced technology.
                        </p>
                      </div>

                      <div className="lg:col-span-4 flex justify-start lg:justify-end">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            setTab('about');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="px-8 py-4 bg-slate-900 hover:bg-neon-blue hover:text-slate-950 text-white font-bold rounded-2xl border border-slate-800 hover:border-transparent transition-all text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-black/40"
                          id="about-preview-read-more"
                        >
                          Read More About Us
                          <ArrowRight size={16} />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {currentTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              id="about-view"
            >
              <AboutUsPage />
            </motion.div>
          )}

          {currentTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              id="projects-view"
            >
              <ProjectsPage onOpenAppointment={handleOpenAppointment} />
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
            >
              <ContactUsPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Premium Corporate Footer */}
      <Footer setTab={setTab} />

      {/* Global Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        defaultService={selectedService}
      />

      {/* Floating Action Elements (Call Now & WhatsApp) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3" id="floating-actions">
        
        {/* Floating Call Now Button */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={`tel:${companyPhone}`}
          className="h-12 w-12 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center shadow-lg transition-all border border-indigo-400/20"
          title="Call Anjali Solutions"
          id="floating-call-now"
        >
          <Phone size={20} />
        </motion.a>

        {/* Floating WhatsApp Chat Widget */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleFloatingWhatsApp}
          className="h-12 w-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-lg transition-all relative group cursor-pointer border border-emerald-400/20"
          title="Direct WhatsApp Chat"
          id="floating-whatsapp-widget"
        >
          {/* Ripple pulse wave animation */}
          <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-20 group-hover:animate-ping" />
          <MessageCircleCode size={22} className="relative z-10" />
        </motion.button>
      </div>

    </div>
  );
}
