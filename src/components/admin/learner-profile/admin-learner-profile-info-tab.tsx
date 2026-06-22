"use client";

import { useState } from "react";
import { TeacherAccountSettingsBiographyCard } from "@/components/teacher/account-settings/teacher-account-settings-biography-card";
import { TeacherAccountSettingsGeneralInfoCard } from "@/components/teacher/account-settings/teacher-account-settings-general-info-card";
import type { AdminLearnerProfileInfoData } from "@/types/admin-learner-profile.types";

interface AdminLearnerProfileInfoTabProps {
  data: AdminLearnerProfileInfoData;
}

export function AdminLearnerProfileInfoTab({ data }: AdminLearnerProfileInfoTabProps) {
  const [isProfileEditing, setIsProfileEditing] = useState(false);

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:gap-6">
        <TeacherAccountSettingsGeneralInfoCard
          generalInfo={data.generalInfo}
          roleOptions={data.roleOptions}
          statusOptions={data.statusOptions}
          genderOptions={data.genderOptions}
          countryOptions={data.countryOptions}
          isEditing={isProfileEditing}
          onEditingChange={setIsProfileEditing}
        />
        <TeacherAccountSettingsBiographyCard biography={data.biography} />
      </div>
    </div>
  );
}
