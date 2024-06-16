import Blog from "@/components/blog/blog";
import BlogHero from "@/components/blog/blog-hero";
import { BlogArticlesFetchProvider } from "@/contexts/fetch-contexts/blog-articles-fetch-context";

export default function Page() {
  return (
    <BlogArticlesFetchProvider>
      <div className="p-2 pt-[5em]">
        <BlogHero />

        <div className="mt-[11em] mx-2 mb-8 md:-mt-[5em] lg:mt-[2em]">
          <h1 className="text-2xl text-center font-semibold mb-2">
            Latest Posts
          </h1>
          <Blog />
        </div>
      </div>
    </BlogArticlesFetchProvider>
  );
}
