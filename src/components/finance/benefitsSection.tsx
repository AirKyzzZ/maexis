import React from 'react'

export default function BenefitsSection() {
  const benefits = [
    { t: 'Close faster', d: 'Automations cut repetitive tasks so you focus on insights.' },
    { t: 'Operate confidently', d: 'Single source of truth for finance and leadership.' },
    { t: 'Scale easily', d: 'From startup to multi-entity, without process debt.' },
  ]
  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8">
        {benefits.map((b) => (
          <div key={b.t} className="rounded-2xl p-6 border" style={{ borderColor: 'rgba(var(--color-foreground-rgb),0.08)' }}>
            <div className="text-xl font-semibold mb-2 text-foreground">{b.t}</div>
            <div className="text-foreground-80">{b.d}</div>
          </div>
        ))}
      </div>
    </section>
  )
}


