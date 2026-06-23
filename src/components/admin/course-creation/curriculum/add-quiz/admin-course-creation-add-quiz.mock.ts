import {
  createAdminCourseQuizAnswerOption,
  createAdminCourseQuizQuestion,
} from "@/components/admin/course-creation/curriculum/add-quiz/admin-course-creation-add-quiz.utils";
import type { AdminCourseAddQuizForm } from "@/types/admin-course-creation.types";

export function createDemoAdminCourseAddQuizForm(): AdminCourseAddQuizForm {
  const questionOneOptions = [
    createAdminCourseQuizAnswerOption("A single digital tool used to complete a complex task"),
    createAdminCourseQuizAnswerOption(
      "A group of digital tools that work together to complete a complex task"
    ),
    createAdminCourseQuizAnswerOption("A physical workspace for designers"),
    createAdminCourseQuizAnswerOption("A type of user interface pattern"),
  ];

  const questionTwoOptions = [createAdminCourseQuizAnswerOption()];

  const questionThreeOptions = [
    createAdminCourseQuizAnswerOption("Use clear navigation"),
    createAdminCourseQuizAnswerOption("Keep layouts consistent"),
  ];

  return {
    durationMinutes: "20",
    questions: [
      createAdminCourseQuizQuestion("How is the term platform defined in UX design?", {
        isExpanded: true,
        isEditing: false,
        options: questionOneOptions,
        correctOptionId: questionOneOptions[1].id,
        correctAnswerDescription:
          "In UX design, a platform is a group of digital tools that work together to help users complete a complex task.",
        points: "1",
      }),
      createAdminCourseQuizQuestion("What is user-centered design?", {
        isExpanded: false,
        isEditing: false,
        options: questionTwoOptions,
        correctOptionId: questionTwoOptions[0].id,
        correctAnswerDescription: "",
        points: "",
      }),
      createAdminCourseQuizQuestion("Identify a few best practices", {
        isExpanded: true,
        isEditing: true,
        options: questionThreeOptions,
        correctOptionId: questionThreeOptions[0].id,
        correctAnswerDescription: "",
        points: "1",
      }),
    ],
  };
}
