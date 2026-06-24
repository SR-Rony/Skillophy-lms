"use client";

import { useEffect, useMemo, useState } from "react";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import { AdminTransactionManagementTable } from "@/components/admin/transaction-management/admin-transaction-management-table";
import { AdminTransactionManagementToolbar } from "@/components/admin/transaction-management/admin-transaction-management-toolbar";
import {
  filterAdminTransactions,
  paginateAdminTransactions,
  sortAdminTransactions,
} from "@/components/admin/transaction-management/admin-transaction-management.utils";
import type {
  AdminTransactionExportOption,
  AdminTransactionManagementData,
  AdminTransactionSortId,
  AdminTransactionSortOption,
  AdminTransactionStatusFilterId,
  AdminTransactionStatusOption,
  AdminTransactionTabData,
} from "@/types/admin-transaction-management.types";

interface AdminTransactionManagementTabPanelProps {
  tabData: AdminTransactionTabData;
  statusOptions: AdminTransactionStatusOption[];
  sortOptions: AdminTransactionSortOption[];
  exportOptions: AdminTransactionExportOption[];
  defaultStatusId: AdminTransactionStatusFilterId;
  defaultSortId: AdminTransactionSortId;
  pageSize: number;
  exportLabel: string;
  defaultSelectedIds: string[];
}

export function AdminTransactionManagementTabPanel({
  tabData,
  statusOptions,
  sortOptions,
  exportOptions,
  defaultStatusId,
  defaultSortId,
  pageSize,
  exportLabel,
  defaultSelectedIds,
}: AdminTransactionManagementTabPanelProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatusId, setSelectedStatusId] =
    useState<AdminTransactionStatusFilterId>(defaultStatusId);
  const [selectedSortId, setSelectedSortId] = useState<AdminTransactionSortId>(defaultSortId);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    () => new Set(defaultSelectedIds)
  );

  const filteredTransactions = useMemo(
    () => filterAdminTransactions(tabData.transactions, searchQuery, selectedStatusId),
    [tabData.transactions, searchQuery, selectedStatusId]
  );

  const sortedTransactions = useMemo(
    () => sortAdminTransactions(filteredTransactions, selectedSortId),
    [filteredTransactions, selectedSortId]
  );

  const { items: visibleTransactions, totalPages, currentPage: safePage } = useMemo(
    () => paginateAdminTransactions(sortedTransactions, currentPage, pageSize),
    [sortedTransactions, currentPage, pageSize]
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedStatusId, selectedSortId]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    setSelectedIds((current) => {
      const visibleIds = new Set(visibleTransactions.map((transaction) => transaction.id));
      const next = new Set<string>();

      current.forEach((id) => {
        if (visibleIds.has(id)) {
          next.add(id);
        }
      });

      return next;
    });
  }, [safePage, visibleTransactions]);

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

  return (
    <>
      <AdminTransactionManagementToolbar
        searchQuery={searchQuery}
        statusOptions={statusOptions}
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
