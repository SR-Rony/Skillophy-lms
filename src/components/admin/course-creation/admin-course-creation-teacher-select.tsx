"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Check, Search, X } from "lucide-react";
import { AccountSettingsField } from "@/components/student/account-settings/account-settings-field";
import type { AdminCourseCreationTeacher } from "@/types/admin-course-creation.types";
import { cn } from "@/utils";

interface AdminCourseCreationTeacherSelectProps {
  label: string;
  teachers: AdminCourseCreationTeacher[];
  selectedIds: string[];
  maxTeachers: number;
  isEditing: boolean;
  onChange: (selectedIds: string[]) => void;
}

interface DropdownPosition {
  top: number;
  left: number;
  width: number;
}

function TeacherCheckbox({ checked }: { checked: boolean }) {
  return (
    <span
      className={cn(
        "flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] border transition-colors",
        checked ? "border-[#1a1a1a] bg-[#1a1a1a]" : "border-[#d1d5db] bg-white"
      )}
      aria-hidden
    >
      {checked ? <Check className="h-3 w-3 text-white" strokeWidth={3} /> : null}
    </span>
  );
}

export function AdminCourseCreationTeacherSelect({
  label,
  teachers,
  selectedIds,
  maxTeachers,
  isEditing,
  onChange,
}: AdminCourseCreationTeacherSelectProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<DropdownPosition | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const inlineInputRef = useRef<HTMLInputElement>(null);
  const dropdownSearchRef = useRef<HTMLInputElement>(null);
  const dropdownPortalId = `teacher-dropdown-${label.replace(/\s+/g, "-").toLowerCase()}`;

  const selectedTeachers = useMemo(
    () =>
      selectedIds
        .map((id) => teachers.find((teacher) => teacher.id === id))
        .filter((teacher): teacher is AdminCourseCreationTeacher => Boolean(teacher)),
    [selectedIds, teachers]
  );

  const filteredTeachers = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return teachers.filter((teacher) => {
      if (!query) {
        return true;
      }

      return (
        teacher.name.toLowerCase().includes(query) ||
        teacher.email.toLowerCase().includes(query)
      );
    });
  }, [searchQuery, teachers]);

  function updateDropdownPosition() {
    if (!fieldRef.current) {
      return;
    }

    const rect = fieldRef.current.getBoundingClientRect();
    setDropdownPosition({
      top: rect.bottom + 10,
      left: rect.left,
      width: rect.width,
    });
  }

  function openDropdown(focusTarget: "inline" | "dropdown" = "inline") {
    if (!isEditing) {
      return;
    }

    setIsDropdownOpen(true);
    updateDropdownPosition();

    requestAnimationFrame(() => {
      if (focusTarget === "dropdown") {
        dropdownSearchRef.current?.focus();
      } else {
        inlineInputRef.current?.focus();
      }
    });
  }

  function closeDropdown() {
    setIsDropdownOpen(false);
    setSearchQuery("");
  }

  useEffect(() => {
    if (!isEditing) {
      closeDropdown();
    }
  }, [isEditing]);

  useLayoutEffect(() => {
    if (!isDropdownOpen) {
      return;
    }

    updateDropdownPosition();

    function handleReposition() {
      updateDropdownPosition();
    }

    window.addEventListener("resize", handleReposition);
    window.addEventListener("scroll", handleReposition, true);

    return () => {
      window.removeEventListener("resize", handleReposition);
      window.removeEventListener("scroll", handleReposition, true);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    if (!isDropdownOpen) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      const target = event.target as Node;
      if (containerRef.current?.contains(target)) {
        return;
      }

      const portalRoot = document.getElementById(dropdownPortalId);
      if (portalRoot?.contains(target)) {
        return;
      }

      closeDropdown();
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [isDropdownOpen, dropdownPortalId]);

  function handleToggleTeacher(teacherId: string) {
    if (selectedIds.includes(teacherId)) {
      onChange(selectedIds.filter((id) => id !== teacherId));
      return;
    }

    if (selectedIds.length >= maxTeachers) {
      return;
    }

    onChange([...selectedIds, teacherId]);
  }

  function handleRemoveTeacher(teacherId: string) {
    onChange(selectedIds.filter((id) => id !== teacherId));
  }

  const dropdownPanel =
    isEditing && isDropdownOpen && dropdownPosition ? (
      <div
        id={dropdownPortalId}
        style={{
          position: "fixed",
          top: dropdownPosition.top,
          left: dropdownPosition.left,
          width: dropdownPosition.width,
          zIndex: 1200,
        }}
        className="overflow-hidden rounded-2xl border border-[#e3e3e3] bg-white shadow-[0_18px_48px_rgba(35,25,22,0.14)]"
      >
        <div className="border-b border-[#f0f0f0] bg-[#fafafa] px-4 py-3.5">
          <div className="relative">
            <input
              ref={dropdownSearchRef}
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search"
              className="h-11 w-full rounded-xl border border-[#dcdcdc] bg-white py-2 pl-4 pr-12 text-[14px] font-medium text-[#1a1a1a] shadow-[inset_0_1px_2px_rgba(35,25,22,0.04)] outline-none placeholder:font-normal placeholder:text-[#9ca3af] focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
            />
            <Search
              className="pointer-events-none absolute right-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#6b7280]"
              strokeWidth={2}
              aria-hidden
            />
          </div>
        </div>

        <ul className="max-h-[300px] overflow-y-auto bg-white py-1">
          {filteredTeachers.length > 0 ? (
            filteredTeachers.map((teacher, index) => {
              const isSelected = selectedIds.includes(teacher.id);

              return (
                <li
                  key={teacher.id}
                  className={cn(index > 0 && "border-t border-[#f3f4f6]")}
                >
                  <button
                    type="button"
                    onClick={() => handleToggleTeacher(teacher.id)}
                    className={cn(
                      "flex w-full items-center gap-3.5 px-4 py-3.5 text-left transition-colors",
                      isSelected ? "bg-[#fff8f8]" : "hover:bg-[#fafafa]"
                    )}
                  >
                    <TeacherCheckbox checked={isSelected} />
                    <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#f3f4f6] ring-1 ring-[#f0f0f0]">
                      <Image
                        src={teacher.avatar}
                        alt=""
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="40px"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[14px] font-bold leading-tight text-[#1a1a1a]">
                        {teacher.name}
                      </span>
                      <span className="mt-1 block truncate text-[13px] text-[#9ca3af]">
                        {teacher.email}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })
          ) : (
            <li className="px-4 py-8 text-center text-[13px] font-medium text-[#9ca3af]">
              No teachers found
            </li>
          )}
        </ul>
      </div>
    ) : null;

  return (
    <AccountSettingsField label={label}>
      <div ref={containerRef} className="relative">
        <div
          ref={fieldRef}
          className={cn(
            "min-h-[120px] rounded-xl p-3.5 transition-all",
            isEditing
              ? "cursor-text border border-[#ebe8e6] bg-white shadow-[0_1px_2px_rgba(35,25,22,0.04)]"
              : "bg-[#f5f5f5]",
            isEditing && isDropdownOpen && "border-primary/30 ring-2 ring-primary/10"
          )}
          onClick={() => openDropdown("inline")}
        >
          <div className="flex flex-wrap items-center gap-2">
            {selectedTeachers.map((teacher) => (
              <span
                key={teacher.id}
                className="inline-flex items-center gap-2 rounded-lg border border-[#ebe8e6] bg-[#fafafa] px-2.5 py-1.5"
              >
                <span className="relative h-6 w-6 overflow-hidden rounded-full bg-[#f3f4f6]">
                  <Image
                    src={teacher.avatar}
                    alt=""
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="24px"
                  />
                </span>
                <span className="text-[12px] font-semibold text-[#1a1a1a] sm:text-[13px]">
                  {teacher.name}
                </span>
                {isEditing ? (
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleRemoveTeacher(teacher.id);
                    }}
                    className="rounded-md p-0.5 text-[#9ca3af] transition-colors hover:bg-[#f0f0f0] hover:text-[#1a1a1a]"
                    aria-label={`Remove ${teacher.name}`}
                  >
                    <X className="h-3.5 w-3.5" aria-hidden />
                  </button>
                ) : null}
              </span>
            ))}

            {isEditing ? (
              <input
                ref={inlineInputRef}
                type="text"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setIsDropdownOpen(true);
                  updateDropdownPosition();
                }}
                onFocus={() => openDropdown("inline")}
                onClick={(event) => event.stopPropagation()}
                placeholder={selectedTeachers.length === 0 ? "Type to search teachers..." : "Type here..."}
                className="min-w-[120px] flex-1 border-0 bg-transparent px-1 py-2 text-[14px] text-[#1a1a1a] outline-none placeholder:text-[#9ca3af]"
              />
            ) : null}
          </div>

          {!isEditing && selectedTeachers.length === 0 ? (
            <p className="px-1 py-2 text-[13px] text-[#9ca3af]">No teachers selected</p>
          ) : null}
        </div>

        {typeof document !== "undefined" && dropdownPanel
          ? createPortal(dropdownPanel, document.body)
          : null}
      </div>
    </AccountSettingsField>
  );
}
