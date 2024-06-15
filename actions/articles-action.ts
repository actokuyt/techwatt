import { blogSchema, connect } from "@/configs/dbconfig";

export async function fetchArticles() {
  connect();
  try {
    const data = await blogSchema.find();
    return data;
  } catch (error: any) {
    console.error(error);
  }
}
