"use client";

import { useState } from "react";
import { Container } from "@/components/shared";
import type {
  StudentWorkshopPageData,
  StudentWorkshopTab,
  StudentWorkshopTabId,
} from "@/types/student-workshop.types";
import { MyWorkshopEmptyState } from "./my-workshop-empty-state";
import { MyWorkshopGrid } from "./my-workshop-grid";
import { MyWorkshopHero } from "./my-workshop-hero";

interface MyWorkshopContentProps {
  data: StudentWorkshopPageData;
}

export function MyWorkshopContent({ data }: MyWorkshopContentProps) {
  const [activeTab, setActiveTab] = useState<StudentWorkshopTabId>(data.defaultTabId);

  const currentTab: StudentWorkshopTab | undefined =
    data.tabs.find((tab) => tab.id === activeTab) ?? data.tabs[0];

  const workshops = currentTab?.workshops ?? [];
  const hasContent = workshops.length > 0;

  return (
    <div className="bg-white">
      <MyWorkshopHero
        title={data.title}
        subtitle={data.subtitle}
        tabs={data.tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <Container className="py-6 md:py-8 lg:py-10">
        {hasContent ? (
          <MyWorkshopGrid workshops={workshops} isCompleted={activeTab === "completed"} />
        ) : (
          currentTab && <MyWorkshopEmptyState emptyState={currentTab.emptyState} />
        )}
      </Container>
    </div>
  );
}
