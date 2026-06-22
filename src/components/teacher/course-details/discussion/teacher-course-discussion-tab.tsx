"use client";

import { CourseVideoDiscussionSection } from "@/components/student/course-video/student-course-video-discussion-section";
import type { TeacherCourseDiscussionTabData } from "@/types/teacher-course-details.types";

interface TeacherCourseDiscussionTabProps {
  data: TeacherCourseDiscussionTabData;
}

export function TeacherCourseDiscussionTab({ data }: TeacherCourseDiscussionTabProps) {
  return (
    <section className="bg-white pb-10 sm:pb-12 md:pb-14">
      <div className="mx-auto w-full max-w-[1320px] px-4 pt-4 sm:px-6 sm:pt-6 md:pt-8 lg:px-8">
        <CourseVideoDiscussionSection
          initialMessages={data.messages}
          currentUser={data.currentUser}
          messagesClassName="max-h-[520px] sm:max-h-[560px] lg:max-h-[min(720px,calc(100vh-320px))]"
        />
      </div>
    </section>
  );
}
