"use client";

import Image from "next/image";
import { Play, Film, Layers, Video, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ThePlatform() {
  const cards = [
    {
      icon: Film,
      num: "01",
      title: "Curated Projects",
      description: "Identify and evaluate promising film opportunities.",
      floatDuration: 4.2,
      floatDelay: 0,
    },
    {
      icon: Layers,
      num: "02",
      title: "Structured Offerings",
      description: "Create clear, professionally structured investment opportunities.",
      floatDuration: 4.8,
      floatDelay: 0.6,
    },
    {
      icon: Video,
      num: "03",
      title: "Production & Distribution",
      description: "Support projects from development through release.",
      floatDuration: 4.5,
      floatDelay: 1.2,
    },
    {
      icon: TrendingUp,
      num: "04",
      title: "Growing Portfolio",
      description: "Build opportunities across multiple projects over time.",
      floatDuration: 5.1,
      floatDelay: 1.8,
    },
  ];

  return (
    <section id="our-solution" className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F1] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 space-y-10 sm:space-y-14">
        
        {/* 1. TOP HEADER COMPOSITION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          {/* Subtitle Label */}
          <div className="space-y-1.5">
            <p className="type-label font-medium uppercase text-[#CD0007]">
              THE PLATFORM
            </p>
            <div className="w-[30px] h-[2px] bg-[#CD0007]" />
          </div>

          {/* Headline */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="type-h2 text-[#111111]">
              A New Model for <span className="text-[#CD0007]">Film Investing</span>
            </h2>

            {/* Top-Right CTA Pill Button */}
            <motion.a
              href="#the-opportunity"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-[#CD0007] hover:bg-[#A60005] text-white type-cta font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-md shrink-0 self-start lg:self-auto cursor-pointer"
            >
              <span>Explore Platform</span>
            </motion.a>
          </div>

          {/* Paragraph Content */}
          <div className="space-y-2 text-gray-700 max-w-2xl">
            <p className="type-body">
              Big Film Fund is designed to make film investing more accessible, structured, and repeatable.
            </p>
            <p className="type-body font-medium text-[#111111]">
              Instead of depending on one-off deals, the platform is built around a growing pipeline of projects and a repeatable investment model.
            </p>
          </div>
        </motion.div>

        {/* 2. FULL-WIDTH MEDIA PANEL WITH CORNER FRAMING BRACKETS [ ┌ ┐ └ ┘ ] */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.005 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#111111] border border-[#EAE5DC] group cursor-pointer aspect-[16/9] lg:aspect-[21/9] flex items-center justify-center min-h-[340px] sm:min-h-[420px] w-full"
        >
          {/* Minimalist Corner Framing Brackets in Logo Red (#CD0007) */}
          <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-[#CD0007] pointer-events-none z-20 opacity-90" />
          <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-[#CD0007] pointer-events-none z-20 opacity-90" />
          <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-[#CD0007] pointer-events-none z-20 opacity-90" />
          <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-[#CD0007] pointer-events-none z-20 opacity-90" />

          {/* Background Image */}
          <Image
            src="/ggh.jpeg"
            alt="The Platform - A New Model for Film Investing Preview"
            fill
            className="object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />

          {/* Play Button & Overlay Copy */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 space-y-3">
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-md border-2 border-white flex items-center justify-center text-white shadow-xl group-hover:bg-[#CD0007] group-hover:border-[#CD0007] transition-all duration-300"
            >
              <Play size={30} className="fill-white translate-x-0.5" />
            </motion.div>
            <p className="type-label font-medium text-white/90 uppercase">
              THE PLATFORM
            </p>
            <h3 className="type-h3 text-white max-w-md">
              A NEW MODEL FOR FILM INVESTING
            </h3>
          </div>
        </motion.div>

        {/* 3. CENTERED STATEMENT / HOW IT WORKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-3 pt-2"
        >
          <p className="type-label font-medium uppercase text-[#CD0007]">
            HOW IT WORKS
          </p>
          <h3 className="type-h2 text-[#111111]">
            4-Step Repeatable Investment Model
          </h3>

          {/* Centered Logo Red Divider */}
          <div className="w-[40px] h-[2px] bg-[#CD0007] mx-auto mt-3" />
        </motion.div>

        {/* 4. FOUR FEATURE CARDS WITH CONTINUOUS INFINITE AMBIENT FLOATING & PULSING GLOW MOTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#FAF8F3] border border-[#EAE5DC] rounded-2xl p-6 sm:p-10 shadow-xs"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#EAE5DC] gap-6 md:gap-0">
            {cards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className={`flex flex-col items-center text-center px-4 sm:px-6 pt-6 md:pt-0 pb-6 md:pb-0 cursor-pointer ${
                    index !== 0 ? "md:pl-6" : ""
                  }`}
                >
                  {/* Floating Container (Infinite Ambient Motion) */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: item.floatDuration,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: item.floatDelay,
                    }}
                    whileHover={{ y: -10, scale: 1.03 }}
                    className="flex flex-col items-center text-center w-full group/card"
                  >
                    {/* Logo Red Icon Badge with Continuous Ambient Pulse Ring & Hover Motion */}
                    <motion.div 
                      animate={{
                        boxShadow: [
                          "0 0 0 0px rgba(205,0,7,0.12)",
                          "0 0 0 10px rgba(205,0,7,0)",
                          "0 0 0 0px rgba(205,0,7,0.12)",
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        delay: index * 0.5,
                        ease: "easeInOut",
                      }}
                      whileHover={{ scale: 1.18, rotate: 12 }}
                      className="w-12 h-12 rounded-full bg-[#FAF7F1] border border-[#EAE5DC] flex items-center justify-center text-[#CD0007] mb-4 shadow-2xs group-hover/card:bg-[#CD0007] group-hover/card:text-white group-hover/card:border-[#CD0007] transition-colors duration-300 relative"
                    >
                      <Icon size={24} strokeWidth={1.5} />
                      <span className="absolute -top-1 -right-1 text-[10px] font-bold bg-[#CD0007] text-white w-5 h-5 rounded-full flex items-center justify-center border border-white">
                        {item.num}
                      </span>
                    </motion.div>

                    {/* Logo Red Heading */}
                    <h3 className="type-h3 text-[#CD0007] mb-2 group-hover/card:translate-y-[-2px] transition-transform">
                      {item.num} — {item.title}
                    </h3>

                    {/* Dark Body Text */}
                    <p className="type-body text-gray-700 max-w-[220px]">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Statement */}
        <p className="type-subtitle text-center font-medium text-[#111111] max-w-2xl mx-auto pt-2">
          Every project adds to a growing network of investors, filmmakers, and opportunities.
        </p>

      </div>
    </section>
  );
}
