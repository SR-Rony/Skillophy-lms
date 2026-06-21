"use client";

import { useMemo, useState } from "react";
import { TeacherCourseAssignmentAssessmentDrawer } from "@/components/teacher/course-details/teacher-course-assignment-assessment-drawer";
import { TeacherCourseAssignmentEmptyState } from "@/components/teacher/course-details/teacher-course-assignment-empty-state";
import {
  getTeacherCourseAssignmentPaginationMeta,
  TeacherCourseAssignmentPagination,
} from "@/components/teacher/course-details/teacher-course-assignment-pagination";
import { TeacherCourseAssignmentTable } from "@/components/teacher/course-details/teacher-course-assignment-table";
import type {
  TeacherCourseAssignmentSubmission,
  TeacherCourseAssignmentsTabData,
} from "@/types/teacher-course-details.types";

interface TeacherCourseAssignmentTabProps {
  assignmentsTab: TeacherCourseAssignmentsTabData;
}

export function TeacherCourseAssignmentTab({ assignmentsTab }: TeacherCourseAssignmentTabProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] =
    useState<TeacherCourseAssignmentSubmission | null>(null);

  const hasSubmissions = assignmentsTab.submissions.length > 0;

  const paginationMeta = useMemo(
    () => getTeacherCourseAssignmentPaginationMeta(assignmentsTab.submissions.length, currentPage),
    [assignmentsTab.submissions.length, currentPage]
  );

  const pageSubmissions = useMemo(
    () =>
      assignmentsTab.submissions.slice(paginationMeta.startIndex, paginationMeta.endIndex),
    [assignmentsTab.submissions, paginationMeta.endIndex, paginationMeta.startIndex]
  );

  function handleCheckSubmission(submission: TeacherCourseAssignmentSubmission) {
    setSelectedSubmission(submission);
    setDrawerOpen(true);
  }

  return (
    <>
      <section className="bg-white pb-10 sm:pb-12 md:pb-14">
        <div className="mx-auto w-full max-w-[1320px] px-4 pt-4 sm:px-6 sm:pt-6 md:pt-8 lg:px-8">
          {hasSubmissions ? (
            <>
              <TeacherCourseAssignmentTable
                submissions={pageSubmissions}
                assignmentsTab={assignmentsTab}
                onCheckSubmission={handleCheckSubmission}
              />

              {paginationMeta.totalPages > 1 && (
                <TeacherCourseAssignmentPagination
                  currentPage={paginationMeta.currentPage}
                  totalPages={paginationMeta.totalPages}
                  onPageChange={setCurrentPage}
                  className="mt-8 sm:mt-10"
                />
              )}
            </>
          ) : (
            <TeacherCourseAssignmentEmptyState emptyState={assignmentsTab.emptyState} />
          )}
        </div>
      </section>

      <TeacherCourseAssignmentAssessmentDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        submission={selectedSubmission}
      />
    </>
  );
}
