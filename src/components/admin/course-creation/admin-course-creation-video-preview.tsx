"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/utils";

interface AdminCourseCreationVideoPreviewProps {
  videoUrl: string;
  className?: string;
}

function getYoutubeThumbnail(url: string) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
  if (!match?.[1]) {
    return null;
  }

  return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
}

export function AdminCourseCreationVideoPreview({
  videoUrl,
  className,
}: AdminCourseCreationVideoPreviewProps) {
  const thumbnail = getYoutubeThumbnail(videoUrl);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-[#f5f5f5]",
        className
      )}
    >
      {thumbnail ? (
        <Image
          src={thumbnail}
          alt="Course intro video preview"
          fill
          unoptimized
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 480px"
        />
      ) : (
        <div className="absolute inset-0 bg-[#f0f0f0]" />
      )}

      <div className="absolute inset-0 flex items-center justify-center bg-black/10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_24px_rgba(230,62,62,0.35)]">
          <Play className="ml-0.5 h-6 w-6 fill-current" aria-hidden />
        </span>
      </div>
    </div>
  );
}
