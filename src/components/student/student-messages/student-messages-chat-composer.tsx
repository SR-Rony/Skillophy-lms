"use client";

import { Plus, Send } from "lucide-react";
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
        "border-t border-[#f3f4f6] bg-[#fafafa] px-4 py-4 sm:px-5 sm:py-5",
        className
      )}
    >
      <div className="flex items-center gap-3 rounded-2xl bg-[#f0f0f0] p-2 sm:gap-4 sm:p-2.5">
        <button
          type="button"
          aria-label="Add attachment"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#6b7280] transition-colors hover:text-[#1a1a1a] sm:h-11 sm:w-11"
        >
          <Plus className="h-5 w-5" strokeWidth={2} aria-hidden />
        </button>

        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Enter your message"
          className="min-w-0 flex-1 bg-transparent px-1 text-[13px] font-medium text-[#1a1a1a] placeholder:text-[#9ca3af] focus:outline-none sm:text-[14px]"
        />

        <button
          type="submit"
          aria-label="Send message"
          disabled={!value.trim()}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:h-11 sm:w-11"
        >
          <Send className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
        </button>
      </div>
    </form>
  );
}
