"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AdminQueryFormBusinessTabPanel } from "@/components/admin/query-form-management/admin-query-form-business-tab-panel";
import { AdminQueryFormContactTabPanel } from "@/components/admin/query-form-management/admin-query-form-contact-tab-panel";
import { AdminQueryFormManagementTabs } from "@/components/admin/query-form-management/admin-query-form-management-tabs";
import {
  getAdminQueryFormManagementHref,
  parseAdminQueryFormManagementTab,
} from "@/components/admin/query-form-management/admin-query-form-management.utils";
import type {
  AdminQueryFormManagementData,
  AdminQueryFormManagementTab,
} from "@/types/admin-query-form-management.types";

interface AdminQueryFormManagementPageProps {
  data: AdminQueryFormManagementData;
}

export function AdminQueryFormManagementPage({ data }: AdminQueryFormManagementPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabFromUrl = parseAdminQueryFormManagementTab(searchParams.get("tab"));
  const [activeTab, setActiveTab] = useState<AdminQueryFormManagementTab>(tabFromUrl);

  useEffect(() => {
    setActiveTab(tabFromUrl);
  }, [tabFromUrl]);

  function handleTabChange(tab: AdminQueryFormManagementTab) {
    setActiveTab(tab);
    router.replace(getAdminQueryFormManagementHref(tab), { scroll: false });
  }

  const sharedPanelProps = {
    sortOptions: data.sortOptions,
    exportOptions: data.exportOptions,
    defaultSortId: data.defaultSortId,
    pageSize: data.pageSize,
    exportLabel: data.exportLabel,
    defaultSelectedIds: data.defaultSelectedIds,
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
      <AdminQueryFormManagementTabs activeTab={activeTab} onTabChange={handleTabChange} />

      {activeTab === "contact" ? (
        <AdminQueryFormContactTabPanel />
      ) : (
        <AdminQueryFormBusinessTabPanel tabData={data.business} {...sharedPanelProps} />
      )}
    </div>
  );
}
