import { TeacherMyWorkshopPage } from "@/components/teacher/my-workshop";
import { teacherWorkshopService } from "@/services/teacher";

export const metadata = { title: "My Workshop" };

export default async function TeacherWorkshopPage() {
  const data = await teacherWorkshopService.getWorkshops();

  return <TeacherMyWorkshopPage data={data} />;
}
