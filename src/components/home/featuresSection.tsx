import React from 'react'

export default function HomeFeaturesSection() {
  const features = [
    { title: 'Automations', desc: 'Reduce manual work with workflows across your tools.' },
    { title: 'Dashboards', desc: 'Track KPIs and trends with clear, real-time views.' },
    { title: 'Integrations', desc: 'Connect finance, ops, and productivity apps seamlessly.' }
  ]
  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl p-6 border" style={{ borderColor: 'rgba(var(--color-foreground-rgb),0.1)' }}>
              <h3 className="text-xl font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-foreground-80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


