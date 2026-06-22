import { resolveTeacherPaymentHistory } from "@/data/mock/teacher-data.resolvers";
import type { TeacherPaymentHistoryPageData } from "@/types/teacher-payment-history.types";
import { fetchTeacherData } from "./create-teacher-service";
// import { apiClient } from "@/services/api-client";

export const teacherPaymentHistoryService = {
  async getPaymentHistory(): Promise<TeacherPaymentHistoryPageData> {
    return fetchTeacherData(async () => {
      // return apiClient.get<TeacherPaymentHistoryPageData>("/teacher/payments").then((r) => r.data);
      return resolveTeacherPaymentHistory();
    });
  },
};
