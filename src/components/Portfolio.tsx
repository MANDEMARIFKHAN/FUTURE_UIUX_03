import { motion } from 'motion/react';

const PROJECTS = [
  {
    id: 1,
    title: 'The Royal Wedding',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
  },
  {
    id: 2,
    title: 'Tech Innovators Summit',
    category: 'Conference',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
  },
  {
    id: 3,
    title: 'Gatsby Themed Gala',
    category: 'Private Party',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
  },
  {
    id: 4,
    title: 'Global Product Launch',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=2612&ixlib=rb-4.0.3',
  },
  {
    id: 5,
    title: 'Summer Garden Party',
    category: 'Private Party',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=2669&ixlib=rb-4.0.3',
  },
  {
    id: 6,
    title: 'Coastal Elopement',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3" 
          alt="Portfolio Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-secondary font-bold tracking-[0.2em] uppercase text-[10px] mb-3">Our Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Moments We've Crafted
            </h3>
            <p className="text-slate-300 text-lg">
              A glimpse into some of our most magical events and memorable experiences.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="#contact" className="hidden border-b-2 border-primary text-primary font-medium pb-1 md:inline-flex items-center hover:text-white hover:border-white transition-colors">
              Start Your Project
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[400px] rounded-[40px] overflow-hidden cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-secondary font-bold text-[10px] uppercase tracking-wider mb-2">{project.category}</span>
                <h4 className="text-white text-2xl font-serif">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
