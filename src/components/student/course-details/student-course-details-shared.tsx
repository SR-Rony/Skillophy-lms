import { Phone } from "lucide-react";
import { cn } from "@/utils";

export function StudentCourseRateCard() {
  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)]">
      <h3 className="text-[15px] font-bold text-[#1a1a1a]">Rate this Course</h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-[#9ca3af]">
        Your constructive feedback and insights will help other learners
      </p>
      <div className="mt-4 flex gap-1" role="group" aria-label="Rate this course">
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            key={index}
            type="button"
            className={cn(
              "text-2xl transition-colors",
              index < 3 ? "text-[#fbbf24]" : "text-[#e5e7eb] hover:text-[#fbbf24]"
            )}
            aria-label={`Rate ${index + 1} stars`}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  );
}

export function StudentCourseSupportContact({ phone }: { phone: string }) {
  return (
    <div className="flex items-start gap-3 px-1 py-1">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ecfdf3]">
        <Phone className="h-4 w-4 text-[#22c55e]" aria-hidden />
      </span>
      <p className="pt-1.5 text-[12px] leading-relaxed text-[#6b7280] sm:text-[13px]">
        For any technical issue call{" "}
        <span className="font-semibold text-[#1a1a1a]">{phone}</span> (10 am to 10 pm)
      </p>
    </div>
  );
}
