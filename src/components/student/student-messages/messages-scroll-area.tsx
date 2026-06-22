import { forwardRef, type ReactNode } from "react";
import { cn } from "@/utils";

/** Production-style scrollbar for course list + chat thread (student + teacher). */
export const messagesScrollAreaClassName =
  "min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1 [scrollbar-gutter:stable] [scrollbar-color:#6b7280_#f3f4f6] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#f3f4f6] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#9ca3af] hover:[&::-webkit-scrollbar-thumb]:bg-[#6b7280]";

interface MessagesScrollAreaProps {
  children: ReactNode;
  className?: string;
}

export const MessagesScrollArea = forwardRef<HTMLDivElement, MessagesScrollAreaProps>(
  function MessagesScrollArea({ children, className }, ref) {
    return (
      <div ref={ref} className={cn(messagesScrollAreaClassName, className)}>
        {children}
      </div>
    );
  }
);
