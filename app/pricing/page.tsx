export default async function PricingPage() {
  if (process.env.NODE_ENV === 'development') {
    await new Promise((r) => setTimeout(r, 1200));
  }
  return (
    <main className="min-h-screen grid place-items-center">
      <div className="text-foreground/80">Pricing coming soon</div>
    </main>
  );
}

