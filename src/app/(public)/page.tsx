import { HeroSection } from "@/components/public/hero-section";
import { CourseCatalog } from "@/features/courses/components/course-catalog";
import { MotionWrapper } from "@/components/shared/motion-wrapper";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MotionWrapper className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">Featured courses</h2>
        <CourseCatalog limit={3} />
      </MotionWrapper>
    </>
  );
}
