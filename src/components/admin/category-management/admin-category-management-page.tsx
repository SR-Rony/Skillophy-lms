"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AdminCategoryManagementTabPanel } from "@/components/admin/category-management/admin-category-management-tab-panel";
import { AdminCategoryManagementTabs } from "@/components/admin/category-management/admin-category-management-tabs";
import {
  getAdminCategoryManagementHref,
  parseAdminCategoryManagementTab,
} from "@/components/admin/category-management/admin-category-management.utils";
import type {
  AdminCategoryManagementData,
  AdminCategoryManagementTab,
} from "@/types/admin-category-management.types";

interface AdminCategoryManagementPageProps {
  data: AdminCategoryManagementData;
}

export function AdminCategoryManagementPage({ data }: AdminCategoryManagementPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabFromUrl = parseAdminCategoryManagementTab(searchParams.get("tab"));
  const [activeTab, setActiveTab] = useState<AdminCategoryManagementTab>(tabFromUrl);

  useEffect(() => {
    setActiveTab(tabFromUrl);
  }, [tabFromUrl]);

  function handleTabChange(tab: AdminCategoryManagementTab) {
    setActiveTab(tab);
    router.replace(getAdminCategoryManagementHref(tab), { scroll: false });
  }

  const activeTabData =
    activeTab === "workshop"
      ? data.workshop
      : activeTab === "job-position"
        ? data.jobPosition
        : data.course;

  return (
    <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
      <AdminCategoryManagementTabs activeTab={activeTab} onTabChange={handleTabChange} />

      <AdminCategoryManagementTabPanel
        key={activeTab}
        tabData={activeTabData}
        sortOptions={data.sortOptions}
        defaultSortId={data.defaultSortId}
        pageSize={data.pageSize}
        addNewLabel={data.addNewLabel}
      />
    </div>
  );
}
