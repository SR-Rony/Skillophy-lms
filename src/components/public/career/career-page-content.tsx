import { CareerPerksBenefitsSection } from "@/components/public/career/career-perks-benefits-section";
import { CareerEmployeeOfTheYearSection } from "@/components/public/career/career-employee-of-the-year-section";
import { CareerTestimonialSection } from "@/components/public/career/career-testimonial-section";
import { FeatureHighlightSection } from "@/components/public/feature-highlight-section";
import { LifeAtSection } from "@/components/public/life-at-section";
import { TractionStatsSection } from "@/components/public/traction-stats-section";
import { CareerJobOpeningsSection } from "@/components/public/career/career-job-openings-section";
import { CareerPageHero } from "@/components/public/career/career-page-hero";
import { careerFeatureHighlightData } from "@/components/public/career/data/career-feature-highlight.data";
import { careerLifeAtData } from "@/components/public/career/data/career-life-at.data";
import { careerTractionStatsData } from "@/components/public/career/data/career-traction-stats.data";

export function CareerPageContent() {
  return (
    <>
      <CareerPageHero />
      <FeatureHighlightSection {...careerFeatureHighlightData} />
      <CareerJobOpeningsSection />
      <TractionStatsSection {...careerTractionStatsData} />
      <LifeAtSection {...careerLifeAtData} />
      <CareerPerksBenefitsSection />
      <CareerEmployeeOfTheYearSection />
      <CareerTestimonialSection />
    </>
  );
}
