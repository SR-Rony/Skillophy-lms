import { HeroSection } from "@/components/public/hero-section";
import { FeaturedCoursesSection } from "@/components/public/featured-courses-section";
import { WhySkillophySection } from "@/components/public/why-skillophy-section";
import { CourseHighlightSection } from "@/components/public/course-highlight-section";
import { FreeCoursesSection } from "@/components/public/free-courses-section";
import { AllCoursesSection } from "@/components/public/all-courses-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCoursesSection />
      <WhySkillophySection />
      <CourseHighlightSection />
      <FreeCoursesSection />
      <AllCoursesSection />
    </>
  );
}
