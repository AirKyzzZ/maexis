import Button from '@/src/components/button';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
          Financial Management
          <span className="block" style={{ color: 'var(--primary)' }}>Made Simple</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-80" style={{ color: 'var(--foreground)' }}>
          Take control of your finances with our comprehensive suite of financial management tools. 
          Track expenses, manage budgets, and achieve your financial goals.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="secondary" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
