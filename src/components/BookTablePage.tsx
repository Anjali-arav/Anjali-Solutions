import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, Clock, MessageSquare, Phone, User, CheckCircle2, ShieldAlert } from 'lucide-react';
import { TableBooking } from '../types';

export default function BookTablePage() {
  const [formData, setFormData] = useState<TableBooking>({
    customerName: '',
    phone: '',
    guests: 2,
    date: '',
    time: '19:30',
    specialRequest: ''
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

  const handleReset = () => {
    setFormData({
      customerName: '',
      phone: '',
      guests: 2,
      date: '',
      time: '19:30',
      specialRequest: ''
    });
    setIsSuccess(false);
  };

  return (
    <div className="py-20 bg-cream-bg min-h-screen relative overflow-hidden" id="book-table-page-container">
      {/* Decorative Warm Backdrops */}
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-gold-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-appetite-orange/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-gold-accent/10 border border-gold-accent/25 text-gold-accent text-xs font-semibold tracking-widest uppercase mb-4">
            Secured Reservations
          </div>
          <h1 className="font-display text-4xl font-bold text-brand-brown tracking-tight">
            Book <span className="text-gold-accent">Your Table</span>
          </h1>
          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Reserve your luxury dining session in Jubilee Hills. Select your details and let our chefs prepare for your unique gastronomic arrival.
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-white rounded-3xl border border-brand-brown/5 shadow-lg overflow-hidden relative" id="table-reservation-container">
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-gold-accent to-appetite-orange" />
          
          {!isSuccess ? (
            <div className="p-6 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6" id="table-booking-form">
                
                {/* Name & Phone Group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Customer Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-brown mb-2">
                      Customer Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                        <User size={16} />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.customerName}
                        onChange={e => setFormData({ ...formData, customerName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-cream-bg/40 border border-slate-200 rounded-xl text-brand-brown placeholder-slate-400 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all text-sm font-medium"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-brown mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                        <Phone size={16} />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="+91 89194 49475"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-cream-bg/40 border border-slate-200 rounded-xl text-brand-brown placeholder-slate-400 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all text-sm font-medium"
                      />
                    </div>
                  </div>
                </div>

                {/* Guests, Date & Time Group */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Number of Guests */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-brown mb-2">
                      Number of Guests
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                        <Users size={16} />
                      </div>
                      <select
                        value={formData.guests}
                        onChange={e => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                        className="w-full pl-10 pr-4 py-3 bg-cream-bg/40 border border-slate-200 rounded-xl text-brand-brown focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all text-sm font-medium appearance-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map(num => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-brown mb-2">
                      Date of Arrival
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
                        className="w-full pl-10 pr-4 py-3 bg-cream-bg/40 border border-slate-200 rounded-xl text-brand-brown focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all text-sm font-medium"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-brown mb-2">
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                        <Clock size={16} />
                      </div>
                      <select
                        value={formData.time}
                        onChange={e => setFormData({ ...formData, time: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-cream-bg/40 border border-slate-200 rounded-xl text-brand-brown focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all text-sm font-medium appearance-none"
                      >
                        {[
                          '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
                          '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
                        ].map(t => {
                          const hour = parseInt(t.split(':')[0]);
                          const ampm = hour >= 12 ? 'PM' : 'AM';
                          const dispHour = hour > 12 ? hour - 12 : hour;
                          const dispTime = `${dispHour}:${t.split(':')[1]} ${ampm}`;
                          return (
                            <option key={t} value={t}>
                              {dispTime}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Special Request */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-brown mb-2">
                    Special Request (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none text-slate-400">
                      <MessageSquare size={16} />
                    </div>
                    <textarea
                      rows={3}
                      placeholder="E.g. Table near the window, celebrating anniversary, food allergy notices..."
                      value={formData.specialRequest}
                      onChange={e => setFormData({ ...formData, specialRequest: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-cream-bg/40 border border-slate-200 rounded-xl text-brand-brown placeholder-slate-400 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all text-sm font-medium resize-none"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 bg-gradient-to-r from-gold-accent to-appetite-orange hover:from-appetite-orange hover:to-gold-accent text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Securing Spot...
                    </>
                  ) : (
                    'Book Your Table'
                  )}
                </motion.button>
              </form>

              {/* Secure Notice */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-slate-400 text-xs font-medium justify-center">
                <ShieldAlert size={14} className="text-gold-accent" />
                <span>Immediate digital confirmation. Cancel or reschedule anytime.</span>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 sm:p-12 text-center flex flex-col items-center justify-center"
              id="table-booking-success"
            >
              <div className="rounded-full bg-soft-green-bg p-4 text-soft-green mb-5 shadow-sm">
                <CheckCircle2 size={52} className="animate-bounce" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-brown mb-2">
                Table Reserved Successfully!
              </h3>
              <p className="text-sm text-slate-600 max-w-lg mb-8 leading-relaxed">
                Thank you, <span className="text-brand-brown font-semibold">{formData.customerName}</span>. 
                Your table for <span className="text-gold-accent font-semibold">{formData.guests} guests</span> on <span className="text-brand-brown font-semibold">{formData.date}</span> at <span className="text-brand-brown font-semibold">{formData.time}</span> is fully blocked. 
                We have registered your details under <span className="text-gold-accent font-medium">{formData.phone}</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleReset}
                  className="bg-brand-brown text-white hover:bg-brand-brown-light font-semibold py-2.5 px-6 rounded-xl transition-all text-sm"
                >
                  Book Another Table
                </button>
                <button
                  onClick={() => {
                    const text = encodeURIComponent(`Hi! I just booked a table for ${formData.customerName} (${formData.guests} guests) on ${formData.date} at ${formData.time}. Requesting further confirmation!`);
                    window.open(`https://wa.me/918919449475?text=${text}`, '_blank');
                  }}
                  className="bg-soft-green hover:bg-soft-green/90 text-white font-semibold py-2.5 px-6 rounded-xl transition-all text-sm flex items-center justify-center gap-2"
                >
                  <MessageSquare size={14} className="fill-current text-white" />
                  Confirm on WhatsApp
                </button>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </div>
  );
}
