"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowUpRight, FileText, Plus, X } from "lucide-react";
import type {
  StudentLiveVideoDiscussionAttachment,
  StudentLiveVideoDiscussionMessage,
} from "@/types/student-live-video.types";
import { cn } from "@/utils";

interface CourseVideoDiscussionSectionProps {
  initialMessages: StudentLiveVideoDiscussionMessage[];
  currentUser: {
    name: string;
    avatar: string;
  };
}

interface PendingAttachment extends StudentLiveVideoDiscussionAttachment {
  file: File;
}

function RemoveAttachmentButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#1a1a1a] shadow-[0_2px_8px_rgba(35,25,22,0.16)] transition-colors hover:bg-[#fafafa]"
      aria-label="Remove attachment"
    >
      <X className="h-3 w-3" strokeWidth={2.5} aria-hidden />
    </button>
  );
}

function ComposerAttachmentPreview({
  attachment,
  onRemove,
}: {
  attachment: PendingAttachment;
  onRemove: () => void;
}) {
  if (attachment.type === "image") {
    return (
      <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl border border-[#ebe8e6] bg-white sm:h-[76px] sm:w-[76px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={attachment.previewUrl} alt={attachment.name} className="h-full w-full object-cover" />
        <RemoveAttachmentButton onClick={onRemove} />
      </div>
    );
  }

  return (
    <div className="relative flex min-w-[148px] max-w-[220px] shrink-0 items-center gap-2.5 rounded-xl border border-[#ebe8e6] bg-white px-3 py-2.5 sm:min-w-[160px] sm:px-3.5 sm:py-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#fff0f0] text-primary">
        <FileText className="h-4 w-4" strokeWidth={2} aria-hidden />
      </span>
      <span className="min-w-0 truncate text-[13px] font-medium text-[#1a1a1a] sm:text-[14px]">
        {attachment.name}
      </span>
      <RemoveAttachmentButton onClick={onRemove} />
    </div>
  );
}

function MessageAttachmentPreview({
  attachment,
}: {
  attachment: StudentLiveVideoDiscussionAttachment;
}) {
  if (attachment.type === "image") {
    return (
      <div className="mt-3 overflow-hidden rounded-xl border border-[#ebe8e6]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={attachment.previewUrl}
          alt={attachment.name}
          className="max-h-[180px] w-full object-cover sm:max-h-[220px]"
        />
      </div>
    );
  }

  return (
    <div className="mt-3 flex items-center gap-2.5 rounded-xl border border-[#ebe8e6] bg-white px-3 py-2.5 sm:px-3.5 sm:py-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#fff0f0] text-primary">
        <FileText className="h-4 w-4" strokeWidth={2} aria-hidden />
      </span>
      <span className="min-w-0 truncate text-[13px] font-medium text-[#1a1a1a] sm:text-[14px]">
        {attachment.name}
      </span>
    </div>
  );
}

function DiscussionMessageBubble({
  message,
}: {
  message: StudentLiveVideoDiscussionMessage;
}) {
  const isCurrentUser = Boolean(message.isCurrentUser);
  const hasText = Boolean(message.content.trim());
  const hasAttachments = Boolean(message.attachments?.length);

  return (
    <div className={cn("flex gap-3 sm:gap-4", isCurrentUser ? "flex-row-reverse" : "flex-row")}>
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full sm:h-11 sm:w-11">
        <Image
          src={message.avatar}
          alt={message.authorName}
          fill
          className="object-cover"
          sizes="44px"
        />
      </div>

      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 sm:max-w-[78%] sm:px-5 sm:py-4",
          isCurrentUser ? "bg-[#fff0f0]" : "bg-[#f3f4f6]"
        )}
      >
        <p
          className={cn(
            "text-[14px] font-bold leading-snug text-[#1a1a1a] sm:text-[15px]",
            isCurrentUser && "text-right"
          )}
        >
          {message.authorName}
        </p>

        {hasText && (
          <p
            className={cn(
              "mt-1.5 text-[13px] leading-[1.65] text-[#1a1a1a] sm:text-[14px] sm:leading-[1.7]",
              isCurrentUser && "text-right"
            )}
          >
            {message.content}
          </p>
        )}

        {hasAttachments &&
          message.attachments?.map((attachment) => (
            <MessageAttachmentPreview key={attachment.id} attachment={attachment} />
          ))}
      </div>
    </div>
  );
}

