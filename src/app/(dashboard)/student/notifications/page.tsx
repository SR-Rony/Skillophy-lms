import { StudentNotificationsPage } from "@/components/student/notifications";
import { getStudentNotificationsPageData } from "@/data/mock/student-notifications.mock";

export const metadata = { title: "Notifications" };

export default function StudentNotificationsRoute() {
  const data = getStudentNotificationsPageData();

  return <StudentNotificationsPage data={data} />;
}
