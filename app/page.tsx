import Image from "next/image";
import Button from "@/src/components/button";
import ToggleTheme from "@/src/components/toggleTheme";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 pt-24">
      <ToggleTheme />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        {/* Hero Section with CTA Buttons */}
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-[var(--color-foreground)]">
            Welcome to Maexis
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-[var(--color-foreground)]/80 max-w-2xl">
            Discover amazing features and transform your workflow with our innovative solutions.
          </p>
          
          {/* CTA Buttons Demo */}
          <div className="flex gap-4 items-center flex-col sm:flex-row mb-12">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          
          {/* Button Variants Demo */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[var(--color-foreground)]">Button Variants</h2>
              <div className="flex gap-4 items-center flex-wrap">
                <Button variant="primary" size="md">Primary</Button>
                <Button variant="secondary" size="md">Secondary</Button>
                <Button variant="outline" size="md">Outline</Button>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[var(--color-foreground)]">Button Sizes</h2>
              <div className="flex gap-4 items-center flex-wrap">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
