import { env } from "@/config";
import { mockCourses } from "@/data/mock/courses.mock";
import type { Course } from "@/types";
import { sleep } from "@/utils";
// import { apiClient } from "./api-client";

export const courseService = {
  async getAll(): Promise<Course[]> {
    if (env.useMockApi) {
      await sleep(400);
      return mockCourses;
    }
    // return apiClient.get<Course[]>("/courses").then((r) => r.data);
    return [];
  },

  async getById(id: string): Promise<Course | null> {
    if (env.useMockApi) {
      await sleep(300);
      return mockCourses.find((c) => c.id === id) ?? null;
    }
    // return apiClient.get<Course>(`/courses/${id}`).then((r) => r.data);
    return null;
  },

  async getBySlug(slug: string): Promise<Course | null> {
    if (env.useMockApi) {
      await sleep(300);
      return mockCourses.find((c) => c.slug === slug) ?? null;
    }
    return null;
  },
};
