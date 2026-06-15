import { Container } from "@/components/shared";
import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Messages" };

export default function StudentChatPage() {
  return (
    <Container className="py-8">
      <ModulePlaceholder
        title="Messages"
        description="Chat with instructors and peers."
        feature="chat"
      />
    </Container>
  );
}
