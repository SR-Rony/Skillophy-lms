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
            className="text-[22px] font-black tracking-[-0.03em] text-white transition hover:text-[#ff8a8a] sm:text-[24px]"
          >
            {category.label}
          </Link>
          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[12px] font-bold text-white/88">
            {category.courses.length} items
          </span>
        </div>

        <Link
          href={ROUTES.courseCategory(category.id)}
          className="text-[14px] font-bold text-[#ff4747] transition hover:text-[#ff8a8a]"
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
