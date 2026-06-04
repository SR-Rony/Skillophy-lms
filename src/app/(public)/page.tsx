import { HeroSection } from "@/components/public/hero-section";
import { FeaturedCoursesSection } from "@/components/public/featured-courses-section";
import { WhySkillophySection } from "@/components/public/why-skillophy-section";
import { CourseHighlightSection } from "@/components/public/course-highlight-section";
import { FreeCoursesSection } from "@/components/public/free-courses-section";
import { AllCoursesSection } from "@/components/public/all-courses-section";
import { QuizSection } from "@/components/public/quiz-section";
import { StatisticsSection } from "@/components/public/statistics-section";
import { AcademicProgramSection } from "@/components/public/academic-program-section";
import { TestimonialSection } from "@/components/public/testimonial-section";
import { ModelTestSection } from "@/components/public/model-test-section";
import { WorkshopSection } from "@/components/public/workshop-section";
import { TeacherCtaSection } from "@/components/public/teacher-cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCoursesSection />
      <WhySkillophySection />
      <CourseHighlightSection />
      <FreeCoursesSection />
      <AllCoursesSection />
      <QuizSection />
      <StatisticsSection />
      <AcademicProgramSection />
      <TestimonialSection />
      <ModelTestSection />
      <WorkshopSection />
      <TeacherCtaSection />
    </>
  );
}
