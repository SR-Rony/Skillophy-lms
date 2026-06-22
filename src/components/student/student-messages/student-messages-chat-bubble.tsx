import Image from "next/image";
import type { StudentChatMessage, StudentChatMessageSender } from "@/types/student-messages.types";
import { cn } from "@/utils";

interface StudentMessagesChatBubbleProps {
  message: StudentChatMessage;
  ownSender?: StudentChatMessageSender;
}

export function StudentMessagesChatBubble({
  message,
  ownSender = "user",
}: StudentMessagesChatBubbleProps) {
  const isOwnMessage = message.sender === ownSender;

  return (
    <div className={cn("flex gap-2.5 sm:gap-3", isOwnMessage ? "flex-row-reverse" : "flex-row")}>
      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full sm:h-10 sm:w-10">
        <Image
          src={message.avatar}
          alt=""
          fill
          className="object-cover"
          sizes="40px"
        />
      </div>

      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 text-[13px] leading-[1.65] text-[#1a1a1a] sm:max-w-[78%] sm:text-[14px] sm:leading-[1.7]",
          isOwnMessage
            ? "bg-[#FDE7E3]"
            : "border border-[#f0f0f0] bg-white shadow-[0_1px_2px_rgba(35,25,22,0.04)]"
        )}
      >
        {message.content}
      </div>
    </div>
  );
}

interface StudentMessagesChatDateProps {
  label: string;
}

export function StudentMessagesChatDate({ label }: StudentMessagesChatDateProps) {
  return (
    <div className="flex justify-center py-1">
      <span className="inline-flex rounded-full bg-[#f3f4f6] px-4 py-1.5 text-[12px] font-semibold text-[#6b7280] sm:text-[13px]">
        {label}
      </span>
    </div>
  );
}
