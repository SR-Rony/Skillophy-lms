"use client";

import { useState } from "react";
import type {
  TeacherAccountSettingsPageData,
  TeacherAccountSettingsTabId,
} from "@/types/teacher-account-settings.types";
import { TeacherAccountSettingsEducationSection } from "./teacher-account-settings-education-section";
import { TeacherAccountSettingsHero } from "./teacher-account-settings-hero";
import { TeacherAccountSettingsMorePlaceholder } from "./teacher-account-settings-more-placeholder";
import { TeacherAccountSettingsProfileView } from "./teacher-account-settings-profile-view";

interface TeacherAccountSettingsPageProps {
  data: TeacherAccountSettingsPageData;
}

export function TeacherAccountSettingsPage({ data }: TeacherAccountSettingsPageProps) {
  const defaultTab = data.tabs[0]?.id ?? "profile-info";
  const [activeTab, setActiveTab] = useState<TeacherAccountSettingsTabId>(defaultTab);
  const [isProfileEditing, setIsProfileEditing] = useState(false);

  function handleTabChange(tab: TeacherAccountSettingsTabId) {
    setActiveTab(tab);
    if (tab !== "profile-info") {
      setIsProfileEditing(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
      <TeacherAccountSettingsHero
        profile={data.profile}
        stats={data.stats}
        tabs={data.tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        {activeTab === "profile-info" ? (
          <div className="space-y-0">
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
        ) : (
          <TeacherAccountSettingsMorePlaceholder />
        )}
      </div>
    </div>
  );
}
