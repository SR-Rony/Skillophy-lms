"use client";

import { useEffect, useMemo, useState } from "react";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import { AdminTeacherProfilePaymentTable } from "@/components/admin/teacher-profile/admin-teacher-profile-payment-table";
import { AdminTeacherProfilePaymentToolbar } from "@/components/admin/teacher-profile/admin-teacher-profile-payment-toolbar";
import {
  filterAdminTeacherPayments,
  paginateAdminTeacherPayments,
  sortAdminTeacherPayments,
} from "@/components/admin/teacher-profile/admin-teacher-profile.utils";
import type {
  AdminTeacherPaymentSortId,
  AdminTeacherPaymentsData,
} from "@/types/admin-teacher-profile.types";

interface AdminTeacherProfilePaymentTabProps {
  data: AdminTeacherPaymentsData;
}

export function AdminTeacherProfilePaymentTab({ data }: AdminTeacherProfilePaymentTabProps) {
  const [payments, setPayments] = useState(data.payments);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSortId, setSelectedSortId] = useState<AdminTeacherPaymentSortId>(data.defaultSortId);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    () => new Set(data.defaultSelectedIds)
  );

  const filteredPayments = useMemo(
    () => filterAdminTeacherPayments(payments, searchQuery),
    [payments, searchQuery]
  );

  const sortedPayments = useMemo(
    () => sortAdminTeacherPayments(filteredPayments, selectedSortId),
    [filteredPayments, selectedSortId]
  );

  const { items: visiblePayments, totalPages, currentPage: safePage } = useMemo(
    () => paginateAdminTeacherPayments(sortedPayments, currentPage, data.pageSize),
    [sortedPayments, currentPage, data.pageSize]
  );

  const selectedDueCount = useMemo(() => {
    return payments.filter((payment) => selectedIds.has(payment.id) && payment.status === "due")
      .length;
  }, [payments, selectedIds]);

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
      const visibleIds = new Set(visiblePayments.map((payment) => payment.id));
      const next = new Set<string>();

      current.forEach((id) => {
        if (visibleIds.has(id)) {
          next.add(id);
        }
      });

      return next;
    });
  }, [safePage, visiblePayments]);

  function handleToggleRow(paymentId: string) {
    setSelectedIds((current) => {
      const next = new Set(current);
      if (next.has(paymentId)) {
        next.delete(paymentId);
      } else {
        next.add(paymentId);
      }
      return next;
    });
  }

  function handleToggleAll(paymentIds: string[]) {
    setSelectedIds((current) => {
      const allSelected = paymentIds.every((id) => current.has(id));
      if (allSelected) {
        return new Set();
      }
      return new Set(paymentIds);
    });
  }

  function handleMarkAsPaid() {
    setPayments((current) =>
      current.map((payment) =>
        selectedIds.has(payment.id) && payment.status === "due"
          ? { ...payment, status: "paid" as const }
          : payment
      )
    );
    setSelectedIds(new Set());
  }

  return (
    <>
      <AdminTeacherProfilePaymentToolbar
        searchQuery={searchQuery}
        sortOptions={data.sortOptions}
        exportOptions={data.exportOptions}
        selectedSortId={selectedSortId}
        exportLabel={data.exportLabel}
        markAsPaidLabel={data.markAsPaidLabel}
        canMarkAsPaid={selectedDueCount > 0}
        onSearchChange={setSearchQuery}
        onSortChange={setSelectedSortId}
        onExport={() => undefined}
        onMarkAsPaid={handleMarkAsPaid}
      />

      {visiblePayments.length > 0 ? (
        <AdminTeacherProfilePaymentTable
          payments={visiblePayments}
          selectedIds={selectedIds}
          onToggleRow={handleToggleRow}
          onToggleAll={handleToggleAll}
        />
      ) : (
        <div className="px-6 py-16 text-center">
          <p className="text-[14px] font-medium text-[#9ca3af]">No payment records found.</p>
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
