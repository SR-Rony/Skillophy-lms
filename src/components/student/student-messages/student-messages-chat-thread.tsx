import type { StudentChatMessageSender, StudentChatThreadItem } from "@/types/student-messages.types";
import {
  StudentMessagesChatBubble,
  StudentMessagesChatDate,
} from "./student-messages-chat-bubble";
import { cn } from "@/utils";

interface StudentMessagesChatThreadProps {
  thread: StudentChatThreadItem[];
  ownSender?: StudentChatMessageSender;
  className?: string;
}

export function StudentMessagesChatThread({
  thread,
  ownSender = "user",
  className,
}: StudentMessagesChatThreadProps) {
  return (
    <div className={cn("flex flex-col gap-5 px-4 py-5 sm:px-6 sm:py-6", className)}>
      {thread.map((item) =>
        item.type === "date" ? (
          <StudentMessagesChatDate key={item.id} label={item.label} />
        ) : (
          <StudentMessagesChatBubble
            key={item.id}
            message={item.message}
            ownSender={ownSender}
          />
        )
      )}
    </div>
  );
}
