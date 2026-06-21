"use client";

import { useEffect, useMemo, useState } from "react";
import {
  TeacherCourseAddResourcesDrawer,
  type TeacherCourseResourcesDrawerMode,
} from "./teacher-course-add-resources-drawer";
import { TeacherCourseDeleteResourceModal } from "./teacher-course-delete-resource-modal";
import {
  addResourcesToTopic,
  deleteResourceFromTopics,
  filterAndSortCourseResources,
  inferResourceFileType,
  updateResourceInTopics,
} from "./teacher-course-resources.utils";
import { TeacherCourseResourcesToolbar } from "./teacher-course-resources-toolbar";
import { TeacherCourseResourcesTopicSection } from "./teacher-course-resources-topic-section";
import type {
  TeacherCourseResourceItem,
  TeacherCourseResourcesTabData,
  TeacherCourseResourceSortId,
} from "@/types/teacher-course-details.types";

interface TeacherCourseResourcesTabProps {
  data: TeacherCourseResourcesTabData;
}

export function TeacherCourseResourcesTab({ data }: TeacherCourseResourcesTabProps) {
  const [topicGroups, setTopicGroups] = useState(data.topicGroups);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSortId, setSelectedSortId] = useState<TeacherCourseResourceSortId>("default");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerMode, setDrawerMode] = useState<TeacherCourseResourcesDrawerMode>("add");
  const [editingMaterial, setEditingMaterial] = useState<TeacherCourseResourceItem | null>(null);
  const [editingTopicId, setEditingTopicId] = useState<string | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deletingMaterial, setDeletingMaterial] = useState<TeacherCourseResourceItem | null>(null);

  useEffect(() => {
    setTopicGroups(data.topicGroups);
  }, [data.topicGroups]);

  const visibleTopicGroups = useMemo(
    () => filterAndSortCourseResources(topicGroups, searchQuery, selectedSortId),
    [topicGroups, searchQuery, selectedSortId]
  );

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
    setTopicGroups((current) => deleteResourceFromTopics(current, material.id));
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

    setTopicGroups((current) => addResourcesToTopic(current, topicId, newMaterials));
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
    setTopicGroups((current) => updateResourceInTopics(current, materialId, topicId, title));
  }

  return (
    <>
      <section className="bg-white pb-10 sm:pb-12 md:pb-14">
        <div className="mx-auto w-full max-w-[1320px] px-4 pt-4 sm:px-6 sm:pt-6 md:pt-8 lg:px-8">
          <TeacherCourseResourcesToolbar
            searchQuery={searchQuery}
            sortOptions={data.sortOptions}
            selectedSortId={selectedSortId}
            addResourcesLabel={data.addResourcesLabel}
            onSearchChange={setSearchQuery}
            onSortChange={setSelectedSortId}
            onAddResources={openAddDrawer}
          />

          <div className="mt-6 space-y-8 sm:mt-8 sm:space-y-10">
            {visibleTopicGroups.length > 0 ? (
              visibleTopicGroups.map((group) => (
                <TeacherCourseResourcesTopicSection
                  key={group.id}
                  group={group}
                  onEditMaterial={(material) => handleEditMaterial(group.id, material)}
                  onDeleteMaterial={handleDeleteMaterial}
                />
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-[#ebe8e6] bg-[#fafafa] px-6 py-12 text-center">
                <p className="text-[15px] font-bold text-[#1a1a1a]">No resources found</p>
                <p className="mt-2 text-[13px] text-[#6b7280]">
                  Try a different search term or add new resources.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

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
