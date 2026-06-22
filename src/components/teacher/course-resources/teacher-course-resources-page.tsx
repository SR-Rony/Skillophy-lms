"use client";

import { useEffect, useMemo, useState } from "react";
import {
  TeacherCourseAddResourcesDrawer,
  type TeacherCourseResourcesDrawerMode,
} from "@/components/teacher/course-details/resources/teacher-course-add-resources-drawer";
import { TeacherCourseDeleteResourceModal } from "@/components/teacher/course-details/resources/teacher-course-delete-resource-modal";
import { TeacherCourseResourcesTopicSection } from "@/components/teacher/course-details/resources/teacher-course-resources-topic-section";
import {
  addResourcesToTopic,
  deleteResourceFromTopics,
  filterAndSortCourseResources,
  inferResourceFileType,
  updateResourceInTopics,
} from "@/components/teacher/course-details/resources/teacher-course-resources.utils";
import { courseHasResources } from "@/data/mock/teacher-course-resources.mock";
import { TeacherCourseResourcesEmptyState } from "./teacher-course-resources-empty-state";
import { TeacherCourseResourcesPageToolbar } from "./teacher-course-resources-page-toolbar";
import type {
  TeacherCourseResourceItem,
  TeacherCourseResourceSortId,
  TeacherCourseResourceTopicGroup,
} from "@/types/teacher-course-details.types";
import type { TeacherCourseResourcesPageData } from "@/types/teacher-course-resources.types";

interface TeacherCourseResourcesPageProps {
  data: TeacherCourseResourcesPageData;
}

export function TeacherCourseResourcesPage({ data }: TeacherCourseResourcesPageProps) {
  const [selectedCourseId, setSelectedCourseId] = useState(data.defaultCourseId);
  const [resourcesByCourse, setResourcesByCourse] = useState(data.resourcesByCourse);
  const [selectedSortId, setSelectedSortId] = useState<TeacherCourseResourceSortId>("default");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerMode, setDrawerMode] = useState<TeacherCourseResourcesDrawerMode>("add");
  const [editingMaterial, setEditingMaterial] = useState<TeacherCourseResourceItem | null>(null);
  const [editingTopicId, setEditingTopicId] = useState<string | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deletingMaterial, setDeletingMaterial] = useState<TeacherCourseResourceItem | null>(null);

  useEffect(() => {
    setResourcesByCourse(data.resourcesByCourse);
  }, [data.resourcesByCourse]);

  const topicGroups = resourcesByCourse[selectedCourseId] ?? [];

  const visibleTopicGroups = useMemo(
    () => filterAndSortCourseResources(topicGroups, "", selectedSortId),
    [topicGroups, selectedSortId]
  );

  const hasResources = courseHasResources(topicGroups);

  function updateCourseTopicGroups(nextTopicGroups: TeacherCourseResourceTopicGroup[]) {
    setResourcesByCourse((current) => ({
      ...current,
      [selectedCourseId]: nextTopicGroups,
    }));
  }

  function openAddDrawer() {
    setDrawerMode("add");
    setEditingMaterial(null);
    setEditingTopicId(null);
    setDrawerOpen(true);
  }

  function handleEditMaterial(topicId: string, material: TeacherCourseResourceItem) {
    setDrawerMode("edit");
    setEditingMaterial(material);
    setEditingTopicId(topicId);
    setDrawerOpen(true);
  }

  function handleDeleteMaterial(material: TeacherCourseResourceItem) {
    setDeletingMaterial(material);
    setDeleteModalOpen(true);
  }

  function confirmDeleteMaterial(material: TeacherCourseResourceItem) {
    updateCourseTopicGroups(deleteResourceFromTopics(topicGroups, material.id));
    setDeletingMaterial(null);
  }

  function handleSaveAdd({
    topicId,
    files,
  }: {
    topicId: string;
    files: { id: string; name: string; fileType: string }[];
  }) {
    const newMaterials: TeacherCourseResourceItem[] = files.map((file) => ({
      id: `resource-${file.id}`,
      title: file.name,
      fileType: inferResourceFileType(file.name),
      downloadUrl: "#",
    }));

    updateCourseTopicGroups(addResourcesToTopic(topicGroups, topicId, newMaterials));
  }

  function handleSaveEdit({
    materialId,
    topicId,
    title,
  }: {
    materialId: string;
    topicId: string;
    title: string;
  }) {
    updateCourseTopicGroups(updateResourceInTopics(topicGroups, materialId, topicId, title));
  }

  return (
    <>
      <div className="bg-white pb-10 sm:pb-12 md:pb-14">
        <div className="mx-auto w-full max-w-[1320px] px-4 pt-4 sm:px-6 sm:pt-6 md:pt-8 lg:px-8">
          <TeacherCourseResourcesPageToolbar
            courses={data.courses}
            sortOptions={data.sortOptions}
            selectedCourseId={selectedCourseId}
            selectedSortId={selectedSortId}
            addResourcesLabel={data.addResourcesLabel}
            onCourseChange={setSelectedCourseId}
            onSortChange={setSelectedSortId}
            onAddResources={openAddDrawer}
          />

          {!hasResources ? (
            <div className="mt-6 sm:mt-8">
              <TeacherCourseResourcesEmptyState
                heading={data.emptyState.heading}
                message={data.emptyState.message}
                actionLabel={data.emptyState.actionLabel}
                onAddResources={openAddDrawer}
              />
            </div>
          ) : (
            <div className="mt-6 space-y-8 sm:mt-8 sm:space-y-10">
              {visibleTopicGroups.map((group) => (
                <TeacherCourseResourcesTopicSection
                  key={group.id}
                  group={group}
                  onEditMaterial={(material) => handleEditMaterial(group.id, material)}
                  onDeleteMaterial={handleDeleteMaterial}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <TeacherCourseAddResourcesDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        mode={drawerMode}
        topicGroups={topicGroups}
        editingMaterial={editingMaterial}
        editingTopicId={editingTopicId}
        onSaveAdd={handleSaveAdd}
        onSaveEdit={handleSaveEdit}
      />

      <TeacherCourseDeleteResourceModal
        open={deleteModalOpen}
        onOpenChange={setDeleteModalOpen}
        material={deletingMaterial}
        onConfirm={confirmDeleteMaterial}
      />
    </>
  );
}
