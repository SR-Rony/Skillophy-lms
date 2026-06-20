import type { StudentAcademicGuideItem } from "@/types/student-resources.types";
import { MyResourcesCoverResourceCard } from "./my-resources-cover-resource-card";
import { cn } from "@/utils";

interface MyResourcesAcademicGuideCardProps {
  guide: StudentAcademicGuideItem;
  className?: string;
}

export function MyResourcesAcademicGuideCard({ guide, className }: MyResourcesAcademicGuideCardProps) {
  return (
    <MyResourcesCoverResourceCard
      title={guide.title}
      meta={guide.subtitle}
      coverImage={guide.coverImage}
      downloadUrl={guide.downloadUrl}
      className={className}
    />
  );
}
