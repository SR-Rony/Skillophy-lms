"use client";

import { useEffect, useMemo, useState } from "react";
import { Container } from "@/components/shared";
import type { StudentMessagesPageData } from "@/types/student-messages.types";
import { StudentMessagesChatPanel } from "./student-messages-chat-panel";
import { StudentMessagesCoursesPanel } from "./student-messages-courses-panel";
import { StudentMessagesCoursesSidebar } from "./student-messages-courses-sidebar";
import { StudentMessagesHero } from "./student-messages-hero";
import { StudentMessagesPanel } from "./student-messages-panel";

interface StudentMessagesContentProps {
  data: StudentMessagesPageData;
}

export function StudentMessagesContent({ data }: StudentMessagesContentProps) {
  const hasCourses = data.courses.length > 0;
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(
    data.courses[0]?.id ?? null
  );

  const selectedCourse = useMemo(
    () => data.courses.find((course) => course.id === selectedCourseId) ?? null,
    [data.courses, selectedCourseId]
  );

  useEffect(() => {
    if (!selectedCourseId && data.courses[0]) {
      setSelectedCourseId(data.courses[0].id);
    }
  }, [data.courses, selectedCourseId]);

  return (
    <div className="bg-white">
      <StudentMessagesHero title={data.title} subtitle={data.subtitle} />

      <Container className="py-6 md:py-8 lg:py-10">
        {hasCourses ? (
          <div className="grid gap-5 lg:grid-cols-[minmax(300px,360px)_minmax(0,1fr)] lg:gap-6">
            <StudentMessagesCoursesSidebar
              courses={data.courses}
              totalUnreadCount={data.totalUnreadCount}
              selectedCourseId={selectedCourseId}
              onSelectCourse={setSelectedCourseId}
            />
            <StudentMessagesChatPanel
              key={selectedCourse?.id ?? "empty-chat"}
              course={selectedCourse}
              emptyState={data.emptyState}
            />
          </div>
        ) : (
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            <StudentMessagesCoursesPanel emptyState={data.coursesEmptyState} />
            <StudentMessagesPanel emptyState={data.emptyState} />
          </div>
        )}
      </Container>
    </div>
  );
}
