import Image from "next/image";
import { cn } from "@/utils";

export const TEACHER_CTA_IMAGE = "/images/teacher-cta.png";

interface TeacherPortraitProps {
  alt?: string;
  className?: string;
  imageSrc?: string;
}

export function TeacherPortrait({
  alt = "Teacher holding course material",
  className,
  imageSrc = TEACHER_CTA_IMAGE,
}: TeacherPortraitProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[430px]", className)}>
      <div className="absolute inset-x-2 bottom-0 h-[72%] rounded-[40px] bg-[#ffca18] sm:rounded-[48px]" />
      <div className="relative h-full min-h-[260px] w-full">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-contain object-bottom"
          sizes="(max-width: 1024px) 72vw, 280px"
        />
      </div>
    </div>
  );
}
