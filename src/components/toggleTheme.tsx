'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

type ToggleThemeProps = {
  className?: string;
};

export default function ToggleTheme({ className }: ToggleThemeProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={className}
      aria-label="Toggle theme"
      role="switch"
      aria-checked={isDark}
      title={isDark ? 'Switch to light' : 'Switch to dark'}
    >
      {/* Track */}
      <span
        className={`relative inline-flex items-center h-6 w-10 rounded-full transition-colors duration-300 ${
          isDark ? 'bg-[var(--color-foreground)]/25' : 'bg-[var(--color-foreground)]/15'
        }`}
      >
        {/* Knob with icon inside */}
        <span
          className={`relative inline-flex items-center justify-center h-5 w-5 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.2)] transform transition-transform duration-300 ease-out ${
            isDark ? 'translate-x-4' : 'translate-x-1'
          }`}
        >
          <Sun
            className={`absolute w-3.5 h-3.5 transition-opacity ${
              isDark ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ color: 'var(--color-primary)' }}
            aria-hidden="true"
          />
          <Moon
            className={`absolute w-3.5 h-3.5 transition-opacity ${
              isDark ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ color: 'var(--color-secondary)' }}
            aria-hidden="true"
          />
        </span>
      </span>
    </button>
  );
}
