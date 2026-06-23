"use client";

import { useEffect, useMemo, useState } from "react";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import { AdminTeacherProfileRecordedCoursesToolbar } from "@/components/admin/teacher-profile/admin-teacher-profile-recorded-courses-toolbar";
import { AdminLearnerProfileRecordedCourseProgressDrawer } from "@/components/admin/learner-profile/admin-learner-profile-recorded-course-progress-drawer";
import { AdminLearnerProfileRecordedCoursesTable } from "@/components/admin/learner-profile/admin-learner-profile-recorded-courses-table";
import {
  filterAdminLearnerRecordedCourses,
  paginateAdminLearnerRecordedCourses,
  sortAdminLearnerRecordedCourses,
} from "@/components/admin/learner-profile/admin-learner-profile.utils";
import type {
  AdminLearnerRecordedCourse,
  AdminLearnerRecordedCourseSortId,
  AdminLearnerRecordedCoursesData,
} from "@/types/admin-learner-profile.types";

interface AdminLearnerProfileRecordedCoursesTabProps {
  data: AdminLearnerRecordedCoursesData;
}

export function AdminLearnerProfileRecordedCoursesTab({
  data,
}: AdminLearnerProfileRecordedCoursesTabProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSortId, setSelectedSortId] = useState<AdminLearnerRecordedCourseSortId>(
    data.defaultSortId
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState<AdminLearnerRecordedCourse | null>(null);
  const [isProgressDrawerOpen, setIsProgressDrawerOpen] = useState(false);

  function handleViewDetails(course: AdminLearnerRecordedCourse) {
    setSelectedCourse(course);
    setIsProgressDrawerOpen(true);
  }

  const filteredCourses = useMemo(
    () => filterAdminLearnerRecordedCourses(data.courses, searchQuery),
    [data.courses, searchQuery]
  );

  const sortedCourses = useMemo(
    () => sortAdminLearnerRecordedCourses(filteredCourses, selectedSortId),
    [filteredCourses, selectedSortId]
  );

  const { items: visibleCourses, totalPages, currentPage: safePage } = useMemo(
    () => paginateAdminLearnerRecordedCourses(sortedCourses, currentPage, data.pageSize),
    [sortedCourses, currentPage, data.pageSize]
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedSortId]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <>
      <AdminTeacherProfileRecordedCoursesToolbar
        searchQuery={searchQuery}
        sortOptions={data.sortOptions}
        selectedSortId={selectedSortId}
        onSearchChange={setSearchQuery}
        onSortChange={setSelectedSortId}
      />

      {visibleCourses.length > 0 ? (
        <AdminLearnerProfileRecordedCoursesTable
          courses={visibleCourses}
          onViewDetails={handleViewDetails}
        />
      ) : (
        <div className="px-6 py-16 text-center">
          <p className="text-[14px] font-medium text-[#9ca3af]">No recorded courses found.</p>
        </div>
      )}

      {totalPages > 1 && (
        <div className="border-t border-[#f0f0f0] px-4 py-5 sm:px-6">
          <StudentNotificationsPagination
            currentPage={safePage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}

      <AdminLearnerProfileRecordedCourseProgressDrawer
        open={isProgressDrawerOpen}
        onOpenChange={setIsProgressDrawerOpen}
        course={selectedCourse}
      />
    </>
  );
}
