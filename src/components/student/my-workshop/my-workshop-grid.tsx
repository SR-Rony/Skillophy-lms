import type { StudentWorkshopItem } from "@/types/student-workshop.types";
import { MyWorkshopCard } from "./my-workshop-card";
import { cn } from "@/utils";

interface MyWorkshopGridProps {
  workshops: StudentWorkshopItem[];
  isCompleted?: boolean;
  className?: string;
}

export function MyWorkshopGrid({ workshops, isCompleted = false, className }: MyWorkshopGridProps) {
  return (
    <div
      className={cn(
        "grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7",
        className
      )}
    >
      {workshops.map((workshop) => (
        <MyWorkshopCard key={workshop.id} workshop={workshop} isCompleted={isCompleted} />
      ))}
    </div>
  );
}
