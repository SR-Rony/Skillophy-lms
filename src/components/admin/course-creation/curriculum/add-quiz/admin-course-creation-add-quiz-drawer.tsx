"use client";

import { useEffect, useState } from "react";
import { AdminCourseCreationAddQuizFormContent } from "@/components/admin/course-creation/curriculum/add-quiz/admin-course-creation-add-quiz-form-content";
import { createDemoAdminCourseAddQuizForm } from "@/components/admin/course-creation/curriculum/add-quiz/admin-course-creation-add-quiz.mock";
import {
  createAdminCourseQuizAnswerOption,
  createAdminCourseQuizQuestion,
  isAdminCourseAddQuizFormValid,
} from "@/components/admin/course-creation/curriculum/add-quiz/admin-course-creation-add-quiz.utils";
import { AdminCourseCreationCurriculumDrawer } from "@/components/admin/course-creation/curriculum/shared/admin-course-creation-curriculum-drawer";
import type {
  AdminCourseAddQuizForm,
  AdminCourseQuizQuestion,
} from "@/types/admin-course-creation.types";

interface AdminCourseCreationAddQuizDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (form: AdminCourseAddQuizForm) => void;
}

export function AdminCourseCreationAddQuizDrawer({
  open,
  onOpenChange,
  onSave,
}: AdminCourseCreationAddQuizDrawerProps) {
  const [form, setForm] = useState<AdminCourseAddQuizForm>(createDemoAdminCourseAddQuizForm());

  useEffect(() => {
    if (!open) {
      return;
    }

    setForm(createDemoAdminCourseAddQuizForm());
  }, [open]);

  const canSave = isAdminCourseAddQuizFormValid(form);

  function handleAddQuestion() {
    setForm((current) => ({
      ...current,
      questions: [...current.questions, createAdminCourseQuizQuestion()],
    }));
  }

  function handleUpdateQuestion(questionId: string, updates: Partial<AdminCourseQuizQuestion>) {
    setForm((current) => ({
      ...current,
      questions: current.questions.map((question) =>
        question.id === questionId ? { ...question, ...updates } : question
      ),
    }));
  }

  function handleCopyQuestion(questionId: string) {
    setForm((current) => {
      const sourceIndex = current.questions.findIndex((question) => question.id === questionId);
      if (sourceIndex === -1) {
        return current;
      }

      const source = current.questions[sourceIndex];
      const copiedOptions = source.options.map((option) =>
        createAdminCourseQuizAnswerOption(option.text)
      );
      const correctIndex = source.options.findIndex(
        (option) => option.id === source.correctOptionId
      );
      const copiedQuestion = createAdminCourseQuizQuestion(`${source.prompt} (Copy)`, {
        isExpanded: source.isExpanded,
        isEditing: false,
        options: copiedOptions,
        correctOptionId: copiedOptions[correctIndex >= 0 ? correctIndex : 0]?.id ?? null,
        correctAnswerDescription: source.correctAnswerDescription,
        points: source.points,
      });

      const nextQuestions = [...current.questions];
      nextQuestions.splice(sourceIndex + 1, 0, copiedQuestion);

      return { ...current, questions: nextQuestions };
    });
  }

  function handleDeleteQuestion(questionId: string) {
    setForm((current) => ({
      ...current,
      questions: current.questions.filter((question) => question.id !== questionId),
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSave) {
      return;
    }

    onSave({
      ...form,
      questions: form.questions.filter((question) => question.prompt.trim().length > 0),
    });
    onOpenChange(false);
  }

  return (
    <AdminCourseCreationCurriculumDrawer
      open={open}
      onOpenChange={onOpenChange}
      title="Add Quiz"
      description="Create and customize course lesson here"
      closeAriaLabel="Close add quiz drawer"
      saveLabel="Save Quiz"
      saveDisabled={!canSave}
      onSubmit={handleSubmit}
    >
      <AdminCourseCreationAddQuizFormContent
        form={form}
        onDurationChange={(durationMinutes) =>
          setForm((current) => ({ ...current, durationMinutes }))
        }
        onUpdateQuestion={handleUpdateQuestion}
        onCopyQuestion={handleCopyQuestion}
        onDeleteQuestion={handleDeleteQuestion}
        onAddQuestion={handleAddQuestion}
      />
    </AdminCourseCreationCurriculumDrawer>
  );
}
