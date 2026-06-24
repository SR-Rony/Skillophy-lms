"use client";

import { useEffect, useMemo, useState } from "react";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import { AdminAddTemplateDrawer } from "@/components/admin/template-management/admin-add-template-drawer";
import { AdminTemplateManagementTable } from "@/components/admin/template-management/admin-template-management-table";
import { AdminTemplateManagementToolbar } from "@/components/admin/template-management/admin-template-management-toolbar";
import {
  adminTemplateFormToTemplate,
  createAdminTemplateId,
} from "@/components/admin/template-management/admin-template-form.utils";
import {
  filterAdminTemplates,
  paginateAdminTemplates,
  sortAdminTemplates,
} from "@/components/admin/template-management/admin-template-management.utils";
import type {
  AdminTemplate,
  AdminTemplateForm,
  AdminTemplateManagementData,
  AdminTemplateSortId,
  AdminTemplateTypeFilterId,
} from "@/types/admin-template-management.types";

interface AdminTemplateManagementPageProps {
  data: AdminTemplateManagementData;
}

export function AdminTemplateManagementPage({ data }: AdminTemplateManagementPageProps) {
  const [templates, setTemplates] = useState<AdminTemplate[]>(data.templates);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypeId, setSelectedTypeId] = useState<AdminTemplateTypeFilterId>(data.defaultTypeId);
  const [selectedSortId, setSelectedSortId] = useState<AdminTemplateSortId>(data.defaultSortId);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false);

  const filteredTemplates = useMemo(
    () => filterAdminTemplates(templates, searchQuery, selectedTypeId),
    [templates, searchQuery, selectedTypeId]
  );

  const sortedTemplates = useMemo(
    () => sortAdminTemplates(filteredTemplates, selectedSortId),
    [filteredTemplates, selectedSortId]
  );

  const { items: visibleTemplates, totalPages, currentPage: safePage } = useMemo(
    () => paginateAdminTemplates(sortedTemplates, currentPage, data.pageSize),
    [sortedTemplates, currentPage, data.pageSize]
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedTypeId, selectedSortId]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  function handleSaveNewTemplate(form: AdminTemplateForm) {
    setTemplates((current) => [
      adminTemplateFormToTemplate(form, createAdminTemplateId()),
      ...current,
    ]);
    setCurrentPage(1);
  }

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
        <AdminTemplateManagementToolbar
          searchQuery={searchQuery}
          typeOptions={data.typeOptions}
          sortOptions={data.sortOptions}
          selectedTypeId={selectedTypeId}
          selectedSortId={selectedSortId}
          addNewLabel={data.addNewLabel}
          onSearchChange={setSearchQuery}
          onTypeChange={setSelectedTypeId}
          onSortChange={setSelectedSortId}
          onAddNew={() => setIsAddDrawerOpen(true)}
        />

        {visibleTemplates.length > 0 ? (
          <AdminTemplateManagementTable templates={visibleTemplates} />
        ) : (
          <div className="bg-white px-6 py-16 text-center">
            <p className="text-[14px] font-medium text-[#9ca3af]">No templates found.</p>
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

      <AdminAddTemplateDrawer
        open={isAddDrawerOpen}
        onOpenChange={setIsAddDrawerOpen}
        onSave={handleSaveNewTemplate}
      />
    </>
  );
}
