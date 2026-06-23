"use client";

import { useEffect, useState } from "react";
import { AdminCourseCreationAddQuizEmptyState } from "@/components/admin/course-creation/curriculum/add-quiz/admin-course-creation-add-quiz-empty-state";
import { AdminCourseCreationAddQuizQuestionList } from "@/components/admin/course-creation/curriculum/add-quiz/admin-course-creation-add-quiz-question-list";
import {
  createAdminCourseQuizQuestion,
  createEmptyAdminCourseAddQuizForm,
} from "@/components/admin/course-creation/curriculum/add-quiz/admin-course-creation-add-quiz.utils";
import { AdminCourseCreationCurriculumDrawer } from "@/components/admin/course-creation/curriculum/shared/admin-course-creation-curriculum-drawer";
import type { AdminCourseAddQuizForm } from "@/types/admin-course-creation.types";

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
  const [form, setForm] = useState<AdminCourseAddQuizForm>(createEmptyAdminCourseAddQuizForm());

  useEffect(() => {
    if (!open) {
      return;
    }

    setForm(createEmptyAdminCourseAddQuizForm());
  }, [open]);

  const hasQuestions = form.questions.length > 0;
  const hasValidQuestions = form.questions.some((question) => question.prompt.trim().length > 0);

  function handleAddQuestion() {
    setForm((current) => ({
      ...current,
      questions: [...current.questions, createAdminCourseQuizQuestion()],
    }));
  }

  function handleChangeQuestion(questionId: string, prompt: string) {
    setForm((current) => ({
      ...current,
      questions: current.questions.map((question) =>
        question.id === questionId ? { ...question, prompt } : question
      ),
    }));
  }

  function handleDeleteQuestion(questionId: string) {
    setForm((current) => ({
      ...current,
      questions: current.questions.filter((question) => question.id !== questionId),
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!hasValidQuestions) {
      return;
    }

    onSave({
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
      saveDisabled={!hasValidQuestions}
      onSubmit={handleSubmit}
      contentClassName={hasQuestions ? undefined : "flex flex-col"}
    >
      {hasQuestions ? (
        <AdminCourseCreationAddQuizQuestionList
          questions={form.questions}
          onChange={handleChangeQuestion}
          onDelete={handleDeleteQuestion}
          onAddQuestion={handleAddQuestion}
        />
      ) : (
        <div className="flex flex-1 items-center justify-center">
          <AdminCourseCreationAddQuizEmptyState onAddQuestion={handleAddQuestion} />
        </div>
      )}
    </AdminCourseCreationCurriculumDrawer>
  );
}
