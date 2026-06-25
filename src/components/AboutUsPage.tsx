import React from 'react';
import { motion } from 'motion/react';
import { ChefHat, Trophy, Salad, Heart, Check, Sparkles } from 'lucide-react';

export default function AboutUsPage() {
  const pillars = [
    {
      icon: <ChefHat size={24} className="text-gold-accent" />,
      title: 'Master Culinary Team',
      desc: 'Our kitchen is directed by Michelin-inspired local chefs with a passion for modern gastronomy and traditional Indian heritage.'
    },
    {
      icon: <Salad size={24} className="text-gold-accent" />,
      title: 'Pristine Local Ingredients',
      desc: 'We procure 100% organic, seasonal herbs, cold-pressed oils, and top-tier proteins daily from local Hyderabad growers.'
    },
    {
      icon: <Sparkles size={24} className="text-gold-accent" />,
      title: 'Luxurious Ambiance',
      desc: 'Every corner of our Jubilee Hills dining salon features bespoke acoustics, elegant lighting, and rich leather finishes.'
    },
    {
      icon: <Heart size={24} className="text-gold-accent" />,
      title: 'Hospitality First',
      desc: 'We treat every diner as a member of our family, crafting personalized culinary experiences and bespoke table consultations.'
    }
  ];

  return (
    <div className="py-20 bg-cream-bg min-h-screen relative overflow-hidden" id="about-us-page-container">
      {/* Decorative Warm Backdrops */}
      <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-gold-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-appetite-orange/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-gold-accent/10 border border-gold-accent/25 text-gold-accent text-xs font-semibold tracking-widest uppercase mb-4">
            Our Legacy & Story
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-brand-brown tracking-tight leading-tight">
            About <span className="text-gold-accent">The Daily Craving</span>
          </h1>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Nestled in Road No-12, Jubilee Hills, Hyderabad, we represent a modern culinary sanctuary where exquisite flavors, masterly techniques, and comfortable fine-dining unite.
          </p>
        </div>

        {/* Introductory Row (Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold text-soft-green uppercase bg-soft-green-bg px-3 py-1 rounded-full">
              <Trophy size={14} />
              Culinary Milestone Achieved
            </div>
            
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-brown tracking-wide leading-snug">
              A Luxurious Sanctuary For <span className="text-gold-accent">Gourmet Admirers</span>
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-light">
              Founded over a year ago, **The Daily Craving** has established itself as the crown jewel of Hyderabad’s active dining scene. We focus strictly on clean gastronomy, elegant table-side presentations, and a rich blend of Indian, Italian, and global dishes.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              We specialize in creating delightful gastronomic moments. Whether you are hosting a high-powered corporate dinner, sharing a candlelit anniversary, or having an adventurous weekend tasting menu with friends, we welcome you with warmth and attention to detail.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-brand-brown/5 shadow-sm flex items-center gap-3">
                <div className="text-2xl font-bold text-gold-accent font-display">100%</div>
                <div>
                  <h4 className="text-brand-brown text-xs font-bold uppercase tracking-wider">Fresh Food</h4>
                  <p className="text-[10px] text-slate-400">Zero preservatives</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-brand-brown/5 shadow-sm flex items-center gap-3">
                <div className="text-2xl font-bold text-gold-accent font-display">15+</div>
                <div>
                  <h4 className="text-brand-brown text-xs font-bold uppercase tracking-wider">Signature Dishes</h4>
                  <p className="text-[10px] text-slate-400">Chef exclusive recipes</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Restaurant interior image with gold 1+ year experience badge */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative group flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden border border-brand-brown/5 bg-white shadow-xl max-w-lg">
              <img
                src="/src/assets/images/hero_dining_slide_2_1782359510444.jpg"
                alt="The Daily Craving Dining Salon, Jubilee Hills Hyderabad"
                referrerPolicy="no-referrer"
                className="w-full object-cover aspect-4/3"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/40 via-transparent to-transparent" />
              
              {/* 1+ Years Experience Badge */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 bg-gradient-to-r from-brand-brown to-brand-brown-light border border-gold-accent/40 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3"
              >
                <div className="h-12 w-12 rounded-xl bg-gold-accent text-brand-brown flex flex-col items-center justify-center font-bold font-display">
                  <span className="text-base leading-none">1+</span>
                  <span className="text-[9px] leading-none uppercase">Year</span>
                </div>
                <div>
                  <h4 className="text-gold-accent text-xs font-bold uppercase tracking-wider">Exquisite Service</h4>
                  <p className="text-[10px] text-cream-dark/90 font-light">Of Culinary Legacy</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Pillars of Quality Grid */}
        <div className="space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-gold-accent/10 text-gold-accent text-xs font-semibold uppercase mb-3">
              Our Core Philosophy
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-brown tracking-wide">
              The Standards of <span className="text-gold-accent">The Daily Craving</span>
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
              We never cut corners. Every service, plate, and ingredient follows an uncompromised path of culinary perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="quality-pillars-grid">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-brand-brown/5 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-xl bg-gold-accent/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>
                <h4 className="font-display text-lg font-bold text-brand-brown mb-2 group-hover:text-gold-accent transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
