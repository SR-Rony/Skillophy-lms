"use client";

import { useState } from "react";
import type { AdminLearnerProfileInfoData } from "@/types/admin-learner-profile.types";
import { AdminLearnerProfileEducationSection } from "./profile-info/admin-learner-profile-education-section";
import { AdminLearnerProfileInfoView } from "./profile-info/admin-learner-profile-info-view";
import { AdminLearnerProfileJobExperienceSection } from "./profile-info/admin-learner-profile-job-experience-section";

interface AdminLearnerProfileInfoTabProps {
  data: AdminLearnerProfileInfoData;
}

export function AdminLearnerProfileInfoTab({ data }: AdminLearnerProfileInfoTabProps) {
  const [isProfileEditing, setIsProfileEditing] = useState(false);

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <AdminLearnerProfileInfoView
        data={{
          generalInfo: data.generalInfo,
          biography: data.biography,
          genderOptions: data.genderOptions,
          countryOptions: data.countryOptions,
        }}
        isProfileEditing={isProfileEditing}
        onProfileEditingChange={setIsProfileEditing}
      />

      <AdminLearnerProfileEducationSection
        educationData={data.educationData}
        educationFormOptions={data.educationFormOptions}
        courseFormOptions={data.courseFormOptions}
        skillsFormOptions={data.skillsFormOptions}
      />

      <AdminLearnerProfileJobExperienceSection
        jobExperienceData={data.jobExperienceData}
        jobExperienceFormOptions={data.jobExperienceFormOptions}
      />
    </div>
  );
}
