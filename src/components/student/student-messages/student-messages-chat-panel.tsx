"use client";

import { useEffect, useState } from "react";
import type {
  StudentChatThreadItem,
  StudentMessageCourse,
  StudentMessagesEmptyState,
} from "@/types/student-messages.types";
import { StudentMessagesChatComposer } from "./student-messages-chat-composer";
import { StudentMessagesChatHeader } from "./student-messages-chat-header";
import { StudentMessagesChatThread } from "./student-messages-chat-thread";
import { StudentMessagesPanel } from "./student-messages-panel";
import { cn } from "@/utils";

const userAvatar = "https://api.dicebear.com/9.x/avataaars/png?seed=StudentUser";

const messagesScrollAreaClassName =
  "min-h-0 flex-1 overflow-y-auto overscroll-contain [scrollbar-color:#9ca3af_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#9ca3af] [&::-webkit-scrollbar-track]:bg-transparent";

interface StudentMessagesChatPanelProps {
  course: StudentMessageCourse | null;
  emptyState: StudentMessagesEmptyState;
  className?: string;
}

export function StudentMessagesChatPanel({
  course,
  emptyState,
  className,
}: StudentMessagesChatPanelProps) {
  const [draftMessage, setDraftMessage] = useState("");
  const [thread, setThread] = useState<StudentChatThreadItem[]>([]);

  useEffect(() => {
    if (!course) {
      setThread([]);
      setDraftMessage("");
      return;
    }

    setThread(course.thread);
    setDraftMessage("");
  }, [course]);

  if (!course) {
    return <StudentMessagesPanel emptyState={emptyState} className={className} />;
  }

  function handleSend() {
    const trimmed = draftMessage.trim();
    if (!trimmed) return;

    setThread((current) => [
      ...current,
      {
        type: "message",
        id: `msg-${Date.now()}`,
        message: {
          id: `msg-${Date.now()}`,
          sender: "user",
          content: trimmed,
          avatar: userAvatar,
        },
      },
    ]);
    setDraftMessage("");
  }

  return (
    <section
      className={cn(
        "flex h-[520px] max-h-[calc(100vh-220px)] flex-col overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)] lg:h-[620px]",
        className
      )}
    >
      <StudentMessagesChatHeader course={course} className="shrink-0" />

      {thread.length > 0 ? (
        <div className={messagesScrollAreaClassName}>
          <StudentMessagesChatThread thread={thread} />
        </div>
      ) : (
        <div className="flex min-h-0 flex-1 items-center justify-center px-6">
          <p className="text-center text-[14px] font-medium text-[#9ca3af]">
            {emptyState.message}
          </p>
        </div>
      )}

      <StudentMessagesChatComposer
        value={draftMessage}
        onChange={setDraftMessage}
        onSend={handleSend}
        className="shrink-0"
      />
    </section>
  );
}
