"use client";

import type { MyCoursesTab } from "@/types/student-course.types";
import { Container } from "@/components/shared";
import { myCoursesTabs } from "@/data/mock/my-courses.mock";
import { cn } from "@/utils";

interface MyCoursesHeroProps {
  activeTab: MyCoursesTab;
  onTabChange: (tab: MyCoursesTab) => void;
  className?: string;
}

function MyCoursesHeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-r from-[#fff8f6] via-white to-[#faf7fc]" />
      <div className="absolute left-[-6%] top-[20%] h-[240px] w-[240px] rounded-full bg-[#ffe8e4]/40 blur-3xl" />
      <div className="absolute right-[-4%] top-[8%] h-[280px] w-[280px] rounded-full bg-[#f0e8f8]/35 blur-3xl" />

      <svg
        className="absolute right-[-2%] top-[4%] hidden h-[320px] w-[520px] text-[#ead8d2]/50 lg:block"
        viewBox="0 0 520 340"
        fill="none"
      >
        {Array.from({ length: 14 }).map((_, index) => (
          <path
            key={index}
            d={`M${24 + index * 12} ${250 - index * 7} C ${120 + index * 10} ${90 - index * 2}, ${280 + index * 6} ${86 + index * 4}, ${480 - index * 5} ${240 - index * 3}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <svg
        className="absolute left-[-4%] top-[10%] hidden h-[280px] w-[400px] text-[#efb0aa]/25 lg:block"
        viewBox="0 0 400 280"
        fill="none"
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <path
            key={index}
            d={`M${8 + index * 10} ${220 - index * 6} C ${55 + index * 8} ${80 - index * 2}, ${160 + index * 6} ${72 + index * 3}, ${360 - index * 5} ${210 - index * 4}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}

export function MyCoursesHero({ activeTab, onTabChange, className }: MyCoursesHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-[#f3f4f6] py-8 md:py-10 lg:py-12",
        className
      )}
    >
      <MyCoursesHeroBackground />

      <Container className="relative z-10">
        <h1 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-[28px] lg:text-[32px]">
          My Courses
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6b7280] sm:text-[15px]">
          You will get your all enrolled courses here. You will also get your wish-lists course
          here.
        </p>

        <nav
          aria-label="Course filters"
          className="scrollbar-hide -mx-1 mt-8 flex gap-0 overflow-x-auto sm:gap-2"
        >
          {myCoursesTabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "shrink-0 border-b-[3px] px-4 py-3 text-[14px] font-semibold transition-colors sm:px-5",
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-[#1a1a1a] hover:text-[#4a4a4a]"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </Container>
    </section>
  );
}
