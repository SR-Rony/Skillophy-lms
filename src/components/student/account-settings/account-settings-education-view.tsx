"use client";

import { useState } from "react";
import type {
  StudentAccountSettingsAddCourseFormValues,
  StudentAccountSettingsAddEducationFormValues,
  StudentAccountSettingsCourseFormOptions,
  StudentAccountSettingsCourseItem,
  StudentAccountSettingsEducationData,
  StudentAccountSettingsEducationFormOptions,
  StudentAccountSettingsEducationItem,
  StudentAccountSettingsSkillsFormOptions,
} from "@/types/student-account-settings.types";
import {
  AccountSettingsAddCourseModal,
  buildCourseItemFromForm,
} from "./account-settings-add-course-modal";
import {
  AccountSettingsAddEducationModal,
  buildEducationItemFromForm,
} from "./account-settings-add-education-modal";
import { AccountSettingsAddSkillsModal } from "./account-settings-add-skills-modal";
import { AccountSettingsCoursesCard } from "./account-settings-courses-card";
import { AccountSettingsEducationCard } from "./account-settings-education-card";
import { AccountSettingsSectionCard } from "./account-settings-section-card";
import { AccountSettingsTagList } from "./account-settings-tag-list";

interface AccountSettingsEducationViewProps {
  data: StudentAccountSettingsEducationData;
  formOptions: StudentAccountSettingsEducationFormOptions;
  courseFormOptions: StudentAccountSettingsCourseFormOptions;
  skillsFormOptions: StudentAccountSettingsSkillsFormOptions;
}

export function AccountSettingsEducationView({
  data,
  formOptions,
  courseFormOptions,
  skillsFormOptions,
}: AccountSettingsEducationViewProps) {
  const [educationItems, setEducationItems] = useState<StudentAccountSettingsEducationItem[]>(
    data.education
  );
  const [courseItems, setCourseItems] = useState<StudentAccountSettingsCourseItem[]>(data.courses);
  const [skillItems, setSkillItems] = useState<string[]>(data.skills);
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);

  function handleSaveEducation(values: StudentAccountSettingsAddEducationFormValues) {
    const newItem = buildEducationItemFromForm(values, formOptions);
    setEducationItems((current) => [...current, newItem]);
  }

  function handleSaveCourse(values: StudentAccountSettingsAddCourseFormValues) {
    const newItem = buildCourseItemFromForm(values, courseFormOptions);
    setCourseItems((current) => [...current, newItem]);
  }

  function handleSaveSkills(skills: string[]) {
    setSkillItems(skills);
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-start lg:gap-6">
        <div className="space-y-5 lg:space-y-6">
          <AccountSettingsSectionCard
            title="Education"
            onAction={() => setIsEducationModalOpen(true)}
          >
            <AccountSettingsEducationCard items={educationItems} />
          </AccountSettingsSectionCard>

          <AccountSettingsSectionCard title="Courses" onAction={() => setIsCourseModalOpen(true)}>
            <AccountSettingsCoursesCard items={courseItems} />
          </AccountSettingsSectionCard>
        </div>

        <div className="space-y-5 lg:space-y-6">
          <AccountSettingsSectionCard title="Skills" onAction={() => setIsSkillsModalOpen(true)}>
            <AccountSettingsTagList items={skillItems} />
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

      <AccountSettingsAddCourseModal
        open={isCourseModalOpen}
        onOpenChange={setIsCourseModalOpen}
        formOptions={courseFormOptions}
        onSave={handleSaveCourse}
      />

      <AccountSettingsAddSkillsModal
        open={isSkillsModalOpen}
        onOpenChange={setIsSkillsModalOpen}
        initialSkills={skillItems}
        formOptions={skillsFormOptions}
        onSave={handleSaveSkills}
      />
    </>
  );
}
