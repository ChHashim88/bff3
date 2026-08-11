"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavigationProps {
  onOpenWaitlist: () => void;
}

export default function Navigation({ onOpenWaitlist }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "The Problem", href: "#the-problem" },
    { name: "Our Solution", href: "#our-solution" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "FAQ", href: "#faq" },
    { name: "Leadership", href: "#leadership" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-header transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand Logo - Enlarged visually without expanding header height */}
        <a href="#" className="flex items-center group shrink-0 transition-transform duration-300 hover:scale-105 py-1">
          <div className="relative flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Big Film Fund Logo"
              width={380}
              height={120}
              priority
              className="h-18 sm:h-22 lg:h-24 w-auto object-contain scale-110 sm:scale-125 origin-left"
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs xl:text-sm font-medium text-gray-700">
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`relative py-1 transition-colors duration-200 whitespace-nowrap ${
                  isActive
                    ? "text-[#cd0007] font-semibold"
                    : "text-gray-700 hover:text-[#cd0007]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#cd0007] rounded-full animate-fadeIn" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Menu Actions */}
        <div className="flex items-center gap-3">
          {/* Join Waitlist Button */}
          <button
            onClick={onOpenWaitlist}
            className="hidden sm:inline-flex btn-red text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full items-center gap-1.5 active:scale-95 cursor-pointer shrink-0"
          >
            <span>Join the Waitlist</span>
            <ArrowRight size={15} />
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-[#cd0007] hover:bg-red-50/50 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/80 px-6 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  activeTab === link.name
                    ? "bg-red-50 text-[#cd0007] font-semibold"
                    : "text-gray-700 hover:text-[#cd0007] hover:bg-gray-50"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 sm:hidden">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenWaitlist();
                }}
                className="w-full btn-red text-white text-sm font-semibold py-3 rounded-full flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join the Waitlist</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
