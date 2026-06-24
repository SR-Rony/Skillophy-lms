"use client";

import { useEffect, useMemo, useState } from "react";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import { AdminDeletePromoModal } from "@/components/admin/promo-management/admin-delete-promo-modal";
import { AdminPromoDrawer } from "@/components/admin/promo-management/admin-promo-drawer";
import {
  adminPromoFormToPromo,
  createAdminPromoId,
} from "@/components/admin/promo-management/admin-promo-form.utils";
import { AdminPromoManagementTable } from "@/components/admin/promo-management/admin-promo-management-table";
import { AdminPromoManagementToolbar } from "@/components/admin/promo-management/admin-promo-management-toolbar";
import {
  filterAdminPromos,
  paginateAdminPromos,
  sortAdminPromos,
} from "@/components/admin/promo-management/admin-promo-management.utils";
import type {
  AdminPromo,
  AdminPromoCategoryId,
  AdminPromoCategoryOption,
  AdminPromoCourseOption,
  AdminPromoForm,
  AdminPromoSortId,
  AdminPromoSortOption,
  AdminPromoTabData,
  AdminPromoUserOption,
} from "@/types/admin-promo-management.types";

interface AdminPromoManagementTabPanelProps {
  tabData: AdminPromoTabData;
  categoryOptions: AdminPromoCategoryOption[];
  courseOptions: AdminPromoCourseOption[];
  userOptions: AdminPromoUserOption[];
  sortOptions: AdminPromoSortOption[];
  defaultCategoryId: AdminPromoCategoryId;
  defaultSortId: AdminPromoSortId;
  pageSize: number;
  addNewLabel: string;
}

export function AdminPromoManagementTabPanel({
  tabData,
  categoryOptions,
  courseOptions,
  userOptions,
  sortOptions,
  defaultCategoryId,
  defaultSortId,
  pageSize,
  addNewLabel,
}: AdminPromoManagementTabPanelProps) {
  const [promos, setPromos] = useState<AdminPromo[]>(tabData.promos);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<AdminPromoCategoryId>(defaultCategoryId);
  const [selectedSortId, setSelectedSortId] = useState<AdminPromoSortId>(defaultSortId);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false);
  const [editingPromo, setEditingPromo] = useState<AdminPromo | null>(null);
  const [deletingPromo, setDeletingPromo] = useState<AdminPromo | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    setPromos(tabData.promos);
    setSearchQuery("");
    setSelectedCategoryId(defaultCategoryId);
    setSelectedSortId(defaultSortId);
    setCurrentPage(1);
    setIsAddDrawerOpen(false);
    setEditingPromo(null);
    setDeletingPromo(null);
    setIsDeleteModalOpen(false);
  }, [tabData.promos, defaultCategoryId, defaultSortId]);

  const filteredPromos = useMemo(
    () => filterAdminPromos(promos, searchQuery, selectedCategoryId),
    [promos, searchQuery, selectedCategoryId]
  );

  const sortedPromos = useMemo(
    () => sortAdminPromos(filteredPromos, selectedSortId),
    [filteredPromos, selectedSortId]
  );

  const { items: visiblePromos, totalPages, currentPage: safePage } = useMemo(
    () => paginateAdminPromos(sortedPromos, currentPage, pageSize),
    [sortedPromos, currentPage, pageSize]
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategoryId, selectedSortId]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  function handleSaveNewPromo(form: AdminPromoForm) {
    setPromos((current) => [adminPromoFormToPromo(form, createAdminPromoId()), ...current]);
  }

  function handleSaveEditedPromo(form: AdminPromoForm) {
    if (!editingPromo) {
      return;
    }

    setPromos((current) =>
      current.map((promo) =>
        promo.id === editingPromo.id
          ? adminPromoFormToPromo(form, promo.id, promo)
          : promo
      )
    );
    setEditingPromo(null);
  }

  function handleDeleteClick(promo: AdminPromo) {
    setDeletingPromo(promo);
    setIsDeleteModalOpen(true);
  }

  function handleConfirmDelete(promo: AdminPromo) {
    setPromos((current) => current.filter((entry) => entry.id !== promo.id));

    if (editingPromo?.id === promo.id) {
      setEditingPromo(null);
    }
  }

  return (
    <>
      <AdminPromoManagementToolbar
        searchQuery={searchQuery}
        categoryOptions={categoryOptions}
        sortOptions={sortOptions}
        selectedCategoryId={selectedCategoryId}
        selectedSortId={selectedSortId}
        addNewLabel={addNewLabel}
        onSearchChange={setSearchQuery}
        onCategoryChange={setSelectedCategoryId}
        onSortChange={setSelectedSortId}
        onAddNew={() => setIsAddDrawerOpen(true)}
      />

      {visiblePromos.length > 0 ? (
        <AdminPromoManagementTable
          promos={visiblePromos}
          onEdit={setEditingPromo}
          onDelete={handleDeleteClick}
        />
      ) : (
        <div className="bg-white px-6 py-16 text-center">
          <p className="text-[14px] font-medium text-[#9ca3af]">No promos found.</p>
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

      <AdminPromoDrawer
        open={isAddDrawerOpen}
        mode="add"
        courseOptions={courseOptions}
        userOptions={userOptions}
        onOpenChange={setIsAddDrawerOpen}
        onSave={handleSaveNewPromo}
      />

      <AdminPromoDrawer
        open={editingPromo !== null}
        mode="edit"
        promo={editingPromo}
        courseOptions={courseOptions}
        userOptions={userOptions}
        onOpenChange={(open) => {
          if (!open) {
            setEditingPromo(null);
          }
        }}
        onSave={handleSaveEditedPromo}
      />

      <AdminDeletePromoModal
        open={isDeleteModalOpen}
        onOpenChange={setIsDeleteModalOpen}
        promo={deletingPromo}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}
