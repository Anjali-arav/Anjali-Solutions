import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Heart, Utensils, Star, Soup, CheckCircle } from 'lucide-react';

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix = '', duration = 1500 }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration, isInView]);

  return (
    <span ref={elementRef} className="font-display text-4xl sm:text-5xl font-extrabold text-gold-accent tracking-tight">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const stats = [
    {
      id: 'legacy',
      title: '1+ Year Legacy',
      value: 1,
      suffix: '+',
      description: 'Serving luxurious fine-dining gastronomy in Jubilee Hills, Hyderabad.',
      icon: Award,
      color: 'text-amber-400'
    },
    {
      id: 'recipes',
      title: 'Signature Dishes',
      value: 15,
      suffix: '+',
      description: 'Handcrafted master recipes representing exquisite tastes and textures.',
      icon: Soup,
      color: 'text-gold-accent'
    },
    {
      id: 'meals',
      title: 'Meals Served',
      value: 10000,
      suffix: '+',
      description: 'Delightful meals cooked with premium love, freshness, and strict hygiene.',
      icon: Utensils,
      color: 'text-orange-400'
    },
    {
      id: 'rating',
      title: 'Google Rating',
      value: 4.8,
      suffix: '+',
      description: 'Loved by city food critics, gastro-bloggers, and premium diners alike.',
      icon: Star,
      color: 'text-amber-400'
    },
    {
      id: 'organic',
      title: 'Farm Ingredients',
      value: 100,
      suffix: '%',
      description: 'Sourced daily from certified local sustainable organic cooperatives.',
      icon: Heart,
      color: 'text-emerald-400'
    }
  ];

  return (
    <section className="py-20 bg-brand-brown text-white relative overflow-hidden" id="why-choose-us-section">
      {/* Visual Ambient Decorative Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gold-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-block px-3 py-1 rounded-full bg-gold-accent/15 border border-gold-accent/35 text-gold-accent text-xs font-semibold tracking-widest uppercase mb-4">
              Our Distinctive Edge
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Why Diners Adore <span className="text-gold-accent italic">The Daily Craving</span>
            </h2>
            <p className="mt-4 text-cream-dark/80 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
              We stand apart through our devotion to culinary authenticity. We fuse fresh local organic inputs with slow-cooking fire methods to deliver tastes that stay on your mind forever.
            </p>
          </div>
          
          {/* Benchmarks Card */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-6 shadow-xl flex flex-col gap-4 backdrop-blur-sm">
            <h4 className="text-gold-accent font-semibold text-xs uppercase tracking-wider font-sans">Our culinary promises:</h4>
            <ul className="space-y-3">
              {[
                'Michelin-standard preparation procedures',
                '100% natural, premium oils and spices',
                'Zero chemical food colorings or MSG',
                'Fully sanitized interactive open kitchen'
              ].map((bench, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-cream-dark/95 text-xs sm:text-sm">
                  <CheckCircle size={15} className="text-gold-accent shrink-0" />
                  {bench}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#352219]/60 backdrop-blur-sm rounded-3xl p-6 flex flex-col justify-between items-start border border-white/5 hover:border-gold-accent/20 transition-all duration-300 group"
                id={`stat-card-${stat.id}`}
              >
                <div className="flex justify-between items-center w-full mb-6">
                  <div className={`p-2.5 rounded-xl bg-brand-brown border border-white/10 ${stat.color} group-hover:scale-105 transition-transform`}>
                    <IconComp size={18} />
                  </div>
                  <span className="text-[9px] font-mono text-white/30 uppercase">CRAVE-ST-{index+1}</span>
                </div>

                <div>
                  <div className="mb-2">
                    {/* Hardcode rating as 4.8 for decimals to display beautifully or standard animation */}
                    {stat.id === 'rating' ? (
                      <span className="font-display text-4xl sm:text-5xl font-extrabold text-gold-accent tracking-tight">4.8+</span>
                    ) : (
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    )}
                  </div>
                  
                  <h3 className="text-white font-display font-bold text-base mb-1.5 group-hover:text-gold-accent transition-colors leading-tight">
                    {stat.title}
                  </h3>
                  
                  <p className="text-cream-dark/70 text-xs leading-relaxed font-light">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
