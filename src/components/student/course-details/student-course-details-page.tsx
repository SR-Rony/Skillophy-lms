"use client";

import { useEffect, useState } from "react";
import type { StudentCourseDetailsData, StudentCourseDetailsTab } from "@/types/student-course-details.types";
import { Container } from "@/components/shared";
import { StudentCourseDetailsHero } from "@/components/student/course-details/student-course-details-hero";
import {
  StudentCourseCurriculumMobileButton,
  StudentCourseDetailsOverview,
} from "@/components/student/course-details/student-course-details-content";
import {
  StudentCourseLiveCurriculumMobileButton,
  StudentCourseLiveOverview,
} from "@/components/student/course-details/student-course-live-overview";
import { StudentCourseLeaderboardTab } from "@/components/student/course-details/student-course-leaderboard-tab";
import { StudentCourseAssignmentTab } from "@/components/student/course-details/student-course-assignment-tab";
import { StudentCourseDetailsTabPlaceholder } from "@/components/student/course-details/student-course-details-tab-placeholder";
import { StudentCourseDetailsProgressTab } from "@/components/student/course-details/student-course-progress-details-tab";
import { StudentCourseDetailsCertificateTab } from "@/components/student/course-details/student-course-certificate-tab";
import { StudentCourseCompletedOverview } from "@/components/student/course-details/student-course-completed-overview";
import { cn } from "@/utils";

interface StudentCourseDetailsPageProps {
  course: StudentCourseDetailsData;
}

export function StudentCourseDetailsPage({ course }: StudentCourseDetailsPageProps) {
  const [activeTab, setActiveTab] = useState<StudentCourseDetailsTab>("overview");
  const [showMobileCurriculum, setShowMobileCurriculum] = useState(false);
  const isLiveCourse = course.courseType === "live";

  useEffect(() => {
    setShowMobileCurriculum(false);
  }, [activeTab]);

  const showCurriculumButton = activeTab === "overview" && !showMobileCurriculum;

  const isRecordedCourse = course.courseType === "recorded";
  const showCompletedRecordedOverview =
    course.status === "completed" && isRecordedCourse;

  const renderOverview = () => {
    if (showCompletedRecordedOverview) {
      return (
        <StudentCourseCompletedOverview
          course={course}
          onViewProgressDetails={() => setActiveTab("progress")}
          showMobileCurriculum={showMobileCurriculum}
          onHideMobileCurriculum={() => setShowMobileCurriculum(false)}
        />
      );
    }

    if (isLiveCourse) {
      return (
        <StudentCourseLiveOverview
          course={course}
          onViewProgressDetails={() => setActiveTab("progress")}
          showMobileCurriculum={showMobileCurriculum}
          onHideMobileCurriculum={() => setShowMobileCurriculum(false)}
        />
      );
    }

    return (
      <StudentCourseDetailsOverview
        course={course}
        onViewProgressDetails={() => setActiveTab("progress")}
        showMobileCurriculum={showMobileCurriculum}
        onHideMobileCurriculum={() => setShowMobileCurriculum(false)}
      />
    );
  };

  return (
    <>
      <StudentCourseDetailsHero
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
        <Container
          className={cn(activeTab === "overview" && "pt-5 sm:pt-8 md:pt-10")}
        >
          {activeTab === "overview" && renderOverview()}
        </Container>
      </section>

      {activeTab === "assignment" &&
        ((course.assignments?.length ?? 0) > 0 || isLiveCourse ? (
          <StudentCourseAssignmentTab course={course} />
        ) : (
          <StudentCourseDetailsTabPlaceholder
            course={course}
            feature="assignments"
            title="Assignments"
            description="View and submit assignments for this course."
          />
        ))}

      {activeTab === "progress" && <StudentCourseDetailsProgressTab course={course} />}

      {activeTab === "leaderboard" &&
        (isLiveCourse ? (
          <StudentCourseLeaderboardTab course={course} />
        ) : (
          <StudentCourseDetailsTabPlaceholder
            course={course}
            feature="leaderboard"
            title="Leaderboard"
            description="See how you rank against other learners in this batch."
          />
        ))}

      {activeTab === "certificate" && <StudentCourseDetailsCertificateTab course={course} />}

      {showCurriculumButton &&
        (isLiveCourse ? (
          <StudentCourseLiveCurriculumMobileButton onClick={() => setShowMobileCurriculum(true)} />
        ) : (
          <StudentCourseCurriculumMobileButton onClick={() => setShowMobileCurriculum(true)} />
        ))}
    </>
  );
}
