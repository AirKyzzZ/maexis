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
    </section>
  )
}


