import Image from "next/image";
import Button from "@/src/components/button";
import ScrollIcon from "@/src/components/scrollIcon";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 pt-24 relative">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        {/* Hero Section with CTA Buttons */}
        <div className="text-center px-8 sm:px-16 lg:px-24">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="text-foreground">Transform Your</span>{' '}
            <span className="animated-gradient-text">
              Business
            </span>
            <br />
            <span className="text-foreground">with</span>{' '}
            <span className="animated-gradient-text">
              Smart
            </span>{' '}
            <span className="text-foreground">Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-foreground-80 max-w-2xl mx-auto text-center">
            Discover innovative tools and streamline your workflow with our cutting-edge platform designed for modern businesses.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex gap-4 items-center justify-center flex-col sm:flex-row mb-4">
            <Button variant="primary" size="lg" className="!text-white hover:!text-white">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="hover:!text-white">
              Learn More
            </Button>
          </div>
          
          {/* Disclaimer Text */}
          <p className="text-xs text-foreground-50 text-center">
            GDPR Compliant - No credit card required
          </p>
        </div>
      </main>
      
      {/* Scroll Icon */}
      <ScrollIcon className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10" />
    </div>
  );
}
