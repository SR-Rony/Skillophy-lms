import { MyWorkshopPage } from "@/components/student/my-workshop";
import { studentWorkshopService } from "@/services/student-workshop.service";

export async function generateMetadata() {
  const data = await studentWorkshopService.getWorkshops();

  return {
    title: data.title,
  };
}

export default async function StudentWorkshopRoute() {
  const data = await studentWorkshopService.getWorkshops();

  return <MyWorkshopPage data={data} />;
}
