"use client";

import { useEffect, useRef, useState } from "react";
import type {
  StudentChatMessageSender,
  StudentChatThreadItem,
  StudentMessageCourse,
  StudentMessagesEmptyState,
} from "@/types/student-messages.types";
import { StudentMessagesChatComposer } from "./student-messages-chat-composer";
import { StudentMessagesChatHeader } from "./student-messages-chat-header";
import { StudentMessagesChatThread } from "./student-messages-chat-thread";
import { StudentMessagesPanel } from "./student-messages-panel";
import { MessagesScrollArea } from "./messages-scroll-area";
import { messagesPanelClassName } from "./messages-layout";
import { cn } from "@/utils";

const userAvatar = "https://api.dicebear.com/9.x/avataaars/png?seed=StudentUser";

interface StudentMessagesChatPanelProps {
  course: StudentMessageCourse | null;
  emptyState: StudentMessagesEmptyState;
  className?: string;
  sendAs?: StudentChatMessageSender;
  senderAvatar?: string;
}

export function StudentMessagesChatPanel({
  course,
  emptyState,
  className,
  sendAs = "user",
  senderAvatar = userAvatar,
}: StudentMessagesChatPanelProps) {
  const [draftMessage, setDraftMessage] = useState("");
  const [thread, setThread] = useState<StudentChatThreadItem[]>([]);
  const threadScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!course) {
      setThread([]);
      setDraftMessage("");
      return;
    }

    setThread(course.thread);
    setDraftMessage("");
  }, [course]);

  useEffect(() => {
    const scrollArea = threadScrollRef.current;
    if (!scrollArea) return;

    scrollArea.scrollTo({ top: scrollArea.scrollHeight, behavior: "smooth" });
  }, [thread]);

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
          sender: sendAs,
          content: trimmed,
          avatar: senderAvatar,
        },
      },
    ]);
    setDraftMessage("");
  }

  return (
    <section className={cn(messagesPanelClassName, className)}>
      <StudentMessagesChatHeader course={course} className="shrink-0" />

      {thread.length > 0 ? (
        <MessagesScrollArea ref={threadScrollRef}>
          <StudentMessagesChatThread thread={thread} ownSender={sendAs} />
        </MessagesScrollArea>
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
