interface AdminLearnerProfileTopicNameCellProps {
  label: string;
  title: string;
}

export function AdminLearnerProfileTopicNameCell({
  label,
  title,
}: AdminLearnerProfileTopicNameCellProps) {
  return (
    <div className="flex h-full max-w-full flex-col justify-center pr-1">
      <p className="text-[13px] font-bold leading-[18px] text-[#1a1a1a] sm:text-[14px]">{label}</p>
      <p className="mt-0.5 line-clamp-1 text-[12px] font-medium leading-[16px] text-[#6b7280] sm:text-[13px]">
        {title}
      </p>
    </div>
  );
}
