"use client";

import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ThePlatform() {
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

  return (
    <section id="our-solution" className="py-8 sm:py-10 lg:py-12 bg-[#FAF7F1] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 space-y-8 sm:space-y-10">

        {/* 1. MAIN HEADLINE & MEDIA COMPOSITION */}
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
                <p className="type-label font-medium uppercase text-[#CD0007]">
                  THE PLATFORM
                </p>

                {/* Main Headline */}
                <h3 className="type-h2 font-semibold text-[#111111] leading-tight">
                  A New Model for<br />
                  <span className="text-[#CD0007]">Film Investing.</span>
                </h3>

                {/* Paragraph Content Stack */}
                <div className="space-y-4 text-gray-700">
                  <p className="type-body leading-relaxed">
                    Big Film Fund is designed to make film investing more accessible, structured, and repeatable.
                  </p>
                  <p className="type-body font-medium text-[#111111] border-l-2 border-[#CD0007] pl-3">
                    Instead of depending on one-off deals, the platform is built around a growing pipeline of projects.
                  </p>
                  <p className="type-body leading-relaxed">
                    A repeatable investment model engineered for transparency, deal clarity, and portfolio scalability over time.
                  </p>
                </div>
              </div>

              {/* Bottom Accent Callout (Hidden on mobile < 768px) */}
              <div className="hidden md:block pt-4 border-t border-[#EAE5DC]">
                <p className="type-subtitle font-medium text-[#CD0007]">
                  Film finance reimagined as a structured, scalable asset class.
                </p>
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
                  <source src="/bff_platform.mp4" type="video/mp4" />
                  <source src="https://www.dropbox.com/scl/fi/bff_promo_2_the_platform_260711_v2.mp4?rlkey=d1069gkyon7op9goc3htz7340&raw=1" type="video/mp4" />
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
                    THE PLATFORM DEMO
                  </span>
                </div>

              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
