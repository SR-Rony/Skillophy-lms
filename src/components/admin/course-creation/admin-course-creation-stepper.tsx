import { Check } from "lucide-react";
import { cn } from "@/utils";

interface AdminCourseCreationStepperProps {
  steps: readonly { id: string; label: string }[];
  activeStepId: string;
}

export function AdminCourseCreationStepper({ steps, activeStepId }: AdminCourseCreationStepperProps) {
  const activeIndex = steps.findIndex((step) => step.id === activeStepId);

  return (
    <div className="overflow-x-auto">
      <div className="flex min-w-[520px] items-center">
        {steps.map((step, index) => {
          const isActive = step.id === activeStepId;
          const isCompleted = index < activeIndex;
          const isLast = index === steps.length - 1;

          return (
            <div key={step.id} className="flex min-w-0 flex-1 items-center">
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2",
                    isActive || isCompleted
                      ? "border-primary bg-primary"
                      : "border-[#d1d5db] bg-white"
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden />
                  ) : (
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full",
                        isActive ? "bg-white" : "bg-[#d1d5db]"
                      )}
                    />
                  )}
                </span>
                <span
                  className={cn(
                    "truncate text-[13px] font-semibold sm:text-[14px]",
                    isActive ? "text-[#1a1a1a]" : "text-[#9ca3af]"
                  )}
                >
                  {step.label}
                </span>
              </div>

              {!isLast && (
                <div
                  className={cn(
                    "mx-4 h-[2px] min-w-[40px] flex-1 rounded-full",
                    index < activeIndex ? "bg-primary" : "bg-[#e5e7eb]"
                  )}
                  aria-hidden
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
