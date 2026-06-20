import type { StudentSkillBookItem } from "@/types/student-resources.types";
import { MyResourcesCoverResourceCard } from "./my-resources-cover-resource-card";
import { cn } from "@/utils";

interface MyResourcesSkillBookCardProps {
  book: StudentSkillBookItem;
  className?: string;
}

export function MyResourcesSkillBookCard({ book, className }: MyResourcesSkillBookCardProps) {
  return (
    <MyResourcesCoverResourceCard
      title={book.title}
      meta={`By ${book.author}`}
      coverImage={book.coverImage}
      downloadUrl={book.downloadUrl}
      className={className}
    />
  );
}
