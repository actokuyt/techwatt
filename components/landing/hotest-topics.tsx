import { ArticleCards } from "../mui-card";
import { blogArticles } from "@/utils/data";

export default async function HotestTopics() {
  let articles = await blogArticles();

  if (!articles) {
    return <></>;
  }

  function formatDateTime(milliseconds: number) {
    var date = new Date(milliseconds);
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, "0");
    var day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  let latest = articles.slice(0, 3);

  

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:w-[90%] lg:mx-auto">
      {latest.map((article, index) => {
        return (
          <ArticleCards
            id={article._id}
            key={index}
            img={article.imgsrc}
            title={article.title}
            description={article.description}
            avatar={article.avatar}
            author={article.author}
            date={formatDateTime(parseInt(article.date))}
            category={article.category}
          />
        );
      })}
    </div>
  );
}
