import BudgetHeroSection from '@/src/components/finance/budget/heroSection'
import BudgetFeaturesSection from '@/src/components/finance/budget/featuresSection'
import BudgetCtaSection from '@/src/components/finance/budget/ctaSection'

export default function BudgetPage() {
  return (
    <div className="min-h-screen">
      <BudgetHeroSection />
      <BudgetFeaturesSection />
      <BudgetCtaSection />
    </div>
  )
}


