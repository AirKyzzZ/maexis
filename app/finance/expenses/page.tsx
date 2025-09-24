import ExpensesHeroSection from '@/src/components/finance/expenses/heroSection'
import ExpensesFeaturesSection from '@/src/components/finance/expenses/featuresSection'
import ExpensesCtaSection from '@/src/components/finance/expenses/ctaSection'

export default function ExpensesPage() {
  return (
    <div className="min-h-screen">
      <ExpensesHeroSection />
      <ExpensesFeaturesSection />
      <ExpensesCtaSection />
    </div>
  )
}


