"use client";

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
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <Container>
        <h2 className="text-[24px] font-bold tracking-[-0.02em] text-[#1a1a1a] sm:text-[28px]">
          Similar Courses for You
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {visibleCourses.map((course) => (
            <PublicCourseCard key={course.id} course={course} variant={variant} />
          ))}
        </div>
      </Container>
    </section>
  );
}
