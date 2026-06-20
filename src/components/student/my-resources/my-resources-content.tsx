"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/shared";
import type {
  StudentLearningMaterialTopic,
  StudentResourcesPageData,
  StudentResourcesTab,
  StudentResourcesTabId,
} from "@/types/student-resources.types";
import { MyResourcesEmptyState } from "./my-resources-empty-state";
import { MyResourcesHero } from "./my-resources-hero";
import { MyResourcesToolbar } from "./my-resources-toolbar";
import { MyResourcesTopicSection } from "./my-resources-topic-section";

interface MyResourcesContentProps {
  data: StudentResourcesPageData;
}

function filterAndSortTopics(
  topics: StudentLearningMaterialTopic[],
  courseId: string,
  sortId: string
): StudentLearningMaterialTopic[] {
  const filtered = topics
    .map((topic) => ({
      ...topic,
      items: topic.items.filter((item) => item.courseSlug === courseId),
    }))
    .filter((topic) => topic.items.length > 0);

  if (sortId === "topic-asc") {
    return [...filtered].sort((left, right) => left.title.localeCompare(right.title));
  }

  if (sortId === "topic-desc") {
    return [...filtered].sort((left, right) => right.title.localeCompare(left.title));
  }

  return filtered;
}

export function MyResourcesContent({ data }: MyResourcesContentProps) {
  const [activeTab, setActiveTab] = useState<StudentResourcesTabId>(data.defaultTabId);
  const defaultCourseId = data.courseFilters[0]?.id ?? "";
  const [selectedCourseId, setSelectedCourseId] = useState(defaultCourseId);
  const [selectedSortId, setSelectedSortId] = useState(data.sortOptions[0]?.id ?? "default");

  const currentTab: StudentResourcesTab | undefined =
    data.tabs.find((tab) => tab.id === activeTab) ?? data.tabs[0];

  const topics = useMemo(
    () => filterAndSortTopics(currentTab?.topics ?? [], selectedCourseId, selectedSortId),
    [currentTab?.topics, selectedCourseId, selectedSortId]
  );

  const hasMaterials = topics.length > 0;

  return (
    <div className="bg-white">
      <MyResourcesHero
        title={data.title}
        subtitle={data.subtitle}
        tabs={data.tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <Container className="py-6 md:py-8">
        {hasMaterials ? (
          <>
            <MyResourcesToolbar
              courseFilters={data.courseFilters}
              sortOptions={data.sortOptions}
              selectedCourseId={selectedCourseId}
              selectedSortId={selectedSortId}
              onCourseChange={setSelectedCourseId}
              onSortChange={setSelectedSortId}
              className="mb-8 md:mb-10"
            />

            <div className="space-y-8 md:space-y-10">
              {topics.map((topic) => (
                <MyResourcesTopicSection key={topic.id} topic={topic} />
              ))}
            </div>
          </>
        ) : (
          currentTab && <MyResourcesEmptyState emptyState={currentTab.emptyState} />
        )}
      </Container>
    </div>
  );
}
