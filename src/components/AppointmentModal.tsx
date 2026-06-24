import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Phone, Mail, User, Briefcase, MessageSquare, CheckCircle, Clock } from 'lucide-react';
import { AppointmentFormInput } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const SERVICES_LIST = [
  'Website Development',
  'Digital Marketing',
  'UI/UX Design',
  'Mobile App Development',
  'Software Solutions',
  'Business Consulting'
];

export default function AppointmentModal({ isOpen, onClose, defaultService = '' }: AppointmentModalProps) {
  const [formData, setFormData] = useState<AppointmentFormInput>({
    fullName: '',
    phone: '',
    email: '',
    service: defaultService || SERVICES_LIST[0],
    date: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync default service when modal opens or defaultService changes
  React.useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, service: defaultService }));
    }
  }, [defaultService, isOpen]);

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
      fullName: '',
      phone: '',
      email: '',
      service: SERVICES_LIST[0],
      date: '',
      message: ''
    });
    setIsSuccess(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-[rgba(0,240,255,0.15)] bg-[#0a0f1d] p-6 shadow-2xl md:p-8 z-10"
            id="appointment-modal-container"
          >
            {/* Background Accent Glow */}
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[rgba(0,240,255,0.08)] blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              id="close-appointment-btn"
              className="absolute right-4 top-4 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-800 hover:text-neon-blue"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {!isSuccess ? (
              <>
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold text-white tracking-wide flex items-center gap-2">
                    <Clock className="text-neon-blue animate-pulse" size={24} />
                    Book <span className="text-neon-blue">Appointment</span>
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-400">
                    Schedule a professional consultation session with our technical experts.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" id="appointment-form">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-900/60 border border-slate-700/70 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500">
                          <Phone size={16} />
                        </div>
                        <input
                          type="tel"
                          required
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-900/60 border border-slate-700/70 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all text-sm"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500">
                          <Mail size={16} />
                        </div>
                        <input
                          type="email"
                          required
                          placeholder="johndoe@gmail.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-900/60 border border-slate-700/70 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Select Service */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Select Service
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500">
                          <Briefcase size={16} />
                        </div>
                        <select
                          value={formData.service}
                          onChange={e => setFormData({ ...formData, service: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 bg-[#0e1324] border border-slate-700/70 rounded-xl text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all text-sm appearance-none"
                        >
                          {SERVICES_LIST.map(srv => (
                            <option key={srv} value={srv} className="bg-[#0e1324] text-white">
                              {srv}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500">
                          <Calendar size={16} />
                        </div>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={e => setFormData({ ...formData, date: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-900/60 border border-slate-700/70 rounded-xl text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Message / Requirements
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none text-slate-500">
                        <MessageSquare size={16} />
                      </div>
                      <textarea
                        rows={3}
                        placeholder="Tell us briefly about your project goals..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-900/60 border border-slate-700/70 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all text-sm resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 bg-gradient-to-r from-neon-blue to-cyan-500 hover:from-cyan-400 hover:to-neon-blue text-slate-950 font-bold py-3 px-6 rounded-xl transition-all shadow-[0_0_15px_rgba(0,240,255,0.25)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Schedule Consultation Now'
                    )}
                  </motion.button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center flex flex-col items-center justify-center"
                id="appointment-success"
              >
                <div className="rounded-full bg-neon-blue/10 p-4 text-neon-blue mb-4 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
                  <CheckCircle size={48} className="animate-bounce" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Booking Confirmed!
                </h3>
                <p className="text-sm text-slate-400 max-w-sm mb-6">
                  Thank you, <span className="text-white font-medium">{formData.fullName}</span>. 
                  Our team has received your appointment request for <span className="text-neon-blue">{formData.service}</span> on <span className="text-neon-blue">{formData.date}</span>. We will call you back shortly!
                </p>
                <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800 text-left w-full max-w-md space-y-2 text-xs text-slate-400 mb-6">
                  <div><span className="text-slate-500">Contact Number:</span> <span className="text-white">{formData.phone}</span></div>
                  <div><span className="text-slate-500">Registered Email:</span> <span className="text-white">{formData.email}</span></div>
                  <div><span className="text-slate-500">Your Inquiry Code:</span> <span className="text-neon-blue font-mono">AS-{Math.floor(100000 + Math.random() * 900000)}</span></div>
                </div>
                <button
                  onClick={handleClose}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2 px-6 rounded-xl transition-all"
                >
                  Done
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
