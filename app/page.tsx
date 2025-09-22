import Image from "next/image";
import Button from "@/src/components/button";
import ToggleTheme from "@/src/components/toggleTheme";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 pt-24">
      <ToggleTheme />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        {/* Hero Section with CTA Buttons */}
        <div className="text-center px-8 sm:px-16 lg:px-24">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="text-[var(--color-foreground)]">Transform Your</span>{' '}
            <span className="animated-gradient-text">
              Business
            </span>
            <br />
            <span className="text-[var(--color-foreground)]">with</span>{' '}
            <span className="animated-gradient-text">
              Smart
            </span>{' '}
            <span className="text-[var(--color-foreground)]">Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-[var(--color-foreground)]/80 max-w-2xl mx-auto text-center">
            Discover innovative tools and streamline your workflow with our cutting-edge platform designed for modern businesses.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex gap-4 items-center justify-center flex-col sm:flex-row mb-4">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          
          {/* Disclaimer Text */}
          <p className="text-xs text-[var(--color-foreground)]/50 text-center">
            GDPR Compliant - No credit card required
          </p>
        </div>
      </main>
    </div>
  );
}
