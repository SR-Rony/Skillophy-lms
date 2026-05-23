import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Messages" };

export default function StudentChatPage() {
  return (
    <ModulePlaceholder
      title="Messages"
      description="Chat with instructors and peers."
      feature="chat"
    />
  );
}
