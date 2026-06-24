"use client";

import { useEffect, useMemo, useState } from "react";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import { AdminAddSupportTicketDrawer } from "@/components/admin/support-management/admin-add-support-ticket-drawer";
import { AdminSupportManagementTable } from "@/components/admin/support-management/admin-support-management-table";
import { AdminSupportManagementToolbar } from "@/components/admin/support-management/admin-support-management-toolbar";
import {
  filterAdminSupportTickets,
  paginateAdminSupportTickets,
  sortAdminSupportTickets,
} from "@/components/admin/support-management/admin-support-management.utils";
import { adminSupportManagementService } from "@/services/admin";
import type {
  AdminSupportManagementData,
  AdminSupportPriorityFilterId,
  AdminSupportSortId,
  AdminSupportTicket,
  AdminSupportTicketForm,
} from "@/types/admin-support-management.types";

interface AdminSupportManagementPageProps {
  data: AdminSupportManagementData;
}

export function AdminSupportManagementPage({ data }: AdminSupportManagementPageProps) {
  const [tickets, setTickets] = useState<AdminSupportTicket[]>(data.tickets);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPriorityId, setSelectedPriorityId] = useState<AdminSupportPriorityFilterId>(
    data.defaultPriorityId
  );
  const [selectedSortId, setSelectedSortId] = useState<AdminSupportSortId>(data.defaultSortId);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const filteredTickets = useMemo(
    () => filterAdminSupportTickets(tickets, searchQuery, selectedPriorityId),
    [tickets, searchQuery, selectedPriorityId]
  );

  const sortedTickets = useMemo(
    () => sortAdminSupportTickets(filteredTickets, selectedSortId),
    [filteredTickets, selectedSortId]
  );

  const { items: visibleTickets, totalPages, currentPage: safePage } = useMemo(
    () => paginateAdminSupportTickets(sortedTickets, currentPage, data.pageSize),
    [sortedTickets, currentPage, data.pageSize]
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedPriorityId, selectedSortId]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  async function handleSaveNewTicket(form: AdminSupportTicketForm) {
    try {
      setIsSaving(true);
      setSaveError(null);
      const ticket = await adminSupportManagementService.createTicket(form);
      setTickets((current) => [ticket, ...current]);
      setCurrentPage(1);
      setIsAddDrawerOpen(false);
    } catch {
      setSaveError("Could not create ticket. Please try again.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
        <AdminSupportManagementToolbar
          searchQuery={searchQuery}
          priorityOptions={data.priorityOptions}
          sortOptions={data.sortOptions}
          selectedPriorityId={selectedPriorityId}
          selectedSortId={selectedSortId}
          addNewTicketLabel={data.addNewTicketLabel}
          onSearchChange={setSearchQuery}
          onPriorityChange={setSelectedPriorityId}
          onSortChange={setSelectedSortId}
          onAddNewTicket={() => setIsAddDrawerOpen(true)}
        />

        {saveError ? (
          <div className="border-b border-[#f0f0f0] px-6 py-3 text-sm font-medium text-primary">
            {saveError}
          </div>
        ) : null}

        {visibleTickets.length > 0 ? (
          <AdminSupportManagementTable tickets={visibleTickets} />
        ) : (
          <div className="px-6 py-16 text-center">
            <p className="text-[14px] font-medium text-[#9ca3af]">No support tickets found.</p>
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

      <AdminAddSupportTicketDrawer
        open={isAddDrawerOpen}
        onOpenChange={setIsAddDrawerOpen}
        onSave={handleSaveNewTicket}
        isSaving={isSaving}
      />
    </>
  );
}
