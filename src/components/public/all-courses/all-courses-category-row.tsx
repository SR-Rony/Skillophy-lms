"use client";

import Link from "next/link";
import { CourseSlider } from "@/components/public/course-slider";
import { ROUTES } from "@/constants";
import type { AllCoursesCategory } from "@/data/mock/all-courses-categories";

interface AllCoursesCategoryRowProps {
  category: AllCoursesCategory;
  sectionId?: string;
}

export function AllCoursesCategoryRow({ category, sectionId }: AllCoursesCategoryRowProps) {
  return (
    <section id={sectionId} className="scroll-mt-36">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={ROUTES.courseCategory(category.id)}
            className="text-[22px] font-black tracking-[-0.03em] text-[#1a1a1a] transition hover:text-[#ff4747] sm:text-[24px]"
          >
            {category.label}
          </Link>
          <span className="rounded-full border border-[#eee5e2] bg-white px-3 py-1 text-[12px] font-bold text-[#6b7280]">
            {category.courses.length} items
          </span>
        </div>

        <Link
          href={ROUTES.courseCategory(category.id)}
          className="text-[14px] font-bold text-[#ff4747] transition hover:text-[#ef3033]"
        >
          See All
        </Link>
      </div>

      <CourseSlider
        courses={category.courses}
        variant={category.variant}
        cardBadge={category.cardBadge}
        ariaLabelPrefix={category.label}
        showPagination={false}
        autoPlayInterval={5500}
        enableTouch
      />
    </section>
  );
}
