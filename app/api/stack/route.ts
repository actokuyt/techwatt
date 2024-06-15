import { NextResponse } from "next/server";
import { fetchStack } from "@/actions/tech-stack-action";

export async function GET() {
  try {
    const stack = await fetchStack();
    const response = NextResponse.json({
      success: true,
      data: stack,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}
