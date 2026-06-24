"use client";

import { useEffect, useMemo, useState } from "react";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import { AdminQueryFormContactTable } from "@/components/admin/query-form-management/admin-query-form-contact-table";
import { AdminQueryFormManagementToolbar } from "@/components/admin/query-form-management/admin-query-form-management-toolbar";
import {
  filterAdminContactQueries,
  paginateAdminQueryFormList,
  sortAdminContactQueries,
} from "@/components/admin/query-form-management/admin-query-form-management.utils";
import type {
  AdminContactQueryTabData,
  AdminQueryFormManagementData,
  AdminQueryFormSortId,
} from "@/types/admin-query-form-management.types";

interface AdminQueryFormContactTabPanelProps {
  tabData: AdminContactQueryTabData;
  sortOptions: AdminQueryFormManagementData["contactSortOptions"];
  exportOptions: AdminQueryFormManagementData["exportOptions"];
  defaultSortId: AdminQueryFormSortId;
  pageSize: number;
  exportLabel: string;
  defaultSelectedIds: string[];
}

export function AdminQueryFormContactTabPanel({
  tabData,
  sortOptions,
  exportOptions,
  defaultSortId,
  pageSize,
  exportLabel,
  defaultSelectedIds,
}: AdminQueryFormContactTabPanelProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSortId, setSelectedSortId] = useState<AdminQueryFormSortId>(defaultSortId);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    () => new Set(defaultSelectedIds)
  );

  const filteredQueries = useMemo(
    () => filterAdminContactQueries(tabData.queries, searchQuery),
    [tabData.queries, searchQuery]
  );

  const sortedQueries = useMemo(
    () => sortAdminContactQueries(filteredQueries, selectedSortId),
    [filteredQueries, selectedSortId]
  );

  const { items: visibleQueries, totalPages, currentPage: safePage } = useMemo(
    () => paginateAdminQueryFormList(sortedQueries, currentPage, pageSize),
    [sortedQueries, currentPage, pageSize]
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedSortId]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    setSelectedIds((current) => {
      const visibleIdSet = new Set(visibleQueries.map((query) => query.id));
      const next = new Set<string>();

      current.forEach((id) => {
        if (visibleIdSet.has(id)) {
          next.add(id);
        }
      });

      return next;
    });
  }, [safePage, visibleQueries]);

  function handleToggleRow(queryId: string) {
    setSelectedIds((current) => {
      const next = new Set(current);
      if (next.has(queryId)) {
        next.delete(queryId);
      } else {
        next.add(queryId);
      }
      return next;
    });
  }

  function handleToggleAll(queryIds: string[]) {
    setSelectedIds((current) => {
      const allSelected = queryIds.every((id) => current.has(id));
      if (allSelected) {
        return new Set();
      }
      return new Set(queryIds);
    });
  }

  return (
    <>
      <AdminQueryFormManagementToolbar
        searchQuery={searchQuery}
        sortOptions={sortOptions}
        exportOptions={exportOptions}
        selectedSortId={selectedSortId}
        exportLabel={exportLabel}
        onSearchChange={setSearchQuery}
        onSortChange={setSelectedSortId}
        onExport={() => undefined}
      />

      {visibleQueries.length > 0 ? (
        <AdminQueryFormContactTable
          queries={visibleQueries}
          selectedIds={selectedIds}
          onToggleRow={handleToggleRow}
          onToggleAll={handleToggleAll}
        />
      ) : (
        <div className="bg-white px-6 py-16 text-center">
          <p className="text-[14px] font-medium text-[#9ca3af]">No contact queries found.</p>
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
