import { TeacherMyWorkshopPage } from "@/components/teacher/my-workshop";
import { getTeacherWorkshopPageData } from "@/data/mock/teacher-workshop.mock";

export const metadata = { title: "My Workshop" };

export default function TeacherWorkshopPage() {
  const data = getTeacherWorkshopPageData();

  return <TeacherMyWorkshopPage data={data} />;
}
