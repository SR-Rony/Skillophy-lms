import type { StudentSkillBookItem } from "@/types/student-resources.types";
import { MyResourcesSkillBookCard } from "./my-resources-skill-book-card";
import { cn } from "@/utils";

interface MyResourcesSkillBooksGridProps {
  books: StudentSkillBookItem[];
  className?: string;
}

export function MyResourcesSkillBooksGrid({ books, className }: MyResourcesSkillBooksGridProps) {
  if (books.length === 0) {
    return null;
  }

  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 sm:gap-5", className)}>
      {books.map((book) => (
        <MyResourcesSkillBookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
