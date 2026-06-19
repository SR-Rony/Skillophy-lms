"use client";

import { Heading } from "@/components/shared/heading";

import type { MyCoursesTab } from "@/types/student-course.types";
import { Container } from "@/components/shared";
import { MyCoursesSeamBackground } from "@/components/student/my-courses-seam-background";
import { myCoursesTabs } from "@/data/mock/my-courses.mock";
import { cn } from "@/utils";

interface MyCoursesHeroProps {
  activeTab: MyCoursesTab;
  onTabChange: (tab: MyCoursesTab) => void;
  className?: string;
}

export function MyCoursesHero({ activeTab, onTabChange, className }: MyCoursesHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-[#f3f4f6] py-8 md:py-10 lg:py-12",
        className
      )}
    >
      <MyCoursesSeamBackground />

      <Container className="relative z-10">
        <Heading as="h1" variant="dashboard-page-sm">
          My Courses
        </Heading>
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
