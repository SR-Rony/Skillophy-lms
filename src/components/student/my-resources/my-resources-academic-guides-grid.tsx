import type { StudentAcademicGuideItem } from "@/types/student-resources.types";
import { MyResourcesAcademicGuideCard } from "./my-resources-academic-guide-card";
import { cn } from "@/utils";

interface MyResourcesAcademicGuidesGridProps {
  guides: StudentAcademicGuideItem[];
  className?: string;
}

export function MyResourcesAcademicGuidesGrid({
  guides,
  className,
}: MyResourcesAcademicGuidesGridProps) {
  if (guides.length === 0) {
    return null;
  }

  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 sm:gap-5", className)}>
      {guides.map((guide) => (
        <MyResourcesAcademicGuideCard key={guide.id} guide={guide} />
      ))}
    </div>
  );
}
