import { env } from "@/config";
import {
  resolveStudentLiveQuizAnswerReview,
  resolveStudentLiveQuizPlayData,
  resolveStudentLiveQuizResult,
  resolveStudentLiveQuizSession,
} from "@/data/mock/student-live-quiz.resolver";
import type {
  StudentLiveQuizAnswerReviewPageData,
  StudentLiveQuizPlayData,
  StudentLiveQuizResultPageData,
  StudentLiveQuizSessionPageData,
} from "@/types/student-live-quiz.types";
import { sleep } from "@/utils";
// import { apiClient } from "./api-client";

/**
 * Student live quiz data access.
 * Uses demo mock data while `NEXT_PUBLIC_USE_MOCK_API` is enabled.
 * Swap the API branches when backend endpoints are ready.
 */
export const studentLiveQuizService = {
  async getSession(
    slug: string,
    quizId?: string
  ): Promise<StudentLiveQuizSessionPageData | null> {
    if (env.useMockApi) {
      await sleep(200);
      return resolveStudentLiveQuizSession(slug, quizId);
    }

    // return apiClient
    //   .get<StudentLiveQuizSessionPageData>(`/student/courses/${slug}/quizzes/${quizId}`)
    //   .then((response) => response.data);
    return null;
  },

  async getPlayData(slug: string, quizId?: string): Promise<StudentLiveQuizPlayData | null> {
    if (env.useMockApi) {
      await sleep(200);
      return resolveStudentLiveQuizPlayData(slug, quizId);
    }

    // return apiClient
    //   .get<StudentLiveQuizPlayData>(`/student/courses/${slug}/quizzes/${quizId}/play`)
    //   .then((response) => response.data);
    return null;
  },

  async getResult(
    slug: string,
    quizId?: string
  ): Promise<StudentLiveQuizResultPageData | null> {
    if (env.useMockApi) {
      await sleep(200);
      return resolveStudentLiveQuizResult(slug, quizId);
    }

    // return apiClient
    //   .get<StudentLiveQuizResultPageData>(`/student/courses/${slug}/quizzes/${quizId}/result`)
    //   .then((response) => response.data);
    return null;
  },

  async getAnswerReview(
    slug: string,
    quizId?: string
  ): Promise<StudentLiveQuizAnswerReviewPageData | null> {
    if (env.useMockApi) {
      await sleep(200);
      return resolveStudentLiveQuizAnswerReview(slug, quizId);
    }

    // return apiClient
    //   .get<StudentLiveQuizAnswerReviewPageData>(
    //     `/student/courses/${slug}/quizzes/${quizId}/answers`
    //   )
    //   .then((response) => response.data);
    return null;
  },

  async submitQuiz(
    slug: string,
    quizId: string,
    _answers: Record<string, string | string[]>
  ): Promise<StudentLiveQuizResultPageData | null> {
    if (env.useMockApi) {
      await sleep(300);
      return resolveStudentLiveQuizResult(slug, quizId);
    }

    // return apiClient
    //   .post<StudentLiveQuizResultPageData>(`/student/courses/${slug}/quizzes/${quizId}/submit`, {
    //     answers,
    //   })
    //   .then((response) => response.data);
    return null;
  },
};
