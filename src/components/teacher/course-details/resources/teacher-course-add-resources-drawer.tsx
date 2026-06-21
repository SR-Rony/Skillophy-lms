"use client";

import { useEffect, useId, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronDown, FileText, Trash2, Upload, X } from "lucide-react";
import { formatResourceTopicHeading } from "./teacher-course-resources.utils";
import type {
  TeacherCourseResourceFileType,
  TeacherCourseResourceItem,
  TeacherCourseResourceTopicGroup,
} from "@/types/teacher-course-details.types";
import { cn } from "@/utils";

const SUPPORTED_FORMATS = "PDF, DOC, TXT, RTF";
const ACCEPTED_EXTENSIONS = [".pdf", ".doc", ".docx", ".txt", ".rtf"];

export type TeacherCourseResourcesDrawerMode = "add" | "edit";

interface PendingResourceUpload {
  id: string;
  name: string;
  sizeLabel: string;
  progress: number;
  fileType: TeacherCourseResourceFileType | "doc" | "rtf";
}

interface TeacherCourseAddResourcesDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: TeacherCourseResourcesDrawerMode;
  topicGroups: TeacherCourseResourceTopicGroup[];
  editingMaterial?: TeacherCourseResourceItem | null;
  editingTopicId?: string | null;
  onSaveAdd?: (payload: { topicId: string; files: PendingResourceUpload[] }) => void;
  onSaveEdit?: (payload: { materialId: string; topicId: string; title: string }) => void;
}

function inferUploadFileType(filename: string): PendingResourceUpload["fileType"] {
  const extension = filename.split(".").pop()?.toLowerCase();

  if (extension === "pdf") return "pdf";
  if (extension === "ppt" || extension === "pptx") return "ppt";
  if (extension === "zip") return "zip";
  if (extension === "doc" || extension === "docx") return "doc";
  if (extension === "rtf") return "rtf";
  return "txt";
}

