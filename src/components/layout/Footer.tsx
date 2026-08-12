"use client";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-700 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-medium gap-4">
          <p>© 2026 Big Film Fund. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
