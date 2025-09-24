"use client";
import React from 'react'
import Hero from '@/src/components/hero'
import { useTranslation } from 'react-i18next'

export default function PricingHeroSection() {
  const { t } = useTranslation('common')
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
          className="text-center"
          title={(
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">{t('pricing.heroTitleA')}</span>{' '}
              <span className="animated-gradient-text">{t('pricing.heroTitleB')}</span>
              <span className="block text-foreground">{t('pricing.heroTitleC')}</span>
            </h1>
          )}
          description={(
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-foreground-80">{t('pricing.heroSubtitle')}</p>
          )}
          primaryButton={{ label: 'Start for free', variant: 'primary', size: 'lg' }}
          secondaryButton={{ label: 'Book a demo', variant: 'outline', size: 'lg' }}
          disclaimerText={''}
        />

        {/* Quick reassurance chips */}
        <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
          <span className="clients-chip">{t('chips.noCard')}</span>
          <span className="clients-chip">{t('chips.cancelAnytime')}</span>
          <span className="clients-chip clients-chip-contrast">{t('chips.gdpr')}</span>
        </div>
      </div>
    </section>
  )
}



