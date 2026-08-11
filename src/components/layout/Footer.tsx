"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/60 bg-white/40 backdrop-blur-md text-gray-600 pt-8 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2025 Big Film Fund. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 text-gray-500">
            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-white/80 border border-white/90 shadow-sm flex items-center justify-center hover:text-[#cd0007] hover:border-[#cd0007]/30 transition-colors text-xs font-bold"
            >
              in
            </a>
            {/* Twitter / X */}
            <a
              href="#"
              aria-label="Twitter X"
              className="w-8 h-8 rounded-full bg-white/80 border border-white/90 shadow-sm flex items-center justify-center hover:text-[#cd0007] hover:border-[#cd0007]/30 transition-colors text-xs font-bold"
            >
              x
            </a>
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-white/80 border border-white/90 shadow-sm flex items-center justify-center hover:text-[#cd0007] hover:border-[#cd0007]/30 transition-colors text-xs font-bold"
            >
              ig
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
