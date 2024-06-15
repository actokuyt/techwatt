import { NextResponse } from "next/server";
import { fetchCerts } from "@/actions/certs-actions";

export async function GET() {
  try {
    const certs = await fetchCerts();
    const response = NextResponse.json({
      success: true,
      data: certs,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}
