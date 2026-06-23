interface AdminLearnerProfileProgressBarProps {
  percent: number;
}

export function AdminLearnerProfileProgressBar({ percent }: AdminLearnerProfileProgressBarProps) {
  return (
    <div className="flex w-full max-w-[240px] items-center gap-3">
      <div className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-[#ececec]">
        <div
          className="h-full min-w-[2px] rounded-full bg-[#1a1a1a] transition-all duration-300"
          style={{ width: `${Math.max(percent, percent > 0 ? 2 : 0)}%` }}
        />
      </div>
      <span className="w-11 shrink-0 text-right text-[13px] font-medium tabular-nums text-[#1a1a1a] sm:text-[14px]">
        {percent}%
      </span>
    </div>
  );
}
