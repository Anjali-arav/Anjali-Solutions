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

  const restaurantPhone = '+91 8919449475';
  const rawPhone = '918919449475';
  const restaurantEmail = 'info@thedailycraving.com';
  const restaurantAddress = 'Road No-12, Jubilee Hills, Hyderabad';

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
    const text = encodeURIComponent("Hello The Daily Craving, I would like to get in touch regarding a table reservation, private event, or menu inquiry!");
    window.open(`https://wa.me/${rawPhone}?text=${text}`, '_blank');
  };

  return (
    <div className="py-20 bg-cream-bg min-h-screen relative overflow-hidden" id="contact-us-page-container">
      {/* Decorative Warm Backdrops */}
      <div className="absolute top-1/4 left-1/10 h-80 w-80 rounded-full bg-gold-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 h-80 w-80 rounded-full bg-appetite-orange/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-gold-accent/10 border border-gold-accent/25 text-gold-accent text-xs font-semibold tracking-widest uppercase mb-4">
            Connect with us
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-brand-brown tracking-tight leading-tight">
            Contact <span className="text-gold-accent">The Daily Craving</span>
          </h1>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Ready to experience unforgettable gastronomy? Send us an inquiry, give us a call, or drop a message on WhatsApp. Our Jubilee Hills team is at your absolute service.
          </p>
        </div>

        {/* Contact Page Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Contact info (5 Columns) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-brand-brown">
                Location & <span className="text-gold-accent">Reservations</span>
              </h2>

              <div className="space-y-4">
                {/* Address */}
                <div className="p-4 rounded-2xl bg-white border border-brand-brown/5 shadow-sm flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-gold-accent/10 flex items-center justify-center text-gold-accent">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Restaurant Address</h4>
                    <p className="text-brand-brown text-sm font-semibold mt-0.5">{restaurantAddress}</p>
                    <p className="text-slate-500 text-[11px]">Jubilee Hills, Hyderabad, TS, India</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-white border border-brand-brown/5 shadow-sm flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-gold-accent/10 flex items-center justify-center text-gold-accent">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Call Hotline</h4>
                    <a href={`tel:${rawPhone}`} className="text-brand-brown hover:text-gold-accent transition-colors text-sm font-semibold block mt-0.5">
                      {restaurantPhone}
                    </a>
                    <span className="text-slate-500 text-[11px]">Open Daily (11:00 AM - 11:30 PM)</span>
                  </div>
                </div>

                {/* Email Address */}
                <div className="p-4 rounded-2xl bg-white border border-brand-brown/5 shadow-sm flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-gold-accent/10 flex items-center justify-center text-gold-accent">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">General Inquiry Email</h4>
                    <a href={`mailto:${restaurantEmail}`} className="text-brand-brown hover:text-gold-accent transition-colors text-sm font-semibold block mt-0.5">
                      {restaurantEmail}
                    </a>
                    <span className="text-slate-500 text-[11px]">We reply within a couple of hours</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <button
                onClick={handleWhatsAppContact}
                className="w-full py-3.5 px-6 rounded-xl bg-soft-green hover:bg-soft-green/90 text-white font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                id="contact-whatsapp-btn"
              >
                <MessageSquare className="fill-current text-white" size={18} />
                Message Us on WhatsApp
              </button>
            </div>

            {/* Quick response note */}
            <div className="p-4 bg-white/60 rounded-2xl border border-brand-brown/5 text-xs text-slate-500 flex items-center gap-3">
              <Clock className="text-gold-accent shrink-0 animate-pulse" size={16} />
              <span>Table reservation inquiries submitted online are verified by our front desk within 10 minutes.</span>
            </div>
          </div>

          {/* Column 2: Interactive Contact Form (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-brand-brown/5 shadow-sm relative overflow-hidden" id="contact-form-container">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-gold-accent to-appetite-orange" />
              
              {!isSuccess ? (
                <>
                  <div className="mb-6">
                    <h2 className="font-display text-2xl font-bold text-brand-brown flex items-center gap-2">
                      Send Us <span className="text-gold-accent">A Message</span>
                    </h2>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1.5">
                      Have a catering request or private booking query? Drop us a line.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4" id="contact-page-form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-brown mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="E.g. John Doe"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 bg-cream-bg/40 border border-slate-200 rounded-xl text-brand-brown placeholder-slate-400 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all text-sm"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-brown mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="E.g. john@example.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 bg-cream-bg/40 border border-slate-200 rounded-xl text-brand-brown placeholder-slate-400 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all text-sm"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-brown mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="E.g. +91 89194 49475"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-cream-bg/40 border border-slate-200 rounded-xl text-brand-brown placeholder-slate-400 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all text-sm"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-brown mb-1.5">
                        Your Inquiry Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Please elaborate on your request (dates, size of gathering, menu customisations)..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 bg-cream-bg/40 border border-slate-200 rounded-xl text-brand-brown placeholder-slate-400 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all text-sm resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-gold-accent to-appetite-orange hover:from-appetite-orange hover:to-gold-accent text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Inquiry Message
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
                  <div className="rounded-full bg-soft-green-bg p-4 text-soft-green mb-4 shadow-sm animate-bounce">
                    <CheckCircle2 size={44} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-brown mb-2">Inquiry Transmitted!</h3>
                  <p className="text-slate-600 text-sm max-w-sm mb-6 leading-relaxed">
                    Thank you, <span className="text-brand-brown font-semibold">{formData.name}</span>. Our Jubilee Hills management desk has registered your message. We will reach back to you shortly.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 bg-brand-brown hover:bg-brand-brown-light text-white font-semibold rounded-xl transition-all"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </div>
          </div>

        </div>

        {/* Google Maps Section showing Hyderabad Jubilee Hills location */}
        <div className="space-y-6" id="google-maps-section">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gold-accent/10 text-gold-accent border border-gold-accent/20">
              <Map size={18} />
            </div>
            <h3 className="font-display text-xl font-bold text-brand-brown">
              Our Jubilee Hills <span className="text-gold-accent">Location Map</span>
            </h3>
          </div>

          <div className="w-full h-96 rounded-3xl overflow-hidden border border-brand-brown/10 bg-white shadow-md relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6631892864317!2d78.3970221!3d17.4285191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913508eb675f%3A0xc6cb5a6f236058be!2sRoad%20No.%2012%2C%20Jubilee%20Hills%2C%20Hyderabad%2C%20Telangana%20500033!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              title="The Daily Craving Location Map in Jubilee Hills Hyderabad"
              width="100%"
              height="100%"
              style={{ border: 0 }}
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
