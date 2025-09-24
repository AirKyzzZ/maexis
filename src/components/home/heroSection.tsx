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


