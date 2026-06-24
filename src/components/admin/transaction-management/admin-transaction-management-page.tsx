"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  AdminTransactionManagementLearnerTabPanel,
  AdminTransactionManagementTeacherTabPanel,
} from "@/components/admin/transaction-management/admin-transaction-management-tab-panel";
import { AdminTransactionManagementTabs } from "@/components/admin/transaction-management/admin-transaction-management-tabs";
import {
  getAdminTransactionManagementHref,
  parseAdminTransactionManagementTab,
} from "@/components/admin/transaction-management/admin-transaction-management.utils";
import type {
  AdminTransactionManagementData,
  AdminTransactionManagementTab,
} from "@/types/admin-transaction-management.types";

interface AdminTransactionManagementPageProps {
  data: AdminTransactionManagementData;
}

export function AdminTransactionManagementPage({ data }: AdminTransactionManagementPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabFromUrl = parseAdminTransactionManagementTab(searchParams.get("tab"));
  const [activeTab, setActiveTab] = useState<AdminTransactionManagementTab>(tabFromUrl);

  useEffect(() => {
    setActiveTab(tabFromUrl);
  }, [tabFromUrl]);

  function handleTabChange(tab: AdminTransactionManagementTab) {
    setActiveTab(tab);
    router.replace(getAdminTransactionManagementHref(tab), { scroll: false });
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
      <AdminTransactionManagementTabs activeTab={activeTab} onTabChange={handleTabChange} />

      {activeTab === "teacher" ? (
        <AdminTransactionManagementTeacherTabPanel
          key="teacher"
          tabData={data.teacher}
          {...sharedPanelProps}
        />
      ) : (
        <AdminTransactionManagementLearnerTabPanel
          key="learner"
          tabData={data.learner}
          {...sharedPanelProps}
        />
      )}
    </div>
  );
}
