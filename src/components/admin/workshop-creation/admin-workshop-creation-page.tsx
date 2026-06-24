"use client";

import { useMemo, useState } from "react";
import { AdminCourseCreationStepper } from "@/components/admin/course-creation/admin-course-creation-stepper";
import { AdminWorkshopCreationGeneralInfoSection } from "@/components/admin/workshop-creation/admin-workshop-creation-general-info-section";
import { AdminWorkshopCreationPageHeader } from "@/components/admin/workshop-creation/admin-workshop-creation-page-header";
import type {
  AdminWorkshopCreationData,
  AdminWorkshopCreationGeneralInfo,
  AdminWorkshopCreationStepId,
} from "@/types/admin-workshop-creation.types";

interface AdminWorkshopCreationPageProps {
  data: AdminWorkshopCreationData;
  mode?: "create" | "edit";
}

export function AdminWorkshopCreationPage({ data, mode = "edit" }: AdminWorkshopCreationPageProps) {
  const isCreateMode = mode === "create";
  const stepOrder = useMemo(() => data.steps.map((step) => step.id), [data.steps]);

  const [activeStepId, setActiveStepId] = useState<AdminWorkshopCreationStepId>(
    stepOrder[0] ?? "general-info"
  );
  const [isEditing, setIsEditing] = useState(isCreateMode);
  const [form, setForm] = useState<AdminWorkshopCreationGeneralInfo>(data.generalInfo);
  const [savedForm, setSavedForm] = useState<AdminWorkshopCreationGeneralInfo>(data.generalInfo);

  const isGeneralInfoStep = activeStepId === "general-info";
  const isWorkshopScheduleStep = activeStepId === "workshop-schedule";
  const isMetaInfoStep = activeStepId === "meta-info";
  const showBack = !isGeneralInfoStep;
  const showNext = !isMetaInfoStep;

  function handleChange<K extends keyof AdminWorkshopCreationGeneralInfo>(
    field: K,
    value: AdminWorkshopCreationGeneralInfo[K]
  ) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleEdit() {
    setForm(savedForm);
    setIsEditing(true);
  }

  function handleSave() {
    setSavedForm(form);
    if (!isMetaInfoStep) {
      setIsEditing(false);
    }
  }

  function handleBack() {
    const currentIndex = stepOrder.indexOf(activeStepId);
    if (currentIndex <= 0) {
      return;
    }

    const previousStepId = stepOrder[currentIndex - 1];

    if (previousStepId === "general-info") {
      setIsEditing(false);
    }

    setActiveStepId(previousStepId);
  }

  function handleNext() {
    const currentIndex = stepOrder.indexOf(activeStepId);
    if (currentIndex === -1 || currentIndex >= stepOrder.length - 1) {
      return;
    }

    if (activeStepId === "general-info" && isEditing) {
      setSavedForm(form);
      setIsEditing(false);
    }

    setActiveStepId(stepOrder[currentIndex + 1]);
  }

  return (
    <div className="space-y-6">
      <AdminWorkshopCreationPageHeader
        isEditing={isEditing}
        isMetaInfoStep={isMetaInfoStep}
        showBack={showBack}
        showNext={showNext}
        onEdit={handleEdit}
        onSave={handleSave}
        onBack={handleBack}
        onNext={handleNext}
        onPublish={() => undefined}
        onSaveDraft={() => undefined}
      />

      <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.04)] sm:p-6 md:p-7">
        <AdminCourseCreationStepper steps={data.steps} activeStepId={activeStepId} />

        <div className="mt-8 border-t border-[#f0f0f0] pt-8">
          {isGeneralInfoStep ? (
            <AdminWorkshopCreationGeneralInfoSection
              form={isEditing ? form : savedForm}
              formOptions={data.formOptions}
              isEditing={isEditing}
              isCreateMode={isCreateMode}
              onChange={handleChange}
            />
          ) : null}

          {isWorkshopScheduleStep ? (
            <div className="rounded-xl bg-[#f9f9f9] px-6 py-12 text-center">
              <p className="text-[14px] font-medium text-[#9ca3af]">
                Workshop Schedule step coming soon.
              </p>
            </div>
          ) : null}

          {isMetaInfoStep ? (
            <div className="rounded-xl bg-[#f9f9f9] px-6 py-12 text-center">
              <p className="text-[14px] font-medium text-[#9ca3af]">Meta Info step coming soon.</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
