"use client";

import { Container } from "@/components/shared";
import { AllCoursesCategoryFilter } from "./all-courses-category-filter";
import { AllCoursesCategoryRow } from "./all-courses-category-row";
import { AllCoursesPageHero } from "./all-courses-page-hero";
import {
  coursesPageFilterCategories,
  coursesPageSections,
  TOTAL_COURSES_COUNT,
} from "@/data/mock/all-courses-categories";

export function AllCoursesPageContent() {
  return (
    <>
      <AllCoursesPageHero totalCourses={TOTAL_COURSES_COUNT} />

      <section className="bg-[#0a0a0a] py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="sticky top-16 z-40 -mx-4 border-b border-white/[0.06] bg-[#0a0a0a]/95 px-4 pb-6 pt-5 backdrop-blur-md sm:-mx-0 sm:px-0">
            <AllCoursesCategoryFilter
              categories={coursesPageFilterCategories}
              activeCategoryId="free"
              linkToCategoryPages
              theme="dark"
            />
          </div>

          <div className="space-y-14 sm:space-y-16 lg:space-y-[72px]">
            {coursesPageSections.map((category) => (
              <AllCoursesCategoryRow
                key={category.id}
                category={category}
                sectionId={`courses-section-${category.id}`}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
