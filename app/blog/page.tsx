import Blog from "@/components/blog/blog";
// import BlogHero from "@/components/blog/blog-hero";


export default function Page() {
//   let random = Math.floor(Math.random() * blogArticles.length);

  return (
    <div className="mt-16 newsreader">
      {/* {blogArticles.length > 0 && (
        <BlogHero
          article={blogArticles[random]}
          id={blogArticles[random]._id}
        />
      )} */}

      <div className="mt-[8em] mx-2 mb-8">
        <h1 className="text-2xl text-center font-semibold mb-8">
          Latest Posts
        </h1>
       <Blog />
      </div>
    </div>
  );
}
