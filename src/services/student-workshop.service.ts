import { env } from "@/config";
import { resolveStudentWorkshop } from "@/data/mock/student-workshop.resolver";
import type { StudentWorkshopPageData } from "@/types/student-workshop.types";
import { sleep } from "@/utils";
// import { apiClient } from "./api-client";

/**
 * Student workshop data access.
 * Uses demo mock data while `NEXT_PUBLIC_USE_MOCK_API` is enabled.
 * Swap the API branch when backend endpoints are ready.
 */
export const studentWorkshopService = {
  async getWorkshops(): Promise<StudentWorkshopPageData> {
    if (env.useMockApi) {
      await sleep(200);
      return resolveStudentWorkshop();
    }

    // return apiClient
    //   .get<StudentWorkshopPageData>("/student/workshops")
    //   .then((response) => response.data);
    return resolveStudentWorkshop();
  },
};
