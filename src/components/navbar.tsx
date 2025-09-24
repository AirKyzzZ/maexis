'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Button  from '@/src/components/button';
import ToggleTheme from '@/src/components/toggleTheme';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isApplicationsOpen, setIsApplicationsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const applicationsTriggerRef = useRef<HTMLDivElement | null>(null);
  const applicationsMenuRef = useRef<HTMLDivElement | null>(null);
  const hoverCloseTimeoutRef = useRef<number | null>(null);

  const clearHoverCloseTimeout = () => {
    if (hoverCloseTimeoutRef.current) {
      window.clearTimeout(hoverCloseTimeoutRef.current);
      hoverCloseTimeoutRef.current = null;
    }
  };

  const scheduleHoverClose = () => {
    clearHoverCloseTimeout();
    hoverCloseTimeoutRef.current = window.setTimeout(() => {
      setIsApplicationsOpen(false);
    }, 150);
  };

  useEffect(() => {
    const getInitial = () => {
      try {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark') return true;
        if (saved === 'light') return false;
      } catch {}
      if (document.documentElement.classList.contains('dark')) return true;
      if (document.documentElement.classList.contains('light')) return false;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    setIsDarkTheme(getInitial());

    const observer = new MutationObserver(() => {
      setIsDarkTheme(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        isApplicationsOpen &&
        applicationsTriggerRef.current &&
        !applicationsTriggerRef.current.contains(target) &&
        applicationsMenuRef.current &&
        !applicationsMenuRef.current.contains(target)
      ) {
        setIsApplicationsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isApplicationsOpen]);

  return (
    <nav 
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4"
    >
      <div className="bg-[var(--color-background)] rounded-full shadow-lg border-1 border-[var(--color-primary)] dark:border-[var(--color-primary)]">
        <div className="relative flex items-center justify-between px-6 py-3">
          {/* Left side - Navigation links */}
          <div className="hidden md:flex items-center space-x-1 relative z-10">
            <Link 
              href="/" 
              className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 text-foreground dark:text-white hover:bg-[var(--color-secondary)] hover:!text-white dark:hover:bg-[var(--color-primary)] dark:hover:!text-white"
            >
              Home
            </Link>
            
            {/* Applications Dropdown */}
            <div className="relative" ref={applicationsTriggerRef} onMouseEnter={() => { clearHoverCloseTimeout(); setIsApplicationsOpen(true); }} onMouseLeave={scheduleHoverClose}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsApplicationsOpen(!isApplicationsOpen);
                }}
                className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 flex items-center space-x-1 text-foreground dark:text-white hover:bg-[var(--color-secondary)] hover:!text-white dark:hover:bg-[var(--color-primary)] dark:hover:!text-white"
              >
                <span>Applications</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isApplicationsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu (desktop popover) disabled in favor of full-width bar below */}
              {false && isApplicationsOpen && (
                <div className="hidden" />
              )}
            </div>
            
            <Link 
              href="/pricing" 
              className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 text-foreground dark:text-white hover:bg-[var(--color-secondary)] hover:!text-white dark:hover:bg-[var(--color-primary)] dark:hover:!text-white"
            >
              Pricing
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 text-foreground dark:text-white hover:bg-[var(--color-secondary)] hover:!text-white dark:hover:bg-[var(--color-primary)] dark:hover:!text-white"
            >
              Contact
            </Link>
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
            <Link href="/" className="flex items-center">
              <Image
                src={isDarkTheme ? '/logoBlack.svg' : '/logoWhite.svg'}
                alt="Maexis logo"
                width={42}
                height={42}
                className="w-12 h-12"
                priority
              />
            </Link>
          </div>

          {/* Right side - Theme, Language, CTA buttons */}
          <div className="hidden md:flex items-center space-x-4 relative z-10">
            {/* Theme toggle (pill) - no hover bg in dark mode */}
            <ToggleTheme className="px-1 py-1 rounded-full hover:bg-gray-100 dark:hover:bg-transparent dark:hover:!bg-transparent transition-all duration-300" />

            {/* Language selector (FR + chevron with list) */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLanguageOpen(!isLanguageOpen);
                }}
                className="px-3 py-2 text-sm font-medium rounded-full transition-all flex items-center gap-1 text-foreground hover:bg-[var(--color-secondary)] hover:!text-white dark:hover:bg-[var(--color-primary)] dark:hover:!text-white"
                aria-haspopup="listbox"
                aria-expanded={isLanguageOpen}
              >
                FR
                <svg className={`w-4 h-4 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-200 py-1 z-50" onClick={(e)=>e.stopPropagation()}>
                  <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100" onClick={()=>setIsLanguageOpen(false)}>FR</button>
                  <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100" onClick={()=>setIsLanguageOpen(false)}>EN</button>
                </div>
              )}
            </div>
            <Link href="/login" className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 text-foreground dark:text-white hover:bg-[var(--color-secondary)] hover:!text-white dark:hover:bg-[var(--color-primary)] dark:hover:!text-white">
              Login
            </Link>
            <Button variant="primary" size="sm" className="text-white">Sign Up</Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-700 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden px-6 pb-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="flex flex-col space-y-2 mt-4">
              <Link 
                href="/" 
                className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 text-foreground dark:text-white hover:bg-[var(--color-primary)] hover:!text-white dark:hover:bg-[var(--color-primary)] dark:hover:!text-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Applications Section */}
              <div>
                <div className="px-4 py-2 text-sm font-semibold text-foreground">
                  Applications
                </div>
                <div className="ml-4 space-y-1">
                  <Link 
                    href="/finance" 
                    className="block px-4 py-2 text-sm hover:text-[var(--color-primary)] hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white rounded-full transition-all duration-200 text-foreground dark:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Financial Management
                  </Link>
                  <Link 
                    href="/finance/budget" 
                    className="block px-4 py-2 text-sm hover:text-[var(--color-primary)] hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white rounded-full transition-all duration-200 text-foreground dark:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Budget Planning
                  </Link>
                  <Link 
                    href="/finance/expenses" 
                    className="block px-4 py-2 text-sm hover:text-[var(--color-primary)] hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white rounded-full transition-all duration-200 text-foreground dark:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Expense Tracking
                  </Link>
                </div>
              </div>
              <Link 
                href="/pricing" 
                className="px-4 py-2 text-sm font-medium hover:text-[var(--color-primary)] hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white rounded-full transition-all duration-200 text-foreground dark:text-white"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/contact" 
                className="px-4 py-2 text-sm font-medium hover:text-[var(--color-primary)] hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white rounded-full transition-all duration-200 text-foreground dark:text-white"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200/50 dark:border-gray-700/50">
                <Link 
                  href="/login" 
                  className="px-4 py-2 text-sm font-medium hover:text-[var(--color-primary)] hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white rounded-full transition-all duration-200 text-foreground dark:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  href="/signup" 
                  className="px-4 py-2 text-sm font-medium text-white rounded-full transition-all duration-200 shadow-md hover:shadow-lg text-center"
                  style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Full-width submenu bar (desktop only) */}
      {isApplicationsOpen && (
        <div className="hidden md:block mt-2 w-full max-w-6xl mx-auto" ref={applicationsMenuRef} onMouseEnter={clearHoverCloseTimeout} onMouseLeave={scheduleHoverClose}>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 py-4">
            <div className="px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Finance Section */}
                <div>
                  <h3 className="text-sm font-semibold mb-3 text-foreground">
                    Finance
                  </h3>
                  <div className="space-y-2">
                    <Link 
                      href="/finance" 
                      className="block px-3 py-2 text-sm rounded-lg transition-all duration-200 text-foreground hover:bg-[var(--color-secondary)] hover:!text-white dark:hover:bg-[var(--color-primary)] dark:hover:!text-white"
                      onClick={() => setIsApplicationsOpen(false)}
                    >
                      Financial Management
                    </Link>
                    <Link 
                      href="/finance/budget" 
                      className="block px-3 py-2 text-sm rounded-lg transition-all duration-200 text-foreground hover:bg-[var(--color-secondary)] hover:!text-white dark:hover:bg-[var(--color-primary)] dark:hover:!text-white"
                      onClick={() => setIsApplicationsOpen(false)}
                    >
                      Budget Planning
                    </Link>
                    <Link 
                      href="/finance/expenses" 
                      className="block px-3 py-2 text-sm rounded-lg transition-all duration-200 text-foreground hover:bg-[var(--color-secondary)] hover:!text-white dark:hover:bg-[var(--color-primary)] dark:hover:!text-white"
                      onClick={() => setIsApplicationsOpen(false)}
                    >
                      Expense Tracking
                    </Link>
                  </div>
                </div>

                {/* Placeholder Sections */}
                <div>
                  <h3 className="text-sm font-semibold mb-3 opacity-60 text-foreground dark:text-background">
                    Productivity
                  </h3>
                  <div className="space-y-2">
                    <div className="px-3 py-2 text-sm opacity-60 text-foreground dark:text-background">
                      Task Management
                    </div>
                    <div className="px-3 py-2 text-sm opacity-60 text-background">
                      Project Planning
                    </div>
                    <div className="px-3 py-2 text-sm opacity-60 text-background">
                      Team Collaboration
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold mb-3 opacity-60 text-background">
                    Analytics
                  </h3>
                  <div className="space-y-2">
                    <div className="px-3 py-2 text-sm opacity-60 text-background">
                      Business Intelligence
                    </div>
                    <div className="px-3 py-2 text-sm opacity-60 text-background">
                      Data Visualization
                    </div>
                    <div className="px-3 py-2 text-sm opacity-60 text-background">
                      Performance Metrics
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
