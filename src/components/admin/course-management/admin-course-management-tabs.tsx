"use client";

import type { AdminCourseManagementTab } from "@/types/admin-course-management.types";
import { cn } from "@/utils";

const tabs: { id: AdminCourseManagementTab; label: string }[] = [
  { id: "recorded", label: "Recorded Course" },
  { id: "live", label: "LIVE Course" },
];

interface AdminCourseManagementTabsProps {
  activeTab: AdminCourseManagementTab;
  onTabChange: (tab: AdminCourseManagementTab) => void;
}

export function AdminCourseManagementTabs({
  activeTab,
  onTabChange,
}: AdminCourseManagementTabsProps) {
  return (
    <div className="border-b border-[#f0f0f0] px-4 sm:px-6">
      <div className="flex items-center gap-6 sm:gap-8">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "relative pb-3.5 pt-4 text-[14px] font-semibold transition-colors sm:text-[15px]",
                isActive ? "text-primary" : "text-[#9ca3af] hover:text-[#4a4a4a]"
              )}
            >
              {tab.label}
              {isActive && (
                <span className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-primary" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
