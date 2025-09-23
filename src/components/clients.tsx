import React from 'react'

type ClientItem = {
  id: string
  name: string
  // logo?: string // Placeholder for future logo URL
}

const CLIENT_ITEMS: ClientItem[] = [
  { id: 'airbus', name: 'Airbus' },
  { id: 'renault', name: 'Renault' },
  { id: 'axa', name: 'AXA' },
  { id: 'total', name: 'TotalEnergies' },
  { id: 'carrefour', name: 'Carrefour' },
  { id: 'orange', name: 'Orange' },
  { id: 'sncf', name: 'SNCF' },
  { id: 'decathlon', name: 'Decathlon' },
  { id: 'michelin', name: 'Michelin' },
  { id: 'lvmh', name: 'LVMH' },
]

const Clients = () => {
  return (
    <section aria-label="Clients" className="relative w-full border-y overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div
          className="h-full w-full opacity-10"
          style={{
            background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
          }}
        />
      </div>

      <div
        className="relative flex items-center"
        style={{ borderColor: 'rgba(var(--color-foreground-rgb), 0.08)', zIndex: 1 }}
      >
        <div className="clients-marquee flex min-w-full select-none">
          <ul className="flex min-w-full items-center gap-8 md:gap-10 py-3 md:py-4">
            {CLIENT_ITEMS.map((item) => (
              <li key={item.id} className="flex items-center">
                <span className="clients-chip whitespace-nowrap">{item.name}</span>
              </li>
            ))}
          </ul>
          <ul className="flex min-w-full items-center gap-8 md:gap-10 py-3 md:py-4" aria-hidden>
            {CLIENT_ITEMS.map((item) => (
              <li key={`${item.id}-dupe`} className="flex items-center">
                <span className="clients-chip whitespace-nowrap">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="clients-fade-left" aria-hidden />
        <div className="clients-fade-right" aria-hidden />
      </div>
      
    </section>
  )
}

export default Clients
