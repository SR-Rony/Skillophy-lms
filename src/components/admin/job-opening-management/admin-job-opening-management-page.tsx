"use client";

import { useEffect, useMemo, useState } from "react";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import { AdminDeleteJobOpeningModal } from "@/components/admin/job-opening-management/admin-delete-job-opening-modal";
import { AdminJobOpeningDrawer } from "@/components/admin/job-opening-management/admin-job-opening-drawer";
import { AdminJobOpeningManagementTable } from "@/components/admin/job-opening-management/admin-job-opening-management-table";
import { AdminJobOpeningManagementToolbar } from "@/components/admin/job-opening-management/admin-job-opening-management-toolbar";
import {
  adminJobOpeningFormToJobOpening,
  createAdminJobOpeningId,
  getAdminJobOpeningCategoryLabel,
} from "@/components/admin/job-opening-management/admin-job-opening-form.utils";
import {
  filterAdminJobOpenings,
  paginateAdminJobOpenings,
  sortAdminJobOpenings,
} from "@/components/admin/job-opening-management/admin-job-opening-management.utils";
import type {
  AdminJobOpening,
  AdminJobOpeningForm,
  AdminJobOpeningManagementData,
  AdminJobOpeningSortId,
} from "@/types/admin-job-opening-management.types";

interface AdminJobOpeningManagementPageProps {
  data: AdminJobOpeningManagementData;
}

export function AdminJobOpeningManagementPage({ data }: AdminJobOpeningManagementPageProps) {
  const [jobOpenings, setJobOpenings] = useState<AdminJobOpening[]>(data.jobOpenings);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSortId, setSelectedSortId] = useState<AdminJobOpeningSortId>(data.defaultSortId);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    () => new Set(data.defaultSelectedIds)
  );
  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false);
  const [editingJobOpening, setEditingJobOpening] = useState<AdminJobOpening | null>(null);
  const [deletingJobOpening, setDeletingJobOpening] = useState<AdminJobOpening | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const filteredJobOpenings = useMemo(
    () => filterAdminJobOpenings(jobOpenings, searchQuery),
    [jobOpenings, searchQuery]
  );

  const sortedJobOpenings = useMemo(
    () => sortAdminJobOpenings(filteredJobOpenings, selectedSortId),
    [filteredJobOpenings, selectedSortId]
  );

  const { items: visibleJobOpenings, totalPages, currentPage: safePage } = useMemo(
    () => paginateAdminJobOpenings(sortedJobOpenings, currentPage, data.pageSize),
    [sortedJobOpenings, currentPage, data.pageSize]
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
      const visibleIds = new Set(visibleJobOpenings.map((jobOpening) => jobOpening.id));
      const next = new Set<string>();

      current.forEach((id) => {
        if (visibleIds.has(id)) {
          next.add(id);
        }
      });

      return next;
    });
  }, [safePage, visibleJobOpenings]);

  function handleToggleRow(jobOpeningId: string) {
    setSelectedIds((current) => {
      const next = new Set(current);
      if (next.has(jobOpeningId)) {
        next.delete(jobOpeningId);
      } else {
        next.add(jobOpeningId);
      }
      return next;
    });
  }

  function handleToggleAll(jobOpeningIds: string[]) {
    setSelectedIds((current) => {
      const allSelected = jobOpeningIds.every((id) => current.has(id));
      if (allSelected) {
        return new Set();
      }
      return new Set(jobOpeningIds);
    });
  }

  function handleSaveNewJob(form: AdminJobOpeningForm) {
    const categoryLabel = getAdminJobOpeningCategoryLabel(
      data.formOptions.categories,
      form.category
    );

    setJobOpenings((current) => [
      adminJobOpeningFormToJobOpening(form, createAdminJobOpeningId(), categoryLabel),
      ...current,
    ]);
    setCurrentPage(1);
  }

  function handleSaveEditedJob(form: AdminJobOpeningForm) {
    if (!editingJobOpening) {
      return;
    }

    const categoryLabel = getAdminJobOpeningCategoryLabel(
      data.formOptions.categories,
      form.category
    );

    setJobOpenings((current) =>
      current.map((jobOpening) =>
        jobOpening.id === editingJobOpening.id
          ? adminJobOpeningFormToJobOpening(form, jobOpening.id, categoryLabel)
          : jobOpening
      )
    );
    setEditingJobOpening(null);
  }

  function handleEdit(jobOpening: AdminJobOpening) {
    setEditingJobOpening(jobOpening);
  }

  function handleDelete(jobOpening: AdminJobOpening) {
    setDeletingJobOpening(jobOpening);
    setIsDeleteModalOpen(true);
  }

  function handleConfirmDelete(jobOpening: AdminJobOpening) {
    setJobOpenings((current) => current.filter((item) => item.id !== jobOpening.id));
    setSelectedIds((current) => {
      const next = new Set(current);
      next.delete(jobOpening.id);
      return next;
    });
    setDeletingJobOpening(null);
  }

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
        <AdminJobOpeningManagementToolbar
          searchQuery={searchQuery}
          sortOptions={data.sortOptions}
          exportOptions={data.exportOptions}
          selectedSortId={selectedSortId}
          exportLabel={data.exportLabel}
          addNewLabel={data.addNewLabel}
          onSearchChange={setSearchQuery}
          onSortChange={setSelectedSortId}
          onExport={() => undefined}
          onAddNew={() => setIsAddDrawerOpen(true)}
        />

        {visibleJobOpenings.length > 0 ? (
          <AdminJobOpeningManagementTable
            jobOpenings={visibleJobOpenings}
            selectedIds={selectedIds}
            onToggleRow={handleToggleRow}
            onToggleAll={handleToggleAll}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ) : (
          <div className="bg-white px-6 py-16 text-center">
            <p className="text-[14px] font-medium text-[#9ca3af]">No job openings found.</p>
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

      <AdminJobOpeningDrawer
        open={isAddDrawerOpen}
        mode="add"
        formOptions={data.formOptions}
        onOpenChange={setIsAddDrawerOpen}
        onSave={handleSaveNewJob}
      />

      <AdminJobOpeningDrawer
        open={editingJobOpening !== null}
        mode="edit"
        jobOpening={editingJobOpening}
        formOptions={data.formOptions}
        onOpenChange={(open) => {
          if (!open) {
            setEditingJobOpening(null);
          }
        }}
        onSave={handleSaveEditedJob}
      />

      <AdminDeleteJobOpeningModal
        open={isDeleteModalOpen}
        jobOpening={deletingJobOpening}
        onOpenChange={(open) => {
          setIsDeleteModalOpen(open);
          if (!open) {
            setDeletingJobOpening(null);
          }
        }}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}
