import Hero from '@/src/components/hero'
import React from 'react'

export default function BudgetHeroSection() {
  return (
    <section className="relative px-4 min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="pointer-events-none absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, var(--color-secondary), transparent 70%)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 w-[520px] h-[520px] rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, var(--color-primary), transparent 70%)' }}
        aria-hidden
      />
      <Hero
        title={(
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Budgets</span>{' '}
            <span className="animated-gradient-text">& Forecasts</span>
          </h1>
        )}
        description={(
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-foreground-80">
            Set targets, collaborate with teams, and see real-time variance vs. plan.
          </p>
        )}
        primaryButton={{ label: 'Create a budget', variant: 'primary', size: 'lg' }}
        secondaryButton={{ label: 'Import data', variant: 'outline', size: 'lg' }}
        disclaimerText={''}
      />
    </section>
  )
}


