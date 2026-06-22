"use client";

import { ArrowUpRight, Plus } from "lucide-react";
import { cn } from "@/utils";

interface StudentMessagesChatComposerProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  className?: string;
}

export function StudentMessagesChatComposer({
  value,
  onChange,
  onSend,
  className,
}: StudentMessagesChatComposerProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSend();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "border-t border-[#f0f0f0] bg-white px-4 py-4 sm:px-6 sm:py-5",
        className
      )}
    >
      <div className="flex items-center gap-2.5 rounded-2xl bg-[#f5f5f5] p-2 sm:gap-3 sm:p-2.5">
        <button
          type="button"
          aria-label="Add attachment"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#6b7280] shadow-[0_1px_2px_rgba(35,25,22,0.06)] transition-colors hover:text-[#1a1a1a] sm:h-11 sm:w-11"
        >
          <Plus className="h-5 w-5" strokeWidth={2} aria-hidden />
        </button>

        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Enter your message"
          className="min-w-0 flex-1 rounded-xl border border-[#ebe8e6] bg-white px-4 py-2.5 text-[13px] font-medium text-[#1a1a1a] placeholder:text-[#9ca3af] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 sm:py-3 sm:text-[14px]"
        />

        <button
          type="submit"
          aria-label="Send message"
          disabled={!value.trim()}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:h-11 sm:w-11"
        >
          <ArrowUpRight className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden />
        </button>
      </div>
    </form>
  );
}
