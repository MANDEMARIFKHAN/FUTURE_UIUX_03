import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState<{date: string; eventType: string; name: string} | null>(null);
  const [eventType, setEventType] = useState('');

  useEffect(() => {
    const handleHashCheck = () => {
      const hash = window.location.hash;
      if (hash.includes('?type=')) {
        const type = hash.split('?type=')[1].split('&')[0];
        if (type) setEventType(type);
      }
    };
    
    handleHashCheck();
    window.addEventListener('hashchange', handleHashCheck);
    return () => window.removeEventListener('hashchange', handleHashCheck);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    
    setBookingData({
      name: data.get('name') as string,
      date: data.get('eventDate') as string,
      eventType: data.get('eventType') as string,
    });
    
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12"
          >
            <h2 className="text-secondary font-bold tracking-[0.2em] uppercase text-[10px] mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 leading-[1.1]">
              Let's create something beautiful together.
            </h3>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Ready to start planning? Reach out to us with your dream concept, and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-1">Email Us</h4>
                  <a href="mailto:khana388846@gmail.com" className="text-slate-600 hover:text-primary transition-colors">khana388846@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-1">Call Us</h4>
                  <a href="tel:990886621" className="text-slate-600 hover:text-primary transition-colors">990886621</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-1">Visit Studio</h4>
                  <p className="text-slate-600">123 Event Plaza,<br />kadiri, 515501</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-7/12"
          >
            <div className="bg-white rounded-[40px] p-8 md:p-10 border border-slate-200 min-h-[600px] flex flex-col justify-center">
              {isSubmitted && bookingData ? (
                <div className="flex flex-col items-center justify-center text-center py-8 px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
                  <h4 className="text-2xl font-serif text-slate-900 mb-2">Booking Confirmed{bookingData.name ? `, ${bookingData.name.split(' ')[0]}` : ''}!</h4>
                  <p className="text-slate-600 mb-8">We've received your request and will contact you shortly.</p>
                  
                  <div className="bg-slate-50 rounded-2xl p-6 w-full max-w-sm text-left border border-slate-100 mb-8">
                    <div className="mb-4 pb-4 border-b border-slate-200">
                      <span className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1 flex items-center gap-2">Date</span>
                      <span className="text-slate-800 font-medium">{bookingData.date || 'Not specified'}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Event Type</span>
                      <span className="text-slate-800 font-medium capitalize">{bookingData.eventType || 'Not specified'}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary font-bold uppercase text-[10px] tracking-widest hover:text-secondary transition-colors"
                  >
                    Book Another Event
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="eventType" className="text-sm font-medium text-slate-700">Event Type</label>
                      <div className="relative">
                        <select 
                          id="eventType" 
                          name="eventType"
                          value={eventType}
                          onChange={(e) => setEventType(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 appearance-none"
                        >
                          <option value="">Select an event type</option>
                          <option value="wedding">Wedding</option>
                          <option value="corporate">Corporate Event</option>
                          <option value="party">Private Party</option>
                          <option value="conference">Conference</option>
                          <option value="engagement">Engagement</option>
                          <option value="birthday">Birthday</option>
                          <option value="other">Other (Please specify below ↓)</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="guests" className="text-sm font-medium text-slate-700">Number of Guests</label>
                      <input 
                        type="number" 
                        id="guests" 
                        name="guests"
                        min="1"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400"
                        placeholder="e.g. 150"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="eventDate" className="text-sm font-medium text-slate-700">Event Date</label>
                      <input 
                        type="date" 
                        id="eventDate" 
                        name="eventDate"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="foodType" className="text-sm font-medium text-slate-700">Food Type / Catering</label>
                      <div className="relative">
                        <select 
                          id="foodType" 
                          name="foodType"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 appearance-none"
                        >
                          <option value="">Select food preference</option>
                          <option value="veg">Vegetarian</option>
                          <option value="non-veg">Non-Vegetarian</option>
                          <option value="both">Both (Veg & Non-Veg)</option>
                          <option value="vegan">Vegan / Specialty</option>
                          <option value="no-food">No Catering Required</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">Additional Details</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={3} 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                      placeholder="Tell us about your vision, special requirements, or timings..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full text-white py-4 px-6 rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-primary/30 group bg-primary hover:bg-primary/90 hover:shadow-lg"
                  >
                    Book Your Event <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}