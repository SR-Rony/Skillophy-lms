import type {
  AdminSupportTicketMessageSender,
  AdminSupportTicketThreadItem,
} from "@/types/admin-support-management.types";
import {
  StudentMessagesChatBubble,
  StudentMessagesChatDate,
} from "@/components/student/student-messages/student-messages-chat-bubble";
import { cn } from "@/utils";

interface AdminSupportTicketDetailThreadProps {
  thread: AdminSupportTicketThreadItem[];
  className?: string;
}

function mapSenderToChatSender(sender: AdminSupportTicketMessageSender) {
  return sender === "user" ? "user" : "instructor";
}

export function AdminSupportTicketDetailThread({
  thread,
  className,
}: AdminSupportTicketDetailThreadProps) {
  return (
    <div className={cn("flex flex-col gap-5 px-4 py-5 sm:px-6 sm:py-6", className)}>
      {thread.map((item) =>
        item.type === "date" ? (
          <StudentMessagesChatDate key={item.id} label={item.label} />
        ) : (
          <StudentMessagesChatBubble
            key={item.id}
            message={{
              ...item.message,
              sender: mapSenderToChatSender(item.message.sender),
            }}
            ownSender="instructor"
          />
        )
      )}
    </div>
  );
}
