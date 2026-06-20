import type { StudentCertificateItem } from "@/types/student-certificate.types";
import { MyCertificateCard } from "./my-certificate-card";
import { cn } from "@/utils";

interface MyCertificateListProps {
  certificates: StudentCertificateItem[];
  className?: string;
}

export function MyCertificateList({ certificates, className }: MyCertificateListProps) {
  return (
    <div className={cn("space-y-5 sm:space-y-6", className)}>
      {certificates.map((certificate) => (
        <MyCertificateCard key={certificate.id} certificate={certificate} />
      ))}
    </div>
  );
}
