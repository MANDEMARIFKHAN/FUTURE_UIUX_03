import { motion } from 'motion/react';
import { Heart, Briefcase, Cake, Music, Gem, Presentation } from 'lucide-react';

const SERVICES = [
  {
    id: 'weddings',
    title: 'Weddings',
    description: 'Bespoke planning for your special day. From venue selection to floral design, we make your dream wedding a reality.',
    icon: Heart,
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3'
  },
  {
    id: 'engagement',
    title: 'Engagements',
    description: 'Beautifully curated engagement ceremonies and parties to celebrate the beginning of your forever journey.',
    icon: Gem,
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3'
  },
  {
    id: 'birthdays',
    title: 'Birthdays',
    description: 'Milestone birthdays, anniversaries, and private celebrations crafted with creativity and meticulous attention to detail.',
    icon: Cake,
    color: 'text-warning',
    bg: 'bg-amber-50',
    image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3'
  },
  {
    id: 'dj-nights',
    title: 'DJ Nights',
    description: 'Electrifying DJ nights and musical events with top-tier sound, lighting, and an unforgettable atmosphere.',
    icon: Music,
    color: 'text-secondary',
    bg: 'bg-cyan-50',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3'
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Professional event management for product launches, gala dinners, and corporate retreats that reflect your brand.',
    icon: Briefcase,
    color: 'text-primary',
    bg: 'bg-indigo-50',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=2612&ixlib=rb-4.0.3'
  },
  {
    id: 'conferences',
    title: 'Conferences',
    description: 'End-to-end logistics for large-scale summits and conferences, ensuring a seamless experience for attendees.',
    icon: Presentation,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3'
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3"
          alt="Services Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-bold tracking-[0.2em] uppercase text-[10px] mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Creating Extraordinary Events
          </h3>
          <p className="text-slate-300 text-lg">
            We specialize in designing and executing tailored experiences across a variety of event types.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-[32px] overflow-hidden bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-secondary transition-all duration-300 border border-white/10 flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 z-10 text-white flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-serif text-white mb-3">{service.title}</h4>
                  <p className="text-slate-300 leading-relaxed text-[11px] mb-6 flex-grow">
                    {service.description}
                  </p>
                  <a 
                    href={`#contact?type=${
                      service.id === 'weddings' ? 'wedding' :
                      service.id === 'birthdays' ? 'birthday' :
                      service.id === 'conferences' ? 'conference' :
                      service.id === 'dj-nights' ? 'party' :
                      service.id === 'engagement' ? 'engagement' :
                      service.id === 'corporate' ? 'corporate' : ''
                    }`}
                    className="inline-flex items-center justify-center w-full px-6 py-4 mt-auto bg-primary text-white text-sm font-bold uppercase tracking-[0.2em] rounded-full hover:bg-primary/90 hover:shadow-lg transition-all"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
