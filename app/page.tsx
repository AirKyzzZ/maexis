import Image from "next/image";
import ScrollIcon from "@/src/components/scrollIcon";
import Hero from "@/src/components/hero";
import Clients from '@/src/components/clients';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 pt-24 relative">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero />
      </main>
      
      {/* Scroll Icon */}
      <ScrollIcon className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10" />
    </div>
  );
}
