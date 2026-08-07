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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="bg-white max-w-md w-full rounded-sm border border-gray-200 shadow-2xl p-6 sm:p-8 relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors p-1 cursor-pointer"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-4"
              >
                <CheckCircle2 size={48} className="text-[#B91C1C] mx-auto" />
                <h3 className="text-2xl font-semibold text-gray-900">You&apos;re on the list!</h3>
                <p className="text-sm text-gray-600">
                  Thank you for joining the Big Film Fund waitlist. We will notify you as soon as our next film allocation opens.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B91C1C]">
                    Join Big Film Fund
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-900 tracking-tight mt-1">
                    Get priority allocation
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Be the first to access curated film investments with transparent gross revenue sharing.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm text-sm text-gray-900 focus:outline-none focus:border-[#B91C1C] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                      Investor Profile
                    </label>
                    <select
                      value={investorType}
                      onChange={(e) => setInvestorType(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm text-sm text-gray-900 focus:outline-none focus:border-[#B91C1C] focus:bg-white transition-colors"
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
                    className="w-full bg-[#B91C1C] hover:bg-[#991B1B] text-white font-semibold py-3.5 px-6 rounded-sm text-sm transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer mt-2"
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
