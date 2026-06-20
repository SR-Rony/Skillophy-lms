import type { StudentResourceFileType } from "@/types/student-resources.types";
import { cn } from "@/utils";

const fileTypeLabels: Record<StudentResourceFileType, string> = {
  pdf: "PDF",
  ppt: "PPT",
  txt: "TXT",
  zip: "ZIP",
};

interface MyResourcesFileIconProps {
  fileType: StudentResourceFileType;
  className?: string;
}

export function MyResourcesFileIcon({ fileType, className }: MyResourcesFileIconProps) {
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
