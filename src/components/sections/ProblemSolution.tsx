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
    <section id="the-problem" className="py-5 sm:py-7 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Side-by-Side Glass Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 relative items-stretch">

          {/* Central VS Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -4, 0] }}
            transition={{
              y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
              scale: { type: "spring", stiffness: 260, damping: 20, delay: 0.3 },
            }}
            className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white border border-gray-100 shadow-xl items-center justify-center font-extrabold text-xs text-[#cd0007] tracking-wider cursor-pointer"
          >
            VS
          </motion.div>

          {/* LEFT CARD: THE PROBLEM */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-card glass-card-hover rounded-3xl p-8 sm:p-10 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div>
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#cd0007] block mb-2">
                  THE PROBLEM
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                  Traditional film financing is broken.
                </h2>
              </div>

              <div className="space-y-4 pt-1">
                {problems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
                    className="flex items-start gap-3.5 group cursor-pointer"
                  >
                    <div className="mt-1 text-[#cd0007] shrink-0">
                      <XCircle size={20} strokeWidth={2.2} />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#cd0007] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD: OUR SOLUTION */}
          <motion.div
            id="our-solution"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-card glass-card-hover rounded-3xl p-8 sm:p-10 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div>
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#10b981] block mb-2">
                  THE BEST PROTECTED
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                  A smarter, more transparent way forward.
                </h2>
              </div>

              <div className="space-y-4 pt-1">
                {solutions.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
                    className="flex items-start gap-3.5 group cursor-pointer"
                  >
                    <div className="mt-1 text-[#10b981] shrink-0">
                      <CheckCircle2 size={20} strokeWidth={2.2} />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
