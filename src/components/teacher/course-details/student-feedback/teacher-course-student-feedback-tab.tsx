"use client";

import { TeacherCourseDetailsTabPlaceholder } from "@/components/teacher/course-details/shared";

export function TeacherCourseStudentFeedbackTab() {
  return (
    <TeacherCourseDetailsTabPlaceholder
      feature="teacher-course-student-feedback"
      title="Student Feedback"
      description="Read feedback submitted by learners for this course."
    />
  );
}
