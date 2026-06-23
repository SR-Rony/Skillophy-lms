"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Search, X } from "lucide-react";
import {
  AccountSettingsField,
  accountSettingsInputClassName,
} from "@/components/student/account-settings/account-settings-field";
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
  const containerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!isDropdownOpen) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [isDropdownOpen]);

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

  return (
    <AccountSettingsField label={label}>
      <div ref={containerRef} className="relative">
        <div
          className={cn(
            "min-h-[112px] rounded-xl bg-[#f5f5f5] p-3",
            isEditing && isDropdownOpen && "ring-2 ring-primary/15"
          )}
          onClick={() => {
            if (isEditing) {
              setIsDropdownOpen(true);
            }
          }}
        >
          {selectedTeachers.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {selectedTeachers.map((teacher) => (
                <span
                  key={teacher.id}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#ebe8e6] bg-white px-2.5 py-1.5 shadow-[0_1px_2px_rgba(35,25,22,0.04)]"
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
                  <span className="text-[12px] font-medium text-[#1a1a1a] sm:text-[13px]">
                    {teacher.name}
                  </span>
                  {isEditing ? (
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        handleRemoveTeacher(teacher.id);
                      }}
                      className="text-[#9ca3af] transition-colors hover:text-[#1a1a1a]"
                      aria-label={`Remove ${teacher.name}`}
                    >
                      <X className="h-3.5 w-3.5" aria-hidden />
                    </button>
                  ) : null}
                </span>
              ))}
            </div>
          ) : (
            <p className="px-1 py-2 text-[13px] text-[#9ca3af]">No teachers selected</p>
          )}
        </div>

        {isEditing && isDropdownOpen ? (
          <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 overflow-hidden rounded-xl border border-[#ebe8e6] bg-white shadow-[0_10px_30px_rgba(35,25,22,0.08)]">
            <div className="border-b border-[#f0f0f0] p-3">
              <div className="relative">
                <Search
                  className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9ca3af]"
                  aria-hidden
                />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search..."
                  className={cn(accountSettingsInputClassName, "bg-white pl-10")}
                  autoFocus
                />
              </div>
            </div>

            <ul className="max-h-[220px] overflow-y-auto py-2">
              {filteredTeachers.map((teacher) => {
                const isSelected = selectedIds.includes(teacher.id);

                return (
                  <li key={teacher.id}>
                    <button
                      type="button"
                      onClick={() => handleToggleTeacher(teacher.id)}
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-[#fafafa]"
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        readOnly
                        className="h-4 w-4 rounded border-[#d1d5db] text-primary accent-primary"
                        aria-hidden
                      />
                      <span className="relative h-8 w-8 overflow-hidden rounded-full bg-[#f3f4f6]">
                        <Image
                          src={teacher.avatar}
                          alt=""
                          fill
                          unoptimized
                          className="object-cover"
                          sizes="32px"
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[13px] font-semibold text-[#1a1a1a]">
                          {teacher.name}
                        </span>
                        <span className="block truncate text-[12px] text-[#9ca3af]">
                          {teacher.email}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </AccountSettingsField>
  );
}
