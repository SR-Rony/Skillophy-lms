"use client";

import { useCallback, useRef, useState } from "react";
import { Container } from "@/components/shared";
import { AllCoursesCategoryFilter } from "./all-courses-category-filter";
import { AllCoursesCategoryRow } from "./all-courses-category-row";
import { AllCoursesPageHero } from "./all-courses-page-hero";
import {
  coursesPageFilterCategories,
  coursesPageSections,
  TOTAL_COURSES_COUNT,
  type CategoryId,
} from "@/data/mock/all-courses-categories";

export function AllCoursesPageContent() {
  const [activeCategoryId, setActiveCategoryId] = useState<CategoryId>("free");
  const sectionRefs = useRef<Partial<Record<CategoryId, HTMLElement | null>>>({});

  const scrollToSection = useCallback((categoryId: CategoryId) => {
    setActiveCategoryId(categoryId);

    const targetSection =
      sectionRefs.current[categoryId] ??
      document.getElementById(`courses-section-${categoryId}`);

    targetSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <AllCoursesPageHero totalCourses={TOTAL_COURSES_COUNT} />

      <section className="bg-[#0a0a0a] py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="sticky top-16 z-40 -mx-4 border-b border-white/[0.06] bg-[#0a0a0a]/95 px-4 pb-6 pt-5 backdrop-blur-md sm:-mx-0 sm:px-0">
            <AllCoursesCategoryFilter
              categories={coursesPageFilterCategories}
              activeCategoryId={activeCategoryId}
              onCategoryChange={scrollToSection}
              theme="dark"
            />
          </div>

          <div className="space-y-14 sm:space-y-16 lg:space-y-[72px]">
            {coursesPageSections.map((category) => (
              <div
                key={category.id}
                ref={(element) => {
                  sectionRefs.current[category.id] = element;
                }}
              >
                <AllCoursesCategoryRow
                  category={category}
                  sectionId={`courses-section-${category.id}`}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
