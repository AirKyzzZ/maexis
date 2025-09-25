"use client";

import Link from "next/link";
import Image from "next/image";

const currentYear = new Date().getFullYear();

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(var(--color-foreground-rgb),0.12)] hover:border-[rgba(var(--color-foreground-rgb),0.28)] hover:bg-[color-mix(in_srgb,var(--color-secondary)_10%,transparent)] transition"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[rgba(var(--color-foreground-rgb),0.08)]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/logoWhite.svg"
                alt="Maexis logo"
                width={28}
                height={28}
                className="logo-dark"
                priority
              />
              <Image
                src="/logoBlack.svg"
                alt="Maexis logo"
                width={28}
                height={28}
                className="logo-light"
                priority
              />
              <span className="text-lg font-semibold">Maexis</span>
            </Link>
            <p className="max-w-sm text-sm text-foreground-80">Suites of SaaS crafted with care. Build, launch, and scale faster.</p>

            <div className="flex items-center gap-3 pt-2">
              <SocialIcon href="https://www.linkedin.com/" label="LinkedIn">
                {/* LinkedIn */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
                  <path d="M6.94 21.25H2.86V8.57h4.08V21.25Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M4.9 6.86a2.45 2.45 0 1 0 0-4.9 2.45 2.45 0 0 0 0 4.9Z" fill="currentColor"/>
                  <path d="M21.14 21.25h-4.07v-6.16c0-1.47-.03-3.36-2.05-3.36-2.06 0-2.38 1.6-2.38 3.25v6.27H8.58V8.57h3.9v1.73h.06c.54-1.02 1.85-2.1 3.81-2.1 4.08 0 4.84 2.69 4.84 6.2v6.95Z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="mailto:hello@maexis.com" label="Email">
                {/* Mail */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
                  <path d="M3 7.5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.5Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="m4 7 8 5 8-5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/" label="Instagram">
                {/* Instagram */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.google.com/" label="Google">
                {/* Google "G" */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
                  <path d="M21 12.23c0-.64-.06-1.25-.18-1.82H12v3.45h5.03c-.22 1.2-.88 2.22-1.88 2.9v2.4h3.05c1.78-1.64 2.8-4.06 2.8-6.93Z" fill="currentColor"/>
                  <path d="M12 22c2.52 0 4.64-.84 6.18-2.27l-3.05-2.4c-.84.56-1.91.9-3.13.9-2.41 0-4.45-1.62-5.18-3.8H3.68v2.48A9.998 9.998 0 0 0 12 22Z" fill="currentColor" opacity="0.8"/>
                  <path d="M6.82 14.43A5.998 5.998 0 0 1 6.52 12c0-.84.18-1.63.3-2.43V7.09H3.68A9.993 9.993 0 0 0 2 12c0 1.62.39 3.15 1.08 4.43l3.74-2Z" fill="currentColor" opacity="0.6"/>
                  <path d="M12 5.5c1.36 0 2.58.47 3.54 1.4l2.66-2.66A9.43 9.43 0 0 0 12 2a9.998 9.998 0 0 0-8.32 5.09l3.74 2A5.997 5.997 0 0 1 12 5.5Z" fill="currentColor" opacity="0.4"/>
                </svg>
              </SocialIcon>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground-50">Product</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link className="hover:text-[var(--color-primary)] transition" href="/pricing">Pricing</Link></li>
                <li><Link className="hover:text-[var(--color-primary)] transition" href="/finance">Finance Suite</Link></li>
                <li><Link className="hover:text-[var(--color-primary)] transition" href="/finance/expenses">Expenses</Link></li>
                <li><Link className="hover:text-[var(--color-primary)] transition" href="/finance/budget">Budget</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground-50">Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link className="hover:text-[var(--color-primary)] transition" href="/">Home</Link></li>
                <li><Link className="hover:text-[var(--color-primary)] transition" href="/signup">Get Started</Link></li>
                <li><Link className="hover:text-[var(--color-primary)] transition" href="/">Clients</Link></li>
                <li><Link className="hover:text-[var(--color-primary)] transition" href="/">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground-50">Legal</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link className="hover:text-[var(--color-primary)] transition" href="/legal/privacy">Privacy Policy</Link></li>
                <li><Link className="hover:text-[var(--color-primary)] transition" href="/legal/terms">Terms of Service</Link></li>
                <li><Link className="hover:text-[var(--color-primary)] transition" href="/legal/cookies">Cookie Policy</Link></li>
                <li><Link className="hover:text-[var(--color-primary)] transition" href="/legal/imprint">Imprint</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[rgba(var(--color-foreground-rgb),0.08)] py-6 text-sm md:flex-row">
          <p className="text-foreground-80">© {currentYear} Maexis. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link className="hover:text-[var(--color-primary)] transition" href="/legal/privacy">Privacy</Link>
            <span className="text-foreground-30">•</span>
            <Link className="hover:text-[var(--color-primary)] transition" href="/legal/terms">Terms</Link>
            <span className="text-foreground-30">•</span>
            <Link className="hover:text-[var(--color-primary)] transition" href="/sitemap.xml">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


