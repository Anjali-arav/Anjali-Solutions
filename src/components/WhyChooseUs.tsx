import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Users, CheckSquare, Smile, Cpu, CheckCircle } from 'lucide-react';

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
    <span ref={elementRef} className="font-mono text-4xl sm:text-5xl font-bold text-white tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const stats = [
    {
      id: 'exp',
      title: '5+ Years Experience',
      value: 5,
      suffix: '+',
      description: 'Dedicated professional technology and digital business delivery in India.',
      icon: Award,
      color: 'text-cyan-400'
    },
    {
      id: 'team',
      title: 'Professional Team',
      value: 24,
      suffix: '',
      description: 'Engineers, graphic visualists, certified consultants, and full-stack coders.',
      icon: Users,
      color: 'text-indigo-400'
    },
    {
      id: 'solutions',
      title: 'Quality Solutions',
      value: 120,
      suffix: '+',
      description: 'Robust, fully scalable production builds matching modern security benchmarks.',
      icon: CheckSquare,
      color: 'text-neon-blue'
    },
    {
      id: 'satisfaction',
      title: 'Customer Satisfaction',
      value: 99,
      suffix: '%',
      description: 'Exceptional client feedback loops, iterative revisions, and long-term support.',
      icon: Smile,
      color: 'text-emerald-400'
    },
    {
      id: 'tech',
      title: 'Modern Technology',
      value: 15,
      suffix: '+',
      description: 'Leveraging cutting-edge cloud, web, responsive mobile frameworks, and database engines.',
      icon: Cpu,
      color: 'text-amber-400'
    }
  ];

  return (
    <section className="py-20 bg-[#03060f] relative overflow-hidden" id="why-choose-us-section">
      {/* Visual Ambient Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-block px-3 py-1 rounded-full bg-neon-blue/15 border border-neon-blue/30 text-neon-blue text-xs font-mono tracking-widest uppercase mb-4">
              Value Proposition
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Why Global Businesses Trust <span className="text-neon-blue neon-glow-text">Anjali Solutions</span>
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl font-light">
              We stand apart through our commitment to technical excellence, customer transparency, and delivering solutions that yield measurable business growth.
            </p>
          </div>
          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-950/40 to-slate-950 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider font-mono">Our core benchmarks:</h4>
            <ul className="space-y-3">
              {[
                'Agile project management cycles',
                'Transparent cost structures',
                '24/7 dedicated system monitoring',
                'Custom tailoring — zero template look-alikes'
              ].map((bench, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-slate-300 text-sm">
                  <CheckCircle size={16} className="text-neon-blue shrink-0" />
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
                className="glass-panel rounded-2xl p-6 flex flex-col justify-between items-start border border-slate-800 hover:border-neon-blue/20 transition-all group"
                id={`stat-card-${stat.id}`}
              >
                <div className="flex justify-between items-center w-full mb-6">
                  <div className={`p-2 rounded-xl bg-slate-900 border border-slate-800 ${stat.color} group-hover:scale-110 transition-transform`}>
                    <IconComp size={20} />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">AS-STAT-{index+1}</span>
                </div>

                <div>
                  <div className="mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  
                  <h3 className="text-slate-200 font-display font-bold text-base mb-1.5 group-hover:text-neon-blue transition-colors">
                    {stat.title}
                  </h3>
                  
                  <p className="text-slate-400 text-xs leading-relaxed font-light">
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
