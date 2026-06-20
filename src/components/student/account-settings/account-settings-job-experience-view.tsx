"use client";

import { useState } from "react";
import type {
  StudentAccountSettingsAddJobExperienceFormValues,
  StudentAccountSettingsJobExperienceData,
  StudentAccountSettingsJobExperienceFormOptions,
  StudentAccountSettingsJobExperienceItem,
} from "@/types/student-account-settings.types";
import {
  AccountSettingsAddJobExperienceModal,
  buildJobExperienceItemFromForm,
} from "./account-settings-add-job-experience-modal";
import { AccountSettingsJobExperienceCard } from "./account-settings-job-experience-card";
import { AccountSettingsLinksCard } from "./account-settings-links-card";
import { AccountSettingsSectionCard } from "./account-settings-section-card";

interface AccountSettingsJobExperienceViewProps {
  data: StudentAccountSettingsJobExperienceData;
  formOptions: StudentAccountSettingsJobExperienceFormOptions;
}

export function AccountSettingsJobExperienceView({
  data,
  formOptions,
}: AccountSettingsJobExperienceViewProps) {
  const [experienceItems, setExperienceItems] = useState<StudentAccountSettingsJobExperienceItem[]>(
    data.experiences
  );
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);

  function handleSaveJobExperience(values: StudentAccountSettingsAddJobExperienceFormValues) {
    const newItem = buildJobExperienceItemFromForm(values, formOptions);
    setExperienceItems((current) => [...current, newItem]);
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:items-start lg:gap-6">
        <AccountSettingsSectionCard
          title="Job Experience"
          onAction={() => setIsJobModalOpen(true)}
        >
          <AccountSettingsJobExperienceCard items={experienceItems} />
        </AccountSettingsSectionCard>

        <AccountSettingsLinksCard links={data.links} maxCustomLinks={data.maxCustomLinks} />
      </div>

      <AccountSettingsAddJobExperienceModal
        open={isJobModalOpen}
        onOpenChange={setIsJobModalOpen}
        formOptions={formOptions}
        onSave={handleSaveJobExperience}
      />
    </>
  );
}
