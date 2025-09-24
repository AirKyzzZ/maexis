import PricingHeroSection from '@/src/components/pricing/HeroSection'
import PlansSection from '@/src/components/pricing/PlansSection'
import PricingBenefitsSection from '@/src/components/pricing/BenefitsSection'
import PricingFaqSection from '@/src/components/pricing/FaqSection'

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <PricingHeroSection />
      <PlansSection />
      <PricingBenefitsSection />
      <PricingFaqSection />
    </main>
  )
}

