"use client";

import { useId } from "react";
import { AdminCourseCreationActiveStatus } from "@/components/admin/course-creation/admin-course-creation-active-status";
import { adminCourseAddLessonInputClassName } from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-add-lesson.utils";
import { AdminPromoCourseSelect } from "@/components/admin/promo-management/admin-promo-course-select";
import { AdminPromoUserSelect } from "@/components/admin/promo-management/admin-promo-user-select";
import type {
  AdminPromoCourseOption,
  AdminPromoForm,
  AdminPromoUserOption,
} from "@/types/admin-promo-management.types";

interface AdminPromoFormContentProps {
  form: AdminPromoForm;
  courseOptions: AdminPromoCourseOption[];
  userOptions: AdminPromoUserOption[];
  onChange: (updates: Partial<AdminPromoForm>) => void;
}

export function AdminPromoFormContent({
  form,
  courseOptions,
  userOptions,
  onChange,
}: AdminPromoFormContentProps) {
  const nameInputId = useId();
  const discountInputId = useId();

  return (
    <div className="space-y-5 sm:space-y-6">
      <AdminCourseCreationActiveStatus
        isActive={form.isActive}
        isEditing
        onChange={(isActive) => onChange({ isActive })}
      />

      <div className="space-y-2">
        <label
          htmlFor={nameInputId}
          className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]"
        >
          Promo Name
        </label>
        <input
          id={nameInputId}
          type="text"
          value={form.name}
          onChange={(event) => onChange({ name: event.target.value })}
          placeholder="EIDKHUSHI"
          className={adminCourseAddLessonInputClassName}
        />
      </div>

      <AdminPromoCourseSelect
        options={courseOptions}
        value={form.courseScopeId}
        onChange={(courseScopeId) => onChange({ courseScopeId })}
      />

      <AdminPromoUserSelect
        users={userOptions}
        selectedIds={form.userIds}
        isAllUsers={form.isAllUsers}
        onChange={(userIds, isAllUsers) => onChange({ userIds, isAllUsers })}
      />

      <div className="space-y-3">
        <p className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">Discount Type</p>
        <div className="flex flex-wrap items-center gap-5">
          <label className="inline-flex cursor-pointer items-center gap-2.5">
            <input
              type="radio"
              name="promo-discount-type"
              checked={form.discountType === "percentage"}
              onChange={() => onChange({ discountType: "percentage" })}
              className="h-4 w-4 accent-[#1a1a1a]"
            />
            <span className="text-[14px] font-medium text-[#1a1a1a]">Percentage (%)</span>
          </label>
          <label className="inline-flex cursor-pointer items-center gap-2.5">
            <input
              type="radio"
              name="promo-discount-type"
              checked={form.discountType === "flat"}
              onChange={() => onChange({ discountType: "flat" })}
              className="h-4 w-4 accent-[#1a1a1a]"
            />
            <span className="text-[14px] font-medium text-[#1a1a1a]">Flat(৳)</span>
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor={discountInputId} className="sr-only">
          Discount value
        </label>
        <input
          id={discountInputId}
          type="text"
          inputMode="numeric"
          value={form.discountValue}
          onChange={(event) => onChange({ discountValue: event.target.value })}
          placeholder="20"
          className={adminCourseAddLessonInputClassName}
        />
      </div>
    </div>
  );
}
