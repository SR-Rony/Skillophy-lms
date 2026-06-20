import { MyCertificatePage } from "@/components/student/my-certificate";
import { studentCertificateService } from "@/services/student-certificate.service";

export async function generateMetadata() {
  const data = await studentCertificateService.getCertificates();

  return {
    title: data.title,
  };
}

export default async function StudentCertificatesPage() {
  const data = await studentCertificateService.getCertificates();

  return <MyCertificatePage data={data} />;
}
