"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { AdminRolePermissionsControls } from "@/components/admin/role-management/admin-role-permissions-controls";
import { AdminRolePermissionsTable } from "@/components/admin/role-management/admin-role-permissions-table";
import { getAdminRolePermissionsHref } from "@/components/admin/role-management/admin-role-management.utils";
import type {
  AdminRolePermissionModule,
  AdminRolePermissionsPageData,
} from "@/types/admin-role-management.types";
import { ROUTES } from "@/constants";

interface AdminRolePermissionsPageProps {
  data: AdminRolePermissionsPageData;
}

export function AdminRolePermissionsPage({ data }: AdminRolePermissionsPageProps) {
  const router = useRouter();
  const [selectedRoleId, setSelectedRoleId] = useState(data.roleId);
  const [isActive, setIsActive] = useState(data.isActive);
  const [modules, setModules] = useState<AdminRolePermissionModule[]>(data.modules);

  useEffect(() => {
    setSelectedRoleId(data.roleId);
    setIsActive(data.isActive);
    setModules(data.modules);
  }, [data]);

  function handleRoleChange(roleId: string) {
    setSelectedRoleId(roleId);
    router.replace(getAdminRolePermissionsHref(roleId), { scroll: false });
  }

  function handleSave() {
    // Demo save — permissions stay in local state for the current session.
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
      <div className="border-b border-[#f0f0f0] px-4 py-5 sm:px-6 sm:py-6">
        <Link
          href={ROUTES.admin.roleManagement}
          className="inline-flex items-center gap-2 text-[13px] font-medium text-[#757575] transition-colors hover:text-[#1a1a1a] sm:text-[14px]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Go Back
        </Link>

        <div className="mt-5 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h1 className="text-[24px] font-bold leading-tight text-[#1a1a1a] sm:text-[28px]">
              Admin Role Permissions
            </h1>
            <p className="mt-2 max-w-2xl text-[13px] font-medium leading-relaxed text-[#9ca3af] sm:text-[14px]">
              Please specify the permissions you want to give in your system&apos;s admin role.
            </p>
          </div>

          <button
            type="button"
            onClick={handleSave}
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-xl bg-primary px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#e63e3e] active:bg-[#d93636] sm:text-[14px]"
          >
            Save Changes
          </button>
        </div>
      </div>

      <AdminRolePermissionsControls
        selectedRoleId={selectedRoleId}
        roleOptions={data.roleOptions}
        isActive={isActive}
        onRoleChange={handleRoleChange}
        onActiveChange={setIsActive}
      />

      <AdminRolePermissionsTable modules={modules} onChange={setModules} />
    </div>
  );
}
