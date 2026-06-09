import { FeatureHighlightSection } from "@/components/public/feature-highlight-section";
import { CareerPageHero } from "@/components/public/career/career-page-hero";
import { careerFeatureHighlightData } from "@/components/public/career/data/career-feature-highlight.data";

export function CareerPageContent() {
  return (
    <>
      <CareerPageHero />
      <FeatureHighlightSection {...careerFeatureHighlightData} />
    </>
  );
}
