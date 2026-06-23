import { Download, Printer, Share2 } from "lucide-react";
import { cn } from "@/utils";

interface AdminLearnerProfileResumeToolbarProps {
  onPrint: () => void;
  onShare: () => void;
  onDownload: () => void;
  className?: string;
}

const outlineIconButtonClassName =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#e0e0e0] bg-white text-[#1a1a1a] shadow-[0_1px_2px_rgba(35,25,22,0.04)] transition-all duration-150 hover:border-[#c8c8c8] hover:bg-[#f5f5f5] hover:shadow-[0_2px_6px_rgba(35,25,22,0.06)] active:border-[#bdbdbd] active:bg-[#ececec] active:shadow-none";

const downloadIconButtonClassName =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-[0_1px_2px_rgba(35,25,22,0.08)] transition-all duration-150 hover:bg-[#e63e3e] hover:shadow-[0_2px_8px_rgba(230,62,62,0.28)] active:bg-[#d93636] active:shadow-none";

export function AdminLearnerProfileResumeToolbar({
  onPrint,
  onShare,
  onDownload,
  className,
}: AdminLearnerProfileResumeToolbarProps) {
  return (
    <div className={cn("flex items-center gap-2.5 sm:gap-3", className)}>
      <button
        type="button"
        onClick={onPrint}
        aria-label="Print resume"
        className={outlineIconButtonClassName}
      >
        <Printer className="h-[18px] w-[18px]" aria-hidden />
      </button>

      <button
        type="button"
        onClick={onShare}
        aria-label="Share resume"
        className={outlineIconButtonClassName}
      >
        <Share2 className="h-[18px] w-[18px]" aria-hidden />
      </button>

      <button
        type="button"
        onClick={onDownload}
        aria-label="Download resume"
        className={downloadIconButtonClassName}
      >
        <Download className="h-[18px] w-[18px]" aria-hidden />
      </button>
    </div>
  );
}
