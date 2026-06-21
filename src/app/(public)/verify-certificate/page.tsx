import { VerifyCertificatePageContent } from "@/components/public/verify-certificate";

export const metadata = {
  title: "Verify Certificate",
  description:
    "Enter a certificate ID to verify Skillophy course completion certificates quickly and securely.",
};

export default function VerifyCertificatePage() {
  return <VerifyCertificatePageContent />;
}
