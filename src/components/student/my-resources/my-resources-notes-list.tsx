import type { StudentResourceNoteItem } from "@/types/student-resources.types";
import { MyResourcesNoteItem } from "./my-resources-note-item";
import { cn } from "@/utils";

interface MyResourcesNotesListProps {
  notes: StudentResourceNoteItem[];
  className?: string;
}

export function MyResourcesNotesList({ notes, className }: MyResourcesNotesListProps) {
  if (notes.length === 0) {
    return null;
  }

  return (
    <div className={cn("space-y-0", className)}>
      {notes.map((note, index) => (
        <div
          key={note.id}
          className={cn(
            "py-7 sm:py-8",
            index > 0 && "border-t border-[#f0f0f0]"
          )}
        >
          <MyResourcesNoteItem note={note} />
        </div>
      ))}
    </div>
  );
}
