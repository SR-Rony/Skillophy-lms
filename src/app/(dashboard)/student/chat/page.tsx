import { StudentMessagesPage } from "@/components/student/student-messages";
import { studentMessagesService } from "@/services/student-messages.service";

export async function generateMetadata() {
  const data = await studentMessagesService.getMessages();

  return {
    title: data.title,
  };
}

export default async function StudentChatPage() {
  const data = await studentMessagesService.getMessages();

  return <StudentMessagesPage data={data} />;
}
