"use client";

import { useEffect, useMemo, useState } from "react";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import { AdminLearnerManagementTable } from "@/components/admin/learner-management/admin-learner-management-table";
import { AdminLearnerManagementToolbar } from "@/components/admin/learner-management/admin-learner-management-toolbar";
import {
  filterAdminLearners,
  paginateAdminLearners,
  sortAdminLearners,
} from "@/components/admin/learner-management/admin-learner-management.utils";
import type {
  AdminLearnerManagementData,
  AdminLearnerSortId,
} from "@/types/admin-learner-management.types";

interface AdminLearnerManagementPageProps {
  data: AdminLearnerManagementData;
}

export function AdminLearnerManagementPage({ data }: AdminLearnerManagementPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSortId, setSelectedSortId] = useState<AdminLearnerSortId>(data.defaultSortId);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    () => new Set(data.defaultSelectedIds)
  );

  const filteredLearners = useMemo(
    () => filterAdminLearners(data.learners, searchQuery),
    [data.learners, searchQuery]
  );

  const sortedLearners = useMemo(
    () => sortAdminLearners(filteredLearners, selectedSortId),
    [filteredLearners, selectedSortId]
  );

  const { items: visibleLearners, totalPages, currentPage: safePage } = useMemo(
    () => paginateAdminLearners(sortedLearners, currentPage, data.pageSize),
    [sortedLearners, currentPage, data.pageSize]
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
      const visibleIds = new Set(visibleLearners.map((learner) => learner.id));
      const next = new Set<string>();

      current.forEach((id) => {
        if (visibleIds.has(id)) {
          next.add(id);
        }
      });

      return next;
    });
  }, [safePage, visibleLearners]);

  function handleToggleRow(learnerId: string) {
    setSelectedIds((current) => {
      const next = new Set(current);
      if (next.has(learnerId)) {
        next.delete(learnerId);
      } else {
        next.add(learnerId);
      }
      return next;
    });
  }

  function handleToggleAll(learnerIds: string[]) {
    setSelectedIds((current) => {
      const allSelected = learnerIds.every((id) => current.has(id));
      if (allSelected) {
        return new Set();
      }
      return new Set(learnerIds);
    });
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
      <AdminLearnerManagementToolbar
        searchQuery={searchQuery}
        sortOptions={data.sortOptions}
        exportOptions={data.exportOptions}
        selectedSortId={selectedSortId}
        exportLabel={data.exportLabel}
        onSearchChange={setSearchQuery}
        onSortChange={setSelectedSortId}
        onExport={() => undefined}
      />

      {visibleLearners.length > 0 ? (
        <AdminLearnerManagementTable
          learners={visibleLearners}
          selectedIds={selectedIds}
          onToggleRow={handleToggleRow}
          onToggleAll={handleToggleAll}
        />
      ) : (
        <div className="bg-white px-6 py-16 text-center">
          <p className="text-[14px] font-medium text-[#9ca3af]">No learners found.</p>
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
    </div>
  );
}
