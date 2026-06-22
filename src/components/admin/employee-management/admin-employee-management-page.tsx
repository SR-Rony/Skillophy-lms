"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import { AdminAddNewMemberDrawer } from "@/components/admin/employee-management/admin-add-new-member-drawer";
import { AdminDeleteMemberModal } from "@/components/admin/employee-management/admin-delete-member-modal";
import { AdminEmployeeManagementTable } from "@/components/admin/employee-management/admin-employee-management-table";
import { AdminEmployeeManagementTabs } from "@/components/admin/employee-management/admin-employee-management-tabs";
import { AdminEmployeeManagementToolbar } from "@/components/admin/employee-management/admin-employee-management-toolbar";
import { AdminUpdateMemberDrawer } from "@/components/admin/employee-management/admin-update-member-drawer";
import {
  adminEmployeeIdToRole,
  filterAdminEmployees,
  getAdminEmployeeManagementHref,
  paginateAdminEmployees,
  parseAdminEmployeeTab,
  sortAdminEmployees,
} from "@/components/admin/employee-management/admin-employee-management.utils";
import type {
  AdminEmployee,
  AdminEmployeeManagementData,
  AdminEmployeeSortId,
  AdminEmployeeTab,
} from "@/types/admin-employee-management.types";

interface AdminEmployeeManagementPageProps {
  data: AdminEmployeeManagementData;
}

export function AdminEmployeeManagementPage({ data }: AdminEmployeeManagementPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabFromUrl = parseAdminEmployeeTab(searchParams.get("tab"));

  const [employees, setEmployees] = useState(data.employees);
  const [activeTab, setActiveTab] = useState<AdminEmployeeTab>(tabFromUrl);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRoleId, setSelectedRoleId] = useState(data.defaultRoleId);
  const [selectedSortId, setSelectedSortId] = useState<AdminEmployeeSortId>(data.defaultSortId);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    () => new Set(data.defaultSelectedIds)
  );
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateDrawerOpen, setIsUpdateDrawerOpen] = useState(false);
  const [activeEmployee, setActiveEmployee] = useState<AdminEmployee | null>(null);

  const filteredEmployees = useMemo(
    () => filterAdminEmployees(employees, activeTab, selectedRoleId, searchQuery),
    [employees, activeTab, selectedRoleId, searchQuery]
  );

  const sortedEmployees = useMemo(
    () => sortAdminEmployees(filteredEmployees, selectedSortId),
    [filteredEmployees, selectedSortId]
  );

  const { items: visibleEmployees, totalPages, currentPage: safePage } = useMemo(
    () => paginateAdminEmployees(sortedEmployees, currentPage, data.pageSize),
    [sortedEmployees, currentPage, data.pageSize]
  );

  useEffect(() => {
    setActiveTab(tabFromUrl);
  }, [tabFromUrl]);

  function handleTabChange(tab: AdminEmployeeTab) {
    setActiveTab(tab);
    router.replace(getAdminEmployeeManagementHref(tab), { scroll: false });
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, selectedRoleId, selectedSortId, searchQuery]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    setSelectedIds((current) => {
      const visibleIds = new Set(visibleEmployees.map((employee) => employee.id));
      const next = new Set<string>();

      current.forEach((id) => {
        if (visibleIds.has(id)) {
          next.add(id);
        }
      });

      return next;
    });
  }, [safePage, visibleEmployees]);

  function handleToggleRow(employeeId: string) {
    setSelectedIds((current) => {
      const next = new Set(current);
      if (next.has(employeeId)) {
        next.delete(employeeId);
      } else {
        next.add(employeeId);
      }
      return next;
    });
  }

  function handleToggleAll(employeeIds: string[]) {
    setSelectedIds((current) => {
      const allSelected = employeeIds.every((id) => current.has(id));
      if (allSelected) {
        return new Set();
      }
      return new Set(employeeIds);
    });
  }

  function handleDeleteClick(employee: AdminEmployee) {
    setActiveEmployee(employee);
    setIsDeleteModalOpen(true);
  }

  function handleEditClick(employee: AdminEmployee) {
    setActiveEmployee(employee);
    setIsUpdateDrawerOpen(true);
  }

  function handleConfirmDelete(employee: AdminEmployee) {
    setEmployees((current) => current.filter((item) => item.id !== employee.id));
    setSelectedIds((current) => {
      const next = new Set(current);
      next.delete(employee.id);
      return next;
    });
    setActiveEmployee(null);
  }

  function handleSaveUpdate(payload: { employeeId: string; email: string; roleId: string }) {
    setEmployees((current) =>
      current.map((employee) =>
        employee.id === payload.employeeId
          ? {
              ...employee,
              email: payload.email,
              role: adminEmployeeIdToRole(payload.roleId),
            }
          : employee
      )
    );
    setActiveEmployee(null);
  }

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
      <AdminEmployeeManagementTabs activeTab={activeTab} onTabChange={handleTabChange} />

      <AdminEmployeeManagementToolbar
        searchQuery={searchQuery}
        roleOptions={data.roleOptions}
        sortOptions={data.sortOptions}
        exportOptions={data.exportOptions}
        selectedRoleId={selectedRoleId}
        selectedSortId={selectedSortId}
        exportLabel={data.exportLabel}
        addNewLabel={data.addNewLabel}
        onSearchChange={setSearchQuery}
        onRoleChange={setSelectedRoleId}
        onSortChange={setSelectedSortId}
        onExport={() => undefined}
        onAddNew={() => setIsAddMemberOpen(true)}
      />

      {visibleEmployees.length > 0 ? (
        <AdminEmployeeManagementTable
          employees={visibleEmployees}
          selectedIds={selectedIds}
          activeTab={activeTab}
          onToggleRow={handleToggleRow}
          onToggleAll={handleToggleAll}
          onDelete={handleDeleteClick}
          onEdit={handleEditClick}
        />
      ) : (
        <div className="px-6 py-16 text-center">
          <p className="text-[14px] font-medium text-[#9ca3af]">No employees found.</p>
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

      <AdminAddNewMemberDrawer
        open={isAddMemberOpen}
        onOpenChange={setIsAddMemberOpen}
        roleOptions={data.inviteRoleOptions}
        defaultEmail={data.addMemberDefaults.email}
        defaultRoleId={data.addMemberDefaults.roleId}
        onSendRequest={() => undefined}
      />

      <AdminDeleteMemberModal
        open={isDeleteModalOpen}
        onOpenChange={setIsDeleteModalOpen}
        employee={activeEmployee}
        onConfirm={handleConfirmDelete}
      />

      <AdminUpdateMemberDrawer
        open={isUpdateDrawerOpen}
        onOpenChange={setIsUpdateDrawerOpen}
        employee={activeEmployee}
        roleOptions={data.inviteRoleOptions}
        onSave={handleSaveUpdate}
      />
    </>
  );
}
