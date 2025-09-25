"use client";
import React from 'react'

const items = [
  {
    title: 'Automate approvals',
    desc: 'Route tasks based on rules and reduce manual follow-ups.',
  },
  {
    title: 'Unified dashboards',
    desc: 'Bring metrics from multiple apps into one clear view.',
  },
  {
    title: 'Realtime collaboration',
    desc: 'Comment, mention, and ship decisions faster together.',
  },
]

export default function HomeShowcaseSection() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">What you can build</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div
              key={it.title}
              className="rounded-2xl p-6 border bg-[var(--color-background)] transition-all duration-300 will-change-transform"
              style={{
                borderColor: 'rgba(var(--color-foreground-rgb),0.1)',
                animation: `floatY 6s ease-in-out ${idx * 0.4}s infinite`,
              }}
              onMouseMove={(e) => {
                const t = e.currentTarget as HTMLDivElement
                const r = t.getBoundingClientRect()
                const x = (e.clientX - r.left) / r.width - 0.5
                const y = (e.clientY - r.top) / r.height - 0.5
                t.style.transform = `translateY(0) rotateX(${y * -4}deg) rotateY(${x * 6}deg)`
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget as HTMLDivElement
                t.style.transform = ''
              }}
            >
              <div
                className="h-28 mb-4 rounded-xl"
                style={{
                  background:
                    'linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 18%, transparent), color-mix(in srgb, var(--color-secondary) 18%, transparent))',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.08) inset, 0 8px 24px rgba(0,0,0,0.06)',
                }}
              />
              <h3 className="text-xl font-semibold text-foreground mb-1">{it.title}</h3>
              <p className="text-foreground-80">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  )
}


