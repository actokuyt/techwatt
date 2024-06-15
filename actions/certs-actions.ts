import { certsSchema, connect } from "@/configs/dbconfig";

export async function fetchCerts() {
  connect();
  try {
    const data = await certsSchema.find();
    return data;
  } catch (error: any) {
    console.error(error);
  }
}
