import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  Megaphone, 
  Palette, 
  Smartphone, 
  Code, 
  TrendingUp, 
  MessageSquare, 
  ArrowUpRight 
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenAppointmentWithService: (serviceName: string) => void;
}

const SERVICES_DATA = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Modern responsive websites designed for business growth.',
    icon: Globe,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 'digi-mark',
    title: 'Digital Marketing',
    description: 'Increase your online presence with powerful marketing strategies.',
    icon: Megaphone,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Creative user-focused designs for better customer experience.',
    icon: Palette,
    color: 'from-pink-500 to-orange-400'
  },
  {
    id: 'mob-dev',
    title: 'Mobile App Development',
    description: 'Fast and scalable mobile applications for your business.',
    icon: Smartphone,
    color: 'from-green-500 to-emerald-400'
  },
  {
    id: 'soft-sol',
    title: 'Software Solutions',
    description: 'Custom software solutions built according to your needs.',
    icon: Code,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'bus-cons',
    title: 'Business Consulting',
    description: 'Professional guidance to improve your business performance.',
    icon: TrendingUp,
    color: 'from-amber-500 to-red-500'
  }
];

export default function ServicesSection({ onOpenAppointmentWithService }: ServicesSectionProps) {
  const companyPhone = '+918911449475';

  const handleWhatsAppChat = (serviceTitle: string) => {
    const text = encodeURIComponent(`Hello Anjali Solutions, I am interested in your ${serviceTitle} service. Please share more details!`);
    window.open(`https://wa.me/${companyPhone.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 bg-[#060913] relative overflow-hidden" id="services-section">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/10 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 h-72 w-72 rounded-full bg-neon-blue/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-neon-blue/15 border border-neon-blue/30 text-neon-blue text-xs font-mono tracking-widest uppercase mb-4">
            Elite Digital Offerings
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Comprehensive <span className="text-neon-blue neon-glow-text">Services</span> to Scale Your Business
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            We provide next-generation solutions, merging engineering precision with creative visual identity to build high-performance business assets.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel glass-panel-hover rounded-2xl p-6 md:p-8 flex flex-col justify-between relative group"
                id={`service-card-${service.id}`}
              >
                {/* Glowing Corner Decorator */}
                <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-br from-neon-blue/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Service Icon */}
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${service.color} p-2.5 text-slate-950 flex items-center justify-center mb-6 shadow-md shadow-black/40 group-hover:scale-110 transition-transform`}>
                    <IconComponent size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Actions Panel */}
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-800/60">
                  {/* Learn More Button */}
                  <button
                    onClick={() => onOpenAppointmentWithService(service.title)}
                    className="flex-1 py-2.5 px-4 rounded-xl border border-slate-800 hover:border-neon-blue/30 text-slate-300 hover:text-white hover:bg-neon-blue/5 transition-all text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Learn More
                    <ArrowUpRight size={14} />
                  </button>

                  {/* WhatsApp Contact */}
                  <button
                    onClick={() => handleWhatsAppChat(service.title)}
                    className="py-2.5 px-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 border border-emerald-500/20 transition-all text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                    title="Inquire on WhatsApp"
                  >
                    <MessageSquare size={14} className="fill-current" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
