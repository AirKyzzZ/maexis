import Hero from '@/src/components/hero'
import React from 'react'

export default function HeroSection() {
  return (
    <section className="relative px-4 min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="pointer-events-none absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, var(--color-secondary), transparent 70%)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 w-[520px] h-[520px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, var(--color-primary), transparent 70%)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[200px] rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(var(--color-foreground-rgb),0.25), transparent 65%)' }}
        aria-hidden
      />

      {/* Decorative floating finance-themed icon */}
      <svg className="absolute right-10 top-24 w-8 h-8 text-[var(--color-secondary)] opacity-70 float-slow" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4 4h16v2H4zM4 18h16v2H4zM6 8h4v8H6zM14 10h4v6h-4z"/>
      </svg>
      <svg className="absolute left-10 bottom-28 w-7 h-7 text-[var(--color-primary)] opacity-60 float-slow" style={{ animationDelay: '1s' }} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M3 13h4l3 7 4-14 3 7h4" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        <Hero
          title={(
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Pilot your</span>{' '}
              <span className="animated-gradient-text">Finance</span>
              <span className="block text-foreground">with Confidence</span>
            </h1>
          )}
          description={(
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-foreground-80">
              Budgets, cash flows, invoices — all in one place. Close faster, forecast smarter,
              and share clear insights with your team.
            </p>
          )}
          primaryButton={{ label: 'Start free trial', variant: 'primary', size: 'lg' }}
          secondaryButton={{ label: 'Book a demo', variant: 'outline', size: 'lg' }}
          disclaimerText={''}
        />
      </div>
      {/* Bottom fade to blend into next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-36"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, var(--color-background) 85%)'
        }}
      />
    </section>
  )
}


