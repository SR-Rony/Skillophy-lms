"use client";

import { useEffect, useState } from "react";
import type { StudentCourseDetailsData, StudentCourseDetailsTab } from "@/types/student-course-details.types";
import { Container } from "@/components/shared";
import { StudentCourseDetailsHero } from "@/components/student/course-details/student-course-details-hero";
import {
  StudentCourseCurriculumMobileButton,
  StudentCourseDetailsOverview,
} from "@/components/student/course-details/student-course-details-content";
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

  useEffect(() => {
    setShowMobileCurriculum(false);
  }, [activeTab]);

  const showCurriculumButton = activeTab === "overview" && !showMobileCurriculum;

  return (
    <>
      <StudentCourseDetailsHero
        course={course}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <Container
        className={cn(
          activeTab === "overview" && "pt-5 sm:pt-8 md:pt-10",
          activeTab === "overview" &&
            (showCurriculumButton ? "pb-24 lg:pb-14" : "pb-10 sm:pb-12 md:pb-14")
        )}
      >
        {activeTab === "overview" &&
          (course.status === "completed" ? (
            <StudentCourseCompletedOverview
              course={course}
              onViewProgressDetails={() => setActiveTab("progress")}
              showMobileCurriculum={showMobileCurriculum}
              onHideMobileCurriculum={() => setShowMobileCurriculum(false)}
            />
          ) : (
            <StudentCourseDetailsOverview
              course={course}
              onViewProgressDetails={() => setActiveTab("progress")}
              showMobileCurriculum={showMobileCurriculum}
              onHideMobileCurriculum={() => setShowMobileCurriculum(false)}
            />
          ))}
      </Container>

      {activeTab === "progress" && <StudentCourseDetailsProgressTab course={course} />}
      {activeTab === "certificate" && <StudentCourseDetailsCertificateTab course={course} />}

      {showCurriculumButton && (
        <StudentCourseCurriculumMobileButton onClick={() => setShowMobileCurriculum(true)} />
      )}
    </>
  );
}
