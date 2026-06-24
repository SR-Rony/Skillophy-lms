"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { adminCourseAddLessonInputClassName } from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-add-lesson.utils";
import { adminSupportTicketPriorityFormOptions } from "@/components/admin/support-management/admin-support-ticket-form.utils";
import type {
  AdminSupportTicketForm,
  AdminSupportTicketPriority,
} from "@/types/admin-support-management.types";
import { cn } from "@/utils";

interface AdminSupportTicketFormContentProps {
  form: AdminSupportTicketForm;
  onChange: (updates: Partial<AdminSupportTicketForm>) => void;
}

const textareaClassName =
  "min-h-[180px] w-full resize-y rounded-xl border border-[#ebe8e6] bg-white px-4 py-3 text-[13px] font-medium text-[#1a1a1a] shadow-[0_1px_2px_rgba(35,25,22,0.04)] outline-none placeholder:text-[#9ca3af] focus:border-primary/30 focus:ring-2 focus:ring-primary/10 sm:text-[14px]";

export function AdminSupportTicketFormContent({ form, onChange }: AdminSupportTicketFormContentProps) {
  const subjectInputId = useId();
  const priorityMenuId = useId();
  const messageInputId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const selectedPriorityLabel =
    adminSupportTicketPriorityFormOptions.find((option) => option.value === form.priority)?.label ??
    "Low";

  useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <label
          htmlFor={subjectInputId}
          className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]"
        >
          Subject
        </label>
        <input
          id={subjectInputId}
          type="text"
          value={form.subject}
          onChange={(event) => onChange({ subject: event.target.value })}
          placeholder="Network Issue"
          className={adminCourseAddLessonInputClassName}
        />
      </div>

      <div className="space-y-2">
        <span
          id={priorityMenuId}
          className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]"
        >
          Priority
        </span>
        <div ref={containerRef} className="relative">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-labelledby={priorityMenuId}
            onClick={() => setOpen((current) => !current)}
            className={cn(
              adminCourseAddLessonInputClassName,
              "flex w-full items-center justify-between text-left"
            )}
          >
            <span>{selectedPriorityLabel}</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 shrink-0 text-[#6b7280] transition-transform",
                open && "rotate-180"
              )}
              aria-hidden
            />
          </button>

          {open ? (
            <ul
              className="absolute left-0 top-[calc(100%+8px)] z-30 w-full overflow-hidden rounded-xl border border-[#ebe8e6] bg-white py-2 shadow-[0_10px_30px_rgba(35,25,22,0.08)]"
              role="listbox"
            >
              {adminSupportTicketPriorityFormOptions.map((option) => {
                const isSelected = option.value === form.priority;

                return (
                  <li key={option.value} role="option" aria-selected={isSelected}>
                    <button
                      type="button"
                      onClick={() => {
                        onChange({ priority: option.value as AdminSupportTicketPriority });
                        setOpen(false);
                      }}
                      className={cn(
                        "flex w-full px-4 py-2.5 text-left text-[13px] font-medium transition-colors sm:text-[14px]",
                        isSelected
                          ? "bg-[#fff5f5] font-semibold text-primary"
                          : "text-[#1a1a1a] hover:bg-[#f9f9f9]"
                      )}
                    >
                      {option.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor={messageInputId}
          className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]"
        >
          Message
        </label>
        <textarea
          id={messageInputId}
          value={form.message}
          onChange={(event) => onChange({ message: event.target.value })}
          placeholder="Describe your issue..."
          className={textareaClassName}
        />
      </div>
    </div>
  );
}
