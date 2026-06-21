import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3"
          alt="Event Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
        {/* Subtle gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase text-[10px] tracking-[0.2em] font-bold text-secondary mb-4 block"
        >
          <span>Award-Winning Event Agency</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight max-w-4xl leading-[1.1]"
        >
          Creating <span className="italic font-light">Unforgettable</span> <br /> <span className="text-secondary">Experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl font-light"
        >
          From intimate weddings to grand corporate conferences, we handle every detail so you can 
          focus on enjoying the moment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all hover:-translate-y-1"
          >
            Start Planning
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-all"
          >
            View Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
