import Link from "next/link";
import { Download } from "lucide-react";
import type { StudentLearningMaterialItem } from "@/types/student-resources.types";
import { MyResourcesFileIcon } from "./my-resources-file-icon";
import { cn } from "@/utils";

interface MyResourcesMaterialCardProps {
  item: StudentLearningMaterialItem;
  className?: string;
}

export function MyResourcesMaterialCard({ item, className }: MyResourcesMaterialCardProps) {
  return (
    <article
      className={cn(
        "flex items-center gap-3 rounded-2xl border border-[#ebe8e6] bg-white p-4 shadow-[0_8px_30px_rgba(35,25,22,0.04)] sm:gap-4 sm:p-5",
        className
      )}
    >
      <MyResourcesFileIcon fileType={item.fileType} />

      <p className="min-w-0 flex-1 text-[13px] font-medium leading-snug text-[#1a1a1a] sm:text-[14px]">
        {item.title}
      </p>

      <Link
        href={item.downloadUrl}
        aria-label={`Download ${item.title}`}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition-opacity hover:opacity-90"
      >
        <Download className="h-5 w-5" strokeWidth={2} aria-hidden />
      </Link>
    </article>
  );
}
