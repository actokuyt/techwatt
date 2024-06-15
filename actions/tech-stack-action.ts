import { connect, techStackSchema } from "@/configs/dbconfig";

export async function fetchStack() {
  connect();
  try {
    const data = await techStackSchema.find();
    return data;
  } catch (error: any) {
    console.error(error);
  }
}
