'use client';

import { ChevronDown } from 'lucide-react';

type ScrollIconProps = {
  className?: string;
};

export default function ScrollIcon({ className }: ScrollIconProps) {
  const scrollToNext = () => {
    // Get the next section or scroll down by viewport height
    const nextSection = document.querySelector('main')?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If no next section, scroll down by viewport height
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToNext}
      className={`group flex flex-col items-center justify-center gap-1 sm:gap-2 p-2 sm:p-3 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-50 rounded-full scroll-icon-idle ${className}`}
      aria-label="Scroll down"
      title="Scroll down"
    >
      {/* Animated scroll indicator */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs sm:text-sm font-medium text-foreground-50 group-hover:text-foreground-80 transition-colors duration-300 hidden sm:block">
          Scroll
        </span>
        <ChevronDown 
          className="w-5 h-5 sm:w-6 sm:h-6 text-foreground-50 group-hover:text-foreground-80 transition-all duration-300 group-hover:translate-y-1" 
          style={{ color: 'var(--color-foreground)' }}
        />
      </div>
      
      {/* Animated dots indicator */}
      <div className="flex flex-col gap-0.5 sm:gap-1">
        <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-foreground-30 group-hover:bg-foreground-50 transition-colors duration-300 scroll-dots"></div>
        <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-foreground-30 group-hover:bg-foreground-50 transition-colors duration-300 scroll-dots"></div>
        <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-foreground-30 group-hover:bg-foreground-50 transition-colors duration-300 scroll-dots"></div>
      </div>
    </button>
  );
}
