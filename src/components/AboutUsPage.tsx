import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Calendar, Award, MapPin, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function AboutUsPage() {
  const milestones = [
    {
      year: 'Year 1 (Founding)',
      title: 'Humble Beginnings',
      desc: 'Anjali Solutions founded in Vizag, catering to local businesses with web styling & basic IT solutions.'
    },
    {
      year: 'Year 2 & 3 (Expansion)',
      title: 'Expanding Our Reach',
      desc: 'Upgraded team to support scalable databases, robust backends, and digital optimization structures.'
    },
    {
      year: 'Year 4 (Vizag Headquarters)',
      title: 'Corporate Hub Setup',
      desc: 'Established our primary office in Dwaraka Nagar, Vizag, assembling 15+ certified tech professionals.'
    },
    {
      year: 'Year 5+ (Modern Tech Leaders)',
      title: 'Market Pioneers',
      desc: 'Focusing on high-fidelity AI algorithms, Gemini SDK integrations, enterprise ERP suites, and cloud scalability.'
    }
  ];

  return (
    <div className="py-24 bg-[#060913] min-h-screen relative overflow-hidden" id="about-us-page-container">
      {/* Decorative Lights */}
      <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-neon-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-indigo-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-neon-blue/15 border border-neon-blue/30 text-neon-blue text-xs font-mono tracking-widest uppercase mb-4 animate-pulse">
            Our Legacy & Blueprint
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            About <span className="text-neon-blue neon-glow-text">Anjali Solutions</span>
          </h1>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            With over 5+ years of pioneering experience, we deliver tailored enterprise technology architectures designed to elevate your client conversion and systemic security.
          </p>
        </div>

        {/* Introductory Row (Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
              Who <span className="text-neon-blue">We Are</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Anjali Solutions provides innovative solutions to help businesses succeed in the digital world. With 5+ years of experience, we focus on quality, creativity and customer satisfaction.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              We operate directly out of Vizag, building full-scale client environments with advanced responsive code. Our engineers work hand-in-hand with creative artists to build user journeys that are both structurally sound and aesthetically superior.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                <ShieldCheck className="text-neon-blue shrink-0" size={24} />
                <div>
                  <h4 className="text-white text-xs font-bold font-mono">100% Quality</h4>
                  <p className="text-[10px] text-slate-400">Zero compromises</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                <HeartHandshake className="text-neon-blue shrink-0" size={24} />
                <div>
                  <h4 className="text-white text-xs font-bold font-mono">Client Centric</h4>
                  <p className="text-[10px] text-slate-400">Personalized consulting</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative group"
          >
            {/* Ambient Background Accent Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-neon-blue to-indigo-600 opacity-20 blur group-hover:opacity-45 transition-opacity duration-300 pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
              <img
                src="/src/assets/images/about_company_1782314850736.jpg"
                alt="Corporate consulting at Dwaraka Nagar Vizag office"
                referrerPolicy="no-referrer"
                className="w-full object-cover aspect-4/3"
              />
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision Bento Style Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel rounded-2xl p-8 relative overflow-hidden group"
            id="mission-card"
          >
            <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-neon-blue to-cyan-500" />
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl bg-neon-blue/10 border border-neon-blue/20 text-neon-blue flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                <Target size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-white tracking-wide">
                Our <span className="text-neon-blue">Mission</span>
              </h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              To deliver reliable, modern and creative solutions that help businesses grow. We strive to automate workflows, eliminate development bottlenecks, and maximize returns on digital investments.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel rounded-2xl p-8 relative overflow-hidden group"
            id="vision-card"
          >
            <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-indigo-500 to-purple-500" />
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                <Eye size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-white tracking-wide">
                Our <span className="text-indigo-400">Vision</span>
              </h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              To become a trusted digital solution partner. We envision a business landscape where complex, secure, and intuitive web technologies are accessible to both local startups and multinational corporations.
            </p>
          </motion.div>
        </div>

        {/* 5+ Years Journey Experience Timeline */}
        <div className="space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-neon-blue/10 text-neon-blue text-xs font-mono uppercase mb-3">
              5+ Years Experience Timeline
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
              Timeline of our <span className="text-neon-blue">Success Story</span>
            </h3>
          </div>

          <div className="relative border-l-2 border-slate-800 max-w-3xl mx-auto pl-6 sm:pl-10 space-y-10" id="experience-timeline">
            {milestones.map((ms, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Glowing Dot indicator */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1 h-4 w-4 rounded-full border-2 border-neon-blue bg-[#060913] shadow-[0_0_8px_rgba(0,240,255,0.6)] group-hover:scale-125 transition-transform" />

                <div className="glass-panel rounded-xl p-5 border border-slate-800/80 hover:border-neon-blue/20 transition-all">
                  <span className="text-xs font-mono font-bold text-neon-blue uppercase bg-neon-blue/5 px-2.5 py-1 rounded-md mb-2 inline-block">
                    {ms.year}
                  </span>
                  <h4 className="font-display text-base font-bold text-white mb-1">
                    {ms.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                    {ms.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
