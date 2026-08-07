"use client";

import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface OpportunityProps {
  onOpenWaitlist: () => void;
}

export default function Opportunity({ onOpenWaitlist }: OpportunityProps) {
  return (
    <section id="investment" className="relative w-full bg-white border-b border-gray-100 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Left Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 py-16 sm:py-24 lg:py-32 px-6 sm:px-12 lg:px-16 flex flex-col justify-center"
        >
          <div className="max-w-xl space-y-6">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#B91C1C]">
              The Opportunity
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-tight">
              Be part of a fairer future for film.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed pt-1">
              We&apos;re raising to launch the platform and scale a growing pipeline of projects. Join a community of investors who want real ownership and a fairer way to participate in great films.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <motion.button
                onClick={onOpenWaitlist}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-sm transition-all duration-200 shadow-sm cursor-pointer group"
              >
                <span>Join the Investment Waitlist</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href="https://wefunder.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 text-xs sm:text-sm font-semibold px-5 py-3.5 rounded-sm transition-colors duration-200"
              >
                <span>View WeFunder Campaign</span>
                <ExternalLink size={15} className="text-gray-500" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Right Image Column (Full height edge-to-edge) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 min-h-[350px] sm:min-h-[450px] lg:min-h-[600px] relative bg-white overflow-hidden group flex items-center justify-center p-6 lg:p-12"
        >
          <Image
            src="/2nd.png"
            alt="Big Film Fund Opportunity"
            fill
            className="object-contain object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

      </div>
    </section>
  );
}
