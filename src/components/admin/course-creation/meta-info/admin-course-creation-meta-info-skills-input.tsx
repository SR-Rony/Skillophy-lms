"use client";

import { type KeyboardEvent, useState } from "react";
import { X } from "lucide-react";
import { adminCourseMetaInfoInputClassName } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info.utils";

interface AdminCourseCreationMetaInfoSkillsInputProps {
  skills: string[];
  onChange: (skills: string[]) => void;
}

export function AdminCourseCreationMetaInfoSkillsInput({
  skills,
  onChange,
}: AdminCourseCreationMetaInfoSkillsInputProps) {
  const [draft, setDraft] = useState("");

  function addSkill(value: string) {
    const nextSkill = value.trim();
    if (!nextSkill || skills.includes(nextSkill)) {
      return;
    }

    onChange([...skills, nextSkill]);
    setDraft("");
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      addSkill(draft);
    }

    if (event.key === "Backspace" && draft.length === 0 && skills.length > 0) {
      onChange(skills.slice(0, -1));
    }
  }

  return (
    <div className="space-y-2">
      <label className="text-[14px] font-bold text-[#1a1a1a] sm:text-[15px]">Skills You will Gain</label>
      <div
        className={`${adminCourseMetaInfoInputClassName} flex min-h-[52px] flex-wrap items-center gap-2 py-2.5`}
      >
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#ebe8e6] bg-[#fafafa] px-2.5 py-1.5 text-[12px] font-medium text-[#1a1a1a] sm:text-[13px]"
          >
            {skill}
            <button
              type="button"
              onClick={() => onChange(skills.filter((entry) => entry !== skill))}
              className="text-[#9ca3af] transition-colors hover:text-[#1a1a1a]"
              aria-label={`Remove ${skill}`}
            >
              <X className="h-3.5 w-3.5" aria-hidden />
            </button>
          </span>
        ))}

        <input
          type="text"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => addSkill(draft)}
          placeholder={skills.length === 0 ? "Add skills..." : ""}
          className="min-w-[120px] flex-1 bg-transparent text-[13px] text-[#1a1a1a] outline-none placeholder:text-[#c4c4c4] sm:text-[14px]"
        />
      </div>
    </div>
  );
}
