import { Star, UserRound, type LucideProps } from "lucide-react";
import { cn } from "@/utils";

export function AdminTeachersStatIcon({ className, ...props }: LucideProps) {
  return (
    <span className={cn("relative inline-flex h-[22px] w-[22px] shrink-0", className)}>
      <UserRound className="h-full w-full text-white" strokeWidth={2.1} {...props} />
      <Star
        className="absolute -right-[3px] -top-[2px] h-[9px] w-[9px] fill-white text-white"
        strokeWidth={2.4}
        aria-hidden
      />
    </span>
  );
}
