import React from 'react'

export default function HomeBenefitsSection() {
  const benefits = [
    { title: 'Ship faster', desc: 'Templates and defaults so you launch quickly.' },
    { title: 'Operate confidently', desc: 'Best practices baked-in and easy access controls.' },
    { title: 'Scale smoothly', desc: 'From solo to teams—no rewrites needed.' }
  ]
  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Why Maexis</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl p-6 border" style={{ borderColor: 'rgba(var(--color-foreground-rgb),0.1)' }}>
              <h3 className="text-xl font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-foreground-80">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


