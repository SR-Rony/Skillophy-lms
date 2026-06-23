"use client";

import { AdminLearnerProfileLiveCourseProgressDrawer } from "@/components/admin/learner-profile/live-courses/progress/admin-learner-profile-live-course-progress-drawer";
import { AdminLearnerProfileLiveCoursesTable } from "@/components/admin/learner-profile/live-courses/admin-learner-profile-live-courses-table";
import {
  filterAdminLearnerLiveCourses,
  paginateAdminLearnerLiveCourses,
  sortAdminLearnerLiveCourses,
} from "@/components/admin/learner-profile/admin-learner-profile.utils";
import { AdminTeacherProfileRecordedCoursesToolbar } from "@/components/admin/teacher-profile/admin-teacher-profile-recorded-courses-toolbar";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import type {
  AdminLearnerLiveCourse,
  AdminLearnerLiveCourseSortId,
  AdminLearnerLiveCoursesData,
} from "@/types/admin-learner-profile.types";
import { useEffect, useMemo, useState } from "react";

interface AdminLearnerProfileLiveCoursesTabProps {
  data: AdminLearnerLiveCoursesData;
}

export function AdminLearnerProfileLiveCoursesTab({ data }: AdminLearnerProfileLiveCoursesTabProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSortId, setSelectedSortId] = useState<AdminLearnerLiveCourseSortId>(
    data.defaultSortId
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState<AdminLearnerLiveCourse | null>(null);
  const [isProgressDrawerOpen, setIsProgressDrawerOpen] = useState(false);

  const filteredCourses = useMemo(
    () => filterAdminLearnerLiveCourses(data.courses, searchQuery),
    [data.courses, searchQuery]
  );

  const sortedCourses = useMemo(
    () => sortAdminLearnerLiveCourses(filteredCourses, selectedSortId),
    [filteredCourses, selectedSortId]
  );

  const { items: visibleCourses, totalPages, currentPage: safePage } = useMemo(
    () => paginateAdminLearnerLiveCourses(sortedCourses, currentPage, data.pageSize),
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

  function handleViewDetails(course: AdminLearnerLiveCourse) {
    setSelectedCourse(course);
    setIsProgressDrawerOpen(true);
  }

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
        <AdminLearnerProfileLiveCoursesTable
          courses={visibleCourses}
          onViewDetails={handleViewDetails}
        />
      ) : (
        <div className="px-6 py-16 text-center">
          <p className="text-[14px] font-medium text-[#9ca3af]">No LIVE courses found.</p>
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

      <AdminLearnerProfileLiveCourseProgressDrawer
        open={isProgressDrawerOpen}
        onOpenChange={setIsProgressDrawerOpen}
        course={selectedCourse}
      />
    </>
  );
}
