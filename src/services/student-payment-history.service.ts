import { env } from "@/config";
import { resolveStudentPaymentHistory } from "@/data/mock/student-payment-history.resolver";
import type { StudentPaymentHistoryPageData } from "@/types/student-payment-history.types";
import { sleep } from "@/utils";
// import { apiClient } from "./api-client";

/**
 * Student payment history data access.
 * Uses demo mock data while `NEXT_PUBLIC_USE_MOCK_API` is enabled.
 * Swap the API branch when backend endpoints are ready.
 */
export const studentPaymentHistoryService = {
  async getPaymentHistory(): Promise<StudentPaymentHistoryPageData> {
    if (env.useMockApi) {
      await sleep(200);
      return resolveStudentPaymentHistory();
    }

    // return apiClient
    //   .get<StudentPaymentHistoryPageData>("/student/payments")
    //   .then((response) => response.data);
    return resolveStudentPaymentHistory();
  },
};
