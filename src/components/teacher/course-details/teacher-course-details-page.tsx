"use client";

import { useEffect, useState } from "react";
import { TeacherCourseDetailsHero } from "@/components/teacher/course-details/teacher-course-details-hero";
import {
  TeacherCourseLiveCurriculumMobileButton,
  TeacherCourseLiveOverviewTab,
} from "@/components/teacher/course-details/teacher-course-live-overview-tab";
import { TeacherCourseDetailsTabPlaceholder } from "@/components/teacher/course-details/teacher-course-details-tab-placeholder";
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
          {activeTab === "overview" && (
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

      {activeTab === "assignment" && (
        <TeacherCourseDetailsTabPlaceholder
          feature="teacher-course-assignments"
          title="Assignments"
          description="Review and manage assignments for this live batch."
        />
      )}

      {activeTab === "student-progress" && (
        <TeacherCourseDetailsTabPlaceholder
          feature="teacher-course-student-progress"
          title="Student Progress"
          description="See detailed progress for every learner in this batch."
        />
      )}

      {activeTab === "class-recordings" && (
        <TeacherCourseDetailsTabPlaceholder
          feature="teacher-course-class-recordings"
          title="Class Recordings"
          description="Access and manage recordings from live sessions."
        />
      )}

      {activeTab === "resources" && (
        <TeacherCourseDetailsTabPlaceholder
          feature="teacher-course-resources"
          title="Resources"
          description="Upload and organize course resources for your learners."
        />
      )}

      {activeTab === "student-feedback" && (
        <TeacherCourseDetailsTabPlaceholder
          feature="teacher-course-student-feedback"
          title="Student Feedback"
          description="Read feedback submitted by learners for this course."
        />
      )}

      {showCurriculumButton && (
        <TeacherCourseLiveCurriculumMobileButton onClick={() => setShowMobileCurriculum(true)} />
      )}
    </div>
  );
}
