"use client";

import { ClassScheduleEmptyState } from "@/components/student/class-schedule/class-schedule-empty-state";
import { ClassScheduleRoutineSidebar } from "@/components/student/class-schedule/class-schedule-routine-sidebar";
import { ClassScheduleSection } from "@/components/student/class-schedule/class-schedule-section";
import type { TeacherClassSchedulePageData } from "@/types/teacher-class-schedule.types";

interface TeacherClassScheduleContentProps {
  data: TeacherClassSchedulePageData;
}

export function TeacherClassScheduleContent({ data }: TeacherClassScheduleContentProps) {
  const hasSessions = data.sections.some((section) => section.sessions.length > 0);

  if (!hasSessions) {
    return <ClassScheduleEmptyState emptyState={data.emptyState} />;
  }

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_320px]">
      <div className="min-w-0 space-y-8 md:space-y-10">
        {data.sections.map((section) => (
          <ClassScheduleSection key={section.id} section={section} />
        ))}
      </div>

      <ClassScheduleRoutineSidebar routine={data.routine} className="lg:w-full" />
    </div>
  );
}
