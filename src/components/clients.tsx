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
  const SPEED_S = 22
  const separator = '   •   '
  const marqueeText = '     ' + // small leading gap so train leads
    Array(2)
      .fill(null)
      .flatMap(() => CLIENT_ITEMS.map((i) => i.name))
      .join(separator)

  return (
    <section aria-label="Clients" className="relative w-full overflow-hidden py-8 md:py-10">
      <div className="relative w-full" style={{ height: '220px' }}>
        <svg
          viewBox="0 0 2538 300"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          aria-hidden
        >
          <defs>
            <linearGradient id="clientsGradient" x1="0" y1="150" x2="2538" y2="150" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--color-secondary)" />
              <stop offset="100%" stopColor="var(--color-primary)" />
              <animateTransform attributeName="gradientTransform" type="translate" from="0 0" to="2538 0" dur={`${SPEED_S}s`} repeatCount="indefinite" />
            </linearGradient>
            <path id="clientsPath" d="M13 168.734C13 168.734 267.455 100.893 437.363 69.3143C636.284 32.344 816.512 48.9098 1039.1 115.047C1219.78 168.734 1316.04 205.589 1510.7 227.956C1651.85 244.174 1762.91 258.36 1903.57 244.174C2064.37 227.956 2171.73 164.897 2353.63 168.734C2421.12 170.158 2465.03 190.029 2531 198.71" />
          </defs>

          {/* Train leading the text (external SVG image) */}
          <g>
            <image href="/train.svg" x="-40" y="-22" width="80" height="44" />
            <animateMotion dur={`${SPEED_S}s`} repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear" rotate="auto">
              <mpath href="#clientsPath" />
            </animateMotion>
          </g>

          <text
            fontSize="24"
            fontWeight="600"
            letterSpacing="0.14em"
            fill="var(--color-foreground)"
          >
            <textPath href="#clientsPath">
              {marqueeText}
              <animate attributeName="startOffset" values="100%;0%" dur={`${SPEED_S}s`} repeatCount="indefinite" />
            </textPath>
          </text>

          <text
            fontSize="24"
            fontWeight="600"
            letterSpacing="0.14em"
            fill="var(--color-foreground)"
          >
            <textPath href="#clientsPath">
              {marqueeText}
              <animate attributeName="startOffset" values="200%;100%" dur={`${SPEED_S}s`} repeatCount="indefinite" />
            </textPath>
          </text>
        </svg>
      </div>
    </section>
  )
}

export default Clients
