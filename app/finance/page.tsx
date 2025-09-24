import HeroSection from '@/src/components/finance/heroSection';
import KpisSection from '@/src/components/finance/kpisSection';
import FeaturesSection from '@/src/components/finance/featuresSection';
import BenefitsSection from '@/src/components/finance/benefitsSection';
import FaqSection from '@/src/components/finance/faqSection';
import CtaSection from '@/src/components/finance/ctaSection';

export default function FinancePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <KpisSection />
      <FeaturesSection />
      <BenefitsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
