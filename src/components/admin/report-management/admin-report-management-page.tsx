"use client";

import { useEffect, useMemo, useState } from "react";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import { AdminReportManagementTable } from "@/components/admin/report-management/admin-report-management-table";
import { AdminReportManagementToolbar } from "@/components/admin/report-management/admin-report-management-toolbar";
import {
  filterAdminReports,
  paginateAdminReports,
  sortAdminReports,
} from "@/components/admin/report-management/admin-report-management.utils";
import type {
  AdminReport,
  AdminReportManagementData,
  AdminReportSortId,
  AdminReportTypeFilterId,
} from "@/types/admin-report-management.types";

interface AdminReportManagementPageProps {
  data: AdminReportManagementData;
}

export function AdminReportManagementPage({ data }: AdminReportManagementPageProps) {
  const [reports, setReports] = useState<AdminReport[]>(data.reports);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypeId, setSelectedTypeId] = useState<AdminReportTypeFilterId>(data.defaultTypeId);
  const [selectedSortId, setSelectedSortId] = useState<AdminReportSortId>(data.defaultSortId);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    () => new Set(data.defaultSelectedIds)
  );
  const [resolvedMessage, setResolvedMessage] = useState<string | null>(null);

  const filteredReports = useMemo(
    () => filterAdminReports(reports, searchQuery, selectedTypeId),
    [reports, searchQuery, selectedTypeId]
  );

  const sortedReports = useMemo(
    () => sortAdminReports(filteredReports, selectedSortId),
    [filteredReports, selectedSortId]
  );

  const { items: visibleReports, totalPages, currentPage: safePage } = useMemo(
    () => paginateAdminReports(sortedReports, currentPage, data.pageSize),
    [sortedReports, currentPage, data.pageSize]
  );

  const selectedOpenIds = useMemo(
    () =>
      [...selectedIds].filter((id) => {
        const report = reports.find((item) => item.id === id);
        return report?.status === "open";
      }),
    [reports, selectedIds]
  );

  const visibleOpenIds = useMemo(
    () => visibleReports.filter((report) => report.status === "open").map((report) => report.id),
    [visibleReports]
  );

  useEffect(() => {
    if (!resolvedMessage) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setResolvedMessage(null);
    }, 3000);

    return () => window.clearTimeout(timeoutId);
  }, [resolvedMessage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedTypeId, selectedSortId]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    setSelectedIds((current) => {
      const visibleIdSet = new Set(visibleReports.map((report) => report.id));
      const next = new Set<string>();

      current.forEach((id) => {
        if (visibleIdSet.has(id)) {
          next.add(id);
        }
      });

      return next;
    });
  }, [safePage, visibleReports]);

  function handleToggleRow(reportId: string) {
    setSelectedIds((current) => {
      const next = new Set(current);
      if (next.has(reportId)) {
        next.delete(reportId);
      } else {
        next.add(reportId);
      }
      return next;
    });
  }

  function handleToggleAll(reportIds: string[]) {
    setSelectedIds((current) => {
      const allSelected = reportIds.every((id) => current.has(id));
      if (allSelected) {
        return new Set();
      }
      return new Set(reportIds);
    });
  }

  function handleMarkResolved() {
    const targetIds =
      selectedOpenIds.length > 0 ? selectedOpenIds : visibleOpenIds;

    if (targetIds.length === 0) {
      setResolvedMessage("No open reports to resolve on this page.");
      return;
    }

    const idsToResolve = new Set(targetIds);

    setReports((current) =>
      current.map((report) =>
        idsToResolve.has(report.id) ? { ...report, status: "resolved" } : report
      )
    );
    setSelectedIds(new Set());
    setResolvedMessage(
      `${targetIds.length} report${targetIds.length === 1 ? "" : "s"} marked as resolved.`
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
      {resolvedMessage ? (
        <div className="border-b border-[#fde8e8] bg-[#fff5f5] px-4 py-3 text-[13px] font-medium text-primary sm:px-6">
          {resolvedMessage}
        </div>
      ) : null}

      <AdminReportManagementToolbar
        searchQuery={searchQuery}
        typeOptions={data.typeOptions}
        sortOptions={data.sortOptions}
        selectedTypeId={selectedTypeId}
        selectedSortId={selectedSortId}
        markResolvedLabel={data.markResolvedLabel}
        onSearchChange={setSearchQuery}
        onTypeChange={setSelectedTypeId}
        onSortChange={setSelectedSortId}
        onMarkResolved={handleMarkResolved}
      />

      {visibleReports.length > 0 ? (
        <AdminReportManagementTable
          reports={visibleReports}
          selectedIds={selectedIds}
          onToggleRow={handleToggleRow}
          onToggleAll={handleToggleAll}
        />
      ) : (
        <div className="px-6 py-16 text-center">
          <p className="text-[14px] font-medium text-[#9ca3af]">No reports found.</p>
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
