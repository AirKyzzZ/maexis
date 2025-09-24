import React from 'react'

export default function BudgetCtaSection() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-4xl mx-auto text-center rounded-3xl p-10 border relative overflow-hidden" style={{ borderColor: 'rgba(var(--color-foreground-rgb),0.08)' }}>
        <div className="absolute inset-0 opacity-10" style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))' }} />
        <h2 className="text-3xl md:text-4xl font-bold relative z-10 text-foreground mb-4">Plan smarter budgets</h2>
        <p className="text-foreground-80 mb-8 relative z-10">Start with a template or import from sheets.</p>
        <div className="relative z-10 flex items-center justify-center gap-4 flex-col sm:flex-row">
          <a href="#" className="inline-flex h-12 px-6 rounded-full bg-[var(--color-primary)] text-white items-center justify-center">New budget</a>
          <a href="#" className="inline-flex h-12 px-6 rounded-full border items-center justify-center" style={{ borderColor: 'rgba(var(--color-foreground-rgb),0.15)' }}>Import</a>
        </div>
      </div>
    </section>
  )
}


