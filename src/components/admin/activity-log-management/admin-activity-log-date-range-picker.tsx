"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import {
  WEEKDAY_LABELS,
  formatAdminActivityLogDateLabel,
  formatAdminActivityLogDateRangeLabel,
  getAdminActivityLogCalendarDays,
  getAdminActivityLogMonthLabel,
  isAdminActivityLogDayBetweenRange,
  isSameAdminActivityLogDay,
  normalizeAdminActivityLogDateRange,
  parseAdminActivityLogDateValue,
  toAdminActivityLogDateValue,
  type AdminActivityLogDateRangeValue,
} from "@/components/admin/activity-log-management/admin-activity-log-date-range.utils";
import { cn } from "@/utils";

interface AdminActivityLogDateRangePickerProps {
  value: AdminActivityLogDateRangeValue;
  onChange: (value: AdminActivityLogDateRangeValue) => void;
  className?: string;
}

const controlClassName =
  "flex h-10 min-w-0 items-center gap-2 rounded-xl border border-[#ebe8e6] bg-white px-3.5 shadow-[0_1px_2px_rgba(35,25,22,0.04)]";

export function AdminActivityLogDateRangePicker({
  value,
  onChange,
  className,
}: AdminActivityLogDateRangePickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const appliedRange = normalizeAdminActivityLogDateRange(value.start, value.end);
  const appliedStart = parseAdminActivityLogDateValue(appliedRange.start) ?? new Date();
  const appliedEnd = parseAdminActivityLogDateValue(appliedRange.end) ?? new Date();

  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState(appliedStart);
  const [draftStart, setDraftStart] = useState(appliedStart);
  const [draftEnd, setDraftEnd] = useState(appliedEnd);
  const [selectionAnchor, setSelectionAnchor] = useState<Date | null>(null);

  useEffect(() => {
    const normalized = normalizeAdminActivityLogDateRange(value.start, value.end);
    const start = parseAdminActivityLogDateValue(normalized.start) ?? new Date();
    const end = parseAdminActivityLogDateValue(normalized.end) ?? new Date();

    setDraftStart(start);
    setDraftEnd(end);
    setViewDate(start);
    setSelectionAnchor(null);
  }, [value.end, value.start]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setDraftStart(appliedStart);
        setDraftEnd(appliedEnd);
        setViewDate(appliedStart);
        setSelectionAnchor(null);
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDraftStart(appliedStart);
        setDraftEnd(appliedEnd);
        setViewDate(appliedStart);
        setSelectionAnchor(null);
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [appliedEnd, appliedStart, isOpen]);

  function handleOpen() {
    setDraftStart(appliedStart);
    setDraftEnd(appliedEnd);
    setViewDate(appliedStart);
    setSelectionAnchor(null);
    setIsOpen(true);
  }

  function handleCancel() {
    setDraftStart(appliedStart);
    setDraftEnd(appliedEnd);
    setViewDate(appliedStart);
    setSelectionAnchor(null);
    setIsOpen(false);
  }

  function handleApply() {
    onChange(
      normalizeAdminActivityLogDateRange(
        toAdminActivityLogDateValue(draftStart),
        toAdminActivityLogDateValue(draftEnd)
      )
    );
    setSelectionAnchor(null);
    setIsOpen(false);
  }

  function handleDaySelect(day: Date) {
    if (!selectionAnchor) {
      setSelectionAnchor(day);
      setDraftStart(day);
      setDraftEnd(day);
      return;
    }

    const normalized = normalizeAdminActivityLogDateRange(
      toAdminActivityLogDateValue(selectionAnchor),
      toAdminActivityLogDateValue(day)
    );
    const start = parseAdminActivityLogDateValue(normalized.start) ?? day;
    const end = parseAdminActivityLogDateValue(normalized.end) ?? day;

    setDraftStart(start);
    setDraftEnd(end);
    setSelectionAnchor(null);
  }

  const calendarDays = getAdminActivityLogCalendarDays(viewDate);
  const rangeLabel = formatAdminActivityLogDateRangeLabel(appliedRange);

  return (
    <div ref={containerRef} className={cn("relative min-w-0", className)}>
      <button
        type="button"
        onClick={handleOpen}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className={cn(controlClassName, "w-full transition-colors hover:bg-[#fafafa]")}
      >
        <CalendarDays className="h-4 w-4 shrink-0 text-[#6b7280]" strokeWidth={2} aria-hidden />
        <span className="truncate text-[13px] font-medium text-[#4a4a4a]">{rangeLabel}</span>
      </button>

      {isOpen ? (
        <div
          role="dialog"
          aria-label="Select date range"
          className="absolute left-0 top-[calc(100%+8px)] z-40 w-[min(100vw-2rem,340px)] overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white p-4 shadow-[0_18px_48px_rgba(35,25,22,0.14)] sm:left-auto sm:right-0"
        >
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
              {getAdminActivityLogMonthLabel(viewDate)}
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

          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-[#ebe8e6] bg-[#fafafa] px-3 py-2.5">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#9ca3af]">
                Start
              </p>
              <p className="mt-1 text-[13px] font-medium text-[#1a1a1a]">
                {formatAdminActivityLogDateLabel(toAdminActivityLogDateValue(draftStart))}
              </p>
            </div>
            <div className="rounded-xl border border-[#ebe8e6] bg-[#fafafa] px-3 py-2.5">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#9ca3af]">
                End
              </p>
              <p className="mt-1 text-[13px] font-medium text-[#1a1a1a]">
                {formatAdminActivityLogDateLabel(toAdminActivityLogDateValue(draftEnd))}
              </p>
            </div>
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

              const isStart = isSameAdminActivityLogDay(day, draftStart);
              const isEnd = isSameAdminActivityLogDay(day, draftEnd);
              const isInRange = isAdminActivityLogDayBetweenRange(day, draftStart, draftEnd);
              const isEndpoint = isStart || isEnd;

              return (
                <button
                  key={day.toISOString()}
                  type="button"
                  onClick={() => handleDaySelect(day)}
                  className={cn(
                    "relative mx-auto flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-medium transition-colors",
                    isEndpoint
                      ? "bg-primary text-white"
                      : isInRange
                        ? "bg-[#fff5f5] text-primary"
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
