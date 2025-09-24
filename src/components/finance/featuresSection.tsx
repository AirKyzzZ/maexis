import React from 'react'

export default function FeaturesSection() {
  const features = [
    { t: 'Cash flow & Runway', d: 'Monitor inflows/outflows, scenario-plan, and never be surprised again.' },
    { t: 'Invoicing & Payments', d: 'Create, send, and reconcile invoices with automated reminders.' },
    { t: 'Budgeting & Forecast', d: 'Collaborative budgets with variance analysis and live updates.' },
    { t: 'Multi-entity', d: 'Consolidate subsidiaries with currency handling and eliminations.' },
    { t: 'Expenses', d: 'Smart capture, approval flows, and policy checks built-in.' },
    { t: 'Reporting', d: 'Board-ready dashboards with custom metrics and exports.' },
  ]
  return (
    <section className="px-4 py-8 md:py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8">
        {features.map((f) => (
          <div key={f.t} className="rounded-2xl p-6 border flex flex-col"
            style={{ borderColor: 'rgba(var(--color-foreground-rgb),0.08)' }}>
            <div className="text-lg font-semibold mb-2 text-foreground">{f.t}</div>
            <div className="text-foreground-80 mb-4 flex-1">{f.d}</div>
            <a className="text-sm" style={{ color: 'var(--color-primary)' }} href="#">Learn more →</a>
          </div>
        ))}
      </div>
    </section>
  )
}


