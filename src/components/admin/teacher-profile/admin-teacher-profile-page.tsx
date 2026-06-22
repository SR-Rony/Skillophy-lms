"use client";

import { useState } from "react";
import { AdminTeacherProfileHero } from "@/components/admin/teacher-profile/admin-teacher-profile-hero";
import { AdminTeacherProfileLiveCoursesTab } from "@/components/admin/teacher-profile/admin-teacher-profile-live-courses-tab";
import { AdminTeacherProfileRecordedCoursesTab } from "@/components/admin/teacher-profile/admin-teacher-profile-recorded-courses-tab";
import { AdminTeacherProfileTabPlaceholder } from "@/components/admin/teacher-profile/admin-teacher-profile-tab-placeholder";
import type {
  AdminTeacherProfilePageData,
  AdminTeacherProfileTabId,
} from "@/types/admin-teacher-profile.types";

interface AdminTeacherProfilePageProps {
  data: AdminTeacherProfilePageData;
}

export function AdminTeacherProfilePage({ data }: AdminTeacherProfilePageProps) {
  const defaultTab = data.profile.tabs[0]?.id ?? "recorded-courses";
  const [activeTab, setActiveTab] = useState<AdminTeacherProfileTabId>(defaultTab);

  return (
    <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
      <AdminTeacherProfileHero
        profile={data.profile}
        tabs={data.profile.tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {activeTab === "recorded-courses" && (
        <AdminTeacherProfileRecordedCoursesTab data={data.recordedCourses} />
      )}

      {activeTab === "live-courses" && (
        <AdminTeacherProfileLiveCoursesTab data={data.liveCourses} />
      )}

      {activeTab === "payment" && <AdminTeacherProfileTabPlaceholder title="Payment" />}

      {activeTab === "profile-info" && (
        <AdminTeacherProfileTabPlaceholder title="Profile Info" />
      )}

      {activeTab === "more" && <AdminTeacherProfileTabPlaceholder title="More" />}
    </div>
  );
}
