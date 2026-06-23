"use client";

import { useState } from "react";
import { AdminLearnerProfileHero } from "@/components/admin/learner-profile/admin-learner-profile-hero";
import { AdminLearnerProfileInfoTab } from "@/components/admin/learner-profile/admin-learner-profile-info-tab";
import { AdminLearnerProfileMoreTab } from "@/components/admin/learner-profile/admin-learner-profile-more-tab";
import { AdminLearnerProfileLiveCoursesTab } from "@/components/admin/learner-profile/live-courses/admin-learner-profile-live-courses-tab";
import { AdminLearnerProfileRecordedCoursesTab } from "@/components/admin/learner-profile/recorded-courses/admin-learner-profile-recorded-courses-tab";
import type {
  AdminLearnerProfilePageData,
  AdminLearnerProfileTabId,
} from "@/types/admin-learner-profile.types";

interface AdminLearnerProfilePageProps {
  data: AdminLearnerProfilePageData;
}

export function AdminLearnerProfilePage({ data }: AdminLearnerProfilePageProps) {
  const defaultTab = data.profile.tabs[0]?.id ?? "recorded-courses";
  const [activeTab, setActiveTab] = useState<AdminLearnerProfileTabId>(defaultTab);

  return (
    <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
      <AdminLearnerProfileHero
        profile={data.profile}
        tabs={data.profile.tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {activeTab === "recorded-courses" && (
        <AdminLearnerProfileRecordedCoursesTab data={data.recordedCourses} />
      )}

      {activeTab === "live-courses" && (
        <AdminLearnerProfileLiveCoursesTab data={data.liveCourses} />
      )}

      {activeTab === "learner-profile" && <AdminLearnerProfileInfoTab data={data.profileInfo} />}

      {activeTab === "more" && <AdminLearnerProfileMoreTab data={data.moreData} />}
    </div>
  );
}
