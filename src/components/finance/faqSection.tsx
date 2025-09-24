import React from 'react'

export default function FaqSection() {
  const faqs = [
    { q: 'Can I import data from my current tools?', a: 'Yes, via CSV and native integrations (banks, accounting, billing).' },
    { q: 'Is it suitable for multi-entity groups?', a: 'Yes, with consolidation, interco eliminations, and currency support.' },
    { q: 'How secure is my data?', a: 'Encryption at rest/transport, granular permissions, audit trails.' },
  ]
  return (
    <section className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {faqs.map((f) => (
          <details key={f.q} className="border-b py-4">
            <summary className="cursor-pointer text-foreground font-medium flex items-center justify-between">
              <span>{f.q}</span>
              <span className="text-foreground-50">+</span>
            </summary>
            <p className="mt-2 text-foreground-80">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}


