"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, ListFilter } from "lucide-react";
import { AdminCourseCreationActiveStatus } from "@/components/admin/course-creation/admin-course-creation-active-status";
import type { AdminRoleOption } from "@/types/admin-role-management.types";
import { cn } from "@/utils";

interface AdminRolePermissionsControlsProps {
  selectedRoleId: string;
  roleOptions: AdminRoleOption[];
  isActive: boolean;
  onRoleChange: (roleId: string) => void;
  onActiveChange: (isActive: boolean) => void;
}

const toolbarBoxClassName =
  "flex h-10 items-stretch rounded-xl border border-[#ebe8e6] bg-white shadow-[0_1px_2px_rgba(35,25,22,0.04)]";

const menuItemClassName =
  "flex w-full items-center px-4 py-2.5 text-left text-[13px] font-medium transition-colors";

function useDropdown() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  return { open, setOpen, containerRef };
}

export function AdminRolePermissionsControls({
  selectedRoleId,
  roleOptions,
  isActive,
  onRoleChange,
  onActiveChange,
}: AdminRolePermissionsControlsProps) {
  const roleMenuId = useId();
  const roleDropdown = useDropdown();

  const selectedRoleLabel =
    roleOptions.find((option) => option.value === selectedRoleId)?.label ?? "Select role";

  return (
    <div className="flex flex-col gap-4 border-b border-[#f0f0f0] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">
      <div ref={roleDropdown.containerRef} className="relative w-full sm:w-auto sm:min-w-[300px]">
        <div className={toolbarBoxClassName}>
          <div className="flex shrink-0 items-center gap-2 border-r border-[#ebe8e6] px-3.5">
            <ListFilter className="h-4 w-4 text-[#6b7280]" strokeWidth={2} aria-hidden />
            <span className="whitespace-nowrap text-[13px] font-medium text-[#6b7280]">Role</span>
          </div>

          <button
            type="button"
            id={roleMenuId}
            aria-haspopup="listbox"
            aria-expanded={roleDropdown.open}
            onClick={() => roleDropdown.setOpen((current) => !current)}
            className="flex min-w-0 flex-1 items-center justify-between gap-3 px-3.5 text-left"
          >
            <span className="truncate text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">
              {selectedRoleLabel}
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 shrink-0 text-[#6b7280] transition-transform",
                roleDropdown.open && "rotate-180"
              )}
              aria-hidden
            />
          </button>
        </div>

        {roleDropdown.open && (
          <ul
            className="absolute left-0 top-[calc(100%+8px)] z-30 max-h-[280px] w-full min-w-[300px] overflow-y-auto rounded-xl border border-[#ebe8e6] bg-white py-2 shadow-[0_10px_30px_rgba(35,25,22,0.08)]"
            role="listbox"
            aria-labelledby={roleMenuId}
          >
            {roleOptions.map((option) => {
              const isSelected = option.value === selectedRoleId;

              return (
                <li key={option.value} role="option" aria-selected={isSelected}>
                  <button
                    type="button"
                    onClick={() => {
                      onRoleChange(option.value);
                      roleDropdown.setOpen(false);
                    }}
                    className={cn(
                      menuItemClassName,
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
        )}
      </div>

      <AdminCourseCreationActiveStatus
        isActive={isActive}
        isEditing
        onChange={onActiveChange}
      />
    </div>
  );
}
