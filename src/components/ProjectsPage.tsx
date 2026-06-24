import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Globe, Cpu, Smartphone, Calendar, User, ExternalLink, X, Info } from 'lucide-react';
import { Project } from '../types';

interface ProjectsPageProps {
  onOpenAppointment: () => void;
}

const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    name: 'Vizag Elite Real Estates',
    description: 'A premium, highly responsive real-estate listing and virtual-tour marketplace customized for local developers in Dwaraka Nagar.',
    category: 'Websites',
    technologies: ['React 19', 'Tailwind v4', 'Google Maps API', 'Node.js', 'PostgreSQL'],
    imageUrl: '/src/assets/images/project_website_1782314786535.jpg'
  },
  {
    id: 'proj-2',
    name: 'Apex Healthcare Hub',
    description: 'A robust clinic workflow management and online patient appointment system catering to multi-specialty hospitals.',
    category: 'Websites',
    technologies: ['Vite', 'React Router', 'Express.js', 'MongoDB', 'Chart.js'],
    imageUrl: '/src/assets/images/project_website_1782314786535.jpg'
  },
  {
    id: 'proj-3',
    name: 'Smart Ledger Cloud ERP',
    description: 'A scalable warehouse, billing, and custom inventory-tracking platform built for manufacturing and retail chains.',
    category: 'Applications',
    technologies: ['TypeScript', 'React', 'Node.js', 'Docker', 'Drizzle ORM'],
    imageUrl: '/src/assets/images/project_app_1782314800428.jpg'
  },
  {
    id: 'proj-4',
    name: 'FleetManager Mobile Tracker',
    description: 'A cross-platform mobile application utilizing background geolocation to trace, optimize, and log commercial logistics runs.',
    category: 'Applications',
    technologies: ['React Native', 'Firebase Auth', 'Firestore', 'Tailwind', 'Redux'],
    imageUrl: '/src/assets/images/project_app_1782314800428.jpg'
  },
  {
    id: 'proj-5',
    name: 'ClickBoost Ads Optimizer',
    description: 'An AI-powered digital marketing dashboard that automates Facebook & Google campaign budgets to lower client acquisition costs.',
    category: 'Digital Solutions',
    technologies: ['Gemini API SDK', 'Python', 'FastAPI', 'Recharts', 'Tailwind CSS'],
    imageUrl: '/src/assets/images/project_digital_solutions_1782314813144.jpg'
  },
  {
    id: 'proj-6',
    name: 'EduStream LMS Suite',
    description: 'An advanced virtual learning platform featuring live video channels, collaborative digital whiteboards, and custom auto-grading.',
    category: 'Digital Solutions',
    technologies: ['React', 'WebRTC', 'Socket.io', 'Tailwind CSS', 'AWS S3'],
    imageUrl: '/src/assets/images/project_digital_solutions_1782314813144.jpg'
  }
];

export default function ProjectsPage({ onOpenAppointment }: ProjectsPageProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Websites' | 'Applications' | 'Digital Solutions'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ('All' | 'Websites' | 'Applications' | 'Digital Solutions')[] = [
    'All',
    'Websites',
    'Applications',
    'Digital Solutions'
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(proj => proj.category === activeCategory);

  return (
    <div className="py-24 bg-[#060913] min-h-screen relative overflow-hidden" id="projects-page-container">
      {/* Background Decorators */}
      <div className="absolute top-1/5 right-0 h-96 w-96 rounded-full bg-neon-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/5 left-0 h-96 w-96 rounded-full bg-indigo-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-neon-blue/15 border border-neon-blue/30 text-neon-blue text-xs font-mono tracking-widest uppercase mb-4 animate-pulse">
            Proven Case Studies
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Our Featured <span className="text-neon-blue neon-glow-text">Projects</span>
          </h1>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Explore our curated portfolio of custom enterprise software, visually striking responsive websites, and highly integrated digital marketing architectures designed for excellence.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12" id="project-categories-tab">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 bg-slate-900/20'
              }`}
            >
              <span className="relative z-10">{cat}</span>
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-gradient-to-r from-neon-blue to-cyan-500 rounded-xl"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between group h-full"
                id={`project-card-${project.id}`}
              >
                {/* Image Section with Overlay */}
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0a0f1d]/90 border border-neon-blue/30 backdrop-blur-sm text-neon-blue text-[10px] font-mono uppercase tracking-wider">
                    {project.category === 'Websites' && <Globe size={10} />}
                    {project.category === 'Applications' && <Smartphone size={10} />}
                    {project.category === 'Digital Solutions' && <Cpu size={10} />}
                    {project.category}
                  </span>
                </div>

                {/* Info Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white mb-2.5 group-hover:text-neon-blue transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-light line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack and Action */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-mono">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md bg-slate-900/80 border border-slate-800 text-[10px] text-neon-blue font-mono">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2.5 bg-slate-900 hover:bg-neon-blue hover:text-slate-950 text-slate-300 font-bold rounded-xl border border-slate-800 hover:border-transparent transition-all text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      View Project Details
                      <ExternalLink size={12} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Project Details Modal Popup */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="relative w-full max-w-2xl bg-[#0a0f1d] border border-neon-blue/20 rounded-2xl overflow-hidden shadow-2xl z-10 p-6 md:p-8"
                id="project-details-modal"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-800 hover:text-neon-blue transition-colors z-20"
                >
                  <X size={20} />
                </button>

                {/* Content */}
                <div className="space-y-6">
                  {/* Image banner */}
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                    <img
                      src={selectedProject.imageUrl}
                      alt={selectedProject.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-4 left-4 px-3 py-1 rounded-md bg-[#060913]/90 border border-neon-blue/20 backdrop-blur-sm text-neon-blue text-xs font-mono">
                      Category: {selectedProject.category}
                    </span>
                  </div>

                  {/* Title & Metadata */}
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      {selectedProject.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 font-mono">
                      <div className="flex items-center gap-1.5">
                        <User size={14} className="text-neon-blue" />
                        <span>Client: Corporate Enterprise</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-neon-blue" />
                        <span>Duration: 3 Months</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Info size={14} className="text-neon-blue" />
                        <span>Status: Live & Verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono font-bold mb-2">Overview</h4>
                    <p className="text-slate-300 text-sm leading-relaxed font-light">
                      {selectedProject.description} This solution was thoroughly tested, ISO-optimized, and scaled on modern cloud hosting clusters. Since deployment, the client reported streamlined operation, improved UI speeds, and superior security defenses.
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono font-bold mb-2.5">Technologies Employed</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        onOpenAppointment();
                      }}
                      className="flex-1 py-3 bg-gradient-to-r from-neon-blue to-cyan-500 hover:from-cyan-400 hover:to-neon-blue text-slate-950 font-bold rounded-xl transition-all shadow-md text-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Book Free consultation
                    </button>
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        const text = encodeURIComponent(`Hi! I am inquiring about the project: ${selectedProject.name}`);
                        window.open(`https://wa.me/918911449475?text=${text}`, '_blank');
                      }}
                      className="py-3 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-xl border border-slate-800 transition-all text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Discuss on WhatsApp
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
