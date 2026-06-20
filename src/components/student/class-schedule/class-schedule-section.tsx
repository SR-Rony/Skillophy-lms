"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Heading } from "@/components/shared/heading";
import type { StudentClassScheduleSection } from "@/types/student-class-schedule.types";
import { ClassScheduleItem } from "./class-schedule-item";
import { cn } from "@/utils";

interface ClassScheduleSectionProps {
  section: StudentClassScheduleSection;
  className?: string;
}

export function ClassScheduleSection({ section, className }: ClassScheduleSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const hasHiddenItems = section.sessions.length > section.initialVisibleCount;
  const visibleSessions = expanded
    ? section.sessions
    : section.sessions.slice(0, section.initialVisibleCount);

  if (section.sessions.length === 0) {
    return null;
  }

  return (
    <section className={cn("space-y-4", className)}>
      <Heading as="h2" variant="dashboard-section" className="text-[18px] sm:text-[20px]">
        {section.title}
      </Heading>

      <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white">
        {visibleSessions.map((session, index) => (
          <ClassScheduleItem
            key={session.id}
            session={session}
            isLast={index === visibleSessions.length - 1}
          />
        ))}
      </div>

      {hasHiddenItems && (
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          className="inline-flex items-center gap-1 text-[13px] font-semibold text-primary transition-colors hover:text-primary/80"
        >
          {expanded ? "See Less" : "See More"}
          <ChevronDown
            className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")}
            aria-hidden
          />
        </button>
      )}
    </section>
  );
}
