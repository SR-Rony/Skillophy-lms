"use client";

import { useEffect, useMemo, useState } from "react";
import { StudentMessagesChatPanel } from "@/components/student/student-messages/student-messages-chat-panel";
import { StudentMessagesCoursesPanel } from "@/components/student/student-messages/student-messages-courses-panel";
import { StudentMessagesCoursesSidebar } from "@/components/student/student-messages/student-messages-courses-sidebar";
import {
  messagesGridClassName,
  messagesPanelEmbeddedClassName,
  messagesShellClassName,
  teacherMessagesViewportClassName,
} from "@/components/student/student-messages/messages-layout";
import { StudentMessagesPanel } from "@/components/student/student-messages/student-messages-panel";
import { messagesInstructorAvatar } from "@/data/mock/messages-courses.mock";
import type { TeacherMessagesPageData } from "@/types/teacher-messages.types";
import { cn } from "@/utils";

interface TeacherMessagesPageProps {
  data: TeacherMessagesPageData;
}

const embeddedPanelClassName = cn(
  messagesPanelEmbeddedClassName,
  "border-[#f0f0f0] lg:border-r"
);

export function TeacherMessagesPage({ data }: TeacherMessagesPageProps) {
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
    <div className={teacherMessagesViewportClassName}>
      <div className={cn(messagesShellClassName, "h-full")}>
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
              sendAs="instructor"
              senderAvatar={messagesInstructorAvatar}
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
    </div>
  );
}
