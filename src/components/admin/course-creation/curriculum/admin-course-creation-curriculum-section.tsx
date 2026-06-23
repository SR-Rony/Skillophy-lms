"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AdminCourseCreationCurriculumNewTopicRow } from "@/components/admin/course-creation/curriculum/admin-course-creation-curriculum-new-topic-row";
import {
  AdminCourseCreationCurriculumTopicCard,
  createAdminCourseCurriculumItem,
} from "@/components/admin/course-creation/curriculum/admin-course-creation-curriculum-topic-card";
import { ADMIN_COURSE_CURRICULUM_MAX_WIDTH_CLASS } from "@/components/admin/course-creation/curriculum/admin-course-creation-curriculum.utils";
import type {
  AdminCourseCurriculumData,
  AdminCourseCurriculumItemType,
  AdminCourseCurriculumTopic,
} from "@/types/admin-course-creation.types";
import { cn } from "@/utils";

interface AdminCourseCreationCurriculumSectionProps {
  initialData: AdminCourseCurriculumData;
}

function createTopicId() {
  return `topic-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export function AdminCourseCreationCurriculumSection({
  initialData,
}: AdminCourseCreationCurriculumSectionProps) {
  const [topics, setTopics] = useState<AdminCourseCurriculumTopic[]>(initialData.topics);
  const [isAddingTopic, setIsAddingTopic] = useState(false);
  const [newTopicTitle, setNewTopicTitle] = useState("");

  function updateTopic(topicId: string, updater: (topic: AdminCourseCurriculumTopic) => AdminCourseCurriculumTopic) {
    setTopics((current) =>
      current.map((topic) => (topic.id === topicId ? updater(topic) : topic))
    );
  }

  function handleConfirmNewTopic() {
    const title = newTopicTitle.trim();
    if (!title) {
      return;
    }

    setTopics((current) => [
      ...current,
      {
        id: createTopicId(),
        title,
        isExpanded: true,
        items: [],
      },
    ]);
    setNewTopicTitle("");
    setIsAddingTopic(false);
  }

  function handleCancelNewTopic() {
    setNewTopicTitle("");
    setIsAddingTopic(false);
  }

  return (
    <section className={cn("mx-auto w-full space-y-4", ADMIN_COURSE_CURRICULUM_MAX_WIDTH_CLASS)}>
      <div className="space-y-4">
        {topics.map((topic, index) => (
          <AdminCourseCreationCurriculumTopicCard
            key={topic.id}
            topic={topic}
            topicIndex={index}
            onToggleExpanded={() =>
              updateTopic(topic.id, (current) => ({
                ...current,
                isExpanded: !current.isExpanded,
              }))
            }
            onRenameTopic={(title) =>
              updateTopic(topic.id, (current) => ({ ...current, title }))
            }
            onCopyTopic={() => {
              setTopics((current) => {
                const source = current.find((entry) => entry.id === topic.id);
                if (!source) {
                  return current;
                }

                const copiedTopic: AdminCourseCurriculumTopic = {
                  ...source,
                  id: createTopicId(),
                  title: `${source.title} (Copy)`,
                  items: source.items.map((item) => ({
                    ...item,
                    id: `item-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
                  })),
                };

                const sourceIndex = current.findIndex((entry) => entry.id === topic.id);
                const next = [...current];
                next.splice(sourceIndex + 1, 0, copiedTopic);
                return next;
              });
            }}
            onDeleteTopic={() =>
              setTopics((current) => current.filter((entry) => entry.id !== topic.id))
            }
            onAddItem={(type: AdminCourseCurriculumItemType) =>
              updateTopic(topic.id, (current) => ({
                ...current,
                isExpanded: true,
                items: [...current.items, createAdminCourseCurriculumItem(type, current.title)],
              }))
            }
            onRenameItem={(itemId, title) =>
              updateTopic(topic.id, (current) => ({
                ...current,
                items: current.items.map((item) =>
                  item.id === itemId ? { ...item, title } : item
                ),
              }))
            }
            onCopyItem={(itemId) =>
              updateTopic(topic.id, (current) => {
                const sourceIndex = current.items.findIndex((item) => item.id === itemId);
                if (sourceIndex === -1) {
                  return current;
                }

                const source = current.items[sourceIndex];
                const copiedItem = {
                  ...source,
                  id: `item-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
                  title: `${source.title} (Copy)`,
                };
                const nextItems = [...current.items];
                nextItems.splice(sourceIndex + 1, 0, copiedItem);

                return { ...current, items: nextItems };
              })
            }
            onDeleteItem={(itemId) =>
              updateTopic(topic.id, (current) => ({
                ...current,
                items: current.items.filter((item) => item.id !== itemId),
              }))
            }
          />
        ))}

        {isAddingTopic ? (
          <AdminCourseCreationCurriculumNewTopicRow
            topicIndex={topics.length}
            value={newTopicTitle}
            onChange={setNewTopicTitle}
            onConfirm={handleConfirmNewTopic}
            onCancel={handleCancelNewTopic}
          />
        ) : null}
      </div>

      <button
        type="button"
        onClick={() => setIsAddingTopic(true)}
        className="flex w-full items-center justify-center gap-2 rounded-2xl border border-[#ebe8e6] bg-white px-5 py-4 text-[14px] font-semibold text-primary shadow-[0_8px_30px_rgba(35,25,22,0.04)] transition-colors hover:bg-[#fafafa]"
      >
        <Plus className="h-4 w-4" aria-hidden />
        Add New Topic
      </button>
    </section>
  );
}
