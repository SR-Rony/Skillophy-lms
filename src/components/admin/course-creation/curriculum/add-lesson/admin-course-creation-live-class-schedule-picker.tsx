"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import {
  WEEKDAY_LABELS,
  formatAdminCourseLiveClassScheduleLabel,
  getAdminCourseLiveClassScheduleCalendarDays,
  getAdminCourseLiveClassScheduleMonthLabel,
  isSameAdminCourseLiveClassScheduleDay,
  parseAdminCourseLiveClassScheduleDate,
  toAdminCourseLiveClassScheduleValue,
} from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-live-class-schedule.utils";
import { adminCourseAddLessonInputClassName } from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-add-lesson.utils";
import { cn } from "@/utils";

interface AdminCourseCreationLiveClassSchedulePickerProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export function AdminCourseCreationLiveClassSchedulePicker({
  value,
  onChange,
  label = "LIVE Class Schedule",
}: AdminCourseCreationLiveClassSchedulePickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedDate = parseAdminCourseLiveClassScheduleDate(value) ?? new Date();
  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState(selectedDate);
  const [draftDate, setDraftDate] = useState(selectedDate);

  useEffect(() => {
    const parsed = parseAdminCourseLiveClassScheduleDate(value);
    if (!parsed) {
      return;
    }

    setViewDate(parsed);
    setDraftDate(parsed);
  }, [value]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
        setDraftDate(selectedDate);
        setViewDate(selectedDate);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [isOpen, selectedDate]);

  function handleOpen() {
    setDraftDate(selectedDate);
    setViewDate(selectedDate);
    setIsOpen(true);
  }

  function handleApply() {
    onChange(toAdminCourseLiveClassScheduleValue(draftDate));
    setIsOpen(false);
  }

  function handleCancel() {
    setDraftDate(selectedDate);
    setViewDate(selectedDate);
    setIsOpen(false);
  }

  const calendarDays = getAdminCourseLiveClassScheduleCalendarDays(viewDate);

  return (
    <div ref={containerRef} className="relative">
      <label className="mb-2 block text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">
        {label}
      </label>

      <button
        type="button"
        onClick={handleOpen}
        className={cn(
          adminCourseAddLessonInputClassName,
          "flex w-full items-center justify-between text-left"
        )}
      >
        <span>{formatAdminCourseLiveClassScheduleLabel(value) || "Select date"}</span>
        <CalendarDays className="h-4 w-4 shrink-0 text-[#9ca3af]" aria-hidden />
      </button>

      {isOpen ? (
        <div className="absolute left-0 top-[calc(100%+8px)] z-40 w-full min-w-[300px] overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white p-4 shadow-[0_18px_48px_rgba(35,25,22,0.14)] sm:min-w-[320px]">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() =>
                setViewDate((current) => new Date(current.getFullYear(), current.getMonth() - 1, 1))
              }
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#757575] transition-colors hover:bg-[#fafafa]"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
            </button>

            <p className="text-[14px] font-semibold text-[#1a1a1a]">
              {getAdminCourseLiveClassScheduleMonthLabel(viewDate)}
            </p>

            <button
              type="button"
              onClick={() =>
                setViewDate((current) => new Date(current.getFullYear(), current.getMonth() + 1, 1))
              }
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#757575] transition-colors hover:bg-[#fafafa]"
              aria-label="Next month"
            >
              <ChevronRight className="h-4 w-4" aria-hidden />
            </button>
          </div>

          <div className="mt-4 rounded-xl border border-[#ebe8e6] bg-[#fafafa] px-3 py-2.5 text-[13px] font-medium text-[#1a1a1a]">
            {formatAdminCourseLiveClassScheduleLabel(toAdminCourseLiveClassScheduleValue(draftDate))}
          </div>

          <div className="mt-4 grid grid-cols-7 gap-1 text-center">
            {WEEKDAY_LABELS.map((label) => (
              <span key={label} className="py-1 text-[11px] font-semibold uppercase text-[#9ca3af]">
                {label}
              </span>
            ))}

            {calendarDays.map((day, index) => {
              if (!day) {
                return <span key={`empty-${index}`} aria-hidden />;
              }

              const isSelected = isSameAdminCourseLiveClassScheduleDay(day, draftDate);

              return (
                <button
                  key={day.toISOString()}
                  type="button"
                  onClick={() => setDraftDate(day)}
                  className={cn(
                    "mx-auto flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-medium transition-colors",
                    isSelected
                      ? "bg-primary text-white"
                      : "text-[#1a1a1a] hover:bg-[#fafafa]"
                  )}
                >
                  {day.getDate()}
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={handleCancel}
              className="inline-flex min-w-[88px] items-center justify-center rounded-xl border border-[#1a1a1a] bg-white px-4 py-2 text-[13px] font-semibold text-[#1a1a1a] transition-colors hover:bg-[#fafafa]"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleApply}
              className="inline-flex min-w-[88px] items-center justify-center rounded-xl bg-primary px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#e63e3e]"
            >
              Apply
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
