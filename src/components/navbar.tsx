'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div className="bg-background rounded-full shadow-lg border-2 border-gray-200"
           style={{ 
             '--primary': '#4FD1C5',
             '--secondary': '#1D3A80',
             '--background': '#F5F5F5',
             '--foreground': '#333333'
           } as React.CSSProperties}>
        <div className="flex items-center justify-between px-6 py-3">
          {/* Left side - Navigation links */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className="px-4 py-2 text-sm font-medium hover:text-[var(--primary)] hover:bg-gray-100 rounded-full transition-all duration-200"
              style={{ color: 'var(--foreground)' }}
            >
              Home
            </Link>
            <Link 
              href="/pricing" 
              className="px-4 py-2 text-sm font-medium hover:text-[var(--primary)] hover:bg-gray-100 rounded-full transition-all duration-200"
              style={{ color: 'var(--foreground)' }}
            >
              Pricing
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 text-sm font-medium hover:text-[var(--primary)] hover:bg-gray-100 rounded-full transition-all duration-200"
              style={{ color: 'var(--foreground)' }}
            >
              Contact
            </Link>
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logoWhite.svg" 
                alt="Maexis logo" 
                width={42} 
                height={42}
                className="w-12 h-12"
              />
            </Link>
          </div>

          {/* Right side - CTA buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              href="/login" 
              className="px-4 py-2 text-sm font-medium hover:text-[var(--primary)] hover:bg-gray-100 rounded-full transition-all duration-200"
              style={{ color: 'var(--foreground)' }}
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="px-4 py-2 text-sm font-medium text-white rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))' }}
            >
              Sign Up
            </Link>
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
                className="px-4 py-2 text-sm font-medium hover:text-[var(--primary)] hover:bg-gray-100 rounded-full transition-all duration-200"
                style={{ color: 'var(--foreground)' }}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/pricing" 
                className="px-4 py-2 text-sm font-medium hover:text-[var(--primary)] hover:bg-gray-100 rounded-full transition-all duration-200"
                style={{ color: 'var(--foreground)' }}
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/contact" 
                className="px-4 py-2 text-sm font-medium hover:text-[var(--primary)] hover:bg-gray-100 rounded-full transition-all duration-200"
                style={{ color: 'var(--foreground)' }}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200/50 dark:border-gray-700/50">
                <Link 
                  href="/login" 
                  className="px-4 py-2 text-sm font-medium hover:text-[var(--primary)] hover:bg-gray-100 rounded-full transition-all duration-200"
                  style={{ color: 'var(--foreground)' }}
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  href="/signup" 
                  className="px-4 py-2 text-sm font-medium text-white rounded-full transition-all duration-200 shadow-md hover:shadow-lg text-center"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))' }}
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
