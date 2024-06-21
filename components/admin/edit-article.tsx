"use client";

import { useBlogArticlesFetchContext } from "@/contexts/fetch-contexts/blog-articles-fetch-context";
import { ManageBlogForm } from "../form";

type IdType = {
  id: string;
};

export default function EditArticle({ id }: IdType) {
  const { articles } = useBlogArticlesFetchContext();
  
  const blogPost = articles.find((article) => article._id == id);
  if (!blogPost) {
    return <div className="pt-40">No blog post found for the provided ID.</div>;
  }
  return (
    <div className="w-full p-4">
      <ManageBlogForm
        id={blogPost._id}
        title={blogPost.title}
        description={blogPost.description}
        category={blogPost.category}
        imgsrc={blogPost.imgsrc}
        detail={blogPost.detail}
      />
    </div>
  );
}
