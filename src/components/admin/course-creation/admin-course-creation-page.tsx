"use client";

import { useState } from "react";
import { AdminCourseCreationGeneralInfoSection } from "@/components/admin/course-creation/admin-course-creation-general-info-section";
import { AdminCourseCreationPageHeader } from "@/components/admin/course-creation/admin-course-creation-page-header";
import { AdminCourseCreationStepper } from "@/components/admin/course-creation/admin-course-creation-stepper";
import type {
  AdminCourseCreationData,
  AdminCourseCreationGeneralInfo,
} from "@/types/admin-course-creation.types";

interface AdminCourseCreationPageProps {
  data: AdminCourseCreationData;
}

export function AdminCourseCreationPage({ data }: AdminCourseCreationPageProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState<AdminCourseCreationGeneralInfo>(data.generalInfo);
  const [savedForm, setSavedForm] = useState<AdminCourseCreationGeneralInfo>(data.generalInfo);

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
    setIsEditing(false);
  }

  return (
    <div className="space-y-6">
      <AdminCourseCreationPageHeader
        isEditing={isEditing}
        onEdit={handleEdit}
        onSave={handleSave}
        onNext={() => undefined}
      />

      <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.04)] sm:p-6 md:p-7">
        <AdminCourseCreationStepper steps={data.steps} activeStepId="general-info" />

        <div className="mt-8 border-t border-[#f0f0f0] pt-8">
          <AdminCourseCreationGeneralInfoSection
            form={isEditing ? form : savedForm}
            formOptions={data.formOptions}
            isEditing={isEditing}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