export function CourseVideoDiscussionSection({
  initialMessages,
  currentUser,
}: CourseVideoDiscussionSectionProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pendingAttachmentsRef = useRef<PendingAttachment[]>([]);
  const [messages, setMessages] = useState(initialMessages);
  const [draftMessage, setDraftMessage] = useState("");
  const [pendingAttachments, setPendingAttachments] = useState<PendingAttachment[]>([]);

  pendingAttachmentsRef.current = pendingAttachments;

  useEffect(() => {
    return () => {
      pendingAttachmentsRef.current.forEach((attachment) => {
        URL.revokeObjectURL(attachment.previewUrl);
      });
    };
  }, []);

  function handleAddAttachmentClick() {
    fileInputRef.current?.click();
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    if (files.length === 0) {
      return;
    }

    const nextAttachments = files.map((file) => {
      const isImage = file.type.startsWith("image/");
      const type = isImage ? "image" : "pdf";

      return {
        id: `attachment-${file.name}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        type,
        name: file.name,
        previewUrl: URL.createObjectURL(file),
        file,
      } satisfies PendingAttachment;
    });

    setPendingAttachments((current) => [...current, ...nextAttachments]);
    event.target.value = "";
  }

  function handleRemoveAttachment(attachmentId: string) {
    setPendingAttachments((current) => {
      const attachment = current.find((item) => item.id === attachmentId);
      if (attachment) {
        URL.revokeObjectURL(attachment.previewUrl);
      }

      return current.filter((item) => item.id !== attachmentId);
    });
  }

  function handleSend(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = draftMessage.trim();
    const hasAttachments = pendingAttachments.length > 0;

    if (!trimmed && !hasAttachments) {
      return;
    }

    const sentAttachments = pendingAttachments.map(({ file: _file, ...attachment }) => attachment);

    setMessages((current) => [
      ...current,
      {
        id: `discussion-${Date.now()}`,
        authorName: currentUser.name,
        avatar: currentUser.avatar,
        content: trimmed,
        isCurrentUser: true,
        attachments: hasAttachments ? sentAttachments : undefined,
      },
    ]);

    setDraftMessage("");
    setPendingAttachments([]);
  }

  const canSend = Boolean(draftMessage.trim()) || pendingAttachments.length > 0;

  return (
    <section className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
      <div className="scrollbar-hide max-h-[520px] space-y-5 overflow-y-auto px-4 py-5 sm:space-y-6 sm:px-5 sm:py-6 lg:max-h-[560px]">
        {messages.map((message) => (
          <DiscussionMessageBubble key={message.id} message={message} />
        ))}
      </div>

      <form
        onSubmit={handleSend}
        className="border-t border-[#f0ece9] bg-[#fafafa] px-4 py-4 sm:px-5 sm:py-5"
      >
        <div className="rounded-2xl bg-[#f0f0f0] p-2 sm:p-2.5">
          {pendingAttachments.length > 0 && (
            <div className="mb-2 flex flex-wrap gap-2.5 px-1 pt-1 sm:mb-2.5 sm:gap-3">
              {pendingAttachments.map((attachment) => (
                <ComposerAttachmentPreview
                  key={attachment.id}
                  attachment={attachment}
                  onRemove={() => handleRemoveAttachment(attachment.id)}
                />
              ))}
            </div>
          )}

          <div className="flex items-center gap-3 sm:gap-4">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,.pdf,application/pdf"
              multiple
              className="sr-only"
              onChange={handleFileChange}
            />

            <button
              type="button"
              onClick={handleAddAttachmentClick}
              aria-label="Add attachment"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#6b7280] transition-colors hover:text-[#1a1a1a] sm:h-11 sm:w-11"
            >
              <Plus className="h-5 w-5" strokeWidth={2} aria-hidden />
            </button>

            <input
              type="text"
              value={draftMessage}
              onChange={(event) => setDraftMessage(event.target.value)}
              placeholder="Enter your message"
              className="min-w-0 flex-1 rounded-xl bg-white px-4 py-2.5 text-[13px] font-medium text-[#1a1a1a] placeholder:text-[#9ca3af] focus:outline-none sm:text-[14px]"
            />

            <button
              type="submit"
              aria-label="Send message"
              disabled={!canSend}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:h-11 sm:w-11"
            >
              <ArrowUpRight className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
