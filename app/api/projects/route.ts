import { NextResponse } from "next/server";
import { fetchProjects } from "@/actions/projects-action";

export async function GET() {
  try {
    const projects = await fetchProjects();
    const response = NextResponse.json({
      success: true,
      data: projects,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}
