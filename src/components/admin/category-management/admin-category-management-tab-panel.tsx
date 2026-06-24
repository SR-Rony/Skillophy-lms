"use client";

import { useEffect, useMemo, useState } from "react";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import { AdminCategoryManagementTable } from "@/components/admin/category-management/admin-category-management-table";
import { AdminCategoryManagementToolbar } from "@/components/admin/category-management/admin-category-management-toolbar";
import {
  filterAdminCategories,
  paginateAdminCategories,
  sortAdminCategories,
} from "@/components/admin/category-management/admin-category-management.utils";
import type {
  AdminCategorySortId,
  AdminCategorySortOption,
  AdminCategoryTabData,
} from "@/types/admin-category-management.types";

interface AdminCategoryManagementTabPanelProps {
  tabData: AdminCategoryTabData;
  sortOptions: AdminCategorySortOption[];
  defaultSortId: AdminCategorySortId;
  pageSize: number;
  addNewLabel: string;
}

export function AdminCategoryManagementTabPanel({
  tabData,
  sortOptions,
  defaultSortId,
  pageSize,
  addNewLabel,
}: AdminCategoryManagementTabPanelProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSortId, setSelectedSortId] = useState<AdminCategorySortId>(defaultSortId);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCategories = useMemo(
    () => filterAdminCategories(tabData.categories, searchQuery),
    [tabData.categories, searchQuery]
  );

  const sortedCategories = useMemo(
    () => sortAdminCategories(filteredCategories, selectedSortId),
    [filteredCategories, selectedSortId]
  );

  const { items: visibleCategories, totalPages, currentPage: safePage } = useMemo(
    () => paginateAdminCategories(sortedCategories, currentPage, pageSize),
    [sortedCategories, currentPage, pageSize]
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
      <AdminCategoryManagementToolbar
        searchQuery={searchQuery}
        sortOptions={sortOptions}
        selectedSortId={selectedSortId}
        addNewLabel={addNewLabel}
        onSearchChange={setSearchQuery}
        onSortChange={setSelectedSortId}
        onAddNew={() => undefined}
      />

      {visibleCategories.length > 0 ? (
        <AdminCategoryManagementTable
          categories={visibleCategories}
          countColumnLabel={tabData.countColumnLabel}
        />
      ) : (
        <div className="bg-white px-6 py-16 text-center">
          <p className="text-[14px] font-medium text-[#9ca3af]">No categories found.</p>
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
