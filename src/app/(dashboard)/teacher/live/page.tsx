import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Live Classes" };

export default function TeacherLivePage() {
  return (
    <ModulePlaceholder
      title="Live classes"
      description="Schedule and host live sessions."
      feature="live-class"
    />
  );
}
