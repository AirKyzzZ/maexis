import React from 'react'

export default function ExpensesFeaturesSection() {
  const features = [
    { t: 'Smart capture', d: 'Email/phone uploads, OCR extraction, and auto-categorization.' },
    { t: 'Approval flows', d: 'Multi-step approvals with thresholds and policies.' },
    { t: 'Reconciliation', d: 'Match card feeds and invoices with low-effort review.' },
  ]
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8">
        {features.map((f) => (
          <div key={f.t} className="rounded-2xl p-6 border flex flex-col" style={{ borderColor: 'rgba(var(--color-foreground-rgb),0.08)' }}>
            <div className="text-lg font-semibold mb-2 text-foreground">{f.t}</div>
            <div className="text-foreground-80 flex-1">{f.d}</div>
          </div>
        ))}
      </div>
    </section>
  )
}


