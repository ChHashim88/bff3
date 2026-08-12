"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onOpenWaitlist: () => void;
}

export default function Navigation({ onOpenWaitlist }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Why BFF", href: "#why-bff" },
    { name: "The Problem", href: "#the-problem" },
    { name: "Our Solution", href: "#our-solution" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Investment", href: "#investment" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center group shrink-0 h-full py-1 -ml-5 sm:-ml-4 lg:ml-0">
          <Image
            src="/logo.png"
            alt="Big Film Fund Logo"
            width={480}
            height={120}
            priority
            className="h-full w-auto object-contain object-left scale-230 sm:scale-175 origin-left transition-transform group-hover:scale-240"
          />
        </a>

        {/* Desktop Navigation Links (Visible on lg screens 1024px+) */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs xl:text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#B91C1C] transition-colors duration-200 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA & Menu Actions */}
        <div className="flex items-center gap-3">
          {/* Join Waitlist Button (Visible on sm+ screens) */}
          <button
            onClick={onOpenWaitlist}
            className="hidden sm:inline-flex bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-sm transition-all duration-200 shadow-sm active:scale-95 cursor-pointer shrink-0"
          >
            Join the Waitlist
          </button>

          {/* Hamburger Menu Button (Visible below lg screens <1024px) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Drawer Navigation Overlay (<1024px) */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 lg:hidden bg-white/98 backdrop-blur-xl border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl z-50">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-[#B91C1C] px-2 py-2 rounded-md hover:bg-gray-50 transition-colors"
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
                className="w-full bg-[#B91C1C] hover:bg-[#991B1B] text-white text-sm font-semibold py-3 rounded-sm transition-colors text-center cursor-pointer"
              >
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
