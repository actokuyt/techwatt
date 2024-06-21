import { NextRequest, NextResponse } from "next/server";
import { AddNewArticle, fetchArticles } from "@/actions/articles-action";

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

export async function POST(request: NextRequest) {
  let article = await request.json();
  try {
    await AddNewArticle(article);
    return NextResponse.json({ Message: "successfully added article" });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ Message: "couldn't add new article" });
  }
}
