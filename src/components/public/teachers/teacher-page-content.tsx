import { TeacherDifferentiatorsSection } from "@/components/public/teachers/teacher-differentiators-section";
import { TeacherPageHero } from "@/components/public/teachers/teacher-page-hero";
import { TeacherTrustedClientsSection } from "@/components/public/teachers/teacher-trusted-clients-section";

export function TeacherPageContent() {
  return (
    <>
      <TeacherPageHero />
      <TeacherTrustedClientsSection />
      <TeacherDifferentiatorsSection />
    </>
  );
}
