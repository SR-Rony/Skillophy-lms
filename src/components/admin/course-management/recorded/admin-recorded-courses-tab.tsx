"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import {
  filterAdminRecordedCourses,
  paginateAdminRecordedCourses,
  sortAdminRecordedCourses,
} from "@/components/admin/course-management/admin-course-management.utils";
import { AdminRecordedCoursesTable } from "@/components/admin/course-management/recorded/admin-recorded-courses-table";
import { AdminRecordedCoursesToolbar } from "@/components/admin/course-management/recorded/admin-recorded-courses-toolbar";
import type {
  AdminRecordedCourseCategoryId,
  AdminRecordedCourseSortId,
  AdminRecordedCoursesData,
} from "@/types/admin-course-management.types";

interface AdminRecordedCoursesTabProps {
  data: AdminRecordedCoursesData;
}

export function AdminRecordedCoursesTab({ data }: AdminRecordedCoursesTabProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<AdminRecordedCourseCategoryId>(
    data.defaultCategoryId
  );
  const [selectedSortId, setSelectedSortId] = useState<AdminRecordedCourseSortId>(
    data.defaultSortId
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    () => new Set(data.defaultSelectedIds)
  );

  const filteredCourses = useMemo(
    () => filterAdminRecordedCourses(data.courses, searchQuery, selectedCategoryId),
    [data.courses, searchQuery, selectedCategoryId]
  );

  const sortedCourses = useMemo(
    () => sortAdminRecordedCourses(filteredCourses, selectedSortId),
    [filteredCourses, selectedSortId]
  );

  const { items: visibleCourses, totalPages, currentPage: safePage } = useMemo(
    () => paginateAdminRecordedCourses(sortedCourses, currentPage, data.pageSize),
    [sortedCourses, currentPage, data.pageSize]
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategoryId, selectedSortId]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    setSelectedIds((current) => {
      const visibleCourseIds = new Set(visibleCourses.map((course) => course.id));
      const next = new Set<string>();

      current.forEach((id) => {
        if (visibleCourseIds.has(id)) {
          next.add(id);
        }
      });

      return next;
    });
  }, [safePage, visibleCourses]);

  function handleToggleRow(courseId: string) {
    setSelectedIds((current) => {
      const next = new Set(current);
      if (next.has(courseId)) {
        next.delete(courseId);
      } else {
        next.add(courseId);
      }
      return next;
    });
  }

  function handleToggleAll(courseIds: string[]) {
    setSelectedIds((current) => {
      const allSelected = courseIds.every((id) => current.has(id));
      if (allSelected) {
        return new Set();
      }
      return new Set(courseIds);
    });
  }

  return (
    <>
      <AdminRecordedCoursesToolbar
        searchQuery={searchQuery}
        categoryOptions={data.categoryOptions}
        sortOptions={data.sortOptions}
        exportOptions={data.exportOptions}
        selectedCategoryId={selectedCategoryId}
        selectedSortId={selectedSortId}
        exportLabel={data.exportLabel}
        addNewLabel={data.addNewLabel}
        onSearchChange={setSearchQuery}
        onCategoryChange={setSelectedCategoryId}
        onSortChange={setSelectedSortId}
        onExport={() => undefined}
        onAddNew={() => router.push(ROUTES.admin.courseCreate)}
      />

      {visibleCourses.length > 0 ? (
        <AdminRecordedCoursesTable
          courses={visibleCourses}
          selectedIds={selectedIds}
          onToggleRow={handleToggleRow}
          onToggleAll={handleToggleAll}
        />
      ) : (
        <div className="bg-white px-6 py-16 text-center">
          <p className="text-[14px] font-medium text-[#9ca3af]">No courses found.</p>
        </div>
      )}

      {totalPages > 1 && (
        <div className="border-t border-[#f0f0f0] bg-white px-4 py-5 sm:px-6">
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
