import { connect, projectsSchema } from "@/configs/dbconfig";

export async function fetchProjects() {
  connect();
  try {
    const data = await projectsSchema.find();
    return data;
  } catch (error: any) {
    console.error(error);
  }
}
