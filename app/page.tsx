import Hero from "@/src/components/home/heroSection";

export default async function Home() {
  if (process.env.NODE_ENV === 'development') {
    await new Promise((r) => setTimeout(r, 1200));
  }

  return (
    <div className="min-h-screen">
      <Hero />
    </div>
  );
}
