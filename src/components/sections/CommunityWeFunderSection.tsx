"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function CommunityWeFunderSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* -------------------------------------------------------- */}
          {/* LEFT CARD: Join the BFF Community (Dark Theme)           */}
          {/* -------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.008 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 bg-[#0B0C0E] text-white rounded-sm border border-gray-900 p-6 sm:p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between shadow-xl min-h-[340px] group transition-shadow duration-300 hover:shadow-2xl hover:shadow-red-950/20"
          >
            {/* Ambient Crimson Breathing Glow Aura Ring (Continuously Active) */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.35, 0.75, 0.35],
              }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut",
              }}
              style={{ willChange: "transform" }}
              className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-[#B91C1C]/35 blur-3xl pointer-events-none z-0"
            />

            {/* Dark Card Background Visual */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 pointer-events-none">
              <Image
                src="/bfc.PNG"
                alt="Camera Visual"
                fill
                className="object-cover object-right"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0E] via-[#0B0C0E]/75 to-transparent" />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 space-y-4 max-w-xl">
              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#B91C1C]">
                JOIN THE BFF COMMUNITY
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Join our community.
                <br />
                Be part of the future of film.
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                Stay up to date with updates, insights, tools, and access stories.
              </p>
            </div>

            {/* Form & Interactive Subtext */}
            <div className="relative z-10 pt-6 space-y-3">
              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-4 py-2.5 rounded-sm shadow-sm"
                >
                  <Check size={16} />
                  <span>Thank you for joining our community!</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative max-w-md">
                  <div className="bg-white rounded-sm p-1.5 flex items-center shadow-md border border-gray-200 focus-within:ring-2 focus-within:ring-[#B91C1C] transition-all">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 text-xs sm:text-sm text-gray-900 placeholder-gray-400 bg-transparent focus:outline-none"
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 rounded-sm transition-all flex items-center gap-1.5 shrink-0 shadow-sm cursor-pointer group/btn"
                    >
                      <span>Sign Up</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </form>
              )}

              <p className="text-[10px] sm:text-xs text-gray-400 pl-2">
                We respect your privacy & confidentiality, guaranteed.
              </p>
            </div>
          </motion.div>

          {/* -------------------------------------------------------- */}
          {/* RIGHT CARD: Partner with BFF / WeFunder (Light Theme)     */}
          {/* -------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.008 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 bg-white border border-gray-200 rounded-sm p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[340px] group transition-all duration-300 hover:border-[#B91C1C]/40 hover:shadow-lg"
          >
            {/* Ambient Soft Red Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-50/0 via-red-50/0 to-red-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Card Header with Label & WeFunder Logo */}
            <div className="relative z-10 space-y-1">
              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#B91C1C]">
                PARTNER WITH BFF
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center flex-wrap gap-3 pt-1">
                <span>Continue to</span>
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    ease: "easeInOut",
                  }}
                  style={{ willChange: "transform" }}
                  className="inline-block"
                >
                  <Image
                    src="/wf.png"
                    alt="WeFunder"
                    width={420}
                    height={120}
                    className="h-16 sm:h-24 w-auto object-contain inline-block"
                  />
                </motion.div>
              </h3>
            </div>

            {/* Subtext & Action Button */}
            <div className="relative z-10 pt-4 pb-16 sm:pb-20 space-y-4 max-w-[280px]">
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                See how we enable everyday investors to participate in film financing.
              </p>

              <motion.a
                href="https://wefunder.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-1.5 bg-white hover:bg-[#B91C1C] text-gray-900 hover:text-white border border-gray-300 hover:border-[#B91C1C] font-semibold px-4 py-2.5 rounded-sm text-xs shadow-xs transition-all group/btn cursor-pointer w-fit"
              >
                <span>View Campaign</span>
                <ArrowRight size={13} className="text-gray-600 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
              </motion.a>
            </div>

            {/* Continuous Floating Film Reel Illustration (wfb.png) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.2,
                ease: "easeInOut",
              }}
              style={{ willChange: "transform" }}
              className="absolute -bottom-1 -right-1 sm:right-1 w-44 sm:w-56 lg:w-64 h-32 sm:h-40 pointer-events-none z-0"
            >
              <Image
                src="/wfb.png"
                alt="WeFunder Campaign Platform Preview & Film Reel"
                fill
                className="object-contain object-bottom object-right drop-shadow-md"
                sizes="(max-width: 640px) 176px, (max-width: 1024px) 224px, 256px"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
