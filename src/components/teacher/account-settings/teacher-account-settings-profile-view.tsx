import type { TeacherAccountSettingsPageData } from "@/types/teacher-account-settings.types";
import { TeacherAccountSettingsBiographyCard } from "./teacher-account-settings-biography-card";
import { TeacherAccountSettingsGeneralInfoCard } from "./teacher-account-settings-general-info-card";

interface TeacherAccountSettingsProfileViewProps {
  data: Pick<
    TeacherAccountSettingsPageData,
    | "generalInfo"
    | "biography"
    | "roleOptions"
    | "statusOptions"
    | "genderOptions"
    | "countryOptions"
  >;
  isProfileEditing: boolean;
  onProfileEditingChange: (isEditing: boolean) => void;
}

export function TeacherAccountSettingsProfileView({
  data,
  isProfileEditing,
  onProfileEditingChange,
}: TeacherAccountSettingsProfileViewProps) {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:gap-6">
      <TeacherAccountSettingsGeneralInfoCard
        generalInfo={data.generalInfo}
        roleOptions={data.roleOptions}
        statusOptions={data.statusOptions}
        genderOptions={data.genderOptions}
        countryOptions={data.countryOptions}
        isEditing={isProfileEditing}
        onEditingChange={onProfileEditingChange}
      />
      <TeacherAccountSettingsBiographyCard biography={data.biography} />
    </div>
  );
}
