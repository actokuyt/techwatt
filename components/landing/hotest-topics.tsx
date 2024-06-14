"use client"


import { ArticleCards } from "../mui-card";
import { useBlogArticlesFetchContext } from "../../contexts/fetch-contexts/blog-articles-fetch-context";

export default function HotestTopics () {
    const {blogArticles} = useBlogArticlesFetchContext()
    const latest = blogArticles.slice(0,3)

    return(
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:w-[90%] lg:mx-auto">
        {latest.map((article, index) => {
          return (
            <ArticleCards
              id={article._id}
              height={250}
              key={index}
              img={article.imgsrc}
              title={article.title}
              description={article.desc}
              avatar={article.avatar}
              author={article.author}
              date={article.date}
              category={article.category}
            />
          );
        })}
      </div>
    )
}