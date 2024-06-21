import { DeleteArticle, EditArticle } from "@/actions/articles-action";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id
    const article = await request.json();
    try {
      await EditArticle({id, article});
      return NextResponse.json({ Message: "successfully updated article" });
    } catch (error: any) {
      console.error(error.message);
      return NextResponse.json({ Message: "failed to update article" });
    }
  }

export async function DELETE (request: NextRequest, { params }: { params: { id: string } }) {
    let id =params.id;
    try {
      await DeleteArticle(id)
        return NextResponse.json({Message:"successfully deleted article"})
    } catch (error: any) {
      console.error(error.message);
      return NextResponse.json({Message: "unable to delete article"})
    }
}