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
    <section className="w-full bg-[#FAF7F1] py-8 sm:py-10 lg:py-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* -------------------------------------------------------- */}
          {/* Join the BFF Community Card (Full Width)                  */}
          {/* -------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-12 bg-[#111111] text-white rounded-2xl border border-[#EAE5DC] p-6 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between shadow-xl min-h-[340px] group transition-shadow duration-300 hover:shadow-2xl hover:shadow-red-950/20"
          >
            {/* Ambient Logo Red Breathing Glow Aura Ring */}
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
              className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-[#CD0007]/35 blur-3xl pointer-events-none z-0"
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/75 to-transparent" />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 space-y-3 max-w-xl">
              <h1 className="type-label font-medium uppercase text-[#CD0007]">
                JOIN THE BFF COMMUNITY
              </h1>
              <h3 className="text-[28px] sm:text-[32px] font-semibold text-white leading-tight">
                Join our community.
                <br />
                Be part of the future of film.
              </h3>
              <p className="type-body text-gray-300">
                Stay up to date with updates, insights, tools, and access stories.
              </p>
            </div>

            {/* Form & Interactive Subtext */}
            <div className="relative z-10 pt-6 space-y-3">
              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 type-cta text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-4 py-2.5 rounded-2xl shadow-sm"
                >
                  <Check size={16} />
                  <span>Thank you for joining our community!</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative max-w-md">
                  <div className="bg-white/95 rounded-2xl p-1.5 flex items-center shadow-md border border-[#EAE5DC] focus-within:ring-2 focus-within:ring-[#CD0007] transition-all">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 type-body text-[#111111] placeholder-gray-400 bg-transparent focus:outline-none"
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="bg-[#CD0007] hover:bg-[#A60005] text-white type-cta px-5 sm:px-6 py-2.5 rounded-xl transition-all flex items-center gap-1.5 shrink-0 shadow-sm cursor-pointer group/btn"
                    >
                      <span>Sign Up</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </form>
              )}

              <p className="type-small text-gray-400 pl-2">
                We respect your privacy & confidentiality, guaranteed.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
