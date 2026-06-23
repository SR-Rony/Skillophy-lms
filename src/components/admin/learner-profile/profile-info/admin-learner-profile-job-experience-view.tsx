"use client";

import { useState } from "react";
import {
  AccountSettingsAddJobExperienceModal,
  buildJobExperienceItemFromForm,
} from "@/components/student/account-settings/account-settings-add-job-experience-modal";
import { AccountSettingsJobExperienceCard } from "@/components/student/account-settings/account-settings-job-experience-card";
import { AccountSettingsLinksCard } from "@/components/student/account-settings/account-settings-links-card";
import type {
  StudentAccountSettingsAddJobExperienceFormValues,
  StudentAccountSettingsJobExperienceData,
  StudentAccountSettingsJobExperienceFormOptions,
  StudentAccountSettingsJobExperienceItem,
} from "@/types/student-account-settings.types";
import { cn } from "@/utils";

interface AdminLearnerProfileJobExperienceViewProps {
  data: StudentAccountSettingsJobExperienceData;
  formOptions: StudentAccountSettingsJobExperienceFormOptions;
}

export function AdminLearnerProfileJobExperienceView({
  data,
  formOptions,
}: AdminLearnerProfileJobExperienceViewProps) {
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
        <section
          className={cn(
            "rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.04)] sm:p-6 md:p-7"
          )}
        >
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-[18px] font-bold text-[#1a1a1a] sm:text-[20px]">Job Experience</h2>

            <button
              type="button"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90 sm:px-5 sm:text-[14px]"
            >
              Edit Info
            </button>
          </div>

          <div className="mt-6">
            <button
              type="button"
              onClick={() => setIsJobModalOpen(true)}
              className="text-[13px] font-semibold text-[#1a1a1a] underline underline-offset-4 transition-opacity hover:opacity-70 sm:text-[14px]"
            >
              Add New
            </button>

            <div className="mt-6">
              <AccountSettingsJobExperienceCard items={experienceItems} />
            </div>
          </div>
        </section>

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
