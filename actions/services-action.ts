import { connect, servicesSchema } from "@/configs/dbconfig";

export async function fetchServices() {
  connect();
  try {
    const data = await servicesSchema.find();
    return data;
  } catch (error: any) {
    console.error(error);
  }
}
