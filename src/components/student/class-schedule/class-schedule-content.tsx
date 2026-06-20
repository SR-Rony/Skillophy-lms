"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/shared";
import type {
  StudentClassScheduleItem,
  StudentClassSchedulePageData,
  StudentClassScheduleSection,
} from "@/types/student-class-schedule.types";
import { ClassScheduleEmptyState } from "./class-schedule-empty-state";
import { ClassScheduleRoutineSidebar } from "./class-schedule-routine-sidebar";
import { ClassScheduleSection } from "./class-schedule-section";
import { ClassScheduleToolbar } from "./class-schedule-toolbar";

interface ClassScheduleContentProps {
  data: StudentClassSchedulePageData;
}

function sortSessions(
  sessions: StudentClassScheduleItem[],
  sortId: string
): StudentClassScheduleItem[] {
  if (sortId === "default") {
    return sessions;
  }

  const sorted = [...sessions].sort((left, right) => left.day - right.day);
  return sortId === "latest" ? sorted.reverse() : sorted;
}

function filterSections(
  sections: StudentClassScheduleSection[],
  courseId: string,
  sortId: string
): StudentClassScheduleSection[] {
  return sections.map((section) => {
    const filtered =
      courseId === "all"
        ? section.sessions
        : section.sessions.filter((session) => session.courseSlug === courseId);

    return {
      ...section,
      sessions: sortSessions(filtered, sortId),
    };
  });
}

export function ClassScheduleContent({ data }: ClassScheduleContentProps) {
  const [selectedCourseId, setSelectedCourseId] = useState(data.courseFilters[0]?.id ?? "all");
  const [selectedSortId, setSelectedSortId] = useState(data.sortOptions[0]?.id ?? "default");

  const sections = useMemo(
    () => filterSections(data.sections, selectedCourseId, selectedSortId),
    [data.sections, selectedCourseId, selectedSortId]
  );

  const hasSessions = sections.some((section) => section.sessions.length > 0);

  if (!hasSessions) {
    return (
      <div className="bg-white">
        <Container className="py-8 md:py-10">
          <ClassScheduleEmptyState emptyState={data.emptyState} />
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Container className="py-6 md:py-8">
        <ClassScheduleToolbar
          courseFilters={data.courseFilters}
          sortOptions={data.sortOptions}
          selectedCourseId={selectedCourseId}
          selectedSortId={selectedSortId}
          onCourseChange={setSelectedCourseId}
          onSortChange={setSelectedSortId}
          className="mb-8 md:mb-10"
        />

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0 space-y-8 md:space-y-10">
            {sections.map((section) => (
              <ClassScheduleSection key={section.id} section={section} />
            ))}
          </div>

          <ClassScheduleRoutineSidebar routine={data.routine} />
        </div>
      </Container>
    </div>
  );
}
