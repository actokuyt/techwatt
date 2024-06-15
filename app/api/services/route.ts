import { NextResponse } from "next/server";
import { fetchServices } from "@/actions/services-action";

export async function GET() {
  try {
    const services = await fetchServices();
    const response = NextResponse.json({
      success: true,
      data: services,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}
