"use client";

import { Heading } from "@/components/shared/heading";

import { Container } from "@/components/shared";
import {
  PublicCourseCard,
  type PublicCourse,
  type PublicCourseCardVariant,
} from "@/components/public/public-course-card";

interface SimilarCoursesSectionProps {
  courses: PublicCourse[];
  currentSlug: string;
  variant?: PublicCourseCardVariant;
}

export function SimilarCoursesSection({
  courses,
  currentSlug,
  variant = "paid",
}: SimilarCoursesSectionProps) {
  const visibleCourses = courses
    .filter((course) => course.slug !== currentSlug)
    .slice(0, 3);

  if (visibleCourses.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-10 lg:py-15">
      <Container>
        <Heading as="h2" variant="course-detail-section-lg">
          Similar Courses for You
        </Heading>

        <div className="mt-8 grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {visibleCourses.map((course) => (
            <PublicCourseCard key={course.id} course={course} variant={variant} />
          ))}
        </div>
      </Container>
    </section>
  );
}
