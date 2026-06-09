import { CenteredPageHero } from "@/components/public/centered-page-hero";
import { FeatureHighlightSection } from "@/components/public/feature-highlight-section";
import { TractionStatsSection } from "@/components/public/traction-stats-section";
import { TrustedClientsSection } from "@/components/public/trusted-clients-section";
import { AboutActionCtaSection } from "@/components/public/action-cta-section";
import { AboutLeadershipSection } from "@/components/public/about/about-leadership-section";
import { AboutMissionSection } from "@/components/public/about/about-mission-section";
import { AboutStorySection } from "@/components/public/about/about-story-section";
import { aboutCoreValuesData } from "@/components/public/about/data/about-core-values.data";
import { aboutPageHeroData } from "@/components/public/about/data/about-page-hero.data";
import { aboutTractionStatsData } from "@/components/public/about/data/about-traction-stats.data";

export function AboutPageContent() {
  return (
    <>
      <CenteredPageHero
        {...aboutPageHeroData}
        descriptionClassName="max-w-[720px] leading-[1.7]"
      />
      <AboutStorySection />
      <FeatureHighlightSection {...aboutCoreValuesData} />
      <TrustedClientsSection />
      <TractionStatsSection {...aboutTractionStatsData} />
      <AboutMissionSection />
      <AboutLeadershipSection />
      <AboutActionCtaSection />
    </>
  );
}
