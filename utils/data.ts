import {
  blogSchema,
  certsSchema,
  connect,
  projectsSchema,
  servicesSchema,
  techStackSchema,
} from "@/configs/dbconfig";

connect();

export async function blogArticles() {
  try {
    const data = await blogSchema.find();
    return data;
  } catch (error: any) {
    console.error(error);
  }
}

export async function services() {
  try {
    const data = await servicesSchema.find();
    return data;
  } catch (error: any) {
    console.error(error);
  }
}

export async function projects() {
  try {
    const data = await projectsSchema.find();
    return data;
  } catch (error: any) {
    console.error(error);
  }
}

export async function certifications() {
  try {
    const data = await certsSchema.find();
    return data;
  } catch (error: any) {
    console.error(error);
  }
}

export async function techStack() {
  try {
    const data = await techStackSchema.find();
    return data;
  } catch (error: any) {
    console.error(error);
  }
}
