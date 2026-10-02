import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Send, Sparkles, Clock, Calendar, Mail, ArrowRight } from "lucide-react";

export default function ContactModal({ isOpen, onClose, initialService = "Go-to-Market Strategy" }) {
  const [service, setService] = useState(initialService);
  const [budget, setBudget] = useState("5k-15k€");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // auto close or reset
    }, 4000);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#27262b]/70 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-[#27262b] z-10 max-h-[90vh] overflow-y-auto border border-neutral-200"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-[#27262b] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-[#1877F2]/10 text-[#1877F2] rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Call Request Received!</h3>
                <p className="text-neutral-600 max-w-md mb-6">
                  Thank you, <strong>{name || "Founder"}</strong>. Akash and our team will review your project and get back to you within 24 hours.
                </p>
                <div className="bg-[#f5f4f0] p-4 rounded-xl text-left w-full text-sm mb-6 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Service:</span>
                    <span className="font-medium">{service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Estimated Budget:</span>
                    <span className="font-medium">{budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Response time:</span>
                    <span className="text-[#1877F2] font-medium">&lt; 24h guarantee</span>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-full bg-[#27262b] text-white text-sm font-medium hover:bg-black transition-colors"
                >
                  Back to site
                </button>
              </motion.div>
            ) : (
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1877F2]/10 text-[#1877F2] text-xs font-semibold uppercase tracking-wider mb-2">
                    <Sparkles size={12} /> Fast Track Project
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    Let’s build something remarkable
                  </h2>
                  <p className="text-sm text-neutral-500 mt-1">
                    Book an intro call with Criyon or describe your project below.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Select Service
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        "Branding",
                        "UI/UX Design",
                        "Mobile App Design",
                        "Mobile App Dev",
                        "Website Dev",
                        "Concept-to-Market"
                      ].map((item) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() => setService(item)}
                          className={`text-xs px-2.5 py-2 rounded-lg border text-left transition-all ${
                            service === item
                              ? "bg-[#27262b] text-white border-[#27262b]"
                              : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Rivera"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#1877F2] focus:border-transparent bg-neutral-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@startup.io"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#1877F2] focus:border-transparent bg-neutral-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Approximate Budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["< 3,000€", "3k – 8k€", "8k – 20k€", "20k€+"].map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setBudget(b)}
                          className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                            budget === b
                              ? "bg-[#1877F2] text-white border-[#1877F2]"
                              : "bg-neutral-100 text-neutral-700 border-neutral-200 hover:border-neutral-300"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                      Project Brief / Note
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your startup, launch timeline, and key goals..."
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#1877F2] focus:border-transparent bg-neutral-50/50 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                      <Clock size={13} className="text-[#1877F2]" />
                      <span>Avg response in 2 hrs</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="inline-flex items-center gap-2 bg-[#27262b] hover:bg-black text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold shadow-md transition-colors cursor-pointer"
                    >
                      <span>Send Request</span>
                      <span className="w-5 h-5 rounded-full bg-white text-[#27262b] flex items-center justify-center text-[10px]">
                        ↗
                      </span>
                    </motion.button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
