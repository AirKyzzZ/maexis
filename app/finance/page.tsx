import HeroSection from './heroSection';
import Clients from '@/src/components/clients';

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <Clients />
      {/* Autres sections à venir */}
    </div>
  );
}
