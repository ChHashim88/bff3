"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function ProblemSolution() {
  return (
    <section id="the-problem" className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F1] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* Single Large Rounded Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF8F3] border border-[#EAE5DC] rounded-2xl p-6 sm:p-10 shadow-xs relative"
        >
          {/* Two-Column Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">

            {/* LEFT SIDE: Heading, Description & Callout (~50% width / lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">

              <div className="space-y-3">
                {/* Top Subtitle Label & Short Logo Red Accent Line */}
                <div className="space-y-2">
                  <p className="type-label font-medium uppercase text-[#CD0007]">
                    THE PROBLEM
                  </p>
                  <div className="w-[30px] h-[2px] bg-[#CD0007]" />
                </div>

                {/* Main Headline */}
                <h3 className="text-[28px] sm:text-[32px] font-semibold text-[#111111] leading-tight">
                  Millions Watch Movies.<br />
                  <span className="text-[#CD0007]">Almost None Can Invest in Them.</span>
                </h3>

                {/* Paragraph Content Stack */}
                <div className="space-y-4 text-gray-700">
                  <p className="type-body leading-relaxed">
                    Film has always been a powerful global industry—but film investing has largely
                    remained accessible only to studios, private investors, and industry insiders.
                  </p>
                  <p className="type-body font-medium text-[#111111] border-l-2 border-[#CD0007] pl-3">
                    Audiences create value. Investors rarely share in it.
                  </p>
                  <p className="type-body leading-relaxed">
                    At the same time, investing has evolved. Platforms have opened access to opportunities once reserved for institutions.
                  </p>
                </div>
              </div>

              {/* Bottom Accent Callout */}
              <div className="pt-4 border-t border-[#EAE5DC]">
                <p className="type-subtitle font-medium text-[#CD0007]">
                  Film is one of the last major categories ready for this transition.
                </p>
              </div>

            </div>

            {/* RIGHT SIDE: Cinematic Video Preview Card (~50% width / lg:col-span-6) */}
            <div className="lg:col-span-6 flex items-center">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative rounded-2xl border border-[#EAE5DC] overflow-hidden shadow-xl aspect-[16/9] lg:aspect-[4/3] bg-[#111111] group cursor-pointer w-full min-h-[300px] sm:min-h-[360px]"
              >
                <Image
                  src="/ggh.jpeg"
                  alt="The Problem - Film Investing Preview"
                  fill
                  className="object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />

                {/* Play Button & Overlay Copy */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-md border-2 border-white flex items-center justify-center text-white shadow-xl group-hover:bg-[#CD0007] group-hover:border-[#CD0007] transition-all duration-300"
                  >
                    <Play size={28} className="fill-white translate-x-0.5" />
                  </motion.div>
                  <p className="type-label font-medium text-white/90 uppercase">
                    THE PROBLEM
                  </p>
                  <h3 className="type-h3 text-white max-w-md">
                    MILLIONS WATCH MOVIES.<br />ALMOST NONE CAN INVEST IN THEM.
                  </h3>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