function formatFileSize(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${Math.round(bytes / 1024)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(0)} MB`;
}

function createUploadFromFile(file: File): PendingResourceUpload {
  const isLarge = file.size > 5 * 1024 * 1024;

  return {
    id: `${file.name}-${file.size}-${Date.now()}`,
    name: file.name,
    sizeLabel: formatFileSize(file.size),
    progress: isLarge ? 40 : 100,
    fileType: inferUploadFileType(file.name),
  };
}

function UploadFileIcon({ fileType }: { fileType: PendingResourceUpload["fileType"] }) {
  const label =
    fileType === "doc" ? "DOC" : fileType === "rtf" ? "RTF" : fileType.toUpperCase();

  return (
    <div className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg border border-[#ebe8e6] bg-[#fafafa]">
      <FileText className="h-3.5 w-3.5 text-[#9ca3af]" strokeWidth={2} aria-hidden />
      <span className="mt-0.5 text-[8px] font-bold uppercase tracking-wide text-[#6b7280]">
        {label}
      </span>
    </div>
  );
}

function UploadProgressRow({
  upload,
  onRemove,
}: {
  upload: PendingResourceUpload;
  onRemove: (id: string) => void;
}) {
  return (
    <div className="rounded-xl border border-[#ebe8e6] bg-white px-4 py-3.5">
      <div className="flex items-start gap-3">
        <UploadFileIcon fileType={upload.fileType} />

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">
                {upload.name}
              </p>
              <p className="mt-0.5 text-[12px] font-medium text-[#9ca3af]">{upload.sizeLabel}</p>
            </div>

            <button
              type="button"
              onClick={() => onRemove(upload.id)}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#9ca3af] transition-colors hover:bg-[#fafafa] hover:text-[#6b7280]"
              aria-label={`Remove ${upload.name}`}
            >
              <Trash2 className="h-4 w-4" strokeWidth={2} aria-hidden />
            </button>
          </div>

          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#ececec]">
            <div
              className="h-full rounded-full bg-[#1a1a1a] transition-[width] duration-700 ease-out"
              style={{ width: `${upload.progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function TeacherCourseAddResourcesDrawer({
  open,
  onOpenChange,
  mode,
  topicGroups,
  editingMaterial = null,
  editingTopicId = null,
  onSaveAdd,
  onSaveEdit,
}: TeacherCourseAddResourcesDrawerProps) {
  const topicSelectId = useId();
  const titleInputId = useId();
  const fileInputId = useId();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedTopicId, setSelectedTopicId] = useState(topicGroups[0]?.id ?? "");
  const [resourceTitle, setResourceTitle] = useState("");
  const [uploads, setUploads] = useState<PendingResourceUpload[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const isEditMode = mode === "edit";

  useEffect(() => {
    if (!open) {
      return;
    }

    if (isEditMode && editingMaterial) {
      setSelectedTopicId(editingTopicId ?? topicGroups[0]?.id ?? "");
      setResourceTitle(editingMaterial.title);
      setUploads([]);
    } else {
      setSelectedTopicId(topicGroups[0]?.id ?? "");
      setResourceTitle("");
      setUploads([]);
    }

    setIsDragging(false);
  }, [open, isEditMode, editingMaterial, editingTopicId, topicGroups]);

  function addFiles(fileList: FileList | null) {
    if (!fileList?.length) {
      return;
    }

    const nextUploads = Array.from(fileList).map(createUploadFromFile);
    setUploads((current) => [...current, ...nextUploads]);

    nextUploads
      .filter((upload) => upload.progress < 100)
      .forEach((upload) => {
        window.setTimeout(() => {
          setUploads((current) =>
            current.map((item) =>
              item.id === upload.id ? { ...item, progress: 100 } : item
            )
          );
        }, 900);
      });
  }

  function handleSave(event: React.FormEvent) {
    event.preventDefault();

    if (!selectedTopicId) {
      return;
    }

    if (isEditMode) {
      if (!editingMaterial || !resourceTitle.trim()) {
        return;
      }

      onSaveEdit?.({
        materialId: editingMaterial.id,
        topicId: selectedTopicId,
        title: resourceTitle.trim(),
      });
      onOpenChange(false);
      return;
    }

    if (uploads.length === 0) {
      return;
    }

    onSaveAdd?.({ topicId: selectedTopicId, files: uploads });
    onOpenChange(false);
  }

  const canSave = isEditMode
    ? Boolean(selectedTopicId && resourceTitle.trim())
    : Boolean(selectedTopicId && uploads.length > 0);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="teacher-side-drawer-overlay fixed inset-0 z-50 bg-black/50" />

        <Dialog.Content
          className={cn(
            "teacher-side-drawer-panel fixed inset-y-0 right-0 z-50 flex w-full max-w-[480px] flex-col bg-white shadow-[-12px_0_40px_rgba(0,0,0,0.12)] focus:outline-none will-change-transform"
          )}
        >
          <div className="border-b border-[#f0ebe8] px-5 py-5 sm:px-6 sm:py-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 pr-2">
                <Dialog.Title className="text-[20px] font-bold leading-tight text-[#1a1a1a] sm:text-[22px]">
                  {isEditMode ? "Edit Resource" : "Add Resources"}
                </Dialog.Title>
                <Dialog.Description className="mt-1.5 text-[13px] leading-relaxed text-[#9ca3af] sm:text-[14px]">
                  {isEditMode
                    ? "Update the topic or file name for this resource."
                    : "Add relevant resources here to ensure comprehensive content."}
                </Dialog.Description>
              </div>

              <Dialog.Close
                type="button"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#6b7280] transition-colors hover:bg-[#f7f7f6] hover:text-[#1a1a1a]"
                aria-label="Close resources drawer"
              >
                <X className="h-5 w-5" aria-hidden />
              </Dialog.Close>
            </div>
          </div>

          <form onSubmit={handleSave} className="flex min-h-0 flex-1 flex-col">
            <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5 sm:space-y-6 sm:px-6 sm:py-6">
              <div className="space-y-2">
                <label
                  htmlFor={topicSelectId}
                  className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]"
                >
                  Topic Name
                </label>
                <div className="relative">
                  <select
                    id={topicSelectId}
                    value={selectedTopicId}
                    onChange={(event) => setSelectedTopicId(event.target.value)}
                    className="w-full appearance-none rounded-xl border border-[#ebe8e6] bg-white px-4 py-3 pr-10 text-[14px] font-medium text-[#1a1a1a] outline-none transition-colors focus:border-primary sm:text-[15px]"
                  >
                    {topicGroups.map((group) => (
                      <option key={group.id} value={group.id}>
                        {formatResourceTopicHeading(group)}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9ca3af]"
                    strokeWidth={2}
                    aria-hidden
                  />
                </div>
              </div>

              {isEditMode ? (
                <div className="space-y-2">
                  <label
                    htmlFor={titleInputId}
                    className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]"
                  >
                    Resource Name
                  </label>
                  <input
                    id={titleInputId}
                    type="text"
                    value={resourceTitle}
                    onChange={(event) => setResourceTitle(event.target.value)}
                    className="w-full rounded-xl border border-[#ebe8e6] bg-white px-4 py-3 text-[14px] font-medium text-[#1a1a1a] outline-none transition-colors placeholder:text-[#c4c4c4] focus:border-primary sm:text-[15px]"
                  />
                </div>
              ) : (
                <div className="space-y-3">
                  <input
                    ref={fileInputRef}
                    id={fileInputId}
                    type="file"
                    multiple
                    accept={ACCEPTED_EXTENSIONS.join(",")}
                    className="sr-only"
                    onChange={(event) => {
                      addFiles(event.target.files);
                      event.target.value = "";
                    }}
                  />

                  <div
                    onDragEnter={(event) => {
                      event.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragOver={(event) => {
                      event.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={(event) => {
                      event.preventDefault();
                      setIsDragging(false);
                    }}
                    onDrop={(event) => {
                      event.preventDefault();
                      setIsDragging(false);
                      addFiles(event.dataTransfer.files);
                    }}
                    className={cn(
                      "flex flex-col items-center justify-center rounded-2xl border border-dashed px-6 py-11 text-center transition-colors duration-300",
                      isDragging
                        ? "border-primary bg-[#fff5f5]"
                        : "border-[#d8d2cf] bg-[#fafafa]"
                    )}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0ed] text-primary">
                      <Upload className="h-5 w-5" strokeWidth={2.25} aria-hidden />
                    </div>

                    <p className="mt-4 text-[14px] font-medium text-[#6b7280] sm:text-[15px]">
                      Drag &amp; Drop or{" "}
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="font-semibold text-primary underline-offset-2 hover:underline"
                      >
                        Choose file
                      </button>{" "}
                      to upload
                    </p>
                    <p className="mt-2 text-[12px] font-medium text-[#9ca3af] sm:text-[13px]">
                      Supported formats: {SUPPORTED_FORMATS}
                    </p>
                  </div>

                  {uploads.length > 0 && (
                    <div className="space-y-3">
                      {uploads.map((upload) => (
                        <UploadProgressRow
                          key={upload.id}
                          upload={upload}
                          onRemove={(id) =>
                            setUploads((current) => current.filter((item) => item.id !== id))
                          }
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="border-t border-[#f0ebe8] px-5 py-5 sm:px-6 sm:py-6">
              <button
                type="submit"
                disabled={!canSave}
                className="inline-flex min-w-[140px] items-center justify-center rounded-xl bg-primary px-8 py-3 text-[14px] font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:text-[15px]"
              >
                Save Resource
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
