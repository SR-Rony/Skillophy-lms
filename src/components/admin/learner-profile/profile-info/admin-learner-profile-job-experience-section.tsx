"use client";

import { AdminLearnerProfileJobExperienceView } from "./admin-learner-profile-job-experience-view";
import type {
  StudentAccountSettingsJobExperienceData,
  StudentAccountSettingsJobExperienceFormOptions,
} from "@/types/student-account-settings.types";

interface AdminLearnerProfileJobExperienceSectionProps {
  jobExperienceData: StudentAccountSettingsJobExperienceData;
  jobExperienceFormOptions: StudentAccountSettingsJobExperienceFormOptions;
}

export function AdminLearnerProfileJobExperienceSection({
  jobExperienceData,
  jobExperienceFormOptions,
}: AdminLearnerProfileJobExperienceSectionProps) {
  return (
    <section className="border-t border-[#f0f0f0] pt-8 lg:pt-10">
      <AdminLearnerProfileJobExperienceView
        data={jobExperienceData}
        formOptions={jobExperienceFormOptions}
      />
    </section>
  );
}
