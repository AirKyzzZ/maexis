import Hero from '@/src/components/hero';

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Hero
            title={(
              <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
                Financial Management
                <span className="block" style={{ color: 'var(--primary)' }}>Made Simple</span>
              </h1>
            )}
            description={(
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-80" style={{ color: 'var(--foreground)' }}>
                Take control of your finances with our comprehensive suite of financial management tools. 
                Track expenses, manage budgets, and achieve your financial goals.
              </p>
            )}
            primaryButton={{ label: 'Get Started', variant: 'primary', size: 'lg' }}
            secondaryButton={{ label: 'Learn More', variant: 'secondary', size: 'lg' }}
            disclaimerText={''}
          />
        </div>
      </section>
      {/* Autres sections à venir */}
    </div>
  );
}
