interface AdminCourseCreationMetaInfoSectionHeaderProps {
  title: string;
}

export function AdminCourseCreationMetaInfoSectionHeader({
  title,
}: AdminCourseCreationMetaInfoSectionHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="shrink-0 text-[16px] font-bold text-[#1a1a1a] sm:text-[18px]">{title}</h2>
      <div className="h-px min-w-0 flex-1 bg-[#ebe8e6]" aria-hidden />
    </div>
  );
}
