import { motion } from 'motion/react';
import { Users, Star, Award } from 'lucide-react';

const STATS = [
  { label: 'Happy Clients', value: '30+', icon: Star, color: 'text-warning', bg: 'bg-amber-50' },
  { label: 'Successful Events', value: '100+', icon: Award, color: 'text-primary', bg: 'bg-indigo-50' },
  { label: 'Event Specialists', value: '5', icon: Users, color: 'text-success', bg: 'bg-emerald-50' },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-7/12"
          >
            <h2 className="text-secondary font-bold tracking-[0.2em] uppercase text-[10px] mb-3">Who We Are</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 leading-[1.1]">
              A bespoke agency redefining events
            </h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              At Event Plaza, we believe that every event tells a story. Our dedicated team of 5 creative professionals works tirelessly to ensure your vision is executed flawlessly.
            </p>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              From intimate gatherings to large scale corporate conferences, our boutique approach means personal attention and uncompromising quality for every client.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {STATS.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex flex-col items-start">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${stat.bg}`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className="text-3xl font-serif text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-[11px] uppercase tracking-wider font-bold text-slate-500">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-4/12 relative mt-12 lg:mt-0 lg:ml-auto"
          >
            <div className="relative rounded-[40px] overflow-hidden aspect-[3/4] shadow-xl max-w-[320px] mx-auto lg:mx-0">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3" 
                alt="Event Management Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
            
            {/* Overlay badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-[32px] border border-slate-200 shadow-lg hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-serif text-2xl">
                  10
                </div>
                <div>
                  <p className="font-serif text-slate-900 text-lg">Years of</p>
                  <p className="text-slate-500 uppercase tracking-wider text-[10px] font-bold">Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
