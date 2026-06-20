import { env } from "@/config";
import { resolveStudentMessages } from "@/data/mock/student-messages.resolver";
import type { StudentMessagesPageData } from "@/types/student-messages.types";
import { sleep } from "@/utils";
// import { apiClient } from "./api-client";

/**
 * Student messages data access.
 * Uses demo mock data while `NEXT_PUBLIC_USE_MOCK_API` is enabled.
 * Swap the API branch when backend endpoints are ready.
 */
export const studentMessagesService = {
  async getMessages(): Promise<StudentMessagesPageData> {
    if (env.useMockApi) {
      await sleep(200);
      return resolveStudentMessages();
    }

    // return apiClient
    //   .get<StudentMessagesPageData>("/student/messages")
    //   .then((response) => response.data);
    return resolveStudentMessages();
  },
};
