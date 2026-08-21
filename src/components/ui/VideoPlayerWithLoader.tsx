"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

interface VideoPlayerWithLoaderProps {
  primarySrc: string;
  fallbackSrc?: string;
  poster?: string;
  badgeText?: string;
  aspectRatioClass?: string;
  objectFitClass?: string;
}

export default function VideoPlayerWithLoader({
  primarySrc,
  fallbackSrc,
  badgeText,
  aspectRatioClass = "aspect-[16/9]",
  objectFitClass = "object-cover object-center",
}: VideoPlayerWithLoaderProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(primarySrc);

  useEffect(() => {
    setCurrentSrc(primarySrc);
  }, [primarySrc]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.play().then(() => setIsPlaying(true)).catch(() => {});
  }, [currentSrc]);

  const handleVideoError = () => {
    if (currentSrc !== fallbackSrc && fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
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
    <div className={`relative rounded-2xl border border-[#EAE5DC] overflow-hidden shadow-xl bg-[#111111] group w-full h-auto sm:min-h-[320px] lg:min-h-[350px] ${aspectRatioClass}`}>
      
      {/* HTML5 Video Player */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onError={handleVideoError}
        className={`w-full h-full ${objectFitClass}`}
      >
        <source src={currentSrc} type="video/mp4" />
        {fallbackSrc && currentSrc !== fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
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
    </div>
  );
}
