"use client";

import { useState } from "react";
import type {
  StudentAccountSettingsAddEducationFormValues,
  StudentAccountSettingsEducationData,
  StudentAccountSettingsEducationFormOptions,
  StudentAccountSettingsEducationItem,
} from "@/types/student-account-settings.types";
import {
  AccountSettingsAddEducationModal,
  buildEducationItemFromForm,
} from "./account-settings-add-education-modal";
import { AccountSettingsCoursesCard } from "./account-settings-courses-card";
import { AccountSettingsEducationCard } from "./account-settings-education-card";
import { AccountSettingsSectionCard } from "./account-settings-section-card";
import { AccountSettingsTagList } from "./account-settings-tag-list";

interface AccountSettingsEducationViewProps {
  data: StudentAccountSettingsEducationData;
  formOptions: StudentAccountSettingsEducationFormOptions;
}

export function AccountSettingsEducationView({
  data,
  formOptions,
}: AccountSettingsEducationViewProps) {
  const [educationItems, setEducationItems] = useState<StudentAccountSettingsEducationItem[]>(
    data.education
  );
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);

  function handleSaveEducation(values: StudentAccountSettingsAddEducationFormValues) {
    const newItem = buildEducationItemFromForm(values, formOptions);
    setEducationItems((current) => [...current, newItem]);
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-start lg:gap-6">
        <div className="space-y-5 lg:space-y-6">
          <AccountSettingsSectionCard
            title="Education"
            onAddNew={() => setIsEducationModalOpen(true)}
          >
            <AccountSettingsEducationCard items={educationItems} />
          </AccountSettingsSectionCard>

          <AccountSettingsSectionCard title="Courses">
            <AccountSettingsCoursesCard items={data.courses} />
          </AccountSettingsSectionCard>
        </div>

        <div className="space-y-5 lg:space-y-6">
          <AccountSettingsSectionCard title="Skills">
            <AccountSettingsTagList items={data.skills} />
          </AccountSettingsSectionCard>

          <AccountSettingsSectionCard title="Interested Area">
            <AccountSettingsTagList items={data.interestedAreas} />
          </AccountSettingsSectionCard>
        </div>
      </div>

      <AccountSettingsAddEducationModal
        open={isEducationModalOpen}
        onOpenChange={setIsEducationModalOpen}
        formOptions={formOptions}
        onSave={handleSaveEducation}
      />
    </>
  );
}
