"use client";

import { Heading } from "@/components/shared/heading";

import type { PublicCourse } from "@/components/public/public-course-card";
import { PublicCourseCard } from "@/components/public/public-course-card";
import { cn } from "@/utils";

interface MyCoursesCatalogSectionProps {
  title: string;
  courses: PublicCourse[];
  wishlisted?: boolean;
  className?: string;
}

function SectionCountBadge({ count }: { count: number }) {
  const label = count === 1 ? "1 course" : `${count} courses`;

  return (
    <span className="inline-flex items-center rounded-full bg-[#f5ebe0] px-3 py-1 text-xs font-semibold text-[#6b5344]">
      {label}
    </span>
  );
}

export function MyCoursesCatalogSection({
  title,
  courses,
  wishlisted = false,
  className,
}: MyCoursesCatalogSectionProps) {
  if (courses.length === 0) return null;

  return (
    <section className={cn("space-y-5", className)}>
      <div className="flex flex-wrap items-center gap-3">
        <Heading as="h2" variant="dashboard-section">{title}</Heading>
        <SectionCountBadge count={courses.length} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <PublicCourseCard
            key={course.id}
            course={course}
            variant={course.price != null && course.price > 0 ? "paid" : "free"}
            wishlisted={wishlisted}
            className="mx-0 max-w-none"
          />
        ))}
      </div>
    </section>
  );
}
