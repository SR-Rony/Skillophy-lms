"use client";

import { useRef } from "react";
import { Upload } from "lucide-react";

interface AdminTemplateIconUploadProps {
  fileName: string | null;
  onChange: (fileName: string | null) => void;
}

export function AdminTemplateIconUpload({ fileName, onChange }: AdminTemplateIconUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFiles(files: FileList | null) {
    const selected = files?.[0];
    if (!selected) {
      return;
    }

    onChange(selected.name);
  }

  return (
    <div className="space-y-3">
      <div
        className="rounded-2xl border border-dashed border-[#d1d5db] bg-white px-5 py-8 text-center sm:px-6 sm:py-10"
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => {
          event.preventDefault();
          handleFiles(event.dataTransfer.files);
        }}
      >
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fff5f5]">
          <Upload className="h-5 w-5 text-primary" aria-hidden />
        </span>

        <p className="mt-4 text-[13px] text-[#757575] sm:text-[14px]">
          Drag &amp; Drop or{" "}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:text-[#e63e3e]"
          >
            Choose Icon
          </button>{" "}
          to upload
        </p>

        <p className="mt-2 text-[12px] text-[#9ca3af] sm:text-[13px]">
          Supported formats: JPEG, PNG, SVG
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.svg,image/jpeg,image/png,image/svg+xml"
          className="sr-only"
          onChange={(event) => {
            handleFiles(event.target.files);
            event.target.value = "";
          }}
        />
      </div>

      {fileName ? (
        <div className="rounded-xl border border-[#ebe8e6] bg-white px-4 py-3">
          <p className="truncate text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">{fileName}</p>
        </div>
      ) : null}
    </div>
  );
}
