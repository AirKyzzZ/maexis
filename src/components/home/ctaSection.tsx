import React from 'react'
import Button from '@/src/components/button'

export default function HomeCtaSection() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Ready to get started?</h2>
        <p className="text-foreground-80 mb-6">Start free today or book a demo—no credit card required.</p>
        <div className="flex items-center justify-center gap-3">
          <Button variant="primary" size="md" className="!text-white">Start for free</Button>
          <Button variant="outline" size="md">Book a demo</Button>
        </div>
      </div>
    </section>
  )
}


