import { BusinessPageHero } from "@/components/public/business/business-page-hero";
import { FeatureHighlightSection } from "@/components/public/feature-highlight-section";
import { businessFeatureHighlightData } from "@/components/public/business/data/business-feature-highlight.data";
import { BusinessFormSection } from "@/components/public/business/business-form-section";
import { BusinessTestimonialSection } from "@/components/public/business/business-testimonial-section";
import { TrustedClientsSection } from "@/components/public/trusted-clients-section";
// PricingSection kept in business/pricing/ for future use — add back here when needed.

export function BusinessPageContent() {
  return (
    <>
      <BusinessPageHero />
      <TrustedClientsSection />
      <FeatureHighlightSection {...businessFeatureHighlightData} />
      <BusinessFormSection />
      <BusinessTestimonialSection />
    </>
  );
}
