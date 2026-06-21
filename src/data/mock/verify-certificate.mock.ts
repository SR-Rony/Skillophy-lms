import type { VerifiedCertificateData } from "@/types/verify-certificate.types";

const verifiedCertificateDemo: VerifiedCertificateData = {
  studentName: "Nushrat Jahan",
  studentAvatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&auto=format&fit=crop",
  certificateId: "5739skill52078",
  totalScore: 86.5,
  completedOn: "May 11, 2022",
  courseTitle: "Foundations of User Experience (UX) Design",
};

const verifiedCertificatesById: Record<string, VerifiedCertificateData> = {
  "5739skill52078": verifiedCertificateDemo,
  "14562ebwevgh54s": verifiedCertificateDemo,
};

export function resolveVerifiedCertificate(
  certificateId: string
): VerifiedCertificateData | null {
  const normalizedId = certificateId.trim().toLowerCase();

  if (!normalizedId) {
    return null;
  }

  return (
    Object.entries(verifiedCertificatesById).find(
      ([id]) => id.toLowerCase() === normalizedId
    )?.[1] ?? null
  );
}
