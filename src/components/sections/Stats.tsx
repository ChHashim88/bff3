"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { number: "500+", label: "Projects Reviewed" },
    { number: "95%", label: "AI Accuracy" },
    { number: "2,350+", label: "Investors" },
    { number: "$50M+", label: "Target Funding" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className={`flex flex-col items-center justify-center text-center px-4 group ${idx !== 0 ? 'pt-6 md:pt-0' : ''
                }`}
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#B91C1C] tracking-tight mb-2 transition-transform"
              >
                {item.number}
              </motion.div>
              <div className="text-xs sm:text-sm font-semibold text-gray-700 tracking-wide uppercase">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
