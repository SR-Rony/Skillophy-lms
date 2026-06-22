"use client";

import { useEffect, useMemo, useState } from "react";
import { Container } from "@/components/shared";
import type { StudentMessagesPageData } from "@/types/student-messages.types";
import { StudentMessagesChatPanel } from "./student-messages-chat-panel";
import { StudentMessagesCoursesPanel } from "./student-messages-courses-panel";
import { StudentMessagesCoursesSidebar } from "./student-messages-courses-sidebar";
import { StudentMessagesHero } from "./student-messages-hero";
import { StudentMessagesPanel } from "./student-messages-panel";
import {
  messagesGridClassName,
  messagesPanelEmbeddedClassName,
  messagesShellClassName,
  studentMessagesViewportClassName,
} from "./messages-layout";
import { cn } from "@/utils";

interface StudentMessagesContentProps {
  data: StudentMessagesPageData;
}

const embeddedPanelClassName = cn(
  messagesPanelEmbeddedClassName,
  "border-[#f0f0f0] lg:border-r"
);

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
    <div className={studentMessagesViewportClassName}>
      <StudentMessagesHero title={data.title} subtitle={data.subtitle} className="shrink-0" />

      <Container className="flex min-h-0 flex-1 flex-col overflow-hidden py-4 md:py-5 lg:py-6">
        <div className={cn(messagesShellClassName, "h-full min-h-0 flex-1")}>
          {hasCourses ? (
            <div className={messagesGridClassName}>
              <StudentMessagesCoursesSidebar
                courses={data.courses}
                totalUnreadCount={data.totalUnreadCount}
                selectedCourseId={selectedCourseId}
                onSelectCourse={setSelectedCourseId}
                className={embeddedPanelClassName}
              />
              <StudentMessagesChatPanel
                key={selectedCourse?.id ?? "empty-chat"}
                course={selectedCourse}
                emptyState={data.emptyState}
                className={messagesPanelEmbeddedClassName}
              />
            </div>
          ) : (
            <div className={cn(messagesGridClassName, "lg:grid-cols-2")}>
              <StudentMessagesCoursesPanel
                emptyState={data.coursesEmptyState}
                className={embeddedPanelClassName}
              />
              <StudentMessagesPanel
                emptyState={data.emptyState}
                className={cn(messagesPanelEmbeddedClassName, "min-h-0")}
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
