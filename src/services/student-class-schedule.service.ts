import { env } from "@/config";
import { resolveStudentClassSchedule } from "@/data/mock/student-class-schedule.resolver";
import type { StudentClassSchedulePageData } from "@/types/student-class-schedule.types";
import { sleep } from "@/utils";
// import { apiClient } from "./api-client";

/**
 * Student class schedule data access.
 * Uses demo mock data while `NEXT_PUBLIC_USE_MOCK_API` is enabled.
 * Swap the API branch when backend endpoints are ready.
 */
export const studentClassScheduleService = {
  async getSchedule(): Promise<StudentClassSchedulePageData> {
    if (env.useMockApi) {
      await sleep(200);
      return resolveStudentClassSchedule();
    }

    // return apiClient
    //   .get<StudentClassSchedulePageData>("/student/schedule")
    //   .then((response) => response.data);
    return resolveStudentClassSchedule();
  },
};
