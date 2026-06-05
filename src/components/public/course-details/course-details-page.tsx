import { CourseDetailsHero } from "@/components/public/course-details/hero";
import { CourseDetailsMain } from "@/components/public/course-details/course-details-main";
import { SimilarCoursesSection } from "@/components/public/course-details/similar-courses-section";
import type { CourseDetailsPageData } from "@/components/public/course-details/types";

interface CourseDetailsPageProps {
  data: CourseDetailsPageData;
}

export function CourseDetailsPage({ data }: CourseDetailsPageProps) {
  return (
    <>
      <CourseDetailsHero hero={data.hero} />
      <CourseDetailsMain data={data} />
      <SimilarCoursesSection
        courses={data.similarCourses}
        currentSlug={data.slug}
        variant={data.similarCoursesVariant}
      />
    </>
  );
}
