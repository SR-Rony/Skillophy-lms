import Image from "next/image";

interface AdminLearnerProfileCourseNameCellProps {
  thumbnail: string;
  title: string;
}

export function AdminLearnerProfileCourseNameCell({
  thumbnail,
  title,
}: AdminLearnerProfileCourseNameCellProps) {
  return (
    <div className="flex min-w-[260px] items-center gap-3">
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#f3f4f6]">
        <Image
          src={thumbnail}
          alt=""
          fill
          unoptimized
          className="object-cover"
          sizes="40px"
        />
      </div>
      <p className="text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">{title}</p>
    </div>
  );
}
