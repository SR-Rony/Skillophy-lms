"use client";

import { ChevronDown, Plus } from "lucide-react";
import {
  ADMIN_COURSE_CLASS_DAY_OPTIONS,
  ADMIN_COURSE_CLASS_TIME_OPTIONS,
  createAdminCourseClassRoutineSlot,
} from "@/components/admin/course-creation/class-routine/admin-course-creation-class-routine.utils";
import {
  accountSettingsSelectClassName,
} from "@/components/student/account-settings/account-settings-field";
import type { AdminCourseClassRoutine, AdminCourseClassRoutineSlot } from "@/types/admin-course-creation.types";

interface AdminCourseCreationClassRoutineSectionProps {
  classRoutine: AdminCourseClassRoutine;
  onChange: (classRoutine: AdminCourseClassRoutine) => void;
}

function AdminCourseCreationClassRoutineSlotRow({
  slot,
  onChange,
}: {
  slot: AdminCourseClassRoutineSlot;
  onChange: (slot: AdminCourseClassRoutineSlot) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:max-w-[70%]">
      <div className="space-y-2">
        <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">Class Day</label>
        <div className="relative">
          <select
            value={slot.day}
            onChange={(event) => onChange({ ...slot, day: event.target.value })}
            className={accountSettingsSelectClassName}
          >
            {ADMIN_COURSE_CLASS_DAY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#757575]"
            aria-hidden
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">Class Time</label>
        <div className="relative">
          <select
            value={slot.time}
            onChange={(event) => onChange({ ...slot, time: event.target.value })}
            className={accountSettingsSelectClassName}
          >
            {ADMIN_COURSE_CLASS_TIME_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#757575]"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}

function AdminCourseCreationClassRoutineGroupSection({
  title,
  slots,
  onChange,
}: {
  title: string;
  slots: AdminCourseClassRoutineSlot[];
  onChange: (slots: AdminCourseClassRoutineSlot[]) => void;
}) {
  function handleUpdateSlot(index: number, slot: AdminCourseClassRoutineSlot) {
    onChange(slots.map((entry, entryIndex) => (entryIndex === index ? slot : entry)));
  }

  function handleAddSlot() {
    onChange([...slots, createAdminCourseClassRoutineSlot()]);
  }

  return (
    <section className="space-y-4">
      <h2 className="text-[16px] font-bold text-[#1a1a1a] sm:text-[18px]">{title}</h2>

      <div className="space-y-4">
        {slots.map((slot, index) => (
          <AdminCourseCreationClassRoutineSlotRow
            key={slot.id}
            slot={slot}
            onChange={(updated) => handleUpdateSlot(index, updated)}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={handleAddSlot}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[#d1d5db] bg-white px-4 py-3.5 text-[13px] font-semibold text-[#757575] transition-colors hover:border-[#c4c4c4] hover:bg-[#fafafa] hover:text-[#1a1a1a] sm:text-[14px] lg:max-w-[70%]"
      >
        <Plus className="h-4 w-4" aria-hidden />
        Add Another Day and Time
      </button>
    </section>
  );
}

export function AdminCourseCreationClassRoutineSection({
  classRoutine,
  onChange,
}: AdminCourseCreationClassRoutineSectionProps) {
  return (
    <div className="space-y-8">
      <AdminCourseCreationClassRoutineGroupSection
        title="Main Class Routine"
        slots={classRoutine.main}
        onChange={(main) => onChange({ ...classRoutine, main })}
      />

      <AdminCourseCreationClassRoutineGroupSection
        title="Support Class Routine"
        slots={classRoutine.support}
        onChange={(support) => onChange({ ...classRoutine, support })}
      />
    </div>
  );
}
