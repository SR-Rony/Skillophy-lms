"use client";

import { useState } from "react";
import { AdminCourseCreationCurriculumSection } from "@/components/admin/course-creation/curriculum/admin-course-creation-curriculum-section";
import { AdminCourseCreationGeneralInfoSection } from "@/components/admin/course-creation/admin-course-creation-general-info-section";
import { AdminCourseCreationPageHeader } from "@/components/admin/course-creation/admin-course-creation-page-header";
import { AdminCourseCreationStepper } from "@/components/admin/course-creation/admin-course-creation-stepper";
import type {
  AdminCourseCreationData,
  AdminCourseCreationGeneralInfo,
  AdminCourseCreationStepId,
} from "@/types/admin-course-creation.types";

interface AdminCourseCreationPageProps {
  data: AdminCourseCreationData;
}

const STEP_ORDER: AdminCourseCreationStepId[] = ["general-info", "curriculum", "meta-info"];

export function AdminCourseCreationPage({ data }: AdminCourseCreationPageProps) {
  const [activeStepId, setActiveStepId] = useState<AdminCourseCreationStepId>("general-info");
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState<AdminCourseCreationGeneralInfo>(data.generalInfo);
  const [savedForm, setSavedForm] = useState<AdminCourseCreationGeneralInfo>(data.generalInfo);

  const isGeneralInfoStep = activeStepId === "general-info";
  const isCurriculumStep = activeStepId === "curriculum";
  const isMetaInfoStep = activeStepId === "meta-info";
  const showEditingActions = isEditing || isCurriculumStep;
  const showBack = !isGeneralInfoStep;
  const showNext = !isMetaInfoStep;

  function handleChange<K extends keyof AdminCourseCreationGeneralInfo>(
    field: K,
    value: AdminCourseCreationGeneralInfo[K]
  ) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleEdit() {
    setForm(savedForm);
    setIsEditing(true);
  }

  function handleSave() {
    setSavedForm(form);
    if (!isCurriculumStep && !isMetaInfoStep) {
      setIsEditing(false);
    }
  }

  function handleBack() {
    const currentIndex = STEP_ORDER.indexOf(activeStepId);
    if (currentIndex <= 0) {
      return;
    }

    const previousStepId = STEP_ORDER[currentIndex - 1];

    if (previousStepId === "general-info") {
      setIsEditing(false);
    }

    setActiveStepId(previousStepId);
  }

  function handleNext() {
    const currentIndex = STEP_ORDER.indexOf(activeStepId);
    if (currentIndex === -1 || currentIndex >= STEP_ORDER.length - 1) {
      return;
    }

    if (activeStepId === "general-info" && isEditing) {
      setSavedForm(form);
      setIsEditing(false);
    }

    setActiveStepId(STEP_ORDER[currentIndex + 1]);
  }

  return (
    <div className="space-y-6">
      <AdminCourseCreationPageHeader
        isEditing={showEditingActions}
        showBack={showBack}
        showNext={showNext}
        onEdit={handleEdit}
        onSave={handleSave}
        onBack={handleBack}
        onNext={handleNext}
      />

      <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.04)] sm:p-6 md:p-7">
        <AdminCourseCreationStepper steps={data.steps} activeStepId={activeStepId} />

        <div className="mt-8 border-t border-[#f0f0f0] pt-8">
          {activeStepId === "general-info" ? (
            <AdminCourseCreationGeneralInfoSection
              form={isEditing ? form : savedForm}
              formOptions={data.formOptions}
              isEditing={isEditing}
              onChange={handleChange}
            />
          ) : null}

          {activeStepId === "curriculum" ? (
            <AdminCourseCreationCurriculumSection
              initialData={data.curriculum}
              teachers={data.formOptions.teachers}
              maxTeachersPerRole={data.formOptions.maxTeachersPerRole}
            />
          ) : null}

          {activeStepId === "meta-info" ? (
            <section>
              <h2 className="text-[16px] font-bold text-[#1a1a1a] sm:text-[18px]">Meta Info</h2>
              <p className="mt-3 text-[13px] leading-relaxed text-[#757575] sm:text-[14px]">
                Meta information for this course will be configured here.
              </p>
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
}
