"use client";

import { useState } from "react";
import { Container } from "@/components/shared";
import type {
  StudentAccountSettingsPageData,
  StudentAccountSettingsTabId,
} from "@/types/student-account-settings.types";
import { AccountSettingsHero } from "./account-settings-hero";
import { AccountSettingsEducationView } from "./account-settings-education-view";
import { AccountSettingsJobExperienceView } from "./account-settings-job-experience-view";
import { AccountSettingsProfileView } from "./account-settings-profile-view";
import { AccountSettingsSettingsView } from "./account-settings-settings-view";
import { AccountSettingsTabPlaceholder } from "./account-settings-tab-placeholder";

interface AccountSettingsContentProps {
  data: StudentAccountSettingsPageData;
}

export function AccountSettingsContent({ data }: AccountSettingsContentProps) {
  const defaultTab = data.tabs[0]?.id ?? "my-profile";
  const [activeTab, setActiveTab] = useState<StudentAccountSettingsTabId>(defaultTab);
  const [isProfileEditing, setIsProfileEditing] = useState(false);

  function handleTabChange(tab: StudentAccountSettingsTabId) {
    setActiveTab(tab);
    if (tab !== "my-profile") {
      setIsProfileEditing(false);
    }
  }

  return (
    <div className="bg-white">
      <AccountSettingsHero
        profile={data.profile}
        tabs={data.tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        isProfileEditing={isProfileEditing}
      />

      <Container className="bg-white py-6 md:py-8 lg:py-10">
        {activeTab === "my-profile" ? (
          <AccountSettingsProfileView
            data={{
              profileInfo: data.profileInfo,
              biography: data.biography,
              genderOptions: data.genderOptions,
              countryOptions: data.countryOptions,
            }}
            isProfileEditing={isProfileEditing}
            onProfileEditingChange={setIsProfileEditing}
          />
        ) : null}

        {activeTab === "education" ? (
          <AccountSettingsEducationView
            data={data.educationData}
            formOptions={data.educationFormOptions}
            courseFormOptions={data.courseFormOptions}
            skillsFormOptions={data.skillsFormOptions}
          />
        ) : null}

        {activeTab === "job-experience" ? (
          <AccountSettingsJobExperienceView
            data={data.jobExperienceData}
            formOptions={data.jobExperienceFormOptions}
          />
        ) : null}

        {activeTab === "settings" ? (
          <AccountSettingsSettingsView data={data.preferencesData} />
        ) : null}

        {activeTab === "more" ? <AccountSettingsTabPlaceholder title="More" /> : null}
      </Container>
    </div>
  );
}
