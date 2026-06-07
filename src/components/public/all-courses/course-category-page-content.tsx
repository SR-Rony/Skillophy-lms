"use client";

import { Container } from "@/components/shared";
import { CourseCategoryPageHero } from "@/components/public/all-courses/course-category-page-hero";
import {
  CoursePagination,
  getCoursePaginationMeta,
} from "@/components/public/course-pagination";
import { PublicCourseCard } from "@/components/public/public-course-card";
import { ROUTES } from "@/constants";
import {
  getCategoryById,
  getExpandedCategoryCourses,
} from "@/data/mock/all-courses-categories";

interface CourseCategoryPageContentProps {
  categoryId: string;
  currentPage: number;
}

export function CourseCategoryPageContent({
  categoryId,
  currentPage,
}: CourseCategoryPageContentProps) {
  const category = getCategoryById(categoryId)!;

  const allCourses = getExpandedCategoryCourses(category, 108);
  const { totalPages, currentPage: safePage, startIndex, endIndex } =
    getCoursePaginationMeta(allCourses.length, currentPage);
  const pageCourses = allCourses.slice(startIndex, endIndex);
  const basePath = ROUTES.courseCategory(categoryId);

  return (
    <>
      <CourseCategoryPageHero
        totalCourses={allCourses.length}
        title={category.label}
      />

      <section className="bg-[#f7f7f6] py-7 lg:py-10">
        <Container>
          <div className="grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pageCourses.map((course) => (
              <PublicCourseCard
                key={course.id}
                course={course}
                variant={category.variant}
                badge={category.cardBadge}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <CoursePagination
              className="mt-14 sm:mt-16"
              currentPage={safePage}
              totalPages={totalPages}
              basePath={basePath}
            />
          )}
        </Container>
      </section>
    </>
  );
}
