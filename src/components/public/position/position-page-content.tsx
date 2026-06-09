import { CenteredPageHero } from "@/components/public/centered-page-hero";
import { PositionJobsSection } from "@/components/public/position/position-jobs-section";
import { positionPageHeroData } from "@/components/public/position/data/position-page-hero.data";

export function PositionPageContent() {
  return (
    <>
      <CenteredPageHero {...positionPageHeroData} />
      <PositionJobsSection />
    </>
  );
}
