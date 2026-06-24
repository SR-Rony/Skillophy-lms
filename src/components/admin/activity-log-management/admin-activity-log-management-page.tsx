"use client";

import { useEffect, useMemo, useState } from "react";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import { AdminActivityLogList } from "@/components/admin/activity-log-management/admin-activity-log-list";
import { AdminActivityLogToolbar } from "@/components/admin/activity-log-management/admin-activity-log-toolbar";
import {
  filterAdminActivityLogEntries,
  groupAdminActivityLogEntries,
  paginateAdminActivityLogEntries,
  sortAdminActivityLogEntries,
} from "@/components/admin/activity-log-management/admin-activity-log-management.utils";
import type {
  AdminActivityLogManagementData,
  AdminActivityLogSortId,
  AdminActivityLogTypeFilterId,
} from "@/types/admin-activity-log.types";

interface AdminActivityLogManagementPageProps {
  data: AdminActivityLogManagementData;
}

const activityLogCardClassName =
  "overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]";

export function AdminActivityLogManagementPage({ data }: AdminActivityLogManagementPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypeId, setSelectedTypeId] = useState<AdminActivityLogTypeFilterId>(data.defaultTypeId);
  const [selectedSortId, setSelectedSortId] = useState<AdminActivityLogSortId>(data.defaultSortId);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredEntries = useMemo(
    () => filterAdminActivityLogEntries(data.entries, searchQuery, selectedTypeId),
    [data.entries, searchQuery, selectedTypeId]
  );

  const sortedEntries = useMemo(
    () => sortAdminActivityLogEntries(filteredEntries, selectedSortId),
    [filteredEntries, selectedSortId]
  );

  const { items: visibleEntries, totalPages, currentPage: safePage } = useMemo(
    () => paginateAdminActivityLogEntries(sortedEntries, currentPage, data.pageSize),
    [sortedEntries, currentPage, data.pageSize]
  );

  const visibleGroups = useMemo(
    () => groupAdminActivityLogEntries(visibleEntries),
    [visibleEntries]
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedTypeId, selectedSortId]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <div className={activityLogCardClassName}>
      <AdminActivityLogToolbar
        searchQuery={searchQuery}
        typeOptions={data.typeOptions}
        sortOptions={data.sortOptions}
        selectedTypeId={selectedTypeId}
        selectedSortId={selectedSortId}
        dateRangeLabel={data.defaultDateRangeLabel}
        resultCount={filteredEntries.length}
        onSearchChange={setSearchQuery}
        onTypeChange={setSelectedTypeId}
        onSortChange={setSelectedSortId}
      />

      {visibleEntries.length > 0 ? (
        <AdminActivityLogList groups={visibleGroups} />
      ) : (
        <div className="px-6 py-20 text-center">
          <p className="text-[15px] font-semibold text-[#1a1a1a]">No activity found</p>
          <p className="mt-1 text-[13px] text-[#9ca3af]">
            Try adjusting your search, type filter, or date range.
          </p>
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
    </div>
  );
}
