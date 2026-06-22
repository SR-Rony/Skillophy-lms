"use client";

import { TeacherAccountSettingsMoreView } from "@/components/teacher/account-settings/teacher-account-settings-more-view";
import type { AdminTeacherProfileMoreData } from "@/types/admin-teacher-profile.types";

interface AdminEmployeeProfileMoreTabProps {
  data: AdminTeacherProfileMoreData;
}

export function AdminEmployeeProfileMoreTab({ data }: AdminEmployeeProfileMoreTabProps) {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <TeacherAccountSettingsMoreView data={data} />
    </div>
  );
}
