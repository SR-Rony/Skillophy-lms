import { env } from "@/config";
import { resolveStudentCertificates } from "@/data/mock/student-certificate.resolver";
import type { StudentCertificatePageData } from "@/types/student-certificate.types";
import { sleep } from "@/utils";
// import { apiClient } from "./api-client";

/**
 * Student certificate data access.
 * Uses demo mock data while `NEXT_PUBLIC_USE_MOCK_API` is enabled.
 * Swap the API branch when backend endpoints are ready.
 */
export const studentCertificateService = {
  async getCertificates(): Promise<StudentCertificatePageData> {
    if (env.useMockApi) {
      await sleep(200);
      return resolveStudentCertificates();
    }

    // return apiClient
    //   .get<StudentCertificatePageData>("/student/certificates")
    //   .then((response) => response.data);
    return resolveStudentCertificates();
  },
};
