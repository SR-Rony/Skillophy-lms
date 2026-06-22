"use client";

import { useEffect, useMemo, useState } from "react";
import { PaymentHistoryEmptyState } from "@/components/student/payment-history/payment-history-empty-state";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import type {
  TeacherPaymentHistoryPageData,
  TeacherPaymentHistorySortId,
} from "@/types/teacher-payment-history.types";
import { TeacherPaymentHistorySummaryCards } from "./teacher-payment-history-summary-cards";
import { TeacherPaymentHistoryTable } from "./teacher-payment-history-table";
import { TeacherPaymentHistoryToolbar } from "./teacher-payment-history-toolbar";
import {
  filterAndSortTeacherPayments,
  paginateTeacherPayments,
} from "./teacher-payment-history.utils";

interface TeacherPaymentHistoryPageProps {
  data: TeacherPaymentHistoryPageData;
}

export function TeacherPaymentHistoryPage({ data }: TeacherPaymentHistoryPageProps) {
  const hasPayments = data.payments.length > 0;
  const [selectedCourseId, setSelectedCourseId] = useState(data.defaultCourseId);
  const [selectedSortId, setSelectedSortId] = useState<TeacherPaymentHistorySortId>("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const filteredPayments = useMemo(
    () => filterAndSortTeacherPayments(data.payments, selectedCourseId, selectedSortId),
    [data.payments, selectedCourseId, selectedSortId]
  );

  const { items: visiblePayments, totalPages, currentPage: safePage } = useMemo(
    () => paginateTeacherPayments(filteredPayments, currentPage, data.pageSize),
    [filteredPayments, currentPage, data.pageSize]
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCourseId, selectedSortId]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    setSelectedIds(new Set());
  }, [safePage, selectedCourseId, selectedSortId]);

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

  if (!hasPayments) {
    return (
      <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
        <PaymentHistoryEmptyState emptyState={data.emptyState} />
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <TeacherPaymentHistorySummaryCards summary={data.summary} />

      <TeacherPaymentHistoryToolbar
        courses={data.courses}
        sortOptions={data.sortOptions}
        selectedCourseId={selectedCourseId}
        selectedSortId={selectedSortId}
        exportLabel={data.exportLabel}
        onCourseChange={setSelectedCourseId}
        onSortChange={setSelectedSortId}
        onExport={() => undefined}
      />

      {visiblePayments.length > 0 ? (
        <TeacherPaymentHistoryTable
          payments={visiblePayments}
          selectedIds={selectedIds}
          onToggleRow={handleToggleRow}
          onToggleAll={handleToggleAll}
        />
      ) : (
        <div className="rounded-2xl border border-[#ebe8e6] bg-white px-6 py-16 text-center shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
          <p className="text-[14px] font-medium text-[#9ca3af]">
            No payments found for the selected course.
          </p>
        </div>
      )}

      {totalPages > 1 ? (
        <StudentNotificationsPagination
          currentPage={safePage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          className="pt-2"
        />
      ) : null}
    </div>
  );
}
