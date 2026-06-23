import Image from "next/image";

interface AdminLearnerProfileCourseTeacherCellProps {
  teacherAvatar: string;
  teacherName: string;
}

export function AdminLearnerProfileCourseTeacherCell({
  teacherAvatar,
  teacherName,
}: AdminLearnerProfileCourseTeacherCellProps) {
  return (
    <div className="flex min-w-[180px] items-center gap-2.5">
      <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-[#f3f4f6]">
        <Image
          src={teacherAvatar}
          alt=""
          fill
          unoptimized
          className="object-cover"
          sizes="32px"
        />
      </div>
      <p className="text-[13px] font-medium text-[#757575] sm:text-[14px]">{teacherName}</p>
    </div>
  );
}
