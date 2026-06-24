"use client";

import { useEffect, useMemo, useState } from "react";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import { AdminTransactionManagementTable } from "@/components/admin/transaction-management/admin-transaction-management-table";
import { AdminTransactionManagementTeacherTable } from "@/components/admin/transaction-management/admin-transaction-management-teacher-table";
import { AdminTransactionManagementToolbar } from "@/components/admin/transaction-management/admin-transaction-management-toolbar";
import {
  filterAdminLearnerTransactions,
  filterAdminTeacherTransactions,
  paginateAdminTransactions,
  sortAdminLearnerTransactions,
  sortAdminTeacherTransactions,
} from "@/components/admin/transaction-management/admin-transaction-management.utils";
import type {
  AdminLearnerTransactionStatusFilterId,
  AdminLearnerTransactionTabData,
  AdminTeacherTransactionStatusFilterId,
  AdminTeacherTransactionTabData,
  AdminTransactionManagementData,
  AdminTransactionSortId,
} from "@/types/admin-transaction-management.types";

interface AdminTransactionManagementSharedPanelProps {
  sortOptions: AdminTransactionManagementData["sortOptions"];
  exportOptions: AdminTransactionManagementData["exportOptions"];
  defaultSortId: AdminTransactionSortId;
  pageSize: number;
  exportLabel: string;
  defaultSelectedIds: string[];
}

interface AdminTransactionManagementLearnerTabPanelProps
  extends AdminTransactionManagementSharedPanelProps {
  tabData: AdminLearnerTransactionTabData;
}

interface AdminTransactionManagementTeacherTabPanelProps
  extends AdminTransactionManagementSharedPanelProps {
  tabData: AdminTeacherTransactionTabData;
}

function useTransactionSelection(
  visibleIds: string[],
  defaultSelectedIds: string[],
  resetKey: string
) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    () => new Set(defaultSelectedIds)
  );

  useEffect(() => {
    setSelectedIds((current) => {
      const visibleIdSet = new Set(visibleIds);
      const next = new Set<string>();

      current.forEach((id) => {
        if (visibleIdSet.has(id)) {
          next.add(id);
        }
      });

      return next;
    });
  }, [resetKey, visibleIds]);

  function handleToggleRow(transactionId: string) {
    setSelectedIds((current) => {
      const next = new Set(current);
      if (next.has(transactionId)) {
        next.delete(transactionId);
      } else {
        next.add(transactionId);
      }
      return next;
    });
  }

  function handleToggleAll(transactionIds: string[]) {
    setSelectedIds((current) => {
      const allSelected = transactionIds.every((id) => current.has(id));
      if (allSelected) {
        return new Set();
      }
      return new Set(transactionIds);
    });
  }

  return { selectedIds, handleToggleRow, handleToggleAll };
}

export function AdminTransactionManagementLearnerTabPanel({
  tabData,
  sortOptions,
  exportOptions,
  defaultSortId,
  pageSize,
  exportLabel,
  defaultSelectedIds,
}: AdminTransactionManagementLearnerTabPanelProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatusId, setSelectedStatusId] = useState<AdminLearnerTransactionStatusFilterId>(
    tabData.defaultStatusId
  );
  const [selectedSortId, setSelectedSortId] = useState<AdminTransactionSortId>(defaultSortId);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTransactions = useMemo(
    () => filterAdminLearnerTransactions(tabData.transactions, searchQuery, selectedStatusId),
    [tabData.transactions, searchQuery, selectedStatusId]
  );

  const sortedTransactions = useMemo(
    () => sortAdminLearnerTransactions(filteredTransactions, selectedSortId),
    [filteredTransactions, selectedSortId]
  );

  const { items: visibleTransactions, totalPages, currentPage: safePage } = useMemo(
    () => paginateAdminTransactions(sortedTransactions, currentPage, pageSize),
    [sortedTransactions, currentPage, pageSize]
  );

  const visibleIds = useMemo(
    () => visibleTransactions.map((transaction) => transaction.id),
    [visibleTransactions]
  );

  const { selectedIds, handleToggleRow, handleToggleAll } = useTransactionSelection(
    visibleIds,
    defaultSelectedIds,
    `${safePage}-${searchQuery}-${selectedStatusId}-${selectedSortId}`
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedStatusId, selectedSortId]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <>
      <AdminTransactionManagementToolbar
        searchQuery={searchQuery}
        statusOptions={tabData.statusOptions}
        sortOptions={sortOptions}
        exportOptions={exportOptions}
        selectedStatusId={selectedStatusId}
        selectedSortId={selectedSortId}
        exportLabel={exportLabel}
        onSearchChange={setSearchQuery}
        onStatusChange={setSelectedStatusId}
        onSortChange={setSelectedSortId}
        onExport={() => undefined}
      />

      {visibleTransactions.length > 0 ? (
        <AdminTransactionManagementTable
          transactions={visibleTransactions}
          selectedIds={selectedIds}
          onToggleRow={handleToggleRow}
          onToggleAll={handleToggleAll}
        />
      ) : (
        <div className="bg-white px-6 py-16 text-center">
          <p className="text-[14px] font-medium text-[#9ca3af]">No transactions found.</p>
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

export function AdminTransactionManagementTeacherTabPanel({
  tabData,
  sortOptions,
  exportOptions,
  defaultSortId,
  pageSize,
  exportLabel,
  defaultSelectedIds,
}: AdminTransactionManagementTeacherTabPanelProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatusId, setSelectedStatusId] = useState<AdminTeacherTransactionStatusFilterId>(
    tabData.defaultStatusId
  );
  const [selectedSortId, setSelectedSortId] = useState<AdminTransactionSortId>(defaultSortId);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTransactions = useMemo(
    () => filterAdminTeacherTransactions(tabData.transactions, searchQuery, selectedStatusId),
    [tabData.transactions, searchQuery, selectedStatusId]
  );

  const sortedTransactions = useMemo(
    () => sortAdminTeacherTransactions(filteredTransactions, selectedSortId),
    [filteredTransactions, selectedSortId]
  );

  const { items: visibleTransactions, totalPages, currentPage: safePage } = useMemo(
    () => paginateAdminTransactions(sortedTransactions, currentPage, pageSize),
    [sortedTransactions, currentPage, pageSize]
  );

  const visibleIds = useMemo(
    () => visibleTransactions.map((transaction) => transaction.id),
    [visibleTransactions]
  );

  const { selectedIds, handleToggleRow, handleToggleAll } = useTransactionSelection(
    visibleIds,
    defaultSelectedIds,
    `${safePage}-${searchQuery}-${selectedStatusId}-${selectedSortId}`
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedStatusId, selectedSortId]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <>
      <AdminTransactionManagementToolbar
        searchQuery={searchQuery}
        statusOptions={tabData.statusOptions}
        sortOptions={sortOptions}
        exportOptions={exportOptions}
        selectedStatusId={selectedStatusId}
        selectedSortId={selectedSortId}
        exportLabel={exportLabel}
        onSearchChange={setSearchQuery}
        onStatusChange={setSelectedStatusId}
        onSortChange={setSelectedSortId}
        onExport={() => undefined}
      />

      {visibleTransactions.length > 0 ? (
        <AdminTransactionManagementTeacherTable
          transactions={visibleTransactions}
          selectedIds={selectedIds}
          onToggleRow={handleToggleRow}
          onToggleAll={handleToggleAll}
        />
      ) : (
        <div className="bg-white px-6 py-16 text-center">
          <p className="text-[14px] font-medium text-[#9ca3af]">No transactions found.</p>
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
