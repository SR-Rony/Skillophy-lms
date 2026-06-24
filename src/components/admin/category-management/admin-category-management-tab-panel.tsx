"use client";

import { useEffect, useMemo, useState } from "react";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import { AdminCategoryDrawer } from "@/components/admin/category-management/admin-category-drawer";
import { AdminDeleteCategoryModal } from "@/components/admin/category-management/admin-delete-category-modal";
import {
  adminCategoryFormToCategory,
  createAdminCategoryId,
} from "@/components/admin/category-management/admin-category-form.utils";
import { AdminCategoryManagementTable } from "@/components/admin/category-management/admin-category-management-table";
import { AdminCategoryManagementToolbar } from "@/components/admin/category-management/admin-category-management-toolbar";
import {
  filterAdminCategories,
  paginateAdminCategories,
  sortAdminCategories,
} from "@/components/admin/category-management/admin-category-management.utils";
import type {
  AdminCategory,
  AdminCategoryForm,
  AdminCategorySortId,
  AdminCategorySortOption,
  AdminCategoryTabData,
} from "@/types/admin-category-management.types";

interface AdminCategoryManagementTabPanelProps {
  tabData: AdminCategoryTabData;
  sortOptions: AdminCategorySortOption[];
  defaultSortId: AdminCategorySortId;
  pageSize: number;
  addNewLabel: string;
}

export function AdminCategoryManagementTabPanel({
  tabData,
  sortOptions,
  defaultSortId,
  pageSize,
  addNewLabel,
}: AdminCategoryManagementTabPanelProps) {
  const [categories, setCategories] = useState<AdminCategory[]>(tabData.categories);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSortId, setSelectedSortId] = useState<AdminCategorySortId>(defaultSortId);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<AdminCategory | null>(null);
  const [deletingCategory, setDeletingCategory] = useState<AdminCategory | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    setCategories(tabData.categories);
    setSearchQuery("");
    setSelectedSortId(defaultSortId);
    setCurrentPage(1);
    setIsAddDrawerOpen(false);
    setEditingCategory(null);
    setDeletingCategory(null);
    setIsDeleteModalOpen(false);
  }, [tabData.categories, defaultSortId]);

  const filteredCategories = useMemo(
    () => filterAdminCategories(categories, searchQuery),
    [categories, searchQuery]
  );

  const sortedCategories = useMemo(
    () => sortAdminCategories(filteredCategories, selectedSortId),
    [filteredCategories, selectedSortId]
  );

  const { items: visibleCategories, totalPages, currentPage: safePage } = useMemo(
    () => paginateAdminCategories(sortedCategories, currentPage, pageSize),
    [sortedCategories, currentPage, pageSize]
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedSortId]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  function handleSaveNewCategory(form: AdminCategoryForm) {
    setCategories((current) => [
      adminCategoryFormToCategory(form, createAdminCategoryId()),
      ...current,
    ]);
  }

  function handleDeleteClick(category: AdminCategory) {
    setDeletingCategory(category);
    setIsDeleteModalOpen(true);
  }

  function handleConfirmDelete(category: AdminCategory) {
    setCategories((current) => current.filter((entry) => entry.id !== category.id));

    if (editingCategory?.id === category.id) {
      setEditingCategory(null);
    }
  }

  function handleEdit(category: AdminCategory) {
    setEditingCategory(category);
  }

  function handleSaveEditedCategory(form: AdminCategoryForm) {
    if (!editingCategory) {
      return;
    }

    setCategories((current) =>
      current.map((category) =>
        category.id === editingCategory.id
          ? adminCategoryFormToCategory(form, category.id, category.itemCount)
          : category
      )
    );
    setEditingCategory(null);
  }

  return (
    <>
      <AdminCategoryManagementToolbar
        searchQuery={searchQuery}
        sortOptions={sortOptions}
        selectedSortId={selectedSortId}
        addNewLabel={addNewLabel}
        onSearchChange={setSearchQuery}
        onSortChange={setSelectedSortId}
        onAddNew={() => setIsAddDrawerOpen(true)}
      />

      {visibleCategories.length > 0 ? (
        <AdminCategoryManagementTable
          categories={visibleCategories}
          countColumnLabel={tabData.countColumnLabel}
          onEdit={handleEdit}
          onDelete={handleDeleteClick}
        />
      ) : (
        <div className="bg-white px-6 py-16 text-center">
          <p className="text-[14px] font-medium text-[#9ca3af]">No categories found.</p>
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

      <AdminCategoryDrawer
        open={isAddDrawerOpen}
        mode="add"
        onOpenChange={setIsAddDrawerOpen}
        onSave={handleSaveNewCategory}
      />

      <AdminCategoryDrawer
        open={editingCategory !== null}
        mode="edit"
        category={editingCategory}
        onOpenChange={(open) => {
          if (!open) {
            setEditingCategory(null);
          }
        }}
        onSave={handleSaveEditedCategory}
      />

      <AdminDeleteCategoryModal
        open={isDeleteModalOpen}
        onOpenChange={setIsDeleteModalOpen}
        category={deletingCategory}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}
