interface AdminLearnerProfileViewDetailsButtonProps {
  onClick: () => void;
  label?: string;
}

export function AdminLearnerProfileViewDetailsButton({
  onClick,
  label = "View Details",
}: AdminLearnerProfileViewDetailsButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-[13px] font-semibold text-primary transition-opacity hover:opacity-80 sm:text-[14px]"
    >
      {label}
    </button>
  );
}
