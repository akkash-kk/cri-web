import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Phone, X, ArrowRight, Check } from 'lucide-react';
import { cn } from '../lib/utils.ts';

export default function ContactFAB() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
    }, 2000);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="section-contact-fab contact-fab-bar fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 drop-shadow-2xl"
            aria-label="Floating Contact Bar"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="contact-fab-btn bg-[#1A1A1A] text-[#F3F1E8] px-8 py-4 rounded-full flex items-center gap-3 font-bold tracking-tight hover:scale-105 active:scale-95 transition-all group shadow-xl cursor-pointer"
            >
              <span className="uppercase text-xs md:text-sm">Contact Us</span>
              <MessageSquare size={18} className="group-hover:scale-110 transition-transform" />
            </button>
            
            <a 
              href="tel:+916374433734"
              className="contact-fab-phone-btn w-14 h-14 bg-[#F3F1E8] rounded-full flex items-center justify-center text-[#1A1A1A] hover:scale-110 active:scale-90 transition-all shadow-xl"
              title="Call Akash Kumaravel"
            >
              <Phone size={20} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isModalOpen && (
          <div className="contact-fab-modal-overlay fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="contact-fab-backdrop absolute inset-0 bg-brand-ink/40 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="contact-fab-modal-card bg-[#F3F1E8] w-full max-w-2xl rounded-[3rem] p-8 md:p-16 relative shadow-2xl text-[#1A1A1A]"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="contact-fab-close-btn absolute top-8 right-8 p-2 hover:bg-black/5 rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <h2 className="contact-fab-modal-title font-black mb-12 tracking-tighter uppercase italic text-2xl md:text-3xl">Contact</h2>

              {isSubmitted ? (
                <div className="contact-fab-success-state py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-4">
                    <Check size={32} />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">Message Received</h3>
                  <p className="text-sm opacity-60 mt-2">Thank you! Akash will reach out to you shortly.</p>
                </div>
              ) : (
                <form className="contact-fab-form space-y-10" onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-black opacity-30">Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Type..." 
                        className="w-full bg-transparent border-b border-black/10 py-2 focus:outline-none focus:border-brand-accent transition-colors placeholder:text-black/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-black opacity-30">Email</label>
                      <input 
                        type="email" 
                        required
                        placeholder="Email..." 
                        className="w-full bg-transparent border-b border-black/10 py-2 focus:outline-none focus:border-brand-accent transition-colors placeholder:text-black/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-black opacity-30">Phone</label>
                      <input 
                        type="tel" 
                        placeholder="Phone..." 
                        className="w-full bg-transparent border-b border-black/10 py-2 focus:outline-none focus:border-brand-accent transition-colors placeholder:text-black/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-black opacity-30">Arrival City</label>
                      <input 
                        type="text" 
                        placeholder="City, Country..." 
                        className="w-full bg-transparent border-b border-black/10 py-2 focus:outline-none focus:border-brand-accent transition-colors placeholder:text-black/20"
                      />
                    </div>
                  </div>

                  <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative w-5 h-5 flex items-center justify-center border border-black/20 rounded group-hover:border-black transition-colors">
                        <input type="checkbox" required className="peer absolute inset-0 opacity-0 cursor-pointer" />
                        <div className="w-3 h-3 bg-brand-ink rounded-sm scale-0 peer-checked:scale-100 transition-transform" />
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-bold opacity-40">
                        By submitting, you agree to our privacy policy
                      </span>
                    </label>

                    <button 
                      type="submit" 
                      className="bg-brand-ink text-brand-bg px-10 py-5 rounded-full flex items-center gap-3 font-bold uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-xl group cursor-pointer"
                    >
                      Submit
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
