"use client";

import { useEffect, useState, type FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Check, X } from "lucide-react";
import { cn } from "@/utils";

const reportProblemOptions = [
  { id: "wrong-information", label: "Wrong information" },
  { id: "audio-problem", label: "Audio problem" },
  { id: "wrong-title", label: "Wrong title" },
  { id: "network-issue", label: "Network issue" },
  { id: "video-not-clear", label: "Video is not clear" },
  { id: "concept-not-clear", label: "Concept is not clear" },
  { id: "incomplete-concept", label: "Incomplete concept" },
] as const;

interface StudentCourseVideoReportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function ReportProblemCheckbox({
  id,
  label,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-center gap-3">
      <span
        className={cn(
          "flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border-2 transition-colors",
          checked ? "border-[#1a1a1a] bg-[#1a1a1a]" : "border-[#c4c4c4] bg-white"
        )}
      >
        {checked ? <Check className="h-2.5 w-2.5 stroke-[3] text-white" aria-hidden /> : null}
      </span>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="sr-only"
      />
      <span className="text-[14px] font-medium text-[#1a1a1a] sm:text-[15px]">{label}</span>
    </label>
  );
}

export function StudentCourseVideoReportModal({
  open,
  onOpenChange,
}: StudentCourseVideoReportModalProps) {
  const [selectedProblems, setSelectedProblems] = useState<string[]>([]);
  const [otherProblem, setOtherProblem] = useState("");

  useEffect(() => {
    if (!open) {
      return;
    }

    setSelectedProblems([]);
    setOtherProblem("");
  }, [open]);

  function toggleProblem(problemId: string, checked: boolean) {
    setSelectedProblems((current) =>
      checked ? [...current, problemId] : current.filter((id) => id !== problemId)
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onOpenChange(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 flex max-h-[calc(100vh-2rem)] w-[calc(100%-2rem)] max-w-[560px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.25)] focus:outline-none">
          <div className="border-b border-[#f0ece9] px-5 py-5 sm:px-7 sm:py-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1 pr-2">
                <Dialog.Title className="text-[20px] font-bold leading-tight text-[#1a1a1a] sm:text-[22px]">
                  Report
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-[13px] leading-relaxed text-[#757575] sm:text-[14px]">
                  Please help us to find out the problem
                </Dialog.Description>
              </div>

              <Dialog.Close
                type="button"
                onClick={() => onOpenChange(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#9a908c] transition hover:bg-[#faf9f8] hover:text-[#1a1a1a]"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" aria-hidden />
              </Dialog.Close>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
            <div className="scrollbar-hide space-y-4 overflow-y-auto px-5 py-5 sm:space-y-[18px] sm:px-7 sm:py-6">
              {reportProblemOptions.map((option) => (
                <ReportProblemCheckbox
                  key={option.id}
                  id={`report-${option.id}`}
                  label={option.label}
                  checked={selectedProblems.includes(option.id)}
                  onChange={(checked) => toggleProblem(option.id, checked)}
                />
              ))}

              <div className="border-t border-[#f0ece9] pt-5 sm:pt-6">
                <label
                  htmlFor="report-other-problem"
                  className="mb-2 block text-[13px] font-medium text-[#9ca3af] sm:text-[14px]"
                >
                  Other problem (optional)
                </label>
                <textarea
                  id="report-other-problem"
                  value={otherProblem}
                  onChange={(event) => setOtherProblem(event.target.value)}
                  rows={5}
                  placeholder="During today's online class, I experienced an internet connection drop at approximately 15 minutes. This resulted in me being disconnected from the video conferencing platform and missing 45 minutes of the lecture."
                  className="w-full resize-none rounded-xl border border-[#ebe8e6] bg-white px-4 py-3 text-[14px] leading-relaxed text-[#1a1a1a] outline-none transition-colors placeholder:text-[#b0b7c3] focus:border-[#1a1a1a]"
                />
              </div>
            </div>

            <div className="border-t border-[#f0ece9] px-5 py-5 sm:px-7 sm:py-6">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3.5 text-[14px] font-bold text-white transition-colors hover:bg-primary/90 sm:text-[15px]"
              >
                Submit
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
