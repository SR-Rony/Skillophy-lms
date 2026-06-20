"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/shared";
import type {
  StudentAcademicGuideItem,
  StudentLearningMaterialTopic,
  StudentResourceNoteItem,
  StudentResourcesPageData,
  StudentResourcesTab,
  StudentResourcesTabId,
  StudentSkillBookItem,
} from "@/types/student-resources.types";
import { MyResourcesAcademicGuidesGrid } from "./my-resources-academic-guides-grid";
import { MyResourcesEmptyState } from "./my-resources-empty-state";
import { MyResourcesHero } from "./my-resources-hero";
import { MyResourcesNotesList } from "./my-resources-notes-list";
import { MyResourcesSkillBooksGrid } from "./my-resources-skill-books-grid";
import { MyResourcesToolbar } from "./my-resources-toolbar";
import { MyResourcesTopicSection } from "./my-resources-topic-section";

interface MyResourcesContentProps {
  data: StudentResourcesPageData;
}

function parseTimestamp(timestamp: string): number {
  const [minutes, seconds] = timestamp.split(":").map(Number);
  return minutes * 60 + seconds;
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

function filterAndSortCoverResources<T extends { courseSlug: string; title: string }>(
  items: T[],
  courseId: string,
  sortId: string
): T[] {
  const filtered = items.filter((item) => item.courseSlug === courseId);

  if (sortId === "topic-asc") {
    return [...filtered].sort((left, right) => left.title.localeCompare(right.title));
  }

  if (sortId === "topic-desc") {
    return [...filtered].sort((left, right) => right.title.localeCompare(left.title));
  }

  return filtered;
}

function filterAndSortNotes(
  notes: StudentResourceNoteItem[],
  courseId: string,
  sortId: string
): StudentResourceNoteItem[] {
  const filtered = notes.filter((note) => note.courseSlug === courseId);

  if (sortId === "topic-asc") {
    return [...filtered].sort(
      (left, right) => parseTimestamp(left.timestamp) - parseTimestamp(right.timestamp)
    );
  }

  if (sortId === "topic-desc") {
    return [...filtered].sort(
      (left, right) => parseTimestamp(right.timestamp) - parseTimestamp(left.timestamp)
    );
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

  const isSkillBooksTab = activeTab === "skill-books";
  const isAcademicGuidesTab = activeTab === "academic-guides";
  const isNotesTab = activeTab === "notes";

  const topics = useMemo(
    () => filterAndSortTopics(currentTab?.topics ?? [], selectedCourseId, selectedSortId),
    [currentTab?.topics, selectedCourseId, selectedSortId]
  );

  const skillBooks = useMemo(
    () =>
      filterAndSortCoverResources<StudentSkillBookItem>(
        currentTab?.skillBooks ?? [],
        selectedCourseId,
        selectedSortId
      ),
    [currentTab?.skillBooks, selectedCourseId, selectedSortId]
  );

  const academicGuides = useMemo(
    () =>
      filterAndSortCoverResources<StudentAcademicGuideItem>(
        currentTab?.academicGuides ?? [],
        selectedCourseId,
        selectedSortId
      ),
    [currentTab?.academicGuides, selectedCourseId, selectedSortId]
  );

  const notes = useMemo(
    () => filterAndSortNotes(currentTab?.notes ?? [], selectedCourseId, selectedSortId),
    [currentTab?.notes, selectedCourseId, selectedSortId]
  );

  const hasContent = isSkillBooksTab
    ? skillBooks.length > 0
    : isAcademicGuidesTab
      ? academicGuides.length > 0
      : isNotesTab
        ? notes.length > 0
        : topics.length > 0;

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
        {hasContent ? (
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

            {isSkillBooksTab ? (
              <MyResourcesSkillBooksGrid books={skillBooks} />
            ) : isAcademicGuidesTab ? (
              <MyResourcesAcademicGuidesGrid guides={academicGuides} />
            ) : isNotesTab ? (
              <MyResourcesNotesList notes={notes} />
            ) : (
              <div className="space-y-8 md:space-y-10">
                {topics.map((topic) => (
                  <MyResourcesTopicSection key={topic.id} topic={topic} />
                ))}
              </div>
            )}
          </>
        ) : (
          currentTab && <MyResourcesEmptyState emptyState={currentTab.emptyState} />
        )}
      </Container>
    </div>
  );
}
