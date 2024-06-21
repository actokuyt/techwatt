import EditArticle from "@/components/admin/edit-article";
import { BlogArticlesFetchProvider } from "@/contexts/fetch-contexts/blog-articles-fetch-context";
import Link from "next/link";

export default function Page({ params }: any) {
  const id = params.id;

  return (
    <div className="pt-20 flex flex-col items-center ">
      <Link href={"/admin/manage-blog"} className="mb-8">
        Back to Manage Blog
      </Link>

      <BlogArticlesFetchProvider>
        <EditArticle id={id} />
      </BlogArticlesFetchProvider>
    </div>
  );
}
