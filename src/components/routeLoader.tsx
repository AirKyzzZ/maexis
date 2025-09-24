'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteLoader() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timeout = window.setTimeout(() => setShow(false), 350);
    return () => window.clearTimeout(timeout);
  }, [pathname]);

  if (!show) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className="fixed inset-0 z-[100] grid place-items-center"
      style={{ background: 'var(--color-background)' }}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-14 h-14">
          <span
            className="absolute inset-0 rounded-full"
            style={{
              background:
                'conic-gradient(from 0deg, var(--color-primary), var(--color-secondary), var(--color-primary))',
              opacity: 0.22,
              filter: 'blur(0.2px)'
            }}
          />
          <span className="absolute inset-[6px] rounded-full border border-[rgba(var(--color-foreground-rgb),0.12)] bg-[color-mix(in_srgb,var(--color-background)_92%,transparent)]" />
          <span className="absolute inset-[6px] rounded-full grid place-items-center">
            <span className="sr-only">Loading…</span>
            <span className="relative block w-6 h-6">
              <span className="absolute inset-0 rounded-full border-2 border-[color-mix(in_srgb,var(--color-foreground)_30%,transparent)] border-t-[var(--color-primary)] animate-spin [animation-duration:900ms]" />
            </span>
          </span>
        </div>
        <div
          className="text-sm tracking-wide font-medium text-foreground/70 select-none"
          style={{ letterSpacing: '0.08em' }}
        >
          <span className="inline-block align-middle">
            <span className="[mask-image:linear-gradient(90deg,transparent,black,transparent)] [mask-size:200%_100%] animate-[shimmer_2.2s_ease_infinite]" style={{
              background:
                'linear-gradient(90deg, color-mix(in srgb, var(--color-foreground) 55%, transparent), color-mix(in srgb, var(--color-foreground) 85%, transparent), color-mix(in srgb, var(--color-foreground) 55%, transparent))',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              backgroundSize: '200% 100%'
            }}>
              MAEXIS
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}


