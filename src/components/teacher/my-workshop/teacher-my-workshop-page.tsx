"use client";

import { useState } from "react";
import { MyWorkshopEmptyState } from "@/components/student/my-workshop/my-workshop-empty-state";
import { MyWorkshopGrid } from "@/components/student/my-workshop/my-workshop-grid";
import type {
  TeacherWorkshopPageData,
  TeacherWorkshopTab,
  TeacherWorkshopTabId,
} from "@/types/teacher-workshop.types";
import { cn } from "@/utils";

interface TeacherMyWorkshopPageProps {
  data: TeacherWorkshopPageData;
}

export function TeacherMyWorkshopPage({ data }: TeacherMyWorkshopPageProps) {
  const [activeTab, setActiveTab] = useState<TeacherWorkshopTabId>(data.defaultTabId);

  const currentTab: TeacherWorkshopTab | undefined =
    data.tabs.find((tab) => tab.id === activeTab) ?? data.tabs[0];

  const workshops = currentTab?.workshops ?? [];
  const hasContent = workshops.length > 0;

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e8e4e1] bg-white shadow-[0_2px_14px_rgba(35,25,22,0.06)]">
      <nav aria-label="Workshop categories" className="border-b border-[#f0ebe8] px-4 sm:px-6">
        <div className="scrollbar-hide -mx-1 flex gap-0 overflow-x-auto">
          {data.tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "shrink-0 border-b-[3px] px-4 py-4 text-[14px] font-semibold transition-colors sm:px-5",
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-[#6b7280] hover:text-[#1a1a1a]"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </nav>

      {hasContent ? (
        <div className="px-4 py-6 sm:px-6 sm:py-8">
          <MyWorkshopGrid workshops={workshops} isCompleted={activeTab === "completed"} />
        </div>
      ) : (
        currentTab && <MyWorkshopEmptyState emptyState={currentTab.emptyState} />
      )}
    </div>
  );
}
