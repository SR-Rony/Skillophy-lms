"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import { AdminWorkshopManagementTable } from "@/components/admin/workshop-management/admin-workshop-management-table";
import { AdminWorkshopManagementToolbar } from "@/components/admin/workshop-management/admin-workshop-management-toolbar";
import {
  filterAdminWorkshops,
  paginateAdminWorkshops,
  sortAdminWorkshops,
} from "@/components/admin/workshop-management/admin-workshop-management.utils";
import { ROUTES } from "@/constants";
import type {
  AdminWorkshopCategoryId,
  AdminWorkshopManagementData,
  AdminWorkshopSortId,
} from "@/types/admin-workshop-management.types";

interface AdminWorkshopManagementPageProps {
  data: AdminWorkshopManagementData;
}

export function AdminWorkshopManagementPage({ data }: AdminWorkshopManagementPageProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<AdminWorkshopCategoryId>(
    data.defaultCategoryId
  );
  const [selectedSortId, setSelectedSortId] = useState<AdminWorkshopSortId>(data.defaultSortId);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    () => new Set(data.defaultSelectedIds)
  );

  const filteredWorkshops = useMemo(
    () => filterAdminWorkshops(data.workshops, searchQuery, selectedCategoryId),
    [data.workshops, searchQuery, selectedCategoryId]
  );

  const sortedWorkshops = useMemo(
    () => sortAdminWorkshops(filteredWorkshops, selectedSortId),
    [filteredWorkshops, selectedSortId]
  );

  const { items: visibleWorkshops, totalPages, currentPage: safePage } = useMemo(
    () => paginateAdminWorkshops(sortedWorkshops, currentPage, data.pageSize),
    [sortedWorkshops, currentPage, data.pageSize]
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
      const visibleIds = new Set(visibleWorkshops.map((workshop) => workshop.id));
      const next = new Set<string>();

      current.forEach((id) => {
        if (visibleIds.has(id)) {
          next.add(id);
        }
      });

      return next;
    });
  }, [safePage, visibleWorkshops]);

  function handleToggleRow(workshopId: string) {
    setSelectedIds((current) => {
      const next = new Set(current);
      if (next.has(workshopId)) {
        next.delete(workshopId);
      } else {
        next.add(workshopId);
      }
      return next;
    });
  }

  function handleToggleAll(workshopIds: string[]) {
    setSelectedIds((current) => {
      const allSelected = workshopIds.every((id) => current.has(id));
      if (allSelected) {
        return new Set();
      }
      return new Set(workshopIds);
    });
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
      <AdminWorkshopManagementToolbar
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
        onAddNew={() => router.push(ROUTES.admin.workshopCreate)}
      />

      {visibleWorkshops.length > 0 ? (
        <AdminWorkshopManagementTable
          workshops={visibleWorkshops}
          selectedIds={selectedIds}
          onToggleRow={handleToggleRow}
          onToggleAll={handleToggleAll}
        />
      ) : (
        <div className="bg-white px-6 py-16 text-center">
          <p className="text-[14px] font-medium text-[#9ca3af]">No workshops found.</p>
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
