interface AdminTeacherProfileTabPlaceholderProps {
  title: string;
}

export function AdminTeacherProfileTabPlaceholder({ title }: AdminTeacherProfileTabPlaceholderProps) {
  return (
    <div className="px-6 py-16 text-center">
      <p className="text-[14px] font-medium text-[#9ca3af]">{title} coming soon.</p>
    </div>
  );
}
