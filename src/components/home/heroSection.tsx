import Hero from '@/src/components/hero'
import React from 'react'

export default function HeroSection() {
  return (
    <section className="relative px-4 min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 -left-24 w-[460px] h-[460px] rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, var(--color-secondary), transparent 70%)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-28 -right-24 w-[560px] h-[560px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, var(--color-primary), transparent 70%)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[240px] rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(var(--color-foreground-rgb),0.25), transparent 65%)' }}
        aria-hidden
      />

      {/* Decorative floating icons */}
      <svg className="absolute left-10 top-28 w-8 h-8 text-[var(--color-secondary)] opacity-70 float-slow" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"/>
      </svg>
      <svg className="absolute right-12 bottom-32 w-6 h-6 text-[var(--color-primary)] opacity-60 float-slow" style={{ animationDelay: '1.2s' }} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>
      </svg>

      <Hero
        title={(
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-foreground">Transform Your</span>{' '}
            <span className="animated-gradient-text">Business</span>
            <br />
            <span className="text-foreground">with</span>{' '}
            <span className="animated-gradient-text">Smart</span>{' '}
            <span className="text-foreground">Solutions</span>
          </h1>
        )}
        description={(
          <p className="text-lg sm:text-xl mb-8 text-foreground-80 max-w-2xl mx-auto text-center">
            Discover innovative tools and streamline your workflow with our cutting-edge platform designed for modern businesses.
          </p>
        )}
        primaryButton={{ label: 'Get Started', variant: 'primary', size: 'lg' }}
        secondaryButton={{ label: 'Learn More', variant: 'outline', size: 'lg' }}
        disclaimerText={'GDPR Compliant - No credit card required'}
      />
    </section>
  )
}


