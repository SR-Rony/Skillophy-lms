import { Suspense } from "react";
import { TeacherMessagesPage } from "@/components/teacher/messages";
import { adminMessagesService } from "@/services/admin";

export const metadata = { title: "Messages" };

export default async function AdminMessagesPage() {
  const data = await adminMessagesService.getMessages();

  return (
    <Suspense fallback={<div className="min-h-[320px] rounded-2xl bg-white" />}>
      <TeacherMessagesPage data={data} />
    </Suspense>
  );
}
