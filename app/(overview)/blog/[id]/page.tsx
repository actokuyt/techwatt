import BlogPost from "@/components/blog/blog-post";
import { BlogArticlesFetchProvider } from "@/contexts/fetch-contexts/blog-articles-fetch-context";

export default function page({ params }: any) {
  return (
    <div className="p-2 md:pt-[5em]">
      <BlogArticlesFetchProvider>
        <BlogPost id={params.id} />
      </BlogArticlesFetchProvider>
    </div>
  );
}
