"use client";

import { useState } from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [investorType, setInvestorType] = useState("Individual");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
        onClose();
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="bg-[#FAF8F3] max-w-md w-full rounded-2xl border border-[#EAE5DC] shadow-2xl p-6 sm:p-8 relative overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FAF7F1] border border-[#EAE5DC] text-[#111111]/60 hover:text-[#CD0007] hover:border-[#CD0007] flex items-center justify-center transition-all cursor-pointer z-10"
              aria-label="Close dialog"
            >
              <X size={16} />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#CD0007]/10 border border-[#CD0007]/20 flex items-center justify-center mx-auto text-[#CD0007]">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="type-h3 text-[#111111] font-bold">You&apos;re on the list!</h3>
                <p className="type-body text-gray-700 text-sm max-w-xs mx-auto leading-relaxed">
                  Thank you for joining the Big Film Fund waitlist. We will notify you as soon as our next film allocation opens.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-6">
                <div>
                  <span className="type-label font-bold uppercase text-[#CD0007] tracking-wider block mb-1">
                    Join Big Film Fund
                  </span>
                  <h3 className="text-2xl font-bold text-[#111111] tracking-tight">
                    Get priority allocation
                  </h3>
                  <p className="type-body text-gray-700 text-sm mt-1.5 leading-relaxed">
                    Be the first to access curated film investments with transparent gross revenue sharing.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block type-label font-medium uppercase text-[#111111] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FAF7F1] border border-[#EAE5DC] rounded-xl type-body text-sm text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#CD0007] focus:ring-2 focus:ring-[#CD0007]/15 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block type-label font-medium uppercase text-[#111111] mb-1.5">
                      Investor Profile
                    </label>
                    <select
                      value={investorType}
                      onChange={(e) => setInvestorType(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FAF7F1] border border-[#EAE5DC] rounded-xl type-body text-sm text-[#111111] focus:outline-none focus:border-[#CD0007] focus:ring-2 focus:ring-[#CD0007]/15 transition-all cursor-pointer"
                    >
                      <option value="Individual">Everyday Retail Investor</option>
                      <option value="Accredited">Accredited Investor</option>
                      <option value="Filmmaker">Filmmaker / Producer</option>
                      <option value="Institutional">Institutional / Fund Manager</option>
                    </select>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#CD0007] hover:bg-[#A60005] text-white type-cta font-medium py-3.5 px-6 rounded-full transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>Confirm & Join Waitlist</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
