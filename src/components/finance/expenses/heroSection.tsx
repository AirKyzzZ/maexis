import Hero from '@/src/components/hero'
import React from 'react'

export default function ExpensesHeroSection() {
  return (
    <section className="relative px-4 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute -top-28 -left-24 w-[380px] h-[380px] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(closest-side, var(--color-secondary), transparent 70%)' }} aria-hidden />
      <div className="pointer-events-none absolute -bottom-16 -right-24 w-[520px] h-[520px] rounded-full opacity-15 blur-3xl" style={{ background: 'radial-gradient(closest-side, var(--color-primary), transparent 70%)' }} aria-hidden />
      <Hero
        title={(
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Expenses</span>{' '}
            <span className="animated-gradient-text">& Receipts</span>
          </h1>
        )}
        description={(
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-foreground-80">
            Capture, approve, and reconcile expenses with policy checks.
          </p>
        )}
        primaryButton={{ label: 'Add expense', variant: 'primary', size: 'lg' }}
        secondaryButton={{ label: 'Set approval rules', variant: 'outline', size: 'lg' }}
        disclaimerText={''}
      />
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


