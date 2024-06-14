import Blog from "@/components/blog/blog";
import BlogHero from "@/components/blog/blog-hero";
import { blogArticles } from "@/utils/data";

export default async function Page() {
  const articles = await blogArticles();
  if (!articles) {
    return <></>;
  }
  let random = Math.floor(Math.random() * articles.length);

  return (
    <div className="p-2 pt-[5em]">
      <BlogHero article={articles[random]} id={articles[random]._id} />

      <div className="mt-[8em] mx-2 mb-8">
        <h1 className="text-2xl text-center font-semibold mb-8">
          Latest Posts
        </h1>
        <Blog />
      </div>
    </div>
  );
}
