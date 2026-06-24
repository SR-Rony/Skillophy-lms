"use client";

import { useMemo, useState } from "react";
import { AdminCourseCreationClassRoutineSection } from "@/components/admin/course-creation/class-routine/admin-course-creation-class-routine-section";
import { AdminCourseCreationCurriculumSection } from "@/components/admin/course-creation/curriculum/admin-course-creation-curriculum-section";
import { AdminCourseCreationGeneralInfoSection } from "@/components/admin/course-creation/admin-course-creation-general-info-section";
import { AdminCourseCreationMetaInfoSection } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-section";
import { AdminCourseCreationPageHeader } from "@/components/admin/course-creation/admin-course-creation-page-header";
import { AdminCourseCreationStepper } from "@/components/admin/course-creation/admin-course-creation-stepper";
import type {
  AdminCourseClassRoutine,
  AdminCourseCreationData,
  AdminCourseCreationGeneralInfo,
  AdminCourseCreationStepId,
} from "@/types/admin-course-creation.types";

interface AdminCourseCreationPageProps {
  data: AdminCourseCreationData;
  mode?: "create" | "edit";
}

export function AdminCourseCreationPage({ data, mode = "edit" }: AdminCourseCreationPageProps) {
  const isCreateMode = mode === "create";
  const isLiveCourse = data.courseType === "live";
  const stepOrder = useMemo(() => data.steps.map((step) => step.id), [data.steps]);

  const [activeStepId, setActiveStepId] = useState<AdminCourseCreationStepId>(stepOrder[0] ?? "general-info");
  const [isEditing, setIsEditing] = useState(isCreateMode);
  const [form, setForm] = useState<AdminCourseCreationGeneralInfo>(data.generalInfo);
  const [savedForm, setSavedForm] = useState<AdminCourseCreationGeneralInfo>(data.generalInfo);
  const [classRoutine, setClassRoutine] = useState<AdminCourseClassRoutine>(
    data.classRoutine ?? { main: [], support: [] }
  );
  const [savedClassRoutine, setSavedClassRoutine] = useState<AdminCourseClassRoutine>(
    data.classRoutine ?? { main: [], support: [] }
  );

  const isGeneralInfoStep = activeStepId === "general-info";
  const isClassRoutineStep = activeStepId === "class-routine";
  const isCurriculumStep = activeStepId === "curriculum";
  const isMetaInfoStep = activeStepId === "meta-info";
  const showEditingActions = isEditing || isClassRoutineStep || isCurriculumStep;
  const showBack = !isGeneralInfoStep;
  const showNext = !isMetaInfoStep;
  const showDuplicate = isLiveCourse && isGeneralInfoStep && !isEditing;

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
    if (isClassRoutineStep) {
      setSavedClassRoutine(classRoutine);
      return;
    }

    setSavedForm(form);
    if (!isCurriculumStep && !isMetaInfoStep) {
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

    if (activeStepId === "class-routine") {
      setSavedClassRoutine(classRoutine);
    }

    setActiveStepId(stepOrder[currentIndex + 1]);
  }

  return (
    <div className="space-y-6">
      <AdminCourseCreationPageHeader
        isEditing={showEditingActions}
        isMetaInfoStep={isMetaInfoStep}
        showBack={showBack}
        showNext={showNext}
        showDuplicate={showDuplicate}
        onEdit={handleEdit}
        onSave={handleSave}
        onBack={handleBack}
        onNext={handleNext}
        onPublish={() => undefined}
        onSaveDraft={() => undefined}
        onDuplicate={() => undefined}
      />

      <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.04)] sm:p-6 md:p-7">
        <AdminCourseCreationStepper steps={data.steps} activeStepId={activeStepId} />

        <div className="mt-8 border-t border-[#f0f0f0] pt-8">
          {isGeneralInfoStep ? (
            <AdminCourseCreationGeneralInfoSection
              form={isEditing ? form : savedForm}
              formOptions={data.formOptions}
              isEditing={isEditing}
              isCreateMode={isCreateMode}
              courseType={data.courseType}
              batchNo={data.batchNo}
              onChange={handleChange}
            />
          ) : null}

          {isClassRoutineStep && data.classRoutine ? (
            <AdminCourseCreationClassRoutineSection
              classRoutine={classRoutine}
              onChange={setClassRoutine}
            />
          ) : null}

          {isCurriculumStep ? (
            <AdminCourseCreationCurriculumSection
              initialData={data.curriculum}
              teachers={data.formOptions.teachers}
              maxTeachersPerRole={data.formOptions.maxTeachersPerRole}
            />
          ) : null}

          {isMetaInfoStep ? (
            <AdminCourseCreationMetaInfoSection initialData={data.metaInfo} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
