"use client";

import { useState } from "react";
import { Flag } from "lucide-react";
import { StudentCourseVideoReportModal } from "./student-course-video-report-modal";

export function CourseVideoReportButton() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsReportModalOpen(true)}
        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary transition-colors hover:text-primary/80 sm:text-[14px]"
      >
        <Flag className="h-4 w-4" aria-hidden />
        Report
      </button>

      <StudentCourseVideoReportModal
        open={isReportModalOpen}
        onOpenChange={setIsReportModalOpen}
      />
    </>
  );
}
