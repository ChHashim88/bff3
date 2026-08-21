"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, User } from "lucide-react";

interface NavigationProps {
  onOpenWaitlist: () => void;
  activeSection?: string;
}

export default function Navigation({ onOpenWaitlist, activeSection = "Home" }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(activeSection);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Why BFF", href: "#why-bff" },
    { name: "Problem", href: "#the-problem" },
    { name: "Platform", href: "#our-solution" },
    { name: "Opportunity", href: "#the-opportunity" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Investment", href: "#the-investment" },
    { name: "Founders Club", href: "#founders-club" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact Us", href: "#contact" },
  ];

  // Dynamic Scroll & Section Detection
  useEffect(() => {
    const sectionIds = [
      { id: "why-bff", name: "Why BFF" },
      { id: "the-problem", name: "Problem" },
      { id: "our-solution", name: "Platform" },
      { id: "the-opportunity", name: "Opportunity" },
      { id: "how-it-works", name: "How It Works" },
      { id: "the-investment", name: "Investment" },
      { id: "founders-club", name: "Founders Club" },
      { id: "faq", name: "FAQ" },
      { id: "contact", name: "Contact" },
    ];

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);

          if (window.scrollY < 120) {
            setActiveNav((prev) => (prev !== "Home" ? "Home" : prev));
            ticking = false;
            return;
          }

          const scrollPosition = window.scrollY + 200;

          for (const item of sectionIds) {
            const el = document.getElementById(item.id);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveNav((prev) => (prev !== item.name ? item.name : prev));
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { name: string; href: string }) => {
    setActiveNav(link.name);
    if (link.href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
      ? "bg-[#FAF7F1]/85 backdrop-blur-xl border-b border-[#EAE5DC]/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
      : "bg-[#FAF7F1]/95 backdrop-blur-md border-b border-[#EAE5DC]/50"
      }`}>
      {/* Apple-style Full Width Container */}
      <div className="max-w-[1440px] mx-auto h-16 sm:h-16 px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-4">

        {/* Left Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveNav("Home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center group shrink-0 py-1"
        >
          <Image
            src="/logo.png"
            alt="Big Film Fund Logo"
            width={220}
            height={90}
            className="h-10 sm:h-10 w-auto object-contain group-hover:opacity-80 transition-opacity duration-200"
            priority
          />
        </a>

        {/* Desktop Navigation Links (Apple Style: Ultra-clean 12px SF Pro Text) */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[12px] font-normal tracking-tight text-[#111111]/75">
          {navLinks.map((link) => {
            const isActive = activeNav.toLowerCase() === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`transition-colors duration-200 whitespace-nowrap py-1 relative ${isActive
                  ? "text-[#CD0007] font-semibold"
                  : "hover:text-[#111111] text-[#111111]/70"
                  }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute -bottom-[9px] left-0 right-0 h-[2px] bg-[#CD0007] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Join Waitlist button & Mobile Hamburger List button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenWaitlist}
            className="inline-flex items-center gap-1.5 bg-[#CD0007] hover:bg-[#A60005] text-white text-[11px] sm:text-[12px] font-medium px-3 sm:px-4 py-1.5 rounded-full transition-all duration-200 shadow-2xs active:scale-95 cursor-pointer shrink-0"
          >
            <User size={12} className="shrink-0" />
            <span className="whitespace-nowrap">Join Waitlist</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-[#111111]/80 hover:text-[#111111] hover:bg-[#EAE5DC]/40 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile/Tablet Apple-style Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 lg:hidden bg-[#FAF7F1]/98 backdrop-blur-2xl border-b border-[#EAE5DC] px-6 pt-4 pb-8 shadow-2xl z-50 max-h-[calc(100vh-50px)] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeNav.toLowerCase() === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    handleNavClick(e, link);
                  }}
                  className={`text-[14px] sm:text-[15px] font-medium py-1.5 border-b border-[#EAE5DC]/40 transition-colors flex items-center justify-between ${isActive
                    ? "text-[#CD0007] font-semibold"
                    : "text-[#111111]/85 hover:text-[#CD0007]"
                    }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#CD0007]" />}
                </a>
              );
            })}
            <div className="pt-3 pb-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenWaitlist();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#CD0007] hover:bg-[#A60005] text-white text-sm font-medium px-5 py-3 rounded-full transition-all shadow-md cursor-pointer"
              >
                <User size={15} />
                <span>Join Waitlist</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
