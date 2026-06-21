import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah & James',
    role: 'Wedding Clients',
    content: 'Event Plaza made our dream wedding a reality. Their attention to detail and flawless execution left us stress-free and able to enjoy our special day.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Corporate Director',
    content: 'The annual conference arranged by their team was phenomenal. From venue selection to tech support, everything was seamless.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Birthday Celebration',
    content: 'They transformed a simple space into a magical birthday wonderland for my daughter. Absolutely stunning work!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-secondary font-bold tracking-[0.2em] uppercase text-[10px] mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 leading-[1.1]">
              Hear from our <span className="text-primary italic">happy clients</span>
            </h3>
            <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Don't just take our word for it. Read what our clients have to say about their experiences working with us.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 shadow-sm relative"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover shadow-sm"
                />
                <div>
                  <h4 className="font-serif font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
