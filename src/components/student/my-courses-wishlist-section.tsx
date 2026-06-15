"use client";

import type { PublicCourse } from "@/components/public/public-course-card";
import { MyCoursesCatalogSection } from "./my-courses-catalog-section";

interface MyCoursesWishlistSectionProps {
  title?: string;
  courses: PublicCourse[];
  className?: string;
}

export function MyCoursesWishlistSection({
  title = "Wishlists",
  courses,
  className,
}: MyCoursesWishlistSectionProps) {
  return (
    <MyCoursesCatalogSection
      title={title}
      courses={courses}
      wishlisted
      className={className}
    />
  );
}
