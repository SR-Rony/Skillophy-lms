"use client";

import type { StudentCourseDetailsData } from "@/types/student-course-details.types";
import { StudentCourseLiveCurriculum } from "@/components/student/course-details/student-course-live-curriculum";
import { StudentCourseRecordedCurriculum } from "@/components/student/course-video/student-course-recorded-curriculum";

interface StudentCourseLearningCurriculumProps {
  course: StudentCourseDetailsData;
  activeLessonId?: string;
}

export function StudentCourseLearningCurriculum({
  course,
  activeLessonId,
}: StudentCourseLearningCurriculumProps) {
  if (course.courseType === "recorded") {
    return (
      <StudentCourseRecordedCurriculum
        modules={course.curriculum}
        courseSlug={course.slug}
        activeLessonId={activeLessonId}
        completedTopics={course.completedTopics}
        totalTopics={course.totalTopics}
        progressPercent={course.progressPercent}
      />
    );
  }

  return (
    <StudentCourseLiveCurriculum
      modules={course.curriculum}
      courseSlug={course.slug}
      activeLessonId={activeLessonId}
    />
  );
}
