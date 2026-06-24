"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AdminCourseManagementTabs } from "@/components/admin/course-management/admin-course-management-tabs";
import {
  getAdminCourseManagementHref,
  parseAdminCourseManagementTab,
} from "@/components/admin/course-management/admin-course-management.utils";
import { AdminLiveCoursesTab } from "@/components/admin/course-management/live/admin-live-courses-tab";
import { AdminRecordedCoursesTab } from "@/components/admin/course-management/recorded/admin-recorded-courses-tab";
import type {
  AdminCourseManagementData,
  AdminCourseManagementTab,
} from "@/types/admin-course-management.types";

interface AdminCourseManagementPageProps {
  data: AdminCourseManagementData;
}

export function AdminCourseManagementPage({ data }: AdminCourseManagementPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabFromUrl = parseAdminCourseManagementTab(searchParams.get("tab"));
  const [activeTab, setActiveTab] = useState<AdminCourseManagementTab>(tabFromUrl);

  useEffect(() => {
    setActiveTab(tabFromUrl);
  }, [tabFromUrl]);

  function handleTabChange(tab: AdminCourseManagementTab) {
    setActiveTab(tab);
    router.replace(getAdminCourseManagementHref(tab), { scroll: false });
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
      <AdminCourseManagementTabs activeTab={activeTab} onTabChange={handleTabChange} />

      {activeTab === "recorded" ? (
        <AdminRecordedCoursesTab data={data.recordedCourses} />
      ) : (
        <AdminLiveCoursesTab data={data.liveCourses} />
      )}
    </div>
  );
}
