"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AdminCourseCreationAddLessonDrawer } from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-add-lesson-drawer";
import { getAdminCourseLessonResourceLabel } from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-add-lesson.utils";
import { AdminCourseCreationAddResourcesDrawer } from "@/components/admin/course-creation/curriculum/add-resources/admin-course-creation-add-resources-drawer";
import { AdminCourseCreationAddQuizDrawer } from "@/components/admin/course-creation/curriculum/add-quiz/admin-course-creation-add-quiz-drawer";
import { getAdminCourseQuizTitle } from "@/components/admin/course-creation/curriculum/add-quiz/admin-course-creation-add-quiz.utils";
import { getAdminCourseResourceTitleFromFileName } from "@/components/admin/course-creation/curriculum/shared/admin-course-creation-resource-file.utils";
import { AdminCourseCreationCurriculumNewTopicRow } from "@/components/admin/course-creation/curriculum/admin-course-creation-curriculum-new-topic-row";
import { AdminCourseCreationCurriculumTopicCard } from "@/components/admin/course-creation/curriculum/admin-course-creation-curriculum-topic-card";
import { ADMIN_COURSE_CURRICULUM_MAX_WIDTH_CLASS } from "@/components/admin/course-creation/curriculum/admin-course-creation-curriculum.utils";
import type {
  AdminCourseAddLessonForm,
  AdminCourseAddQuizForm,
  AdminCourseAddResourceForm,
  AdminCourseCurriculumData,
  AdminCourseCurriculumTopic,
  AdminCourseCreationTeacher,
} from "@/types/admin-course-creation.types";
import { cn } from "@/utils";

interface AdminCourseCreationCurriculumSectionProps {
  initialData: AdminCourseCurriculumData;
  teachers: AdminCourseCreationTeacher[];
  maxTeachersPerRole: number;
}

function createTopicId() {
  return `topic-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function createLessonItemId() {
  return `item-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export function AdminCourseCreationCurriculumSection({
  initialData,
  teachers,
  maxTeachersPerRole,
}: AdminCourseCreationCurriculumSectionProps) {
  const [topics, setTopics] = useState<AdminCourseCurriculumTopic[]>(initialData.topics);
  const [isAddingTopic, setIsAddingTopic] = useState(false);
  const [newTopicTitle, setNewTopicTitle] = useState("");
  const [addLessonTopicId, setAddLessonTopicId] = useState<string | null>(null);
  const [addResourceTopicId, setAddResourceTopicId] = useState<string | null>(null);
  const [addQuizTopicId, setAddQuizTopicId] = useState<string | null>(null);

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

  function handleSaveLesson(form: AdminCourseAddLessonForm) {
    if (!addLessonTopicId) {
      return;
    }

    updateTopic(addLessonTopicId, (current) => ({
      ...current,
      isExpanded: true,
      items: [
        ...current.items,
        {
          id: createLessonItemId(),
          type: "lesson",
          title: form.title,
          resourceLabel: getAdminCourseLessonResourceLabel(form.resources.length),
        },
      ],
    }));
    setAddLessonTopicId(null);
  }

  function handleSaveResources(form: AdminCourseAddResourceForm) {
    if (!addResourceTopicId) {
      return;
    }

    updateTopic(addResourceTopicId, (current) => ({
      ...current,
      isExpanded: true,
      items: [
        ...current.items,
        ...form.resources.map((resource) => ({
          id: createLessonItemId(),
          type: "resource" as const,
          title: getAdminCourseResourceTitleFromFileName(resource.name),
        })),
      ],
    }));
    setAddResourceTopicId(null);
  }

  function handleSaveQuiz(_form: AdminCourseAddQuizForm) {
    if (!addQuizTopicId) {
      return;
    }

    updateTopic(addQuizTopicId, (current) => ({
      ...current,
      isExpanded: true,
      items: [
        ...current.items,
        {
          id: createLessonItemId(),
          type: "quiz",
          title: getAdminCourseQuizTitle(current.title),
        },
      ],
    }));
    setAddQuizTopicId(null);
  }

  return (
    <>
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
                      id: createLessonItemId(),
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
              onAddLesson={() => setAddLessonTopicId(topic.id)}
              onAddResource={() => setAddResourceTopicId(topic.id)}
              onAddQuiz={() => setAddQuizTopicId(topic.id)}
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
                    id: createLessonItemId(),
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

      <AdminCourseCreationAddLessonDrawer
        open={addLessonTopicId !== null}
        onOpenChange={(open) => {
          if (!open) {
            setAddLessonTopicId(null);
          }
        }}
        teachers={teachers}
        maxTeachers={maxTeachersPerRole}
        onSave={handleSaveLesson}
      />

      <AdminCourseCreationAddResourcesDrawer
        open={addResourceTopicId !== null}
        onOpenChange={(open) => {
          if (!open) {
            setAddResourceTopicId(null);
          }
        }}
        onSave={handleSaveResources}
      />

      <AdminCourseCreationAddQuizDrawer
        open={addQuizTopicId !== null}
        onOpenChange={(open) => {
          if (!open) {
            setAddQuizTopicId(null);
          }
        }}
        onSave={handleSaveQuiz}
      />
    </>
  );
}
