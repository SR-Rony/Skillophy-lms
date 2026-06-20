import { MyResourcesPage } from "@/components/student/my-resources";
import { studentResourcesService } from "@/services/student-resources.service";

export async function generateMetadata() {
  const data = await studentResourcesService.getResources();

  return {
    title: data.title,
  };
}

export default async function StudentResourcesRoute() {
  const data = await studentResourcesService.getResources();

  return <MyResourcesPage data={data} />;
}
