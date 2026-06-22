"use client";

import { useEffect, useMemo, useState } from "react";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import { AdminTeacherProfileRecordedCoursesTable } from "@/components/admin/teacher-profile/admin-teacher-profile-recorded-courses-table";
import { AdminTeacherProfileRecordedCoursesToolbar } from "@/components/admin/teacher-profile/admin-teacher-profile-recorded-courses-toolbar";
import {
  filterAdminTeacherRecordedCourses,
  paginateAdminTeacherRecordedCourses,
  sortAdminTeacherRecordedCourses,
} from "@/components/admin/teacher-profile/admin-teacher-profile.utils";
import type {
  AdminTeacherRecordedCourseSortId,
  AdminTeacherRecordedCoursesData,
} from "@/types/admin-teacher-profile.types";

interface AdminTeacherProfileRecordedCoursesTabProps {
  data: AdminTeacherRecordedCoursesData;
}

export function AdminTeacherProfileRecordedCoursesTab({
  data,
}: AdminTeacherProfileRecordedCoursesTabProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSortId, setSelectedSortId] = useState<AdminTeacherRecordedCourseSortId>(
    data.defaultSortId
  );
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCourses = useMemo(
    () => filterAdminTeacherRecordedCourses(data.courses, searchQuery),
    [data.courses, searchQuery]
  );

  const sortedCourses = useMemo(
    () => sortAdminTeacherRecordedCourses(filteredCourses, selectedSortId),
    [filteredCourses, selectedSortId]
  );

  const { items: visibleCourses, totalPages, currentPage: safePage } = useMemo(
    () => paginateAdminTeacherRecordedCourses(sortedCourses, currentPage, data.pageSize),
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
        <AdminTeacherProfileRecordedCoursesTable courses={visibleCourses} />
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
    </>
  );
}
