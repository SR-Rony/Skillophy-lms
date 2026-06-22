"use client";

import { useState } from "react";
import { TeacherAccountSettingsEducationSection } from "@/components/teacher/account-settings/teacher-account-settings-education-section";
import { TeacherAccountSettingsProfileView } from "@/components/teacher/account-settings/teacher-account-settings-profile-view";
import type { AdminTeacherProfileInfoData } from "@/types/admin-teacher-profile.types";

interface AdminTeacherProfileInfoTabProps {
  data: AdminTeacherProfileInfoData;
}

export function AdminTeacherProfileInfoTab({ data }: AdminTeacherProfileInfoTabProps) {
  const [isProfileEditing, setIsProfileEditing] = useState(false);

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <TeacherAccountSettingsProfileView
        data={{
          generalInfo: data.generalInfo,
          biography: data.biography,
          roleOptions: data.roleOptions,
          statusOptions: data.statusOptions,
          genderOptions: data.genderOptions,
          countryOptions: data.countryOptions,
        }}
        isProfileEditing={isProfileEditing}
        onProfileEditingChange={setIsProfileEditing}
      />

      <TeacherAccountSettingsEducationSection
        educationData={data.educationData}
        educationFormOptions={data.educationFormOptions}
        courseFormOptions={data.courseFormOptions}
        skillsFormOptions={data.skillsFormOptions}
      />
    </div>
  );
}
