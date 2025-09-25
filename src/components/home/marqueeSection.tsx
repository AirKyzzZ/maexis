"use client";
import React, { useEffect, useRef } from 'react'

const logos = ['Vercel', 'Notion', 'Slack', 'Stripe', 'Airtable', 'HubSpot']

export default function HomeMarqueeSection() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const scrollerEl = el.querySelector('[data-track]') as HTMLDivElement | null
    if (!scrollerEl) return
    let raf = 0
    let x = 0
    function tick() {
      x -= 0.5
      // Guard in case the element unmounts between frames
      if (!scrollerEl) return
      scrollerEl.style.transform = `translateX(${x}px)`
      if (Math.abs(x) > scrollerEl.scrollWidth / 2) x = 0
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="px-4 py-12">
      <div className="max-w-6xl mx-auto overflow-hidden" ref={ref}>
        <div className="relative h-12">
          <div className="absolute inset-0 flex items-center" data-track style={{ willChange: 'transform' }}>
            {[...logos, ...logos].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="mx-6 text-sm font-semibold clients-chip whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


