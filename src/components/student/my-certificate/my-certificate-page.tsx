import type { StudentCertificatePageData } from "@/types/student-certificate.types";
import { MyCertificateContent } from "./my-certificate-content";

interface MyCertificatePageProps {
  data: StudentCertificatePageData;
}

export function MyCertificatePage({ data }: MyCertificatePageProps) {
  return <MyCertificateContent data={data} />;
}
