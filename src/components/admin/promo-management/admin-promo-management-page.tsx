"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AdminPromoManagementTabPanel } from "@/components/admin/promo-management/admin-promo-management-tab-panel";
import { AdminPromoManagementTabs } from "@/components/admin/promo-management/admin-promo-management-tabs";
import {
  getAdminPromoManagementHref,
  parseAdminPromoManagementTab,
} from "@/components/admin/promo-management/admin-promo-management.utils";
import type {
  AdminPromoManagementData,
  AdminPromoManagementTab,
} from "@/types/admin-promo-management.types";

interface AdminPromoManagementPageProps {
  data: AdminPromoManagementData;
}

export function AdminPromoManagementPage({ data }: AdminPromoManagementPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabFromUrl = parseAdminPromoManagementTab(searchParams.get("tab"));
  const [activeTab, setActiveTab] = useState<AdminPromoManagementTab>(tabFromUrl);

  useEffect(() => {
    setActiveTab(tabFromUrl);
  }, [tabFromUrl]);

  function handleTabChange(tab: AdminPromoManagementTab) {
    setActiveTab(tab);
    router.replace(getAdminPromoManagementHref(tab), { scroll: false });
  }

  const activeTabData =
    activeTab === "bulk-discount" ? data.bulkDiscount : data.customizePromo;

  return (
    <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
      <AdminPromoManagementTabs activeTab={activeTab} onTabChange={handleTabChange} />

      <AdminPromoManagementTabPanel
        key={activeTab}
        tabData={activeTabData}
        categoryOptions={data.categoryOptions}
        courseOptions={data.courseOptions}
        userOptions={data.userOptions}
        sortOptions={data.sortOptions}
        defaultCategoryId={data.defaultCategoryId}
        defaultSortId={data.defaultSortId}
        pageSize={data.pageSize}
        addNewLabel={data.addNewLabel}
      />
    </div>
  );
}
