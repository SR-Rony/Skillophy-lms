import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Messages" };

export default function TeacherChatPage() {
  return (
    <ModulePlaceholder
      title="Messages"
      description="Communicate with your students."
      feature="chat"
    />
  );
}
