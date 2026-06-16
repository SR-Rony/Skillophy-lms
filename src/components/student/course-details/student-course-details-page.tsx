"use client";

import { useEffect, useState } from "react";
import type { StudentCourseDetailsData, StudentCourseDetailsTab } from "@/types/student-course-details.types";
import { Container } from "@/components/shared";
import { StudentCourseDetailsHero } from "@/components/student/course-details/student-course-details-hero";
import {
  StudentCourseCurriculumMobileButton,
  StudentCourseDetailsCertificateTab,
  StudentCourseDetailsOverview,
  StudentCourseDetailsProgressTab,
} from "@/components/student/course-details/student-course-details-content";
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
          "py-5 sm:py-8 md:py-10",
          showCurriculumButton && "pb-24 lg:pb-10"
        )}
      >
        {activeTab === "overview" && (
          <StudentCourseDetailsOverview
            course={course}
            onViewProgressDetails={() => setActiveTab("progress")}
            showMobileCurriculum={showMobileCurriculum}
            onHideMobileCurriculum={() => setShowMobileCurriculum(false)}
          />
        )}
        {activeTab === "progress" && <StudentCourseDetailsProgressTab course={course} />}
        {activeTab === "certificate" && <StudentCourseDetailsCertificateTab course={course} />}
      </Container>

      {showCurriculumButton && (
        <StudentCourseCurriculumMobileButton onClick={() => setShowMobileCurriculum(true)} />
      )}
    </>
  );
}
