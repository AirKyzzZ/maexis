"use client";
import React, { useState } from 'react'
import Button from '@/src/components/button'
import PlanCard, { Plan } from '@/src/components/pricing/PlanCard'
import { useTranslation } from 'react-i18next'

export default function PlansSection() {
  const { t } = useTranslation('common')
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')
  const plans: Plan[] = [
    {
      name: 'Free',
      monthlyPrice: 0,
      annualPrice: 0,
      tagline: '1 app of your choice, limited features',
      appsIncluded: '1 app',
      features: [
        'Basic capabilities',
        'Standard dashboards',
        'Community support'
      ],
      limits: ['Limited automation', 'Limited history', 'No custom roles'],
      ctaLabel: 'Start for free',
      note: 'More apps coming soon. Free plan will still allow any 1 app with limited features.'
    },
    {
      name: 'Starter',
      monthlyPrice: 29,
      annualPrice: 24,
      tagline: 'Any 3 apps, full features',
      appsIncluded: 'Up to 3 apps',
      features: [
        'All features unlocked',
        'Automations & integrations',
        'Email support'
      ],
      limits: ['Fair-use API limits'],
      ctaLabel: 'Choose Starter',
      highlight: true,
      support: 'Email (24–48h)'
    },
    {
      name: 'Pro',
      monthlyPrice: 79,
      annualPrice: 64,
      tagline: 'All apps, all features',
      appsIncluded: 'All current and future apps',
      features: [
        'Advanced controls & SSO',
        'Unlimited automations',
        'Priority support'
      ],
      ctaLabel: 'Go Pro',
      support: 'Priority (same business day)'
    }
  ]

  return (
    <section className="px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{t('pricing.plansHeading')}</h2>
          <p className="text-foreground-80">{t('pricing.plansSub')}</p>
        </div>
        <div className="flex items-center justify-center gap-2 mb-8">
          <Button
            variant={billing === 'monthly' ? 'primary' : 'outline'}
            size="sm"
            className={billing === 'monthly' ? '!text-white' : ''}
            onClick={() => setBilling('monthly')}
          >
            Monthly
          </Button>
          <Button
            variant={billing === 'annual' ? 'primary' : 'outline'}
            size="sm"
            className={billing === 'annual' ? '!text-white' : ''}
            onClick={() => setBilling('annual')}
          >
            Annual
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} billingCycle={billing} />
          ))}
        </div>
      </div>
    </section>
  )
}



