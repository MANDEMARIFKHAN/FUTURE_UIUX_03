import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const TIERS = [
  {
    name: 'Essential',
    price: 'Starting at ₹1,50,000',
    description: 'Perfect for intimate private parties and birthday celebrations.',
    features: [
      'Initial consultation',
      'Venue sourcing',
      'Basic decor styling',
      'Vendor recommendations',
      'Day-of coordination (4 hours)'
    ],
    highlighted: false,
  },
  {
    name: 'Premium',
    price: 'Starting at ₹4,50,000',
    description: 'Comprehensive planning for weddings and large social events.',
    features: [
      'Full concept and design',
      'Comprehensive venue management',
      'Complete vendor curation & booking',
      'Budget management & tracking',
      'Full day-of coordination',
      'Rehearsal coordination'
    ],
    highlighted: true,
  },
  {
    name: 'Corporate',
    price: 'Custom Pricing',
    description: 'Scalable logistics and planning for conferences and brand events.',
    features: [
      'Dedicated event manager',
      'AV & Tech production support',
      'Registration & attendee management',
      'Post-event analytics',
      'Marketing material coordination',
      'Multi-day scheduling'
    ],
    highlighted: false,
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-secondary overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-white/80 font-bold tracking-[0.2em] uppercase text-[10px] mb-3">Investment</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Transparent Packaging
          </h3>
          <p className="text-white/90 text-sm max-w-2xl mx-auto">
            Find the right level of support for your vision. We also offer custom quotes for specialized needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {TIERS.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-[40px] p-8 ${
                tier.highlighted 
                  ? 'bg-primary text-white shadow-2xl shadow-primary/20 md:-translate-y-4' 
                  : 'bg-white/10 backdrop-blur border border-white/20 text-white'
              }`}
            >
              <h4 className="text-xl font-serif mb-2">{tier.name}</h4>
              <p className={`text-[11px] mb-6 h-10 ${tier.highlighted ? 'text-white/80' : 'text-white/80'}`}>
                {tier.description}
              </p>
              <div className="mb-8">
                <span className="text-3xl font-serif font-bold">{tier.price}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${tier.highlighted ? 'text-white/80' : 'text-white/80'}`} />
                    <span className={`text-[13px] ${tier.highlighted ? 'text-white' : 'text-white/90'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 px-6 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                tier.highlighted
                  ? 'bg-white text-primary hover:bg-slate-50'
                  : 'bg-white/20 hover:bg-white/30 text-white border border-white/20'
              }`}>
                Inquire Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
