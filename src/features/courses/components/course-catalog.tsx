"use client";

import { CourseCard } from "@/components/public/course-card";
import { CourseCardSkeleton } from "@/components/public/public-course-card";
import { EmptyState } from "@/components/shared/empty-state";
import { useCourses } from "@/hooks";

interface CourseCatalogProps {
  limit?: number;
}

export function CourseCatalog({ limit }: CourseCatalogProps) {
  const { data: courses, isLoading, isError } = useCourses();

  if (isLoading) {
    return (
      <div className="grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: limit ?? 6 }).map((_, i) => (
          <CourseCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError || !courses?.length) {
    return (
      <EmptyState
        title="No courses found"
        description="Check back later for new content."
      />
    );
  }

  const items = limit ? courses.slice(0, limit) : courses;

  return (
    <div className="grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
