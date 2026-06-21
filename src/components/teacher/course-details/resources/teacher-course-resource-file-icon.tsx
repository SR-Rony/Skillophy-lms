import type { TeacherCourseResourceFileType } from "@/types/teacher-course-details.types";
import { cn } from "@/utils";

const fileTypeLabels: Record<TeacherCourseResourceFileType, string> = {
  pdf: "PDF",
  ppt: "PPT",
  txt: "TXT",
  zip: "ZIP",
};

interface TeacherCourseResourceFileIconProps {
  fileType: TeacherCourseResourceFileType;
  className?: string;
}

export function TeacherCourseResourceFileIcon({
  fileType,
  className,
}: TeacherCourseResourceFileIconProps) {
  return (
    <div
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f3f4f6]",
        className
      )}
    >
      <span className="text-[10px] font-bold uppercase tracking-wide text-[#6b7280]">
        {fileTypeLabels[fileType]}
      </span>
    </div>
  );
}
