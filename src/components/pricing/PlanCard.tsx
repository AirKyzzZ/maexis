import React from 'react'
import Button from '@/src/components/button'

export type Plan = {
  name: string
  monthlyPrice: number
  annualPrice: number
  tagline?: string
  features: string[]
  limits?: string[]
  appsIncluded?: string
  support?: string
  ctaLabel: string
  highlight?: boolean
  note?: string
  badge?: string
}

export default function PlanCard({ plan, billingCycle }: { plan: Plan, billingCycle: 'monthly' | 'annual' }) {
  const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice
  const priceLabel = price === 0 ? 'Free' : `$${price}`
  const sublabel = price === 0 ? '' : billingCycle === 'annual' ? 'per month (billed annually)' : 'per month'

  return (
    <div
      className={`rounded-3xl p-6 md:p-8 border relative overflow-hidden h-full flex flex-col ${plan.highlight ? 'ring-2' : ''}`}
      style={{ borderColor: 'rgba(var(--color-foreground-rgb),0.1)', boxShadow: plan.highlight ? '0 0 0 1px var(--color-secondary) inset' : undefined }}
    >
      {plan.highlight && (
        <div className="absolute top-4 right-4 text-xs font-semibold px-2 py-1 rounded-full"
          style={{ background: 'color-mix(in srgb, var(--color-secondary) 18%, transparent)', color: 'var(--color-foreground)' }}>
          Popular
        </div>
      )}
      <div className="absolute inset-0 opacity-10" style={{ background: plan.highlight ? 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))' : 'transparent' }} aria-hidden />
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-1">{plan.name}</h3>
          <div className="text-4xl md:text-5xl font-extrabold" style={{ color: 'var(--color-primary)' }}>{priceLabel}</div>
          {sublabel && <div className="text-xs text-foreground-50 mt-1">{sublabel}</div>}
          {plan.tagline && <p className="text-foreground-80 mt-3">{plan.tagline}</p>}
        </div>

        {plan.appsIncluded && (
          <div className="mb-4 text-center">
            <div className="text-xs uppercase tracking-wide text-foreground-50 mb-1">Apps included</div>
            <div className="text-sm text-foreground">{plan.appsIncluded}</div>
          </div>
        )}

        <ul className="space-y-2 mb-4">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-foreground">
              <span style={{ color: 'var(--color-secondary)' }}>✓</span>
              <span className="text-foreground-80">{f}</span>
            </li>
          ))}
        </ul>

        {plan.limits && plan.limits.length > 0 && (
          <div className="mb-4">
            <div className="text-xs uppercase tracking-wide text-foreground-50 mb-2">Limits</div>
            <ul className="space-y-1">
              {plan.limits.map((l) => (
                <li key={l} className="flex items-start gap-2 text-foreground-80">
                  <span style={{ color: 'var(--color-secondary)' }}>•</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {plan.support && (
          <div className="mt-auto mb-4 text-sm text-foreground-80">Support: {plan.support}</div>
        )}

        {plan.note && <p className="text-xs text-foreground-50 mb-4">{plan.note}</p>}

        <div className="mt-auto">
          <Button variant={plan.highlight ? 'secondary' : 'primary'} size="lg" className="w-full !text-white">
            {plan.ctaLabel}
          </Button>
        </div>
      </div>
    </div>
  )}


