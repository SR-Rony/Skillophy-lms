"use client";

import { useEffect, useMemo, useState } from "react";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import { AdminTeacherProfileLiveCoursesTable } from "@/components/admin/teacher-profile/admin-teacher-profile-live-courses-table";
import { AdminTeacherProfileRecordedCoursesToolbar } from "@/components/admin/teacher-profile/admin-teacher-profile-recorded-courses-toolbar";
import {
  filterAdminTeacherLiveCourses,
  paginateAdminTeacherLiveCourses,
  sortAdminTeacherLiveCourses,
} from "@/components/admin/teacher-profile/admin-teacher-profile.utils";
import type {
  AdminTeacherLiveCourseSortId,
  AdminTeacherLiveCoursesData,
} from "@/types/admin-teacher-profile.types";

interface AdminTeacherProfileLiveCoursesTabProps {
  data: AdminTeacherLiveCoursesData;
}

export function AdminTeacherProfileLiveCoursesTab({
  data,
}: AdminTeacherProfileLiveCoursesTabProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSortId, setSelectedSortId] = useState<AdminTeacherLiveCourseSortId>(
    data.defaultSortId
  );
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCourses = useMemo(
    () => filterAdminTeacherLiveCourses(data.courses, searchQuery),
    [data.courses, searchQuery]
  );

  const sortedCourses = useMemo(
    () => sortAdminTeacherLiveCourses(filteredCourses, selectedSortId),
    [filteredCourses, selectedSortId]
  );

  const { items: visibleCourses, totalPages, currentPage: safePage } = useMemo(
    () => paginateAdminTeacherLiveCourses(sortedCourses, currentPage, data.pageSize),
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
        <AdminTeacherProfileLiveCoursesTable courses={visibleCourses} />
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
    </>
  );
}
