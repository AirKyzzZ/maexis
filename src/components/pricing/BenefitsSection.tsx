import React from 'react'

export default function PricingBenefitsSection() {
  const benefits = [
    {
      title: 'Close faster',
      description: 'Automations and integrations reduce manual work and speed up monthly closes.'
    },
    {
      title: 'Operate confidently',
      description: 'Robust controls, SSO, and clear audit trails for compliance and peace of mind.'
    },
    {
      title: 'Scale easily',
      description: 'From 1 app to many—plans adapt as your team grows and needs evolve.'
    }
  ]

  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Why teams choose Maexis</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl p-6 border" style={{ borderColor: 'rgba(var(--color-foreground-rgb),0.1)' }}>
              <h3 className="text-xl font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-foreground-80">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


