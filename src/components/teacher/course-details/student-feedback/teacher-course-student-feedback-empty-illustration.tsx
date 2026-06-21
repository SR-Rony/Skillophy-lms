import Image from "next/image";

interface TeacherCourseStudentFeedbackEmptyIllustrationProps {
  className?: string;
}

export function TeacherCourseStudentFeedbackEmptyIllustration({
  className,
}: TeacherCourseStudentFeedbackEmptyIllustrationProps) {
  return (
    <Image
      src="/images/teacher-course-feedback-empty.png"
      alt=""
      width={160}
      height={140}
      unoptimized
      aria-hidden
      className={className ?? "mx-auto h-auto w-[132px] sm:w-[160px]"}
    />
  );
}
