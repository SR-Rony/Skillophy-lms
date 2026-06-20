"use client";

import { Heading } from "@/components/shared/heading";
import { Container } from "@/components/shared";
import { MyCoursesSeamBackground } from "@/components/student/my-courses-seam-background";
import type { StudentResourcesTab, StudentResourcesTabId } from "@/types/student-resources.types";
import { cn } from "@/utils";

interface MyResourcesHeroProps {
  title: string;
  subtitle: string;
  tabs: StudentResourcesTab[];
  activeTab: StudentResourcesTabId;
  onTabChange: (tab: StudentResourcesTabId) => void;
  className?: string;
}

export function MyResourcesHero({
  title,
  subtitle,
  tabs,
  activeTab,
  onTabChange,
  className,
}: MyResourcesHeroProps) {
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
          {title}
        </Heading>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#6b7280] sm:text-[15px]">
          {subtitle}
        </p>

        <nav
          aria-label="Resource categories"
          className="scrollbar-hide -mx-1 mt-8 flex gap-0 overflow-x-auto sm:gap-2"
        >
          {tabs.map((tab) => {
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
