import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, Clock, Map } from 'lucide-react';
import { ContactFormInput } from '../types';

export default function ContactUsPage() {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const companyPhone = '+918911449475';
  const companyEmail = 'info@anjalisolutions.com';
  const companyAddress = 'Dwaraka Nagar 1st Lane, Vizag';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setIsSuccess(false);
  };

  const handleWhatsAppContact = () => {
    const text = encodeURIComponent("Hello Anjali Solutions, I would like to get in touch regarding a business solution requirement!");
    window.open(`https://wa.me/${companyPhone.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <div className="py-24 bg-[#060913] min-h-screen relative overflow-hidden" id="contact-us-page-container">
      {/* Decorative Lights */}
      <div className="absolute top-1/4 left-1/10 h-80 w-80 rounded-full bg-neon-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 h-80 w-80 rounded-full bg-indigo-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-neon-blue/15 border border-neon-blue/30 text-neon-blue text-xs font-mono tracking-widest uppercase mb-4">
            Connect with us
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Contact <span className="text-neon-blue neon-glow-text">Our Experts</span>
          </h1>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Have a project concept or business query? Send us a message or contact us directly on WhatsApp. Our Dwaraka Nagar team is ready to respond.
          </p>
        </div>

        {/* Contact Page Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Contact info & Google Map (5 Columns) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-white">
                Contact <span className="text-neon-blue">Information</span>
              </h2>

              <div className="space-y-4">
                {/* Company Name / Logo */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center text-neon-blue">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-xs font-mono uppercase">Company Address</h4>
                    <p className="text-white text-sm font-semibold">{companyAddress}</p>
                    <p className="text-slate-500 text-[11px]">Dwaraka Nagar 1st Lane, Vizag, AP, India</p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center text-neon-blue">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-xs font-mono uppercase">Call Support</h4>
                    <a href={`tel:${companyPhone}`} className="text-white hover:text-neon-blue transition-colors text-sm font-semibold block">
                      {companyPhone}
                    </a>
                    <span className="text-slate-500 text-[11px]">Mon - Sat (9:00 AM - 7:00 PM)</span>
                  </div>
                </div>

                {/* Email Address */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center text-neon-blue">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-xs font-mono uppercase">Official Email</h4>
                    <a href={`mailto:${companyEmail}`} className="text-white hover:text-neon-blue transition-colors text-sm font-semibold block">
                      {companyEmail}
                    </a>
                    <span className="text-slate-500 text-[11px]">Fast response within 12 hours</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <button
                onClick={handleWhatsAppContact}
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                id="contact-whatsapp-btn"
              >
                <MessageSquare className="fill-current" size={18} />
                WhatsApp Direct Chat
              </button>
            </div>

            {/* Quick response note */}
            <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/80 text-xs text-slate-400 flex items-center gap-3">
              <Clock className="text-neon-blue shrink-0 animate-pulse" size={16} />
              <span>We value your time. All forms submitted are logged and assigned to a consultant within 15 minutes.</span>
            </div>
          </div>

          {/* Column 2: Interactive Contact Form (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden" id="contact-form-container">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-neon-blue to-indigo-600" />
              
              {!isSuccess ? (
                <>
                  <div className="mb-6">
                    <h2 className="font-display text-2xl font-bold text-white flex items-center gap-2">
                      Send <span className="text-neon-blue">Inquiry Message</span>
                    </h2>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1.5">
                      Submit your project blueprints, and we will prepare a complimentary quote for your evaluation.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4" id="contact-page-form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-900/60 border border-slate-700/70 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all text-sm"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="email@example.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-900/60 border border-slate-700/70 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all text-sm"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-900/60 border border-slate-700/70 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all text-sm"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Brief Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Please describe your software, web design, or digital optimization goals..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-900/60 border border-slate-700/70 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all text-sm resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-neon-blue to-cyan-500 hover:from-cyan-400 hover:to-neon-blue text-slate-950 font-bold py-3.5 px-6 rounded-xl transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center flex flex-col items-center justify-center"
                >
                  <div className="rounded-full bg-neon-blue/10 p-4 text-neon-blue mb-4 shadow-[0_0_15px_rgba(0,240,255,0.15)] animate-bounce">
                    <CheckCircle2 size={44} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Message Dispatched!</h3>
                  <p className="text-slate-300 text-sm max-w-sm mb-6 leading-relaxed">
                    Thank you <span className="text-white font-medium">{formData.name}</span>! Our consulting wing in Dwaraka Nagar has logged your message. We will reach out to you within 1-2 hours.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </div>
          </div>

        </div>

        {/* Google Maps Section showing Vizag location */}
        <div className="space-y-6" id="google-maps-section">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-neon-blue/10 text-neon-blue border border-neon-blue/20">
              <Map size={18} />
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              Our Dwaraka Nagar <span className="text-neon-blue">Location</span>
            </h3>
          </div>

          <div className="w-full h-96 rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950 shadow-2xl relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.5891410948956!2d83.3005886!3d17.7214917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39433e5c9a0af1%3A0x6b6fa38b1d9bfcf0!2sDwaraka%20Nagar%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              title="Anjali Solutions Location Map in Vizag"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.95)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
