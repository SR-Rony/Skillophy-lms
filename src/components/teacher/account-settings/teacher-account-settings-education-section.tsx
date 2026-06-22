"use client";

import { AccountSettingsEducationView } from "@/components/student/account-settings/account-settings-education-view";
import type {
  StudentAccountSettingsCourseFormOptions,
  StudentAccountSettingsEducationData,
  StudentAccountSettingsEducationFormOptions,
  StudentAccountSettingsSkillsFormOptions,
} from "@/types/student-account-settings.types";

interface TeacherAccountSettingsEducationSectionProps {
  educationData: StudentAccountSettingsEducationData;
  educationFormOptions: StudentAccountSettingsEducationFormOptions;
  courseFormOptions: StudentAccountSettingsCourseFormOptions;
  skillsFormOptions: StudentAccountSettingsSkillsFormOptions;
}

export function TeacherAccountSettingsEducationSection({
  educationData,
  educationFormOptions,
  courseFormOptions,
  skillsFormOptions,
}: TeacherAccountSettingsEducationSectionProps) {
  return (
    <section className="border-t border-[#f0f0f0] pt-8 lg:pt-10">
      <div className="mb-6 flex items-start justify-between gap-4 sm:mb-8">
        <h2 className="text-[20px] font-bold text-[#1a1a1a] sm:text-[22px]">
          Educational Qualification
        </h2>

        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90 sm:px-5 sm:text-[14px]"
        >
          Edit Info
        </button>
      </div>

      <AccountSettingsEducationView
        data={educationData}
        formOptions={educationFormOptions}
        courseFormOptions={courseFormOptions}
        skillsFormOptions={skillsFormOptions}
      />
    </section>
  );
}
