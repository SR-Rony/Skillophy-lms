import { TeacherMessagesPage } from "@/components/teacher/messages";
import { getTeacherMessagesPageData } from "@/data/mock/teacher-messages.mock";

export const metadata = { title: "Messages" };

export default function TeacherChatPage() {
  const data = getTeacherMessagesPageData();

  return <TeacherMessagesPage data={data} />;
}
