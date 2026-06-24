"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { adminCourseAddLessonInputClassName } from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-add-lesson.utils";
import type { AdminPromoCourseOption } from "@/types/admin-promo-management.types";
import { cn } from "@/utils";

interface AdminPromoCourseSelectProps {
  options: AdminPromoCourseOption[];
  value: string;
  onChange: (value: string) => void;
}

export function AdminPromoCourseSelect({ options, value, onChange }: AdminPromoCourseSelectProps) {
  const menuId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const selectedLabel = options.find((option) => option.id === value)?.label ?? "All Courses";

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div className="space-y-2">
      <label
        id={menuId}
        className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]"
      >
        Select Course
      </label>

      <div ref={containerRef} className="relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={menuId}
          onClick={() => setIsOpen((current) => !current)}
          className={cn(
            adminCourseAddLessonInputClassName,
            "flex w-full items-center justify-between gap-3 text-left transition-colors",
            isOpen && "border-primary/40 ring-2 ring-primary/10"
          )}
        >
          <span className="truncate text-[14px] font-medium text-[#1a1a1a] sm:text-[15px]">
            {selectedLabel}
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 text-[#9ca3af] transition-transform",
              isOpen && "rotate-180"
            )}
            strokeWidth={2}
            aria-hidden
          />
        </button>

        {isOpen ? (
          <ul
            role="listbox"
            aria-labelledby={menuId}
            className="absolute left-0 right-0 top-[calc(100%+8px)] z-[100] max-h-[280px] overflow-y-auto overscroll-contain rounded-2xl border border-[#e3e3e3] bg-white py-2 shadow-[0_18px_48px_rgba(35,25,22,0.14)] [scrollbar-gutter:stable]"
          >
            {options.map((option) => {
              const isSelected = option.id === value;

              return (
                <li key={option.id} role="presentation">
                  <button
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => {
                      onChange(option.id);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center gap-3 px-4 py-3 text-left transition-colors",
                      isSelected ? "bg-[#fff8f8] text-primary" : "text-[#1a1a1a] hover:bg-[#fafafa]"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
                        isSelected ? "border-primary bg-primary" : "border-[#d1d5db] bg-white"
                      )}
                    >
                      {isSelected ? <Check className="h-3 w-3 text-white" strokeWidth={3} /> : null}
                    </span>
                    <span
                      className={cn(
                        "min-w-0 flex-1 truncate text-[14px]",
                        isSelected ? "font-semibold" : "font-medium"
                      )}
                    >
                      {option.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
