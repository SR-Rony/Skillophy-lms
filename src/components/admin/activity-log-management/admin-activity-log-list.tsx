"use client";

import type { AdminActivityLogGroup } from "./admin-activity-log-management.utils";
import { AdminActivityLogEntryRow } from "./admin-activity-log-entry-row";

interface AdminActivityLogListProps {
  groups: AdminActivityLogGroup[];
}

export function AdminActivityLogList({ groups }: AdminActivityLogListProps) {
  return (
    <div className="bg-white">
      {groups.map((group, groupIndex) => (
        <section
          key={group.label}
          className={groupIndex > 0 ? "border-t border-[#f0f0f0]" : undefined}
        >
          <div className="flex flex-col sm:flex-row">
            <div className="shrink-0 px-4 pb-2 pt-5 sm:w-[112px] sm:px-6 sm:pb-0 sm:pt-6">
              <p className="text-[13px] font-semibold tracking-wide text-[#9ca3af]">
                {group.label}
              </p>
            </div>

            <div className="min-w-0 flex-1 divide-y divide-[#f0f0f0]">
              {group.entries.map((entry) => (
                <AdminActivityLogEntryRow key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
