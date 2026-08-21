"use client";

import Image from "next/image";
import { Search, BarChart3, ShieldCheck, PlayCircle, Play } from "lucide-react";
import { motion } from "framer-motion";
import VideoPlayerWithLoader from "@/components/ui/VideoPlayerWithLoader";

export default function ProjectSelection() {
  const steps = [
    {
      num: "01",
      icon: Search,
      title: "SOURCE",
      description: "Identify promising projects.",
      floatDuration: 4.2,
      floatDelay: 0,
    },
    {
      num: "02",
      icon: BarChart3,
      title: "EVALUATE",
      description: "Assess financial viability and commercial potential.",
      floatDuration: 4.8,
      floatDelay: 0.5,
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: "STRUCTURE",
      description: "Develop the appropriate investment structure.",
      floatDuration: 4.4,
      floatDelay: 1.0,
    },
    {
      num: "04",
      icon: PlayCircle,
      title: "EXECUTE",
      description: "Move selected projects toward production and distribution.",
      floatDuration: 5.0,
      floatDelay: 1.5,
    },
  ];

  return (
    <section id="selection-execution" className="py-8 sm:py-10 lg:py-12 bg-[#FAF7F1] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 space-y-10 sm:space-y-14">

        {/* Section Header & Right Video Card Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">

          {/* Left Side: Label, Heading & Description (~50% width / lg:col-span-6) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-3 text-left flex flex-col justify-center my-auto"
          >
            <h1 className="type-label font-extrabold uppercase text-[#CD0007]">
              PROJECT SELECTION
            </h1>

            <h2 className="type-h2 text-[#111111]">
              How Projects Are <span className="text-[#CD0007]">Selected & Managed</span>
            </h2>

            <p className="type-body text-gray-700 max-w-xl leading-relaxed pt-1">
              Disciplined project selection and professional execution are central to how Big Film
              Fund operates.

            </p>

            <p className="type-body text-gray-700 max-w-xl leading-relaxed">
              Every project is evaluated through a structured process before being oﬀered to
              investors - with a focus on financial viability, production discipline, and realistic path
              to distribution.
            </p>
          </motion.div>

          {/* Right Side: Video Card Player (Matching Opportunity Card Size ~50% width / lg:col-span-6) */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <VideoPlayerWithLoader
              primarySrc="/bff_video_5_job_done.mp4"
              aspectRatioClass="aspect-[16/9]"
              objectFitClass="object-cover object-center"
            />
          </div>

        </div>

        {/* 4-Step Selection Framework Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF8F3] border border-[#EAE5DC] rounded-2xl p-6 sm:p-10 shadow-xs"
        >
          <div className="text-center max-w-xl mx-auto mb-8">
            <p className="type-label font-extrabold uppercase text-[#CD0007]">
              THE SELECTION FRAMEWORK
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[#EAE5DC] gap-6 lg:gap-0">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  className={`flex flex-col items-center text-center px-4 sm:px-6 pt-6 sm:pt-0 pb-6 sm:pb-0 cursor-pointer ${idx !== 0 ? "lg:pl-6" : ""
                    }`}
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: item.floatDuration,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: item.floatDelay,
                    }}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="flex flex-col items-center text-center w-full group/card"
                  >
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
                        delay: idx * 0.5,
                        ease: "easeInOut",
                      }}
                      whileHover={{ scale: 1.18, rotate: 12 }}
                      className="w-16 h-16 rounded-full bg-[#FAF7F1] border border-[#EAE5DC] flex items-center justify-center text-[#CD0007] mb-5 shadow-2xs shrink-0 group-hover/card:bg-[#CD0007] group-hover/card:text-white group-hover/card:border-[#CD0007] transition-colors duration-300 relative"
                    >
                      <Icon size={28} strokeWidth={1.4} />
                    </motion.div>

                    <h3 className="type-h3 text-[#CD0007] mb-2 group-hover/card:translate-y-[-2px] transition-transform uppercase">
                      {item.title}
                    </h3>

                    <p className="type-small text-gray-700 max-w-[200px]">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>


        </motion.div>

      </div>
    </section>
  );
}
