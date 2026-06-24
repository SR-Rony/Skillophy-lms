"use client";

import type { AdminCategoryManagementTab } from "@/types/admin-category-management.types";
import { cn } from "@/utils";

const tabs: { id: AdminCategoryManagementTab; label: string }[] = [
  { id: "course", label: "Course" },
  { id: "workshop", label: "Workshop" },
  { id: "job-position", label: "Job Position" },
];

interface AdminCategoryManagementTabsProps {
  activeTab: AdminCategoryManagementTab;
  onTabChange: (tab: AdminCategoryManagementTab) => void;
}

export function AdminCategoryManagementTabs({
  activeTab,
  onTabChange,
}: AdminCategoryManagementTabsProps) {
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
