"use client";

import { useState } from "react";
import { AdminEmployeeProfileHero } from "@/components/admin/employee-profile/admin-employee-profile-hero";
import { AdminEmployeeProfileInfoTab } from "@/components/admin/employee-profile/admin-employee-profile-info-tab";
import { AdminEmployeeProfileMoreTab } from "@/components/admin/employee-profile/admin-employee-profile-more-tab";
import type { AdminAccountSettingsPageData } from "@/types/admin-account-settings.types";
import type { AdminEmployeeProfileTabId } from "@/types/admin-employee-profile.types";

interface AdminAccountSettingsPageProps {
  data: AdminAccountSettingsPageData;
}

export function AdminAccountSettingsPage({ data }: AdminAccountSettingsPageProps) {
  const defaultTab = data.profile.tabs[0]?.id ?? "profile-info";
  const [activeTab, setActiveTab] = useState<AdminEmployeeProfileTabId>(defaultTab);

  return (
    <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
      <AdminEmployeeProfileHero
        profile={data.profile}
        tabs={data.profile.tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {activeTab === "profile-info" && <AdminEmployeeProfileInfoTab data={data.profileInfo} />}

      {activeTab === "more" && <AdminEmployeeProfileMoreTab data={data.moreData} />}
    </div>
  );
}
