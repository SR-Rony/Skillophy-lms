"use client";

import { useMemo, useState } from "react";
import {
  DashboardCourseCard,
  type DashboardCourseCardData,
} from "@/components/shared/dashboard-course-card";
import { DashboardCoursesSection } from "@/components/shared/dashboard-courses-section";
import { TeacherMyCoursesEmptyState } from "@/components/teacher/courses/teacher-my-courses-empty-state";
import type {
  TeacherCourseItem,
  TeacherCoursesPageData,
  TeacherCoursesTab,
} from "@/types/teacher-courses.types";
import { cn } from "@/utils";

interface TeacherMyCoursesPageProps {
  data: TeacherCoursesPageData;
}

function hasCoursesForTab(
  tab: TeacherCoursesTab,
  tabData: TeacherCoursesPageData["tabData"]
) {
  const current = tabData[tab];
  return current.live.length > 0 || current.recorded.length > 0;
}

function mapCourseToCard(course: TeacherCourseItem): DashboardCourseCardData {
  return {
    id: course.id,
    title: course.title,
    image: course.image,
    learners: course.learners,
    href: course.detailsHref,
    isLive: course.type === "live",
    actionLabel: "View Details",
  };
}

export function TeacherMyCoursesPage({ data }: TeacherMyCoursesPageProps) {
  const [activeTab, setActiveTab] = useState<TeacherCoursesTab>("ongoing");
  const tabContent = data.tabData[activeTab];
  const hasCourses = hasCoursesForTab(activeTab, data.tabData);

  const recordedCards = useMemo(
    () => tabContent.recorded.map(mapCourseToCard),
    [tabContent.recorded]
  );

  const liveCards = useMemo(() => tabContent.live.map(mapCourseToCard), [tabContent.live]);

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e8e4e1] bg-white shadow-[0_2px_14px_rgba(35,25,22,0.06)]">
      <nav aria-label="Course filters" className="border-b border-[#f0ebe8] px-4 sm:px-6">
        <div className="scrollbar-hide -mx-1 flex gap-0 overflow-x-auto">
          {data.tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "shrink-0 border-b-[3px] px-4 py-4 text-[14px] font-semibold transition-colors sm:px-5",
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-[#6b7280] hover:text-[#1a1a1a]"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </nav>

      {hasCourses ? (
        <div className="space-y-10 px-4 py-6 sm:px-6 sm:py-8">
          <DashboardCoursesSection title="Recorded Courses" count={recordedCards.length}>
            {recordedCards.map((course) => (
              <DashboardCourseCard key={course.id} course={course} />
            ))}
          </DashboardCoursesSection>

          <DashboardCoursesSection title="LIVE Courses" count={liveCards.length}>
            {liveCards.map((course) => (
              <DashboardCourseCard key={course.id} course={course} />
            ))}
          </DashboardCoursesSection>
        </div>
      ) : (
        <TeacherMyCoursesEmptyState emptyState={data.emptyState[activeTab]} />
      )}
    </div>
  );
}
