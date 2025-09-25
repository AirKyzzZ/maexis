import Hero from "@/src/components/home/heroSection";
import HomeFeaturesSection from "@/src/components/home/featuresSection";
import HomeBenefitsSection from "@/src/components/home/benefitsSection";
import HomeCtaSection from "@/src/components/home/ctaSection";
import HomeMarqueeSection from "@/src/components/home/marqueeSection";
import HomeShowcaseSection from "@/src/components/home/showcaseSection";

export default async function Home() {
  if (process.env.NODE_ENV === 'development') {
    await new Promise((r) => setTimeout(r, 1200));
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <HomeMarqueeSection />
      <HomeShowcaseSection />
      <HomeFeaturesSection />
      <HomeBenefitsSection />
      <HomeCtaSection />
    </div>
  );
}
