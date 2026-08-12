"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
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
    <footer className="w-full bg-[#EFEFF1] py-12 sm:py-16 border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Top Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT CARD: Join the BFF Community (Dark Theme) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#0B0C0E] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between shadow-xl min-h-[320px]"
          >
            {/* Dark Card Subtle Background Visual */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 pointer-events-none">
              <Image
                src="/bfc.PNG"
                alt="Camera Visual"
                fill
                className="object-cover object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0E] via-[#0B0C0E]/75 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-4 max-w-xl">
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#B91C1C]">
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

            {/* Form & Subtext */}
            <div className="relative z-10 pt-6 space-y-3">
              {isSubscribed ? (
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-4 py-2.5 rounded-full">
                  <Check size={16} />
                  <span>Thank you for joining our community!</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative max-w-md">
                  <div className="bg-white rounded-full p-1.5 flex items-center shadow-lg border border-gray-100">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 text-xs sm:text-sm text-gray-900 placeholder-gray-400 bg-transparent focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 rounded-full transition-all flex items-center gap-1.5 shrink-0 shadow-md cursor-pointer group"
                    >
                      <span>Sign Up</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}

              <p className="text-[10px] sm:text-xs text-gray-400 pl-2">
                We respect your privacy & confidentiality, guaranteed.
              </p>
            </div>
          </motion.div>

          {/* RIGHT CARD: Continue to WeFunder (Light Theme) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-sm min-h-[320px]"
          >
            {/* Card Header with Label & WeFunder Logo */}
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#B91C1C]">
                  PARTNER WITH BFF
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                  Continue to WeFunder
                </h3>
              </div>

              {/* Right Top Image: wf.png */}
              <div className="shrink-0 pt-0.5">
                <Image
                  src="/wf.png"
                  alt="WeFunder Logo"
                  width={150}
                  height={40}
                  className="h-7 sm:h-9 w-auto object-contain"
                />
              </div>
            </div>

            {/* Subtext & Action Button */}
            <div className="relative z-10 pt-4 pb-16 sm:pb-20 space-y-4 max-w-[280px]">
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                See how we enable everyday investors to participate in film financing.
              </p>

              <a
                href="https://wefunder.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 font-semibold px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-sm transition-all hover:border-gray-400 group cursor-pointer"
              >
                <span>View Campaign</span>
                <ArrowRight size={14} className="text-gray-600 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right Bottom Image: wfb.png */}
            <div className="absolute -bottom-1 -right-1 sm:right-1 w-44 sm:w-56 lg:w-64 h-32 sm:h-40 pointer-events-none z-0">
              <Image
                src="/wfb.png"
                alt="WeFunder Campaign Platform Preview & Film Reel"
                fill
                className="object-contain object-bottom object-right"
              />
            </div>
          </motion.div>

        </div>

        {/* Bottom Footer Copyright & Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-xs text-gray-500 font-medium">
          <p>© 2025 Big Film Fund. All rights reserved.</p>

          <div className="flex items-center space-x-5 text-gray-600 font-bold">
            {/* LinkedIn */}
            <a
              href="#"
              className="hover:text-[#B91C1C] transition-colors p-1 text-sm font-bold"
              aria-label="LinkedIn"
            >
              in
            </a>
            {/* Twitter / X */}
            <a
              href="#"
              className="hover:text-[#B91C1C] transition-colors p-1"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="hover:text-[#B91C1C] transition-colors p-1"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
