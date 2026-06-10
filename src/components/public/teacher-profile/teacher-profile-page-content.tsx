import { TeacherProfileAboutSection } from "@/components/public/teacher-profile/teacher-profile-about-section";
import { TeacherProfileCoursesSection } from "@/components/public/teacher-profile/teacher-profile-courses-section";
import { TeacherProfileHero } from "@/components/public/teacher-profile/teacher-profile-hero";
import { TeacherProfileStatisticsSection } from "@/components/public/teacher-profile/teacher-profile-statistics-section";
import type { TeacherProfile } from "@/types/teacher-profile.types";

interface TeacherProfilePageContentProps {
  profile: TeacherProfile;
}

export function TeacherProfilePageContent({ profile }: TeacherProfilePageContentProps) {
  return (
    <>
      <TeacherProfileHero profile={profile} />
      <TeacherProfileStatisticsSection />
      <TeacherProfileAboutSection about={profile.about} />
      <TeacherProfileCoursesSection />
    </>
  );
}
