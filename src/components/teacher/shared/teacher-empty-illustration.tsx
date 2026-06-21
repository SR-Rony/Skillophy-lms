import Image from "next/image";
import { cn } from "@/utils";

const teacherEmptyImage = "/images/teacher-empty.png";

interface TeacherEmptyIllustrationProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-[88px] w-[88px] sm:h-24 sm:w-24",
  md: "h-auto w-[132px] sm:w-[148px]",
  lg: "h-auto w-[104px] sm:w-[118px]",
};

export function TeacherEmptyIllustration({
  className,
  size = "md",
}: TeacherEmptyIllustrationProps) {
  return (
    <Image
      src={teacherEmptyImage}
      alt=""
      width={160}
      height={140}
      className={cn("object-contain", sizeClasses[size], className)}
      priority
    />
  );
}

export { teacherEmptyImage };
