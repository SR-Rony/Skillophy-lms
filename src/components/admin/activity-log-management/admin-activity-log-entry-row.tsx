"use client";

import Link from "next/link";
import type { AdminActivityLogEntry } from "@/types/admin-activity-log.types";
import { formatAdminActivityLogTimestamp } from "./admin-activity-log-management.utils";

interface AdminActivityLogEntryRowProps {
  entry: AdminActivityLogEntry;
}

export function AdminActivityLogEntryRow({ entry }: AdminActivityLogEntryRowProps) {
  return (
    <article className="group flex gap-4 px-4 py-5 transition-colors hover:bg-[#fafafa] sm:px-6 sm:pr-6">
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff5f5] text-[13px] font-bold text-primary ring-1 ring-[#fde8e8]"
        aria-hidden
      >
        {entry.actorInitials}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[14px] leading-[1.65] text-[#6b7280]">
          {entry.parts.map((part, index) => {
            if (part.kind === "email") {
              return (
                <Link
                  key={`${entry.id}-email-${index}`}
                  href={part.href}
                  className="font-semibold text-[#1a1a1a] underline-offset-2 transition-colors hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                >
                  {part.email}
                </Link>
              );
            }

            if (part.kind === "emphasis") {
              return (
                <span key={`${entry.id}-emphasis-${index}`} className="font-semibold text-[#1a1a1a]">
                  {part.text}
                </span>
              );
            }

            return <span key={`${entry.id}-text-${index}`}>{part.text}</span>;
          })}
        </p>

        <time
          dateTime={entry.occurredAt}
          className="mt-1.5 block text-[12px] font-medium text-[#9ca3af]"
        >
          {formatAdminActivityLogTimestamp(entry.occurredAt)}
        </time>
      </div>
    </article>
  );
}
