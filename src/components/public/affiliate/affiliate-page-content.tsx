import { AffiliateCtaSection } from "@/components/public/affiliate/affiliate-cta-section";
import { AffiliateFaqSection } from "@/components/public/affiliate/affiliate-faq-section";
import { AffiliateBestAffiliatesSection } from "@/components/public/affiliate/affiliate-best-affiliates-section";
import { AffiliateBenefitsSection } from "@/components/public/affiliate/affiliate-benefits-section";
import { AffiliateHowItWorksSection } from "@/components/public/affiliate/affiliate-how-it-works-section";
import { AffiliateLearningSection } from "@/components/public/affiliate/affiliate-learning-section";
import { AffiliatePageHero } from "@/components/public/affiliate/affiliate-page-hero";
import { AffiliateSpecialMomentsSection } from "@/components/public/affiliate/affiliate-special-moments-section";
import { AffiliateTestimonialSection } from "@/components/public/affiliate/affiliate-testimonial-section";
import { StatisticsSection } from "@/components/public/statistics-section";

export function AffiliatePageContent() {
  return (
    <>
      <AffiliatePageHero />
      <AffiliateHowItWorksSection />
      <AffiliateBenefitsSection />
      <AffiliateLearningSection />
      <StatisticsSection />
      <AffiliateSpecialMomentsSection />
      <AffiliateBestAffiliatesSection />
      <AffiliateTestimonialSection />
      <AffiliateFaqSection />
      <AffiliateCtaSection />
    </>
  );
}
