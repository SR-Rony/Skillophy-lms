import { env } from "@/config";
import { resolveStudentResources } from "@/data/mock/student-resources.resolver";
import type { StudentResourcesPageData } from "@/types/student-resources.types";
import { sleep } from "@/utils";
// import { apiClient } from "./api-client";

/**
 * Student resources data access.
 * Uses demo mock data while `NEXT_PUBLIC_USE_MOCK_API` is enabled.
 * Swap the API branch when backend endpoints are ready.
 */
export const studentResourcesService = {
  async getResources(): Promise<StudentResourcesPageData> {
    if (env.useMockApi) {
      await sleep(200);
      return resolveStudentResources();
    }

    // return apiClient
    //   .get<StudentResourcesPageData>("/student/resources")
    //   .then((response) => response.data);
    return resolveStudentResources();
  },
};
