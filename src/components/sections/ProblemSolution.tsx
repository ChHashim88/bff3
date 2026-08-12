"use client";

import { XCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ProblemSolution() {
  const problems = [
    {
      title: "Difficult & slow funding",
      desc: "Filmmakers face long waits and uncertain outcomes.",
    },
    {
      title: "Lack of transparency",
      desc: "Investors never know how money really flows.",
    },
    {
      title: "High investment risk",
      desc: "Decisions are based on emotion, not data.",
    },
    {
      title: "Poor returns",
      desc: "Net profits are often manipulated or never reached.",
    },
  ];

  const solutions = [
    "No waterfalls that never reach the ground.",
    "No 'net profits' that magically hit zero.",
    "We treat filmmaking as a holistic process where everyone who creates the wins shares in the wins.",
    "We only greenlight projects with high ROI potential after an intense scrutinizing process — marketing and distribution are fully figured out before we film one frame.",
  ];

  return (
    <section id="the-problem" className="relative w-full border-b border-gray-100 overflow-hidden">
      {/* Container grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 relative">

        {/* Central VS Badge for Desktop */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
          className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 shadow-lg flex items-center justify-center font-bold text-xs text-[#B91C1C] tracking-wider cursor-pointer group hover:border-[#B91C1C] transition-colors"
          >
            VS
          </motion.div>
        </motion.div>

        {/* LEFT: THE PROBLEM (Light Gray Background) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-[#F8F9FA] py-16 sm:py-20 lg:py-28 px-6 sm:px-12 lg:px-16 flex justify-end"
        >
          <div className="w-full max-w-xl space-y-8">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#B91C1C] mb-3">
                The Problem
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
                Traditional film financing is broken.
              </h2>
            </div>

            <div className="space-y-6 pt-2">
              {problems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    className="mt-0.5 text-[#B91C1C] shrink-0"
                  >
                    <XCircle size={22} strokeWidth={2} />
                  </motion.div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT: OUR SOLUTION (White Background) */}
        <motion.div
          id="our-solution"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white py-16 sm:py-20 lg:py-28 px-6 sm:px-12 lg:px-16 border-t lg:border-t-0 lg:border-l border-gray-200 flex justify-start"
        >
          <div className="w-full max-w-xl space-y-8">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#B91C1C] mb-3">
                Our Solution
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
                A smarter, more transparent way forward.
              </h2>
            </div>

            <div className="space-y-6 pt-2">
              {solutions.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="mt-0.5 text-[#B91C1C] shrink-0"
                  >
                    <CheckCircle2 size={22} strokeWidth={2} />
                  </motion.div>
                  <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed pt-0.5">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
