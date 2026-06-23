import type { AdminLearnerProfileInfoData } from "@/types/admin-learner-profile.types";
import { AdminLearnerProfileBiographyCard } from "./admin-learner-profile-biography-card";
import { AdminLearnerProfileGeneralInfoCard } from "./admin-learner-profile-general-info-card";

interface AdminLearnerProfileInfoViewProps {
  data: Pick<
    AdminLearnerProfileInfoData,
    "generalInfo" | "biography" | "genderOptions" | "countryOptions"
  >;
  isProfileEditing: boolean;
  onProfileEditingChange: (isEditing: boolean) => void;
}

export function AdminLearnerProfileInfoView({
  data,
  isProfileEditing,
  onProfileEditingChange,
}: AdminLearnerProfileInfoViewProps) {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:gap-6">
      <AdminLearnerProfileGeneralInfoCard
        generalInfo={data.generalInfo}
        genderOptions={data.genderOptions}
        countryOptions={data.countryOptions}
        isEditing={isProfileEditing}
        onEditingChange={onProfileEditingChange}
      />
      <AdminLearnerProfileBiographyCard biography={data.biography} />
    </div>
  );
}
