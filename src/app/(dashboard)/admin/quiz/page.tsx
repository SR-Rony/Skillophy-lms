import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Today's Quiz" };

export default function AdminQuizPage() {
  return (
    <ModulePlaceholder
      title="Today's Quiz"
      description="Manage daily quiz questions and student submissions."
      feature="admin/quiz"
    />
  );
}
