import { BusinessPageHero } from "@/components/public/business/business-page-hero";
import { BusinessDifferentiatorsSection } from "@/components/public/business/business-differentiators-section";
import { BusinessFormSection } from "@/components/public/business/business-form-section";
import { BusinessTestimonialSection } from "@/components/public/business/business-testimonial-section";
import { TrustedClientsSection } from "@/components/public/business/trusted-clients-section";
// PricingSection kept in business/pricing/ for future use — add back here when needed.

export function BusinessPageContent() {
  return (
    <>
      <BusinessPageHero />
      <TrustedClientsSection />
      <BusinessDifferentiatorsSection />
      <BusinessFormSection />
      <BusinessTestimonialSection />
    </>
  );
}
