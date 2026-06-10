import { notFound } from "next/navigation";
import { TeacherProfilePageContent } from "@/components/public/teacher-profile";
import {
  getTeacherProfileBySlug,
  teacherProfiles,
} from "@/components/public/teacher-profile/data/teacher-profiles.data";

interface TeacherProfilePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return teacherProfiles.map((profile) => ({ slug: profile.slug }));
}

export async function generateMetadata({ params }: TeacherProfilePageProps) {
  const { slug } = await params;
  const profile = getTeacherProfileBySlug(slug);

  if (!profile) {
    return { title: "Teacher Not Found" };
  }

  return {
    title: `${profile.name} — Teacher Profile`,
    description: profile.credentials.map((credential) => credential.text).join(" "),
  };
}

export default async function TeacherProfilePage({ params }: TeacherProfilePageProps) {
  const { slug } = await params;
  const profile = getTeacherProfileBySlug(slug);

  if (!profile) {
    notFound();
  }

  return <TeacherProfilePageContent profile={profile} />;
}
