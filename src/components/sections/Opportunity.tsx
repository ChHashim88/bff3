"use client";

import { useRef, useState } from "react";
import { Film, Cpu, TrendingUp, Sparkles, Layers, Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Opportunity() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        (videoRef.current as any).webkitRequestFullscreen();
      }
    }
  };

  const cards = [
    {
      icon: Film,
      title: "Entertainment",
      description: "One of the world's most consumed and culturally resonant forms of media.",
      floatDuration: 4.2,
      floatDelay: 0,
    },
    {
      icon: Cpu,
      title: "Technology",
      description: "Data-driven selection frameworks and scalable digital platform infrastructure.",
      floatDuration: 4.8,
      floatDelay: 0.5,
    },
    {
      icon: TrendingUp,
      title: "Alternative Investing",
      description: "Democratized access to institutional-grade, non-correlated asset classes.",
      floatDuration: 4.4,
      floatDelay: 1.0,
    },
    {
      icon: Sparkles,
      title: "Powerful Synergy",
      description: "Where creative passion meets modern financial discipline and structure.",
      floatDuration: 5.0,
      floatDelay: 1.5,
    },
    {
      icon: Layers,
      title: "A New Path",
      description: "Creating direct, transparent investor access to feature film opportunities.",
      floatDuration: 4.6,
      floatDelay: 2.0,
    },
  ];

  return (
    <section id="the-opportunity" className="py-8 sm:py-10 lg:py-12 bg-[#FAF7F1] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 space-y-8 sm:space-y-10">

        {/* Single Large Rounded Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF8F3] border border-[#EAE5DC] rounded-2xl p-6 sm:p-10 shadow-xs space-y-8 sm:space-y-10"
        >
          {/* Top Row: 2-Column Composition (Structured Exactly Like The Platform) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">

            {/* LEFT SIDE: Headline & Description (~50% width / lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">

              <div className="space-y-3">
                <p className="type-label font-medium uppercase text-[#CD0007]">
                  THE OPPORTUNITY
                </p>

                {/* Headline */}
                <h2 className="type-h2">
                  <span className="text-[#111111] block">Where Entertainment</span>
                  <span className="text-[#CD0007] block">Meets Investing.</span>
                </h2>

                {/* Paragraphs */}
                <p className="type-body text-gray-700 max-w-xl">
                  Film is one of the world’s most consumed forms of entertainment—yet remains one of the least accessible asset classes for investors.
                </p>

                <div className="pt-2 space-y-2">
                  <p className="type-subtitle font-medium text-[#111111]">
                    Big Film Fund brings together three powerful forces:
                  </p>
                  <p className="type-h3 text-[#CD0007] font-semibold">
                    Entertainment + Technology + Alternative Investing
                  </p>
                  <p className="type-body font-medium text-[#111111] pt-1">
                    The result: a platform designed to create a new path into film investment.
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE: Cinematic Video Player (~50% width / lg:col-span-6) */}
            <div className="lg:col-span-6 flex items-center">
              <div className="relative rounded-2xl border border-[#EAE5DC] overflow-hidden shadow-xl aspect-[16/9] lg:aspect-[4/3] bg-[#111111] group w-full min-h-[300px] sm:min-h-[360px]">
                
                {/* HTML5 Video Player */}
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="/ggh.jpeg"
                  className="w-full h-full object-cover object-center"
                >
                  <source src="/bff_opportunity.mp4" type="video/mp4" />
                  <source src="https://www.dropbox.com/scl/fo/fr0i9s0r31wvmmwctfvf3/AFh6UsocgRbT7qBuWEtkWa8/bff_promo_3_the_opportunity_260611_v2.mp4?dl=1&rlkey=d1069gkyon7op9goc3htz7340" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Ambient Soft Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Floating Interactive Controls */}
                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#CD0007] hover:border-[#CD0007] transition-all cursor-pointer shadow-lg"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>

                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#CD0007] hover:border-[#CD0007] transition-all cursor-pointer shadow-lg"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} className="translate-x-0.5" />}
                  </button>

                  <button
                    onClick={toggleFullscreen}
                    className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#CD0007] hover:border-[#CD0007] transition-all cursor-pointer shadow-lg"
                    aria-label="Full screen"
                    title="Full Screen"
                  >
                    <Maximize2 size={18} />
                  </button>
                </div>

                {/* Bottom Left Video Badge */}
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-[#CD0007] animate-pulse" />
                  <span className="text-[11px] font-semibold text-white uppercase tracking-wider">
                    THE OPPORTUNITY DEMO
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* 5 Feature Cards Grid (1 Row on Desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 pt-4 border-t border-[#EAE5DC]">
            {cards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                  className="bg-transparent border border-[#EAE5DC] rounded-xl p-5 sm:p-6 flex flex-col items-center text-center shadow-2xs group cursor-pointer hover:shadow-md transition-all duration-300 min-h-[260px] justify-between"
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
                    className="flex flex-col items-center text-center w-full group/card h-full justify-between"
                  >
                    {/* Circular Icon Badge */}
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
                      className="w-[64px] h-[64px] rounded-full bg-[#FAF7F1] border border-[#EAE5DC] flex items-center justify-center text-[#CD0007] my-2 shrink-0 group-hover/card:bg-[#CD0007] group-hover/card:text-white group-hover/card:border-[#CD0007] transition-colors duration-300"
                    >
                      <Icon size={30} strokeWidth={1.4} />
                    </motion.div>

                    {/* Card Title & Description */}
                    <div className="space-y-2">
                      <h3 className="type-h3 text-[#CD0007] group-hover/card:translate-y-[-2px] transition-transform">
                        {item.title}
                      </h3>
                      <p className="type-small text-gray-700 max-w-[180px] mx-auto">
                        {item.description}
                      </p>
                    </div>
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
