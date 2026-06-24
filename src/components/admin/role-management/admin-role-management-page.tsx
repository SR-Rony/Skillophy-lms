"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { StudentNotificationsPagination } from "@/components/student/notifications/student-notifications-pagination";
import { AdminAddRoleDrawer } from "@/components/admin/role-management/admin-add-role-drawer";
import { AdminRoleManagementTable } from "@/components/admin/role-management/admin-role-management-table";
import { AdminRoleManagementToolbar } from "@/components/admin/role-management/admin-role-management-toolbar";
import {
  adminRoleFormToRole,
  createAdminRoleId,
} from "@/components/admin/role-management/admin-role-form.utils";
import {
  filterAdminRoles,
  getAdminRolePermissionsHref,
  paginateAdminRoles,
  sortAdminRoles,
} from "@/components/admin/role-management/admin-role-management.utils";
import type {
  AdminRole,
  AdminRoleForm,
  AdminRoleManagementData,
  AdminRoleSortId,
} from "@/types/admin-role-management.types";

interface AdminRoleManagementPageProps {
  data: AdminRoleManagementData;
}

export function AdminRoleManagementPage({ data }: AdminRoleManagementPageProps) {
  const router = useRouter();
  const [roles, setRoles] = useState<AdminRole[]>(data.roles);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSortId, setSelectedSortId] = useState<AdminRoleSortId>(data.defaultSortId);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    () => new Set(data.defaultSelectedIds)
  );
  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false);

  const filteredRoles = useMemo(
    () => filterAdminRoles(roles, searchQuery),
    [roles, searchQuery]
  );

  const sortedRoles = useMemo(
    () => sortAdminRoles(filteredRoles, selectedSortId),
    [filteredRoles, selectedSortId]
  );

  const { items: visibleRoles, totalPages, currentPage: safePage } = useMemo(
    () => paginateAdminRoles(sortedRoles, currentPage, data.pageSize),
    [sortedRoles, currentPage, data.pageSize]
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
      const visibleIdSet = new Set(visibleRoles.map((role) => role.id));
      const next = new Set<string>();

      current.forEach((id) => {
        if (visibleIdSet.has(id)) {
          next.add(id);
        }
      });

      return next;
    });
  }, [safePage, visibleRoles]);

  function handleToggleRow(roleId: string) {
    setSelectedIds((current) => {
      const next = new Set(current);
      if (next.has(roleId)) {
        next.delete(roleId);
      } else {
        next.add(roleId);
      }
      return next;
    });
  }

  function handleToggleAll(roleIds: string[]) {
    setSelectedIds((current) => {
      const allSelected = roleIds.every((id) => current.has(id));
      if (allSelected) {
        return new Set();
      }
      return new Set(roleIds);
    });
  }

  function handleSaveNewRole(form: AdminRoleForm) {
    const roleId = createAdminRoleId();
    setRoles((current) => [adminRoleFormToRole(form, roleId), ...current]);
    setCurrentPage(1);
    router.push(
      `${getAdminRolePermissionsHref(roleId)}?name=${encodeURIComponent(form.name.trim())}`
    );
  }

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
        <AdminRoleManagementToolbar
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

        {visibleRoles.length > 0 ? (
          <AdminRoleManagementTable
            roles={visibleRoles}
            selectedIds={selectedIds}
            onToggleRow={handleToggleRow}
            onToggleAll={handleToggleAll}
          />
        ) : (
          <div className="bg-white px-6 py-16 text-center">
            <p className="text-[14px] font-medium text-[#9ca3af]">No roles found.</p>
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

      <AdminAddRoleDrawer
        open={isAddDrawerOpen}
        onOpenChange={setIsAddDrawerOpen}
        onSave={handleSaveNewRole}
      />
    </>
  );
}
