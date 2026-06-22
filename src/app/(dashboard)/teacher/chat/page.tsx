import { TeacherMessagesPage } from "@/components/teacher/messages";
import { teacherMessagesService } from "@/services/teacher";

export const metadata = { title: "Messages" };

export default async function TeacherChatPage() {
  const data = await teacherMessagesService.getMessages();

  return <TeacherMessagesPage data={data} />;
}
