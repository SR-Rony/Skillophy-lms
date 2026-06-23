interface AdminLearnerProfileTableEmptyStateProps {
  message: string;
}

export function AdminLearnerProfileTableEmptyState({
  message,
}: AdminLearnerProfileTableEmptyStateProps) {
  return (
    <div className="rounded-2xl border border-dashed border-[#ebe8e6] px-6 py-12 text-center">
      <p className="text-[14px] font-medium text-[#9ca3af]">{message}</p>
    </div>
  );
}
