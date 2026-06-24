"use client";

import { ChevronDown, Plus } from "lucide-react";
import {
  ADMIN_WORKSHOP_SCHEDULE_DAY_OPTIONS,
  ADMIN_WORKSHOP_SCHEDULE_TIME_OPTIONS,
  createAdminWorkshopScheduleSlot,
} from "@/components/admin/workshop-creation/admin-workshop-creation-schedule.utils";
import { accountSettingsSelectClassName } from "@/components/student/account-settings/account-settings-field";
import type { AdminWorkshopSchedule, AdminWorkshopScheduleSlot } from "@/types/admin-workshop-creation.types";

interface AdminWorkshopCreationScheduleSectionProps {
  schedule: AdminWorkshopSchedule;
  onChange: (schedule: AdminWorkshopSchedule) => void;
}

function AdminWorkshopCreationScheduleSlotRow({
  slot,
  onChange,
}: {
  slot: AdminWorkshopScheduleSlot;
  onChange: (slot: AdminWorkshopScheduleSlot) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:max-w-[70%]">
      <div className="space-y-2">
        <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">Day</label>
        <div className="relative">
          <select
            value={slot.day}
            onChange={(event) => onChange({ ...slot, day: event.target.value })}
            className={accountSettingsSelectClassName}
          >
            {ADMIN_WORKSHOP_SCHEDULE_DAY_OPTIONS.map((option) => (
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
        <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">Time</label>
        <div className="relative">
          <select
            value={slot.time}
            onChange={(event) => onChange({ ...slot, time: event.target.value })}
            className={accountSettingsSelectClassName}
          >
            {ADMIN_WORKSHOP_SCHEDULE_TIME_OPTIONS.map((option) => (
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

export function AdminWorkshopCreationScheduleSection({
  schedule,
  onChange,
}: AdminWorkshopCreationScheduleSectionProps) {
  function handleUpdateSlot(index: number, slot: AdminWorkshopScheduleSlot) {
    onChange(schedule.map((entry, entryIndex) => (entryIndex === index ? slot : entry)));
  }

  function handleAddSlot() {
    onChange([...schedule, createAdminWorkshopScheduleSlot()]);
  }

  return (
    <div className="space-y-4">
      {schedule.map((slot, index) => (
        <AdminWorkshopCreationScheduleSlotRow
          key={slot.id}
          slot={slot}
          onChange={(updated) => handleUpdateSlot(index, updated)}
        />
      ))}

      <button
        type="button"
        onClick={handleAddSlot}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[#d1d5db] bg-white px-4 py-3.5 text-[13px] font-semibold text-[#757575] transition-colors hover:border-[#c4c4c4] hover:bg-[#fafafa] hover:text-[#1a1a1a] sm:text-[14px] lg:max-w-[70%]"
      >
        <Plus className="h-4 w-4" aria-hidden />
        Add Another Day and Time
      </button>
    </div>
  );
}
