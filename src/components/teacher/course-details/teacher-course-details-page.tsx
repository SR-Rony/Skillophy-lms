"use client";

import { useEffect, useState } from "react";
import { TeacherCourseAssignmentTab } from "@/components/teacher/course-details/assignment";
import { TeacherCourseClassRecordingsTab } from "@/components/teacher/course-details/class-recordings";
import { TeacherCourseDetailsHero } from "@/components/teacher/course-details/teacher-course-details-hero";
import {
  TeacherCourseLiveCurriculumMobileButton,
  TeacherCourseLiveOverviewTab,
  TeacherCourseRecordedCurriculumMobileButton,
  TeacherCourseRecordedOverviewTab,
} from "@/components/teacher/course-details/overview";
import { TeacherCourseDiscussionTab } from "@/components/teacher/course-details/discussion";
import { TeacherCourseResourcesTab } from "@/components/teacher/course-details/resources";
import { TeacherCourseStudentFeedbackTab } from "@/components/teacher/course-details/student-feedback";
import { TeacherCourseStudentProgressTab } from "@/components/teacher/course-details/student-progress";
import type {
  TeacherCourseDetailsData,
  TeacherCourseDetailsTab,
} from "@/types/teacher-course-details.types";
import { cn } from "@/utils";

interface TeacherCourseDetailsPageProps {
  course: TeacherCourseDetailsData;
}

export function TeacherCourseDetailsPage({ course }: TeacherCourseDetailsPageProps) {
  const [activeTab, setActiveTab] = useState<TeacherCourseDetailsTab>("overview");
  const [showMobileCurriculum, setShowMobileCurriculum] = useState(false);

  useEffect(() => {
    setShowMobileCurriculum(false);
  }, [activeTab]);

  const isRecorded = course.courseType === "recorded";
  const showCurriculumButton = activeTab === "overview" && !showMobileCurriculum;

  return (
    <div className="-mx-4 -mt-4 md:-mx-6 md:-mt-6 lg:-mx-8 lg:-mt-8">
      <TeacherCourseDetailsHero
        course={course}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <section
        className={cn(
          "bg-white",
          activeTab === "overview" &&
            (showCurriculumButton ? "pb-24 lg:pb-14" : "pb-10 sm:pb-12 md:pb-14")
        )}
      >
        <div
          className={cn(
            "mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8",
            activeTab === "overview" && "pt-4 sm:pt-6 md:pt-8"
          )}
        >
          {activeTab === "overview" && isRecorded && (
            <TeacherCourseRecordedOverviewTab
              course={course}
              showMobileCurriculum={showMobileCurriculum}
              onHideMobileCurriculum={() => setShowMobileCurriculum(false)}
            />
          )}

          {activeTab === "overview" && !isRecorded && (
            <TeacherCourseLiveOverviewTab
              course={course}
              onViewProgressDetails={() => setActiveTab("student-progress")}
              onCheckAssignment={() => setActiveTab("assignment")}
              showMobileCurriculum={showMobileCurriculum}
              onHideMobileCurriculum={() => setShowMobileCurriculum(false)}
            />
          )}
        </div>
      </section>

      {!isRecorded && activeTab === "assignment" && (
        <TeacherCourseAssignmentTab assignmentsTab={course.assignments} />
      )}

      {!isRecorded && activeTab === "student-progress" && (
        <TeacherCourseStudentProgressTab course={course} />
      )}

      {!isRecorded && activeTab === "class-recordings" && (
        <TeacherCourseClassRecordingsTab data={course.classRecordings} />
      )}

      {activeTab === "resources" && <TeacherCourseResourcesTab data={course.resources} />}

      {activeTab === "student-feedback" && (
        <TeacherCourseStudentFeedbackTab data={course.studentFeedbackTab} />
      )}

      {isRecorded && activeTab === "discussion" && (
        <TeacherCourseDiscussionTab data={course.discussionTab} />
      )}

      {showCurriculumButton && isRecorded && (
        <TeacherCourseRecordedCurriculumMobileButton onClick={() => setShowMobileCurriculum(true)} />
      )}

      {showCurriculumButton && !isRecorded && (
        <TeacherCourseLiveCurriculumMobileButton onClick={() => setShowMobileCurriculum(true)} />
      )}
    </div>
  );
}
