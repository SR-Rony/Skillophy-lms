import type { StudentMessagesPageData } from "@/types/student-messages.types";
import { StudentMessagesContent } from "./student-messages-content";

interface StudentMessagesPageProps {
  data: StudentMessagesPageData;
}

export function StudentMessagesPage({ data }: StudentMessagesPageProps) {
  return <StudentMessagesContent data={data} />;
}
