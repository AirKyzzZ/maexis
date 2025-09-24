import React from 'react'

export default function KpisSection() {
  const items = [
    { k: 'Faster close', v: 'x2', d: 'Cut month-end time in half' },
    { k: 'Time saved', v: '8h', d: 'per week per controller' },
    { k: 'Accuracy', v: '99.9%', d: 'automated reconciliation' },
    { k: 'Visibility', v: 'Real-time', d: 'cash & runway' },
  ]
  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((i) => (
          <div key={i.k} className="rounded-2xl p-6 border" style={{ borderColor: 'rgba(var(--color-foreground-rgb),0.08)' }}>
            <div className="text-foreground-50 text-sm mb-2">{i.k}</div>
            <div className="text-3xl md:text-4xl font-semibold mb-1" style={{ color: 'var(--color-primary)' }}>{i.v}</div>
            <div className="text-foreground-80">{i.d}</div>
          </div>
        ))}
      </div>
    </section>
  )
}


