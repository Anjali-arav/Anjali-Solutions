import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, PhoneCall, CheckCircle2, Calendar, User, Mail, MessageSquare } from 'lucide-react';
import { CallRequest } from '../types';

interface CallRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallRequestModal({ isOpen, onClose }: CallRequestModalProps) {
  const [formData, setFormData] = useState<CallRequest>({
    name: '',
    phone: '',
    email: '',
    date: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleClose = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      message: ''
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with elegant glass blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-brand-brown/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-brand-brown/10 bg-white p-6 shadow-2xl md:p-8 z-10"
            id="call-request-modal"
          >
            {/* Top golden indicator line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-gold-accent to-appetite-orange" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-brand-brown transition-colors cursor-pointer"
              aria-label="Close modal"
              id="close-call-modal-btn"
            >
              <X size={20} />
            </button>

            {!isSuccess ? (
              <>
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-gold-accent/10 text-gold-accent flex items-center justify-center">
                    <PhoneCall size={22} className="animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-brand-brown leading-none">
                      Request <span className="text-gold-accent">Call Back</span>
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-500 font-light">
                      Please supply your info and we will phone you back to discuss reservations, menus, or custom events.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" id="call-request-form">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-brown mb-1.5">
                      Your Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                        <User size={16} />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-cream-bg/40 border border-slate-200 rounded-xl text-brand-brown placeholder-slate-400 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Phone & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-brown mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-cream-bg/40 border border-slate-200 rounded-xl text-brand-brown placeholder-slate-400 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-brown mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                          <Mail size={14} />
                        </div>
                        <input
                          type="email"
                          required
                          placeholder="johndoe@gmail.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 bg-cream-bg/40 border border-slate-200 rounded-xl text-brand-brown placeholder-slate-400 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-brown mb-1.5">
                      Preferred Callback Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                        <Calendar size={16} />
                      </div>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-cream-bg/40 border border-slate-200 rounded-xl text-brand-brown focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-brown mb-1.5">
                      Short Inquiry
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none text-slate-400">
                        <MessageSquare size={16} />
                      </div>
                      <textarea
                        rows={3}
                        placeholder="Let us know what you would like to discuss (table bookings, menu items, private party)..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-cream-bg/40 border border-slate-200 rounded-xl text-brand-brown placeholder-slate-400 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all text-sm resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit button */}
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 bg-gradient-to-r from-gold-accent to-appetite-orange hover:from-appetite-orange hover:to-gold-accent text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      'Request Call Back'
                    )}
                  </motion.button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center flex flex-col items-center justify-center"
                id="call-request-success"
              >
                <div className="rounded-full bg-soft-green-bg p-4 text-soft-green mb-4 shadow-sm">
                  <CheckCircle2 size={48} className="animate-bounce" />
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-brown mb-2">
                  Inquiry Dispatched!
                </h3>
                <p className="text-sm text-slate-600 max-w-sm mb-6 leading-relaxed">
                  Thank you, <span className="text-brand-brown font-semibold">{formData.name}</span>. 
                  We have logged your callback request. A dining representative from **The Daily Craving** will contact you shortly at <span className="text-gold-accent font-medium">{formData.phone}</span>.
                </p>
                <button
                  onClick={handleClose}
                  className="bg-brand-brown text-white hover:bg-brand-brown-light font-semibold py-2 px-6 rounded-xl transition-all"
                >
                  Return to Menu
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
