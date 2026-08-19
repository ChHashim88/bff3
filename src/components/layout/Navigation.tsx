"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, User } from "lucide-react";

interface NavigationProps {
  onOpenWaitlist: () => void;
  activeSection?: string;
}

export default function Navigation({ onOpenWaitlist, activeSection = "Home" }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Why BFF", href: "#why-bff" },
    { name: "The Problem", href: "#the-problem" },
    { name: "Our Solution", href: "#our-solution" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "The Opportunity", href: "#the-opportunity" },
    { name: "Selection & Execution", href: "#selection-execution" },
    { name: "The Investment", href: "#the-investment" },
    { name: "Founders Club", href: "#founders-club" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full pt-2 sm:pt-3 pb-1.5 sm:pb-2 px-3 sm:px-8 lg:px-12 xl:px-16">
      {/* Floating Translucent Pill Container (Mobile height h-[54px], Desktop height h-[76px]) */}
      <div className="max-w-[1536px] mx-auto bg-white/80 backdrop-blur-xl border border-[#EAE5DC] shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-full h-[54px] sm:h-[76px] px-3.5 sm:px-6 lg:px-7 flex items-center justify-between gap-2 sm:gap-6">

        {/* Left Logo: Tightly Cropped ~3x Larger Visual Display */}
        <a href="#" className="flex items-center group shrink-0 py-0.5 sm:py-1">
          <Image
            src="/logo.png"
            alt="Big Film Fund Logo"
            width={240}
            height={100}
            className="h-7 sm:h-12 lg:h-[52px] w-auto object-contain group-hover:scale-[1.03] transition-transform duration-300"
            priority
          />
        </a>

        {/* Desktop Navigation Links (Exact Navigation Spec: SF Pro Text, 12px, weight 400, leading 1.20, tracking 0) */}
        <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3.5 type-nav text-[#111111]">
          {navLinks.map((link) => {
            const isActive = activeSection.toLowerCase() === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 whitespace-nowrap flex flex-col items-center group ${
                  isActive ? "text-[#CD0007] font-medium" : "hover:text-[#CD0007] text-[#111111]/85"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute -bottom-2 w-1.5 h-1.5 bg-[#CD0007] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button (Hidden on mobile header, visible on desktop >=1024px) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenWaitlist}
            className="hidden lg:inline-flex items-center gap-1.5 sm:gap-2 bg-[#CD0007] hover:bg-[#A60005] text-white type-nav font-medium px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-xs active:scale-95 cursor-pointer shrink-0"
          >
            <User size={13} className="shrink-0" />
            <span className="whitespace-nowrap text-[11px] sm:text-xs">Join Waitlist</span>
          </button>

          {/* Hamburger Menu Button (Mobile/Tablet <1024px) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-md text-[#111111] hover:bg-[#FAF7F1] transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile/Tablet Drawer Navigation Overlay (Keeps Join Waitlist button inside the list) */}
      {isMobileMenuOpen && (
        <div className="mt-2 max-w-[1536px] mx-auto lg:hidden bg-white/98 backdrop-blur-xl border border-[#EAE5DC] rounded-3xl p-5 shadow-2xl z-50 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="type-nav font-medium text-[#111111] hover:text-[#CD0007] px-3 py-2 rounded-md hover:bg-[#FAF7F1] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-[#EAE5DC]">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenWaitlist();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#CD0007] hover:bg-[#A60005] text-white type-cta font-medium px-5 py-3 rounded-full transition-all shadow-sm cursor-pointer"
              >
                <User size={16} />
                <span>Join Waitlist</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
