import type { StudentChatThreadItem } from "@/types/student-messages.types";
import {
  StudentMessagesChatBubble,
  StudentMessagesChatDate,
} from "./student-messages-chat-bubble";
import { cn } from "@/utils";

interface StudentMessagesChatThreadProps {
  thread: StudentChatThreadItem[];
  className?: string;
}

export function StudentMessagesChatThread({ thread, className }: StudentMessagesChatThreadProps) {
  return (
    <div className={cn("flex flex-col gap-4 px-4 py-5 sm:px-5 sm:py-6", className)}>
      {thread.map((item) =>
        item.type === "date" ? (
          <StudentMessagesChatDate key={item.id} label={item.label} />
        ) : (
          <StudentMessagesChatBubble key={item.id} message={item.message} />
        )
      )}
    </div>
  );
}
