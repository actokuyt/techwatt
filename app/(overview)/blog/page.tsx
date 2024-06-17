import Blog from "@/components/blog/blog";
import BlogHero from "@/components/blog/blog-hero";
import { BlogArticlesFetchProvider } from "@/contexts/fetch-contexts/blog-articles-fetch-context";

export default function Page() {
  return (
    <BlogArticlesFetchProvider>
      <div className="p-2s pt-[5em]b">
        <BlogHero />

        <div className="mx-2 mb-8 mt-4">
          <h1 className="text-2xl text-center font-semibold mb-2">
            Latest Posts
          </h1>
          <Blog />
        </div>
      </div>
    </BlogArticlesFetchProvider>
  );
}
