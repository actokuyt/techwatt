import { NextResponse } from "next/server";
import { fetchArticles } from "@/actions/articles-action";

export async function GET() {
  try {
    const articles = await fetchArticles();
    const response = NextResponse.json({
      success: true,
      data: articles,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}
