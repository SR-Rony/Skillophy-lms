import type { StudentAccountSettingsPageData } from "@/types/student-account-settings.types";
import { AccountSettingsBiographyCard } from "./account-settings-biography-card";
import { AccountSettingsProfileInfoCard } from "./account-settings-profile-info-card";

interface AccountSettingsProfileViewProps {
  data: Pick<
    StudentAccountSettingsPageData,
    "profileInfo" | "biography" | "genderOptions" | "countryOptions"
  >;
}

export function AccountSettingsProfileView({ data }: AccountSettingsProfileViewProps) {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:gap-6">
      <AccountSettingsProfileInfoCard
        profileInfo={data.profileInfo}
        genderOptions={data.genderOptions}
        countryOptions={data.countryOptions}
      />
      <AccountSettingsBiographyCard biography={data.biography} />
    </div>
  );
}
