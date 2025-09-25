"use client";
import React, { useEffect, useRef, useState } from 'react'

const logos = [
  { name: 'Vercel', slug: 'vercel' },
  { name: 'Notion', slug: 'notion' },
  { name: 'Slack', slug: 'slack' },
  { name: 'Stripe', slug: 'stripe' },
  { name: 'Airtable', slug: 'airtable' },
  { name: 'HubSpot', slug: 'hubspot' },
{ name: 'Apple', slug: 'apple' },
]

export default function HomeMarqueeSection() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isDark, setIsDark] = useState(false)
  const [copies, setCopies] = useState(2)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const scrollerEl = el.querySelector('[data-track]') as HTMLDivElement | null
    if (!scrollerEl) return
    let raf = 0
    let x = 0
    let started = false
    let segmentWidth = 0

    function tick() {
      x -= 0.5
      if (!scrollerEl) return
      scrollerEl.style.transform = `translate3d(${x}px,0,0)`
      if (Math.abs(x) >= segmentWidth) x = 0
      raf = requestAnimationFrame(tick)
    }

    function start() {
      if (started) return
      started = true
      raf = requestAnimationFrame(tick)
    }

    function measureSegmentWidth() {
      if (!scrollerEl) return
      const segmentChildren = Array.from(scrollerEl.querySelectorAll('[data-segment="1"]')) as HTMLElement[]
      let total = 0
      const targets = segmentChildren.length > 0 ? segmentChildren : (Array.from(scrollerEl.children) as HTMLElement[])
      if (targets.length === 0) return
      const count = segmentChildren.length > 0 ? targets.length : Math.floor(targets.length / 2)
      for (let i = 0; i < count; i++) {
        const child = targets[i]
        const style = window.getComputedStyle(child)
        const marginLeft = parseFloat(style.marginLeft || '0')
        const marginRight = parseFloat(style.marginRight || '0')
        total += child.offsetWidth + marginLeft + marginRight
      }
      segmentWidth = total
    }

    function ensureStart() {
      if (!scrollerEl || !el) return
      measureSegmentWidth()
      const containerWidth = el.offsetWidth
      if (!segmentWidth) return
      const needed = Math.max(2, Math.ceil((containerWidth + segmentWidth) / segmentWidth))
      if (needed !== copies) {
        setCopies(needed)
        return
      }
      start()
    }

    function onResize() {
      x = 0
      ensureStart()
    }

    const imgs = Array.from(scrollerEl.querySelectorAll('img')) as HTMLImageElement[]
    if (imgs.length === 0) {
      ensureStart()
    } else {
      let remaining = imgs.length
      const consider = (img: HTMLImageElement) => img.complete && img.naturalWidth > 0
      imgs.forEach((img) => {
        if (consider(img)) remaining -= 1
      })
      if (remaining <= 0) {
        ensureStart()
      } else {
        const onLoad = () => {
          remaining -= 1
          if (remaining <= 0) {
            ensureStart()
          }
        }
        imgs.forEach((img) => {
          if (!consider(img)) {
            img.addEventListener('load', onLoad, { once: true })
            img.addEventListener('error', onLoad, { once: true })
          }
        })
      }
    }

    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [copies])

  useEffect(() => {
    const media = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')

    const resolveIsDark = (): boolean => {
      const html = document.documentElement
      const body = document.body
      const htmlDark = html.classList.contains('dark') || html.getAttribute('data-theme') === 'dark'
      const bodyDark = body.classList.contains('dark') || body.getAttribute('data-theme') === 'dark'
      const htmlLight = html.classList.contains('light') || html.getAttribute('data-theme') === 'light'
      const bodyLight = body.classList.contains('light') || body.getAttribute('data-theme') === 'light'
      if (htmlDark || bodyDark) return true
      if (htmlLight || bodyLight) return false
      return media ? media.matches : false
    }

    setIsDark(resolveIsDark())

    const onMediaChange = () => {
      setIsDark(resolveIsDark())
    }

    const onMutate = () => {
      setIsDark(resolveIsDark())
    }

    const obs = new MutationObserver(onMutate)
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-theme'] })
    if (document.body) {
      obs.observe(document.body, { attributes: true, attributeFilter: ['class', 'data-theme'] })
    }
    media && media.addEventListener('change', onMediaChange)

    return () => {
      obs.disconnect()
      media && media.removeEventListener('change', onMediaChange)
    }
  }, [])

  return (
    <section className="py-12">
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden" ref={ref}>
        <div className="relative h-12 md:h-16">
          <div className="absolute inset-0 flex items-center" data-track style={{ willChange: 'transform' }}>
            {Array.from({ length: copies }).map((_, copyIndex) => (
              <React.Fragment key={`copy-${copyIndex}`}>
                {logos.map((logo, i) => (
                  <span
                    key={`${logo.slug}-${copyIndex}-${i}`}
                    data-segment={copyIndex === 0 ? '1' : undefined}
                    className="mx-6 md:mx-10 inline-flex items-center shrink-0"
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${logo.slug}/${isDark ? 'ffffff' : '111827'}`}
                      alt={logo.name}
                      loading="lazy"
                      className="h-8 md:h-10 w-auto opacity-80 select-none pointer-events-none"
                    />
                  </span>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


