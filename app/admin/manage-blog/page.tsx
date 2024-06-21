import Link from "next/link";
import RenderedItems from "@/components/admin/rendered-items";
import Search from "@/components/admin/search";
import { BlogArticlesFetchProvider } from "@/contexts/fetch-contexts/blog-articles-fetch-context";

export default function Page() {
  return (
    <BlogArticlesFetchProvider>
      <div className="pt-20 flex flex-col items-center ">
        <Link href={"/admin"} className="mb-4">
          Back to Dashboard
        </Link>

        <div className="mb-4 z-0">
          <Search />
        </div>

        <Link
          href={"/admin/manage-blog/new-article"}
          className="bg-blue-300 p-2 mb-4"
        >
          Add New Post
        </Link>

        <RenderedItems />
      </div>
    </BlogArticlesFetchProvider>
  );
}
