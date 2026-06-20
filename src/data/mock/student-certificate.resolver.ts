import { studentCertificateDemo } from "@/data/mock/student-certificate.mock";
import type { StudentCertificatePageData } from "@/types/student-certificate.types";

export function resolveStudentCertificates(): StudentCertificatePageData {
  return studentCertificateDemo;
}
